# SCDC New Hire Training Portal

A self-guided 8-week training program for learning building fundamentals and Autodesk Revit operations. Built for two new employees at SCDC with no prior engineering background.

## Features

- **Self-guided curriculum** — 8 weekly sections covering building basics to Revit documentation
- **Embedded learning resources** — YouTube videos and articles for each topic
- **Interactive MCQ quizzes** — 10 questions per section with instant feedback
- **Progress tracking** — Trainees see their completion status and quiz scores
- **Admin dashboard** — Monitor both trainees' progress, quiz scores, and activity in real-time
- **Works offline** — Uses localStorage by default; add Firebase for cross-device sync

## Quick Start (GitHub Pages)

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `scdc-training` (or any name you prefer)
3. Set it to **Public** (required for free GitHub Pages)
4. Click **Create repository**

### Step 2: Push the Code

Open a terminal in the `scdc-training-portal` folder and run:

```bash
git init
git add .
git commit -m "Initial commit: SCDC training portal"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/scdc-training.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Select **main** branch, **/ (root)** folder
5. Click **Save**
6. Wait 1–2 minutes, then visit: `https://YOUR_USERNAME.github.io/scdc-training/`

## How to Use

### For Trainees
1. Open the portal URL
2. Enter your name and click **Start Learning**
3. Work through each weekly section in order
4. Watch the videos and read the resources
5. Click **Mark Content as Read** when done studying
6. Take the quiz — you need **70% or higher** to pass
7. Move to the next section

### For Admin (Subhash)
1. Open the portal URL
2. Click **Admin Dashboard** at the bottom of the login screen
3. Enter the admin code: `scdc-admin-2026`
4. Enter your name and click **Start Learning**
5. View all trainees' progress, quiz scores, and activity logs

## Optional: Firebase for Real-Time Sync

By default, progress is stored in the browser's localStorage. This means:
- Each person's progress only appears on their own device
- The admin dashboard shows progress from the same browser only

To enable **real-time sync across devices** (so you can see trainee progress from your computer):

### Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **Add project** → name it `scdc-training`
3. Disable Google Analytics (not needed) → **Create project**

### Step 2: Enable Realtime Database

1. In Firebase console, go to **Build** → **Realtime Database**
2. Click **Create Database**
3. Choose any location → **Start in test mode** → **Enable**

### Step 3: Get Your Config

1. Go to **Project Settings** (gear icon) → **General**
2. Under "Your apps", click the **Web** icon (`</>`)
3. Register the app (any name) → Copy the config object

### Step 4: Update the Code

1. In `index.html`, uncomment the Firebase script tags
2. In `js/app.js`, replace the `FIREBASE_CONFIG` object with your actual config values
3. Commit and push to GitHub

## File Structure

```
scdc-training-portal/
├── index.html          # Main HTML page
├── css/
│   └── styles.css      # All styles
├── js/
│   ├── app.js          # Application logic (login, quiz, dashboard)
│   └── course-data.js  # Course content, resources, and MCQ questions
└── README.md           # This file
```

## Customization

### Change the Admin Code
In `js/app.js`, find `ADMIN_CODE` and change it:
```javascript
const ADMIN_CODE = "your-new-code";
```

### Change the Pass Threshold
In `js/app.js`, find `PASS_THRESHOLD`:
```javascript
const PASS_THRESHOLD = 70; // Change to 60, 80, etc.
```

### Add More Sections or Questions
Edit `js/course-data.js` to add new weeks, resources, or quiz questions. Follow the existing data structure.

## Tech Stack

- **Pure HTML/CSS/JavaScript** — no build tools required
- **GitHub Pages** — free static hosting
- **Firebase Realtime Database** (optional) — free tier: 1GB storage, 10GB/month transfer
- **Google Fonts (Inter)** — clean, readable typography

## License

Internal use only — SCDC Training Department.
