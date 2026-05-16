// ═══════════════════════════════════════════
// SCDC Training Portal — Main Application
// ═══════════════════════════════════════════

(function () {
  "use strict";

  // ── Firebase Config ──
  // Replace these with your Firebase project config
  const FIREBASE_CONFIG = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "000000000000",
    appId: "YOUR_APP_ID"
  };

  const ADMIN_CODE = "scdc-admin-2026";
  const PASS_THRESHOLD = 70;

  let currentUser = null;
  let isAdmin = false;
  let db = null;
  let firebaseAvailable = false;

  // ── Initialize ──
  function init() {
    // Try Firebase
    try {
      if (typeof firebase !== "undefined" && FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY") {
        firebase.initializeApp(FIREBASE_CONFIG);
        db = firebase.database();
        firebaseAvailable = true;
      }
    } catch (e) {
      console.log("Firebase not configured — using local storage only.");
    }

    // Check saved session
    const saved = localStorage.getItem("scdc_user");
    if (saved) {
      const data = JSON.parse(saved);
      currentUser = data.name;
      isAdmin = data.isAdmin || false;
      if (isAdmin) {
        showDashboard();
      } else {
        showCourse();
      }
    } else {
      showLogin();
    }
  }

  // ═══════════════════════════════════════
  // LOGIN
  // ═══════════════════════════════════════
  function showLogin() {
    document.getElementById("app").innerHTML = `
      <div class="login-screen">
        <div class="login-card">
          <h1>SCDC Training</h1>
          <p class="subtitle">Building Fundamentals & Revit Operations</p>
          <input type="text" id="login-name" placeholder="Enter your name to begin" autocomplete="off" />
          <button class="btn-primary" id="btn-login">Start Learning</button>
          <div class="admin-link" id="admin-toggle">Admin Dashboard</div>
          <div id="admin-section" class="hidden" style="margin-top:16px;">
            <input type="password" id="admin-code" placeholder="Enter admin code" style="margin-bottom:0" />
          </div>
        </div>
      </div>
    `;

    document.getElementById("btn-login").addEventListener("click", handleLogin);
    document.getElementById("login-name").addEventListener("keydown", e => { if (e.key === "Enter") handleLogin(); });
    document.getElementById("admin-toggle").addEventListener("click", () => {
      document.getElementById("admin-section").classList.toggle("hidden");
    });
  }

  function handleLogin() {
    const name = document.getElementById("login-name").value.trim();
    if (!name) { alert("Please enter your name."); return; }

    const adminInput = document.getElementById("admin-code");
    const adminCode = adminInput ? adminInput.value.trim() : "";

    currentUser = name;
    isAdmin = adminCode === ADMIN_CODE;

    localStorage.setItem("scdc_user", JSON.stringify({ name, isAdmin }));
    logActivity("login", `${name} logged in`);

    if (isAdmin) {
      showDashboard();
    } else {
      showCourse();
    }
  }

  function logout() {
    currentUser = null;
    isAdmin = false;
    localStorage.removeItem("scdc_user");
    showLogin();
  }

  // ═══════════════════════════════════════
  // DATA PERSISTENCE
  // ═══════════════════════════════════════
  function getUserKey(name) {
    return (name || currentUser).toLowerCase().replace(/[^a-z0-9]/g, "_");
  }

  function saveProgress(weekId, data) {
    const key = getUserKey();

    // Local
    const local = JSON.parse(localStorage.getItem("scdc_progress") || "{}");
    if (!local[key]) local[key] = { name: currentUser, weeks: {} };
    local[key].weeks[weekId] = { ...((local[key].weeks[weekId]) || {}), ...data };
    local[key].lastActive = new Date().toISOString();
    localStorage.setItem("scdc_progress", JSON.stringify(local));

    // Firebase
    if (firebaseAvailable && db) {
      db.ref(`progress/${key}/weeks/${weekId}`).update(data);
      db.ref(`progress/${key}/name`).set(currentUser);
      db.ref(`progress/${key}/lastActive`).set(new Date().toISOString());
    }
  }

  function getProgress(name) {
    const key = getUserKey(name);
    const local = JSON.parse(localStorage.getItem("scdc_progress") || "{}");
    return local[key] || { name: name || currentUser, weeks: {} };
  }

  function getAllProgress() {
    return JSON.parse(localStorage.getItem("scdc_progress") || "{}");
  }

  function logActivity(type, message) {
    const logs = JSON.parse(localStorage.getItem("scdc_activity") || "[]");
    logs.unshift({ type, message, time: new Date().toISOString(), user: currentUser });
    if (logs.length > 100) logs.length = 100;
    localStorage.setItem("scdc_activity", JSON.stringify(logs));

    if (firebaseAvailable && db) {
      db.ref("activity").push({ type, message, time: new Date().toISOString(), user: currentUser });
    }
  }

  // ═══════════════════════════════════════
  // COURSE VIEW
  // ═══════════════════════════════════════
  function showCourse() {
    const progress = getProgress();
    const totalSections = COURSE_DATA.phases.reduce((s, p) => s + p.sections.length, 0);
    const completedSections = Object.values(progress.weeks || {}).filter(w => w.quizScore >= PASS_THRESHOLD).length;
    const pct = Math.round((completedSections / totalSections) * 100);

    let phasesHTML = "";
    let sectionIndex = 0;

    COURSE_DATA.phases.forEach((phase, pi) => {
      let sectionsHTML = "";
      phase.sections.forEach((section, si) => {
        const weekProgress = (progress.weeks || {})[section.id] || {};
        const status = getWeekStatus(section.id, progress, sectionIndex);
        sectionsHTML += renderSection(section, phase, status, weekProgress);
        sectionIndex++;
      });

      phasesHTML += `
        <div class="phase-card">
          <div class="phase-header ${pi === 0 ? 'open' : ''}" style="background:${phase.color}" data-phase="${phase.id}">
            <div>
              <h2>${phase.title}</h2>
              <div class="phase-meta">${phase.weeks}</div>
            </div>
            <span class="chevron">▼</span>
          </div>
          <div class="phase-body ${pi === 0 ? '' : 'hidden'}" id="phase-body-${phase.id}">
            ${sectionsHTML}
          </div>
        </div>
      `;
    });

    document.getElementById("app").innerHTML = `
      <nav class="top-nav">
        <div class="container-wide">
          <div class="nav-brand">
            <div class="logo">S</div>
            <span>SCDC Training</span>
          </div>
          <div class="nav-user">
            <span class="user-name">Hi, ${currentUser}</span>
            <button class="btn-logout" id="btn-logout">Log out</button>
          </div>
        </div>
      </nav>
      <div class="global-progress">
        <div class="container">
          <div class="progress-stats">
            <div class="stat"><strong>${completedSections}</strong> / ${totalSections} sections completed</div>
            <div class="stat"><strong>${pct}%</strong> overall progress</div>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width:${pct}%"></div>
          </div>
        </div>
      </div>
      <div class="course-content">
        <div class="container">${phasesHTML}</div>
      </div>
    `;

    // Event listeners
    document.getElementById("btn-logout").addEventListener("click", logout);

    document.querySelectorAll(".phase-header").forEach(h => {
      h.addEventListener("click", () => {
        const id = h.dataset.phase;
        const body = document.getElementById(`phase-body-${id}`);
        body.classList.toggle("hidden");
        h.classList.toggle("open");
      });
    });

    document.querySelectorAll(".section-header").forEach(sh => {
      sh.addEventListener("click", () => {
        const detail = sh.nextElementSibling;
        if (detail && detail.classList.contains("section-detail")) {
          detail.classList.toggle("hidden");
        }
      });
    });

    document.querySelectorAll(".btn-quiz").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const weekId = btn.dataset.week;
        startQuiz(weekId);
      });
    });

    document.querySelectorAll(".btn-mark-complete").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const weekId = btn.dataset.week;
        saveProgress(weekId, { contentRead: true });
        logActivity("progress", `${currentUser} marked ${weekId} content as read`);
        showCourse();
      });
    });
  }

  function getWeekStatus(weekId, progress, index) {
    const weekData = (progress.weeks || {})[weekId] || {};
    if (weekData.quizScore >= PASS_THRESHOLD) return "completed";
    if (weekData.contentRead || weekData.quizScore !== undefined) return "in-progress";
    // First section is always available
    if (index === 0) return "available";
    // Check if previous section is completed
    const allSections = [];
    COURSE_DATA.phases.forEach(p => p.sections.forEach(s => allSections.push(s.id)));
    if (index > 0) {
      const prevId = allSections[index - 1];
      const prevData = (progress.weeks || {})[prevId] || {};
      if (prevData.quizScore >= PASS_THRESHOLD) return "available";
      // Also make available if user has started it (more lenient for self-guided)
      if (prevData.contentRead) return "available";
    }
    return "available"; // Make all sections available for self-guided learning
  }

  function renderSection(section, phase, status, weekProgress) {
    const statusLabels = {
      "locked": "Locked",
      "available": "Start",
      "in-progress": "In Progress",
      "completed": "Completed"
    };

    let daysHTML = "";
    section.days.forEach(day => {
      const topicsLi = day.topics.map(t => `<li>${t}</li>`).join("");
      daysHTML += `
        <div class="day-block">
          <h4><span class="day-label">${day.day}</span> ${day.title}</h4>
          <ul>${topicsLi}</ul>
        </div>
      `;
    });

    let resourcesHTML = "";
    if (section.resources && section.resources.length > 0) {
      const items = section.resources.map(r => {
        const iconMap = { video: "▶", article: "📄", playlist: "☰" };
        return `
          <a class="resource-item" href="${r.url}" target="_blank" rel="noopener">
            <span class="resource-icon ${r.type}">${iconMap[r.type] || "🔗"}</span>
            <span class="resource-title">${r.title}</span>
          </a>
        `;
      }).join("");
      resourcesHTML = `
        <div class="resources-section">
          <h4>📚 Learning Resources</h4>
          <div class="resource-list">${items}</div>
        </div>
      `;
    }

    const quizScore = weekProgress.quizScore;
    const quizBtnText = quizScore !== undefined ? `Retake Quiz (Best: ${quizScore}%)` : "Take Quiz";

    const markReadBtn = weekProgress.contentRead
      ? `<span style="color:var(--green);font-size:13px;font-weight:600">✓ Content reviewed</span>`
      : `<button class="btn-secondary btn-mark-complete" data-week="${section.id}">Mark Content as Read</button>`;

    return `
      <div class="section-card">
        <div class="section-header">
          <div class="section-number" style="background:${phase.color}">W${section.week}</div>
          <div class="section-info">
            <h3>Week ${section.week}: ${section.title}</h3>
            <p>${section.description}</p>
          </div>
          <span class="status-badge ${status}">${statusLabels[status]}</span>
        </div>
        <div class="section-detail hidden">
          ${daysHTML}
          ${resourcesHTML}
          <div style="display:flex;align-items:center;gap:12px;margin-top:20px;flex-wrap:wrap;">
            ${markReadBtn}
            <button class="btn-primary btn-quiz" data-week="${section.id}">📝 ${quizBtnText}</button>
          </div>
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════
  // QUIZ ENGINE
  // ═══════════════════════════════════════
  function startQuiz(weekId) {
    let section = null;
    COURSE_DATA.phases.forEach(p => p.sections.forEach(s => { if (s.id === weekId) section = s; }));
    if (!section || !section.quiz) return;

    const quiz = { section, questions: [...section.quiz], current: 0, score: 0, answers: [] };
    renderQuizQuestion(quiz);
  }

  function renderQuizQuestion(quiz) {
    const q = quiz.questions[quiz.current];
    const letters = ["A", "B", "C", "D"];
    const pct = Math.round((quiz.current / quiz.questions.length) * 100);

    const optionsHTML = q.options.map((opt, i) => `
      <div class="quiz-option" data-index="${i}">
        <span class="option-letter">${letters[i]}</span>
        <span>${opt}</span>
      </div>
    `).join("");

    const overlay = document.createElement("div");
    overlay.className = "quiz-overlay";
    overlay.id = "quiz-overlay";
    overlay.innerHTML = `
      <div class="quiz-modal">
        <h2>Week ${quiz.section.week}: ${quiz.section.title}</h2>
        <p class="quiz-subtitle">Section Quiz — 10 Questions</p>
        <div class="quiz-progress">
          <div class="qp-bar"><div class="qp-fill" style="width:${pct}%"></div></div>
          <span class="qp-text">${quiz.current + 1} / ${quiz.questions.length}</span>
        </div>
        <div class="quiz-question">${quiz.current + 1}. ${q.q}</div>
        <div class="quiz-options">${optionsHTML}</div>
        <div id="quiz-feedback"></div>
        <div class="quiz-actions">
          <button class="btn-secondary" id="quiz-close">Cancel</button>
          <button class="btn-primary hidden" id="quiz-next">Next →</button>
        </div>
      </div>
    `;

    // Remove existing overlay
    const existing = document.getElementById("quiz-overlay");
    if (existing) existing.remove();

    document.body.appendChild(overlay);

    // Option click
    overlay.querySelectorAll(".quiz-option").forEach(opt => {
      opt.addEventListener("click", () => {
        if (opt.closest(".quiz-options").querySelector(".correct, .incorrect")) return; // Already answered

        const selected = parseInt(opt.dataset.index);
        const correct = q.answer;

        opt.classList.add("selected");

        if (selected === correct) {
          opt.classList.add("correct");
          quiz.score++;
          document.getElementById("quiz-feedback").innerHTML = `<div class="quiz-feedback correct">✓ Correct!</div>`;
        } else {
          opt.classList.add("incorrect");
          // Highlight correct
          overlay.querySelectorAll(".quiz-option")[correct].classList.add("correct");
          document.getElementById("quiz-feedback").innerHTML = `<div class="quiz-feedback incorrect">✗ Incorrect. The correct answer is ${letters[correct]}.</div>`;
        }

        quiz.answers.push({ question: quiz.current, selected, correct: selected === correct });
        document.getElementById("quiz-next").classList.remove("hidden");
      });
    });

    document.getElementById("quiz-close").addEventListener("click", () => overlay.remove());

    document.getElementById("quiz-next").addEventListener("click", () => {
      quiz.current++;
      if (quiz.current < quiz.questions.length) {
        renderQuizQuestion(quiz);
      } else {
        showQuizResults(quiz);
      }
    });
  }

  function showQuizResults(quiz) {
    const pct = Math.round((quiz.score / quiz.questions.length) * 100);
    const passed = pct >= PASS_THRESHOLD;

    // Save
    const existing = getProgress();
    const prevBest = (existing.weeks || {})[quiz.section.id]?.quizScore || 0;
    const bestScore = Math.max(prevBest, pct);

    saveProgress(quiz.section.id, {
      quizScore: bestScore,
      lastAttempt: pct,
      lastAttemptDate: new Date().toISOString(),
      contentRead: true
    });

    logActivity("quiz", `${currentUser} scored ${pct}% on Week ${quiz.section.week} quiz`);

    const overlay = document.getElementById("quiz-overlay");
    overlay.innerHTML = `
      <div class="quiz-modal">
        <div class="quiz-results">
          <div class="score-circle ${passed ? 'pass' : 'fail'}">
            ${pct}%
            <small>${quiz.score}/${quiz.questions.length}</small>
          </div>
          <div class="result-message">${passed ? "Great job! You passed!" : "Keep studying and try again!"}</div>
          <div class="result-detail">
            ${passed
              ? `You've demonstrated a solid understanding of Week ${quiz.section.week} material.`
              : `You need ${PASS_THRESHOLD}% to pass. Review the content and resources, then retake the quiz.`
            }
            ${bestScore > pct ? `<br>Your best score remains ${bestScore}%.` : ""}
          </div>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
            <button class="btn-secondary" id="results-close">Back to Course</button>
            ${!passed ? `<button class="btn-primary" id="results-retry">Retake Quiz</button>` : ""}
          </div>
        </div>
      </div>
    `;

    document.getElementById("results-close").addEventListener("click", () => {
      overlay.remove();
      showCourse();
    });

    const retryBtn = document.getElementById("results-retry");
    if (retryBtn) {
      retryBtn.addEventListener("click", () => {
        overlay.remove();
        startQuiz(quiz.section.id);
      });
    }
  }

  // ═══════════════════════════════════════
  // ADMIN DASHBOARD
  // ═══════════════════════════════════════
  function showDashboard() {
    const allProgress = getAllProgress();
    const activities = JSON.parse(localStorage.getItem("scdc_activity") || "[]");

    // If Firebase is available, also try to sync
    if (firebaseAvailable && db) {
      db.ref("progress").on("value", snapshot => {
        const fbData = snapshot.val() || {};
        // Merge Firebase data into local
        const local = JSON.parse(localStorage.getItem("scdc_progress") || "{}");
        Object.keys(fbData).forEach(k => {
          if (!local[k] || new Date(fbData[k].lastActive) > new Date(local[k]?.lastActive || 0)) {
            local[k] = fbData[k];
          }
        });
        localStorage.setItem("scdc_progress", JSON.stringify(local));
        renderDashboard();
      });
    }

    renderDashboard();
  }

  function renderDashboard() {
    const allProgress = getAllProgress();
    const activities = JSON.parse(localStorage.getItem("scdc_activity") || "[]");
    const allSections = [];
    COURSE_DATA.phases.forEach(p => p.sections.forEach(s => allSections.push(s)));

    let traineeCardsHTML = "";
    const trainees = Object.values(allProgress).filter(t => t.name);

    if (trainees.length === 0) {
      traineeCardsHTML = `
        <div class="trainee-card" style="grid-column:1/-1;text-align:center;padding:48px;">
          <p style="color:var(--gray-500);font-size:16px;">No trainees have logged in yet.</p>
          <p style="color:var(--gray-500);font-size:14px;margin-top:8px;">Once they start the course, their progress will appear here.</p>
        </div>
      `;
    } else {
      trainees.forEach(trainee => {
        const weeks = trainee.weeks || {};
        const completedCount = Object.values(weeks).filter(w => w.quizScore >= PASS_THRESHOLD).length;
        const totalPct = Math.round((completedCount / allSections.length) * 100);

        let weekCellsHTML = allSections.map(s => {
          const w = weeks[s.id] || {};
          let cellClass = "not-started";
          let cellText = `W${s.week}`;
          if (w.quizScore >= PASS_THRESHOLD) {
            cellClass = "completed";
            cellText += ` ✓`;
          } else if (w.contentRead || w.quizScore !== undefined) {
            cellClass = "in-progress";
            cellText += ` …`;
          }
          return `<div class="week-cell ${cellClass}">${cellText}</div>`;
        }).join("");

        let scoresHTML = allSections.map(s => {
          const w = weeks[s.id] || {};
          let scoreClass = "pending";
          let scoreText = "—";
          if (w.quizScore !== undefined) {
            scoreClass = w.quizScore >= PASS_THRESHOLD ? "pass" : "fail";
            scoreText = `${w.quizScore}%`;
          }
          return `
            <div class="score-row">
              <span class="score-label">Week ${s.week}: ${s.title.substring(0, 30)}…</span>
              <span class="score-value ${scoreClass}">${scoreText}</span>
            </div>
          `;
        }).join("");

        const lastActive = trainee.lastActive
          ? new Date(trainee.lastActive).toLocaleString()
          : "Never";

        traineeCardsHTML += `
          <div class="trainee-card">
            <div class="tc-header">
              <div class="tc-avatar">${trainee.name.charAt(0).toUpperCase()}</div>
              <div>
                <div class="tc-name">${trainee.name}</div>
                <div class="tc-meta">Last active: ${lastActive}</div>
              </div>
            </div>
            <div class="tc-progress">
              <div class="progress-label">
                <span>Overall Progress</span>
                <strong>${totalPct}%</strong>
              </div>
              <div class="progress-bar-container">
                <div class="progress-bar-fill" style="width:${totalPct}%"></div>
              </div>
            </div>
            <div class="week-grid">${weekCellsHTML}</div>
            <div class="quiz-scores">
              <h4>Quiz Scores</h4>
              ${scoresHTML}
            </div>
          </div>
        `;
      });
    }

    // Activity log
    const recentActivities = activities.slice(0, 20);
    let activityHTML = recentActivities.map(a => {
      const dotClass = a.type === "quiz" ? "quiz" : a.type === "login" ? "login" : "progress";
      const time = new Date(a.time).toLocaleString();
      return `
        <div class="activity-item">
          <span class="activity-dot ${dotClass}"></span>
          <div>
            <div>${a.message}</div>
            <div class="activity-time">${time}</div>
          </div>
        </div>
      `;
    }).join("");

    if (recentActivities.length === 0) {
      activityHTML = `<p style="color:var(--gray-500);font-size:14px;">No activity yet.</p>`;
    }

    document.getElementById("app").innerHTML = `
      <nav class="top-nav">
        <div class="container-wide">
          <div class="nav-brand">
            <div class="logo">S</div>
            <span>SCDC Training — Admin</span>
          </div>
          <div class="nav-user">
            <span class="user-name">Admin: ${currentUser}</span>
            <button class="btn-logout" id="btn-logout">Log out</button>
          </div>
        </div>
      </nav>
      <div class="course-content">
        <div class="container-wide">
          <div class="dashboard-header">
            <h1>Training Progress Dashboard</h1>
            <p>Monitor your trainees' progress in real-time</p>
          </div>
          <div class="trainee-cards">${traineeCardsHTML}</div>
          <div class="activity-log">
            <h3>Recent Activity</h3>
            ${activityHTML}
          </div>
        </div>
      </div>
    `;

    document.getElementById("btn-logout").addEventListener("click", logout);
  }

  // ── Boot ──
  document.addEventListener("DOMContentLoaded", init);
})();
