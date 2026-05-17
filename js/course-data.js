// ═══════════════════════════════════════════════════════════
// SCDC Training Portal — Course Data
// REDESIGNED: Visual Handbook — Text + Images Primary, Videos Optional
// Philosophy: "Edit First, Model Later" + Visual-First Learning
// ═══════════════════════════════════════════════════════════

const COURSE_DATA = {
  title: "SCDC Training Program",
  subtitle: "Learn to Work With Real Building Drawings — Step by Step",
  duration: "8 Weeks | 2–3 Hours/Day",
  totalWeeks: 8,

  phases: [
    // ═══════════════════════════════════════════
    // PHASE 1: UNDERSTAND BUILDINGS & DRAWINGS (Weeks 1–2)
    // Visual handbook format — text + diagrams + examples + tasks
    // ═══════════════════════════════════════════
    {
      id: "phase1",
      title: "Understand Buildings & Drawings",
      weeks: "Weeks 1–2",
      color: "#2E8B8B",
      sections: [
        // ── WEEK 1 ──
        {
          id: "week1",
          week: 1,
          title: "What Are Buildings Made Of?",
          description: "Look at buildings with new eyes. Learn the parts that hold every building up — foundation, columns, beams, walls, doors, windows, and stairs.",
          motivation: {
            quote: "Every expert was once a beginner. This week, you start seeing buildings the way professionals do — one part at a time.",
            futureConnect: "Modern buildings are first built inside a computer before any real construction starts. The software you will learn — Revit — shows every part of a building digitally. But first, let's understand what those parts are."
          },
          days: [
            {
              day: "Day 1–2",
              title: "The Hidden Skeleton of Every Building",
              content: [
                { type: "text", text: "Every building has a hidden skeleton that keeps it standing. Just like your body has bones, a building has a <strong>structural frame</strong>." },
                { type: "diagram", caption: "The two main parts of any building", svg: '<svg viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="100" y="160" width="300" height="130" fill="#E8D5B7" stroke="#8B7355" stroke-width="2" rx="2"/><rect x="120" y="180" width="80" height="50" fill="#87CEEB" stroke="#4682B4" stroke-width="1.5"/><rect x="220" y="180" width="40" height="70" fill="#8B4513" stroke="#654321" stroke-width="1.5"/><rect x="300" y="180" width="80" height="50" fill="#87CEEB" stroke="#4682B4" stroke-width="1.5"/><polygon points="100,160 250,80 400,160" fill="#C0392B" stroke="#922B21" stroke-width="2"/><rect x="150" y="290" width="200" height="30" fill="#7D6608" stroke="#5D4E06" stroke-width="2" rx="2"/><rect x="130" y="285" width="240" height="40" fill="#A0522D" stroke="#8B4513" stroke-width="2" opacity="0.3"/><line x1="80" y1="290" x2="420" y2="290" stroke="#2C3E50" stroke-width="1" stroke-dasharray="4"/><text x="250" y="145" text-anchor="middle" font-size="13" font-weight="bold" fill="#2C3E50">SUPERSTRUCTURE</text><text x="250" y="30" text-anchor="middle" font-size="12" fill="#2C3E50">(What you see above ground)</text><text x="250" y="315" text-anchor="middle" font-size="13" font-weight="bold" fill="#7D6608">SUBSTRUCTURE (Foundation)</text><text x="440" y="295" font-size="11" fill="#666">Ground Level</text><line x1="55" y1="82" x2="55" y2="285" stroke="#2E8B8B" stroke-width="2" marker-start="url(#arrowUp)" marker-end="url(#arrowDown)"/><text x="35" y="180" font-size="10" fill="#2E8B8B" transform="rotate(-90,35,180)">Above</text><line x1="55" y1="295" x2="55" y2="325" stroke="#8B7355" stroke-width="2"/><defs><marker id="arrowUp" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M3,6 L0,0 L6,0 Z" fill="#2E8B8B"/></marker><marker id="arrowDown" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,6 L3,0 L6,6 Z" fill="#2E8B8B"/></marker></defs></svg>' },
                { type: "keyterm", term: "Substructure", definition: "The part of a building hidden below the ground. It includes the foundation — the base that transfers the building's weight safely into the soil." },
                { type: "keyterm", term: "Superstructure", definition: "Everything above the ground — walls, columns, beams, slabs, roof, doors, and windows. This is the part you see and use every day." },
                { type: "example", text: "<strong>Real world:</strong> Think of a tree. The roots hidden underground are like the substructure (foundation). The trunk, branches, and leaves above ground are like the superstructure." },
                { type: "heading", text: "Foundation — The Hidden Base" },
                { type: "text", text: "The <strong>foundation</strong> sits below the ground. You cannot see it, but without it, the building would sink or tilt. It spreads the building's weight over a large area of soil." },
                { type: "diagram", caption: "Foundation transfers building weight to the ground", svg: '<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="0" y="100" width="500" height="100" fill="#D4A574" opacity="0.3"/><text x="450" y="150" font-size="11" fill="#8B7355">Soil</text><rect x="200" y="40" width="30" height="60" fill="#95A5A6" stroke="#7F8C8D" stroke-width="2"/><rect x="270" y="40" width="30" height="60" fill="#95A5A6" stroke="#7F8C8D" stroke-width="2"/><rect x="180" y="30" width="140" height="15" fill="#BDC3C7" stroke="#95A5A6" stroke-width="1.5"/><rect x="160" y="100" width="80" height="30" fill="#E67E22" stroke="#D35400" stroke-width="2"/><rect x="260" y="100" width="80" height="30" fill="#E67E22" stroke="#D35400" stroke-width="2"/><path d="M200,130 L180,160 M200,130 L200,160 M200,130 L220,160" stroke="#E67E22" stroke-width="1.5" fill="none"/><path d="M300,130 L280,160 M300,130 L300,160 M300,130 L320,160" stroke="#E67E22" stroke-width="1.5" fill="none"/><text x="200" y="120" text-anchor="middle" font-size="10" fill="white" font-weight="bold">Foundation</text><text x="300" y="120" text-anchor="middle" font-size="10" fill="white" font-weight="bold">Foundation</text><text x="250" y="25" text-anchor="middle" font-size="11" fill="#2C3E50">Beam (connects columns)</text><text x="207" y="75" text-anchor="middle" font-size="10" fill="#2C3E50">Column</text><text x="277" y="75" text-anchor="middle" font-size="10" fill="#2C3E50">Column</text><line x1="0" y1="100" x2="500" y2="100" stroke="#8B7355" stroke-width="1.5" stroke-dasharray="5,3"/><text x="30" y="95" font-size="10" fill="#8B7355">Ground Level</text></svg>' },
                { type: "tip", text: "<strong>Fun fact:</strong> The Burj Khalifa (world's tallest building) has a foundation that goes 50 meters deep — that's as deep as a 16-story building is tall!" },
                { type: "task", text: "<strong>Look around you:</strong> Can you see any building under construction nearby? Look at the bottom — do you see the thick concrete base being poured? That's the foundation being built!" }
              ]
            },
            {
              day: "Day 3–4",
              title: "Columns, Beams & Slabs — The Building's Bones",
              content: [
                { type: "text", text: "Now let's look at the three most important structural members. Together, they form the building's skeleton — the <strong>frame</strong>." },
                { type: "diagram", caption: "How columns, beams, and slabs work together", svg: '<svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="80" y="280" width="40" height="120" fill="#95A5A6" stroke="#7F8C8D" stroke-width="2"/><rect x="230" y="280" width="40" height="120" fill="#95A5A6" stroke="#7F8C8D" stroke-width="2"/><rect x="380" y="280" width="40" height="120" fill="#95A5A6" stroke="#7F8C8D" stroke-width="2"/><rect x="80" y="120" width="40" height="160" fill="#95A5A6" stroke="#7F8C8D" stroke-width="2"/><rect x="230" y="120" width="40" height="160" fill="#95A5A6" stroke="#7F8C8D" stroke-width="2"/><rect x="380" y="120" width="40" height="160" fill="#95A5A6" stroke="#7F8C8D" stroke-width="2"/><rect x="70" y="270" width="360" height="20" fill="#3498DB" stroke="#2980B9" stroke-width="2"/><rect x="70" y="110" width="360" height="20" fill="#3498DB" stroke="#2980B9" stroke-width="2"/><rect x="60" y="95" width="380" height="20" fill="#BDC3C7" stroke="#95A5A6" stroke-width="1.5" opacity="0.8"/><rect x="60" y="255" width="380" height="20" fill="#BDC3C7" stroke="#95A5A6" stroke-width="1.5" opacity="0.8"/><text x="100" y="230" font-size="12" fill="#7F8C8D" transform="rotate(-90,100,230)">COLUMN</text><text x="250" y="230" font-size="12" fill="#7F8C8D" transform="rotate(-90,250,230)">COLUMN</text><text x="400" y="230" font-size="12" fill="#7F8C8D" transform="rotate(-90,400,230)">COLUMN</text><text x="250" y="286" text-anchor="middle" font-size="11" fill="white" font-weight="bold">BEAM</text><text x="250" y="126" text-anchor="middle" font-size="11" fill="white" font-weight="bold">BEAM</text><text x="470" y="108" font-size="10" fill="#95A5A6">SLAB</text><text x="470" y="268" font-size="10" fill="#95A5A6">SLAB</text><line x1="40" y1="95" x2="40" y2="270" stroke="#E74C3C" stroke-width="1.5" marker-start="url(#redArrowUp)" marker-end="url(#redArrowDown)"/><text x="25" y="185" font-size="9" fill="#E74C3C" transform="rotate(-90,25,185)">Room Height</text><text x="250" y="50" text-anchor="middle" font-size="13" font-weight="bold" fill="#2C3E50">Column + Beam + Slab = Structural Frame</text><text x="250" y="70" text-anchor="middle" font-size="11" fill="#666">This is how multi-story buildings stand up</text><defs><marker id="redArrowUp" markerWidth="6" markerHeight="6" refX="3" refY="6" orient="auto"><path d="M0,6 L3,0 L6,6" fill="#E74C3C"/></marker><marker id="redArrowDown" markerWidth="6" markerHeight="6" refX="3" refY="0" orient="auto"><path d="M0,0 L3,6 L6,0" fill="#E74C3C"/></marker></defs></svg>' },
                { type: "keyterm", term: "Column", definition: "A vertical (standing up) member that carries weight straight down to the foundation. Think of it like a table leg." },
                { type: "keyterm", term: "Beam", definition: "A horizontal (lying flat) member that connects columns and supports the floor above. Think of it like the crossbar of a football goal." },
                { type: "keyterm", term: "Slab", definition: "The flat surface you walk on (floor) and the surface above your head (ceiling/roof). Slabs rest on beams." },
                { type: "example", text: "<strong>Look at a parking garage:</strong> You can clearly see columns (vertical pillars), beams (horizontal bars above), and slabs (the flat floor of each level). Parking garages are the easiest place to see a building's skeleton!" },
                { type: "image", src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=350&fit=crop", alt: "Building under construction showing columns and beams", caption: "A building under construction — you can clearly see columns (vertical) and beams (horizontal) forming the frame" },
                { type: "example", text: "<strong>In your home:</strong> The thick concrete pillars at the corners of your house are columns. The floor you stand on is a slab. The hidden horizontal members inside the ceiling connecting the columns are beams." },
                { type: "task", text: "<strong>Activity:</strong> Go to the nearest parking area or building under construction. Count how many columns you can see. Are they square or round? Can you spot the beams connecting them at the top?" }
              ]
            },
            {
              day: "Day 5–6",
              title: "Walls, Doors, Windows & Stairs",
              content: [
                { type: "text", text: "Now let's look at the parts you see and use every single day. These are the elements that make a building liveable." },
                { type: "heading", text: "Walls — Two Types" },
                { type: "diagram", caption: "Load-bearing wall vs Partition wall", svg: '<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="30" y="40" width="180" height="150" fill="none" stroke="#95A5A6" stroke-width="2" stroke-dasharray="4"/><rect x="50" y="50" width="20" height="130" fill="#E74C3C" stroke="#C0392B" stroke-width="2"/><rect x="170" y="50" width="20" height="130" fill="#E74C3C" stroke="#C0392B" stroke-width="2"/><rect x="50" y="40" width="140" height="15" fill="#3498DB" stroke="#2980B9" stroke-width="1.5"/><path d="M60,50 L60,45 M80,50 L80,45 M100,50 L100,45 M120,50 L120,45 M140,50 L140,45 M160,50 L160,45 M180,50 L180,45" stroke="#E74C3C" stroke-width="1"/><text x="120" y="130" text-anchor="middle" font-size="11" font-weight="bold" fill="#C0392B">LOAD-BEARING</text><text x="120" y="145" text-anchor="middle" font-size="10" fill="#C0392B">Carries weight from above</text><text x="120" y="200" text-anchor="middle" font-size="10" fill="#666">Cannot remove!</text><rect x="290" y="40" width="180" height="150" fill="none" stroke="#95A5A6" stroke-width="2" stroke-dasharray="4"/><rect x="370" y="70" width="10" height="100" fill="#F39C12" stroke="#E67E22" stroke-width="2"/><text x="380" y="130" text-anchor="middle" font-size="11" font-weight="bold" fill="#E67E22">PARTITION</text><text x="380" y="145" text-anchor="middle" font-size="10" fill="#E67E22">Only divides rooms</text><text x="380" y="200" text-anchor="middle" font-size="10" fill="#666">Can be moved or removed</text><text x="120" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#2C3E50">Load-Bearing Wall</text><text x="380" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#2C3E50">Partition Wall</text></svg>' },
                { type: "text", text: "<strong>Load-bearing walls</strong> carry the building's weight. They are thick and cannot be removed. <strong>Partition walls</strong> only divide rooms — they are thin and can be moved." },
                { type: "example", text: "<strong>Real world:</strong> The outer walls of your house are usually load-bearing. The thin wall between your bedroom and bathroom is usually a partition — it only divides the space." },
                { type: "heading", text: "Door Parts" },
                { type: "diagram", caption: "Parts of a door you should know", svg: '<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="80" y="30" width="140" height="240" fill="none" stroke="#8B4513" stroke-width="4"/><rect x="90" y="35" width="120" height="225" fill="#D2691E" stroke="#8B4513" stroke-width="2" rx="2"/><circle cx="190" cy="155" r="6" fill="#FFD700" stroke="#B8860B" stroke-width="1.5"/><rect x="80" y="265" width="140" height="8" fill="#A0522D" stroke="#8B4513" stroke-width="1.5"/><line x1="50" y1="155" x2="80" y2="155" stroke="#2E8B8B" stroke-width="1.5"/><text x="10" y="158" font-size="10" fill="#2E8B8B" font-weight="bold">Frame</text><line x1="220" y1="155" x2="250" y2="155" stroke="#E67E22" stroke-width="1.5"/><text x="252" y="158" font-size="10" fill="#E67E22" font-weight="bold">Shutter</text><text x="252" y="172" font-size="9" fill="#666">(swinging part)</text><line x1="195" y1="155" x2="220" y2="135" stroke="#B8860B" stroke-width="1"/><text x="222" y="133" font-size="10" fill="#B8860B" font-weight="bold">Handle</text><line x1="150" y1="273" x2="150" y2="290" stroke="#A0522D" stroke-width="1.5"/><text x="152" y="298" font-size="10" fill="#A0522D" font-weight="bold">Threshold</text></svg>' },
                { type: "heading", text: "Window Parts" },
                { type: "text", text: "Windows let light and air inside. The main parts are: <strong>frame</strong> (outer border), <strong>glass pane</strong> (glazing), and <strong>sill</strong> (the bottom ledge where you might place a plant)." },
                { type: "text", text: "Common window types: <strong>Casement</strong> (swings open like a door), <strong>Sliding</strong> (moves left-right), <strong>Fixed</strong> (cannot open — just for light)." },
                { type: "heading", text: "Stair Parts" },
                { type: "diagram", caption: "Parts of a staircase", svg: '<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><path d="M50,220 L50,190 L110,190 L110,160 L170,160 L170,130 L230,130 L230,100 L290,100 L290,70 L350,70 L350,40" fill="none" stroke="#95A5A6" stroke-width="3"/><rect x="50" y="190" width="60" height="30" fill="#BDC3C7" stroke="#95A5A6" stroke-width="1.5"/><rect x="110" y="160" width="60" height="30" fill="#BDC3C7" stroke="#95A5A6" stroke-width="1.5"/><rect x="170" y="130" width="60" height="30" fill="#BDC3C7" stroke="#95A5A6" stroke-width="1.5"/><rect x="230" y="100" width="60" height="30" fill="#BDC3C7" stroke="#95A5A6" stroke-width="1.5"/><rect x="290" y="70" width="60" height="30" fill="#BDC3C7" stroke="#95A5A6" stroke-width="1.5"/><line x1="135" y1="165" x2="135" y2="195" stroke="#E74C3C" stroke-width="2"/><text x="138" y="183" font-size="10" fill="#E74C3C" font-weight="bold">Riser</text><text x="138" y="195" font-size="9" fill="#666">(vertical)</text><line x1="170" y1="157" x2="225" y2="157" stroke="#2E8B8B" stroke-width="2"/><text x="175" y="152" font-size="10" fill="#2E8B8B" font-weight="bold">Tread</text><text x="175" y="140" font-size="9" fill="#666">(where foot goes)</text><line x1="50" y1="30" x2="350" y2="30" stroke="none"/><text x="200" y="240" text-anchor="middle" font-size="11" fill="#2C3E50">Tread = flat part (your foot steps here) | Riser = vertical face between steps</text></svg>' },
                { type: "keyterm", term: "Tread", definition: "The flat horizontal part of a step — where you place your foot." },
                { type: "keyterm", term: "Riser", definition: "The vertical face between two treads — the front of each step." },
                { type: "keyterm", term: "Landing", definition: "A flat resting platform between flights of stairs." },
                { type: "task", text: "<strong>Activity:</strong> Walk through your home slowly. Count all doors, windows, and stairs. For each door, can you identify the frame, shutter, and handle? For the stairs, count the treads and risers." }
              ]
            }
          ],
          resources: [
            { type: "video", title: "How Buildings Are Constructed — 3D Animation", url: "https://www.youtube.com/watch?v=7SRVMZrN9R0", lang: "Visual / English", duration: "5 min" },
            { type: "video", title: "Column, Beam, Slab — 3D Animation", url: "https://www.youtube.com/watch?v=NA3PMfaGspo", lang: "Visual", duration: "4 min" },
            { type: "video", title: "What Are Beams, Columns, Slabs? (Hindi)", url: "https://www.youtube.com/watch?v=H1sWkfHb2Hg", lang: "Hindi", duration: "8 min" }
          ],
          quiz: [
            { q: "What is the part of a building below the ground called?", options: ["Superstructure", "Substructure", "Roof", "Interior"], answer: 1 },
            { q: "A column works like the _____ of a table.", options: ["Top surface", "Drawer", "Legs", "Screws"], answer: 2 },
            { q: "What does a beam do?", options: ["Goes vertical like a pole", "Connects columns horizontally and supports floors", "Decorates the wall", "Brings water inside"], answer: 1 },
            { q: "The flat surface you walk on is called a:", options: ["Column", "Beam", "Slab", "Foundation"], answer: 2 },
            { q: "A load-bearing wall is different from a partition wall because:", options: ["It has windows", "It carries the building's weight", "It is always white", "It is made of glass"], answer: 1 },
            { q: "Where can you easily see columns, beams, and slabs together?", options: ["Inside a closed room", "In a parking garage or building under construction", "In a garden", "On a road"], answer: 1 },
            { q: "The part of a staircase where you place your foot is called:", options: ["Riser", "Tread", "Railing", "Landing"], answer: 1 },
            { q: "A casement window:", options: ["Slides left and right", "Cannot be opened", "Swings open on hinges like a door", "Rolls up"], answer: 2 },
            { q: "What is the purpose of a foundation?", options: ["Make the building colorful", "Transfer weight safely to the ground", "Keep insects away", "Provide parking"], answer: 1 },
            { q: "The foundation of the Burj Khalifa goes approximately:", options: ["5 meters deep", "50 meters deep", "500 meters deep", "It has no foundation"], answer: 1 }
          ]
        },

        // ── WEEK 2 ──
        {
          id: "week2",
          week: 2,
          title: "Reading Building Drawings Like a Pro",
          description: "Learn to read floor plans, sections, and elevations — the visual language that architects and engineers use to communicate. Once you can read drawings, you can work on them!",
          motivation: {
            quote: "A building drawing is like a map — once you learn to read it, an entire building opens up in front of your eyes.",
            futureConnect: "Software like Revit has made drawings easier to create. But you still need to understand what a drawing MEANS. That skill makes you valuable — machines draw fast, but humans understand what the drawing tells us."
          },
          days: [
            {
              day: "Day 1–2",
              title: "Floor Plans — The Top-Down View",
              content: [
                { type: "text", text: "A <strong>floor plan</strong> is the most common type of building drawing. Imagine removing the roof and looking straight down at the building from above. That's what a floor plan shows." },
                { type: "diagram", caption: "A simple floor plan — view from above", svg: '<svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="50" y="50" width="400" height="280" fill="white" stroke="#2C3E50" stroke-width="4"/><line x1="250" y1="50" x2="250" y2="330" stroke="#2C3E50" stroke-width="3"/><line x1="50" y1="200" x2="250" y2="200" stroke="#2C3E50" stroke-width="3"/><text x="150" y="130" text-anchor="middle" font-size="13" fill="#2E8B8B" font-weight="bold">BEDROOM</text><text x="150" y="148" text-anchor="middle" font-size="10" fill="#666">3.5m × 4.0m</text><text x="150" y="270" text-anchor="middle" font-size="13" fill="#2E8B8B" font-weight="bold">KITCHEN</text><text x="150" y="288" text-anchor="middle" font-size="10" fill="#666">3.5m × 3.5m</text><text x="370" y="190" text-anchor="middle" font-size="13" fill="#2E8B8B" font-weight="bold">LIVING ROOM</text><text x="370" y="208" text-anchor="middle" font-size="10" fill="#666">5.0m × 7.5m</text><path d="M250,100 L250,100 A30,30 0 0,1 280,130" fill="none" stroke="#8B4513" stroke-width="2"/><line x1="250" y1="100" x2="250" y2="130" stroke="#8B4513" stroke-width="2" stroke-dasharray="3"/><path d="M250,240 L250,240 A25,25 0 0,0 225,265" fill="none" stroke="#8B4513" stroke-width="2"/><line x1="250" y1="240" x2="250" y2="265" stroke="#8B4513" stroke-width="2" stroke-dasharray="3"/><rect x="100" y="47" width="60" height="6" fill="none" stroke="#4682B4" stroke-width="2"/><rect x="320" y="47" width="80" height="6" fill="none" stroke="#4682B4" stroke-width="2"/><rect x="100" y="327" width="60" height="6" fill="none" stroke="#4682B4" stroke-width="2"/><text x="250" y="365" text-anchor="middle" font-size="11" fill="#666">Door = arc showing swing | Window = double line on wall</text><text x="50" y="40" font-size="11" fill="#E67E22" font-weight="bold">Simple Floor Plan</text><line x1="50" y1="18" x2="450" y2="18" stroke="#E67E22" stroke-width="1.5"/><text x="52" y="13" font-size="9" fill="#E67E22">N ↑</text></svg>' },
                { type: "text", text: "On a floor plan, you can see: <strong>walls</strong> (thick lines), <strong>doors</strong> (arc showing swing direction), <strong>windows</strong> (double lines on walls), and <strong>room labels</strong> with sizes." },
                { type: "keyterm", term: "Floor Plan", definition: "A drawing showing a building from directly above — like a map of one floor. It shows walls, doors, windows, and rooms." },
                { type: "keyterm", term: "Grid Lines", definition: "Reference lines labeled with letters (A, B, C) vertically and numbers (1, 2, 3) horizontally. They help locate any part of the building quickly — like coordinates on a map." },
                { type: "keyterm", term: "Dimensions", definition: "Numbers on the drawing showing exact distances — wall lengths, room widths, door widths. Always in meters or millimeters." },
                { type: "example", text: "<strong>Real world:</strong> When you look at a hotel emergency exit map on the wall — that IS a floor plan! It shows the layout of that floor from above." },
                { type: "tip", text: "The <strong>North arrow</strong> on a floor plan shows which direction the building faces. This tells you which rooms get morning sun (East) and which get evening sun (West)." },
                { type: "task", text: "<strong>Activity:</strong> Draw a simple floor plan of your own home on paper. Show the outer walls, room divisions, and mark where doors and windows are. Label each room. Don't worry about being perfect — just practice thinking in plan view!" }
              ]
            },
            {
              day: "Day 3–4",
              title: "Sections & Elevations — Cutting the Building Open",
              content: [
                { type: "text", text: "A floor plan shows the building from above. But what about heights? How tall are the rooms? How deep is the foundation? For this, we need <strong>section drawings</strong>." },
                { type: "heading", text: "Section — Slicing the Building" },
                { type: "text", text: "Imagine taking a giant knife and cutting the building in half vertically. The face you see after cutting — that is the <strong>section</strong>. It reveals everything hidden inside." },
                { type: "diagram", caption: "A building section — showing what's inside", svg: '<svg viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="80" y="250" width="340" height="30" fill="#D4A574" opacity="0.5"/><text x="420" y="270" font-size="9" fill="#8B7355">Ground</text><line x1="60" y1="250" x2="440" y2="250" stroke="#8B7355" stroke-width="1" stroke-dasharray="3"/><rect x="100" y="230" width="300" height="25" fill="#E67E22" stroke="#D35400" stroke-width="1.5"/><text x="250" y="247" text-anchor="middle" font-size="9" fill="white" font-weight="bold">FOUNDATION</text><rect x="100" y="100" width="300" height="130" fill="white" stroke="#2C3E50" stroke-width="2.5"/><rect x="100" y="95" width="300" height="10" fill="#BDC3C7" stroke="#95A5A6" stroke-width="1"/><rect x="100" y="220" width="300" height="10" fill="#BDC3C7" stroke="#95A5A6" stroke-width="1"/><text x="65" y="168" font-size="9" fill="#E74C3C" font-weight="bold">3.0m</text><line x1="80" y1="105" x2="80" y2="220" stroke="#E74C3C" stroke-width="1.5" marker-start="url(#secUp)" marker-end="url(#secDown)"/><rect x="150" y="150" width="50" height="70" fill="#87CEEB" stroke="#4682B4" stroke-width="1.5"/><rect x="300" y="130" width="60" height="90" fill="#8B4513" stroke="#654321" stroke-width="1.5"/><polygon points="100,95 250,35 400,95" fill="#C0392B" stroke="#922B21" stroke-width="2"/><text x="250" y="70" text-anchor="middle" font-size="10" fill="white" font-weight="bold">ROOF</text><text x="250" y="170" text-anchor="middle" font-size="11" fill="#2C3E50" font-weight="bold">ROOM</text><text x="175" y="145" font-size="9" fill="#4682B4">Window</text><text x="330" y="125" font-size="9" fill="#654321">Door</text><text x="455" y="100" font-size="9" fill="#95A5A6">Roof Slab</text><text x="455" y="225" font-size="9" fill="#95A5A6">Floor Slab</text><text x="250" y="310" text-anchor="middle" font-size="11" fill="#2C3E50">Section shows: room heights, foundation depth, slab thickness, roof angle</text><defs><marker id="secUp" markerWidth="5" markerHeight="5" refX="2.5" refY="5" orient="auto"><path d="M0,5 L2.5,0 L5,5" fill="#E74C3C"/></marker><marker id="secDown" markerWidth="5" markerHeight="5" refX="2.5" refY="0" orient="auto"><path d="M0,0 L2.5,5 L5,0" fill="#E74C3C"/></marker></defs></svg>' },
                { type: "heading", text: "Elevation — The Outside Face" },
                { type: "text", text: "An <strong>elevation</strong> shows the outside face of a building — front, back, left, or right. It shows what the building looks like from the outside without cutting it open." },
                { type: "keyterm", term: "Section", definition: "A drawing showing the building as if cut in half vertically. Reveals internal heights, slab positions, and foundation depth." },
                { type: "keyterm", term: "Elevation", definition: "A drawing showing the outside face of a building from one side — like a photo taken from the front, back, left, or right." },
                { type: "keyterm", term: "Level", definition: "A horizontal reference line showing floor heights. Example: Ground Floor = 0.00m, First Floor = +3.00m, Roof = +6.00m." },
                { type: "example", text: "<strong>Real world:</strong> When you stand in front of a building and look at it — you are seeing an elevation. When construction workers dig and you see the layers underground — that's like seeing a section." },
                { type: "task", text: "<strong>Activity:</strong> Take a piece of paper. Draw your home from the front (that's an elevation). Then imagine cutting it in half and draw what you'd see inside (that's a section). Show the roof, floors, rooms, and foundation." }
              ]
            },
            {
              day: "Day 5–6",
              title: "Title Blocks, Scales & Drawing Sheets",
              content: [
                { type: "text", text: "Every professional drawing has a <strong>border</strong> and a <strong>title block</strong>. The title block is like an ID card for the drawing — it tells you everything about it." },
                { type: "diagram", caption: "A drawing sheet with title block", svg: '<svg viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="30" y="20" width="440" height="280" fill="white" stroke="#2C3E50" stroke-width="2"/><rect x="35" y="25" width="430" height="270" fill="white" stroke="#2C3E50" stroke-width="0.5"/><rect x="300" y="240" width="165" height="55" fill="#F8F9FA" stroke="#2C3E50" stroke-width="1.5"/><line x1="300" y1="255" x2="465" y2="255" stroke="#2C3E50" stroke-width="0.5"/><line x1="300" y1="270" x2="465" y2="270" stroke="#2C3E50" stroke-width="0.5"/><line x1="300" y1="280" x2="465" y2="280" stroke="#2C3E50" stroke-width="0.5"/><line x1="380" y1="255" x2="380" y2="295" stroke="#2C3E50" stroke-width="0.5"/><text x="310" y="252" font-size="8" fill="#2C3E50" font-weight="bold">Project: Sample House</text><text x="310" y="266" font-size="7" fill="#666">Drawing: Ground Floor Plan</text><text x="310" y="278" font-size="7" fill="#666">Scale: 1:100</text><text x="310" y="290" font-size="7" fill="#666">Date: 2026-01-15</text><text x="385" y="266" font-size="7" fill="#666">Drg No: S-01</text><text x="385" y="278" font-size="7" fill="#666">Rev: 0</text><text x="385" y="290" font-size="7" fill="#666">Drawn: SK</text><rect x="80" y="60" width="200" height="150" fill="none" stroke="#95A5A6" stroke-width="1" stroke-dasharray="3"/><text x="180" y="140" text-anchor="middle" font-size="12" fill="#95A5A6">[Floor Plan View]</text><text x="180" y="160" text-anchor="middle" font-size="10" fill="#BDC3C7">placed here</text><line x1="480" y1="240" x2="495" y2="240" stroke="#E67E22" stroke-width="1.5"/><line x1="495" y1="240" x2="495" y2="300" stroke="#E67E22" stroke-width="1.5"/><line x1="480" y1="300" x2="495" y2="300" stroke="#E67E22" stroke-width="1.5"/><text x="497" y="275" font-size="10" fill="#E67E22" font-weight="bold" transform="rotate(90,497,275)">Title Block</text></svg>' },
                { type: "heading", text: "What's Inside a Title Block?" },
                { type: "steps", items: ["<strong>Project Name</strong> — Which building is this drawing for?", "<strong>Drawing Title</strong> — What does this sheet show? (e.g., Ground Floor Plan)", "<strong>Drawing Number</strong> — Unique ID like S-01, S-02 for easy filing", "<strong>Scale</strong> — The size ratio between drawing and reality", "<strong>Date</strong> — When was this drawing made or last updated?", "<strong>Revision Number</strong> — How many times has it been updated? (Rev 0, Rev 1, Rev 2...)"] },
                { type: "heading", text: "Understanding Scale" },
                { type: "text", text: "A building is too big to draw at full size on paper. So we shrink it. The <strong>scale</strong> tells you how much." },
                { type: "callout", text: "<strong>1:100</strong> means 1 cm on paper = 100 cm (1 meter) in real life.<br><strong>1:50</strong> means 1 cm on paper = 50 cm in real life (bigger, more detail).<br><strong>1:200</strong> means 1 cm on paper = 200 cm (2 meters) in real life (smaller, less detail)." },
                { type: "tip", text: "Larger scale numbers (like 1:200) show LESS detail but more area. Smaller scale numbers (like 1:50) show MORE detail but less area. Think of it like zooming in and out on your phone camera." },
                { type: "keyterm", term: "Sheet Size", definition: "Paper sizes: A4 (small, notebook), A3 (medium), A1 (large), A0 (very large). Construction drawings usually use A1 or A0." },
                { type: "task", text: "<strong>Activity:</strong> If you have a ruler, measure something in your room (like a table). Now try drawing it at 1:10 scale — divide every real measurement by 10. A 100cm table becomes 10cm on paper!" }
              ]
            }
          ],
          resources: [
            { type: "video", title: "How to Read Floor Plans — Beginner Guide", url: "https://www.youtube.com/watch?v=SsNmb2R75Jo", lang: "English", duration: "6 min" },
            { type: "video", title: "घर का नक्शा कैसे पढ़ें (Hindi)", url: "https://www.youtube.com/watch?v=fed4Exot8jk", lang: "Hindi", duration: "10 min" },
            { type: "video", title: "Sections & Elevations Explained", url: "https://www.youtube.com/watch?v=Cz_ORqXmVoQ", lang: "English", duration: "5 min" }
          ],
          quiz: [
            { q: "A floor plan shows a building as seen from:", options: ["The front", "The side", "Directly above (top down)", "Underground"], answer: 2 },
            { q: "Grid lines on a drawing are labeled with:", options: ["Colors", "Letters and numbers (A,B,C / 1,2,3)", "Animal names", "Random symbols"], answer: 1 },
            { q: "A section drawing is created by:", options: ["Photographing the building", "Imagining a vertical cut through the building", "Drawing the roof only", "Removing all walls"], answer: 1 },
            { q: "What does 1:100 scale mean?", options: ["The building is 100m tall", "1cm on paper = 100cm in real life", "There are 100 rooms", "The drawing uses 100 colors"], answer: 1 },
            { q: "The title block contains:", options: ["Only the architect's photo", "Project name, drawing number, date, scale, revision", "Only the address", "Nothing important"], answer: 1 },
            { q: "An elevation drawing shows:", options: ["The inside of a room", "The foundation detail", "The outside face of a building", "The electrical plan"], answer: 2 },
            { q: "When a drawing is updated, what increases?", options: ["The paper color", "The revision number", "The building's address", "The scale"], answer: 1 },
            { q: "A larger scale (like 1:50 vs 1:200) means:", options: ["Less detail, more area", "More detail, less area shown on paper", "No difference", "The building is bigger"], answer: 1 },
            { q: "On a floor plan, a door is shown as:", options: ["A filled circle", "An arc showing the swing direction", "A triangle", "A star"], answer: 1 },
            { q: "Where can you see a floor plan in everyday life?", options: ["On a food menu", "Hotel emergency exit maps on walls", "On a TV remote", "Inside a book cover"], answer: 1 }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════
    // PHASE 2: REVIT NAVIGATION + EDITING (Weeks 3–4)
    // THE CORE PHASE — Uses old topic format (fallback renderer)
    // Will be migrated to visual format after prototype review
    // ═══════════════════════════════════════════
    {
      id: "phase2",
      title: "Revit Navigation & Editing",
      weeks: "Weeks 3–4",
      color: "#E67E22",
      sections: [
        {
          id: "week3",
          week: 3,
          title: "Getting Comfortable Inside Revit",
          description: "Your first week with Revit! Learn to open projects, navigate the interface, and understand views. No creating yet — just exploring.",
          motivation: {
            quote: "You don't learn to drive by building a car. You learn by sitting in one and driving it. Same with Revit — start by exploring.",
            futureConnect: "Revit is used worldwide. Once you are comfortable navigating it, you have a skill that opens doors to jobs everywhere — even remote work for international companies!"
          },
          days: [
            {
              day: "Day 1–2",
              title: "Opening Revit & Understanding the Interface",
              topics: [
                "Opening Revit — the Start screen shows Recent Files, New Project, and Open Existing",
                "The Ribbon: The toolbar at the top organized into tabs — Architecture, Structure, Annotate, View, Modify",
                "Properties Panel (left side): Shows details of whatever you select — type, dimensions, material",
                "Project Browser (left side): Your table of contents — lists all views (Floor Plans, Sections, Elevations, Sheets)",
                "The Drawing Area: The big central canvas where you see and work on the building",
                "Status Bar (bottom): Shows what Revit expects you to do next — always read this!",
                "Activity: Open Revit and just look around. Click on different tabs in the Ribbon."
              ]
            },
            {
              day: "Day 3–4",
              title: "Navigating Around a Building Model",
              topics: [
                "ZOOM: Scroll mouse wheel to zoom in/out. Double-click wheel = zoom to fit everything",
                "PAN: Hold mouse wheel (middle button) and drag = move around the drawing",
                "ORBIT (3D only): Hold Shift + mouse wheel and drag = rotate the 3D view",
                "Switching views: Double-click Floor Plans, Sections, or Elevations in the Project Browser",
                "View types: Floor Plan (top down), Section (cut through), Elevation (outside face), 3D View",
                "Activity: Open a sample project and practice switching between Floor Plan, Section, and 3D views"
              ]
            },
            {
              day: "Day 5–6",
              title: "Selecting & Understanding Elements",
              topics: [
                "Click any element to SELECT it — it turns blue and its properties appear in the panel",
                "Hover without clicking = tooltip shows what the element is (Wall, Door, Window, etc.)",
                "TAB key: Press Tab while hovering to cycle through overlapping elements",
                "Properties Panel: Shows element type, dimensions, material, level it belongs to",
                "Type Selector (top of Properties): Shows the specific type like 'Basic Wall: Generic - 200mm'",
                "ESCAPE key: Deselect everything and cancel any active command",
                "Activity: Open a project, click different elements. Read their properties. Use Tab to find hidden elements."
              ]
            }
          ],
          resources: [
            { type: "video", title: "Revit Complete Beginner (Hindi) — 1 Hour", url: "https://www.youtube.com/watch?v=kcxTTB4aNgk", lang: "Hindi", duration: "60 min" },
            { type: "video", title: "Revit Navigation — Zoom, Pan, Rotate", url: "https://www.youtube.com/watch?v=TU1L-5T8Wvw", lang: "English", duration: "5 min" },
            { type: "video", title: "Revit Interface Tour", url: "https://www.youtube.com/watch?v=0gBsSg3xQVw", lang: "English", duration: "8 min" }
          ],
          quiz: [
            { q: "The Ribbon in Revit is:", options: ["Decoration", "The main toolbar with tabs like Architecture, Structure, Annotate", "The drawing canvas", "The status bar"], answer: 1 },
            { q: "The Project Browser shows:", options: ["Internet bookmarks", "A list of all views — Floor Plans, Sections, Elevations, Sheets", "Computer files", "Only 3D views"], answer: 1 },
            { q: "To zoom in Revit:", options: ["Press Ctrl+Z", "Scroll mouse wheel", "Click File menu", "Press Enter"], answer: 1 },
            { q: "To PAN (move around) the view:", options: ["Press Delete", "Hold mouse wheel and drag", "Double-click a wall", "Press Escape"], answer: 1 },
            { q: "To see the 3D view:", options: ["Print the drawing", "Click 3D Views in Project Browser", "Close Revit", "Delete walls"], answer: 1 },
            { q: "Properties Panel shows:", options: ["A recipe", "The selected element's type, dimensions, and material", "Nothing", "Weather forecast"], answer: 1 },
            { q: "Tab key while hovering does what?", options: ["Opens new project", "Cycles through overlapping elements", "Deletes element", "Changes color"], answer: 1 },
            { q: "Escape key in Revit:", options: ["Saves file", "Deselects everything and cancels commands", "Opens help", "Zooms in"], answer: 1 },
            { q: "Double-clicking mouse wheel:", options: ["Deletes view", "Zooms to fit — shows everything", "Opens new file", "Saves project"], answer: 1 },
            { q: "The Status Bar at the bottom:", options: ["Is decoration", "Tells you what Revit expects next", "Shows the time", "Plays music"], answer: 1 }
          ]
        },
        {
          id: "week4",
          week: 4,
          title: "Editing Existing Projects — Your Core Skill",
          description: "THE most important week. Learn to EDIT existing projects — moving, copying, rotating, mirroring, aligning elements. These tools = your daily work.",
          motivation: {
            quote: "At work, 80% of your time will be spent EDITING existing projects, not creating new ones. Master these tools and you master your daily work.",
            futureConnect: "Professional CAD operators spend most time revising models that senior engineers created. The faster you can edit, the more valuable you become to the team!"
          },
          days: [
            {
              day: "Day 1–2",
              title: "Move, Copy & Rotate — The Big Three",
              topics: [
                "MOVE (MV): Select element → Move tool → Click base point → Click destination",
                "COPY (CO): Like Move, but leaves the original in place. Great for duplicating.",
                "ROTATE (RO): Select → Rotate → Click center → Click start angle → Click end angle",
                "Keyboard shortcuts: MV = Move, CO = Copy, RO = Rotate — much faster than menus!",
                "UNDO (Ctrl+Z): Made a mistake? Undo! Don't be afraid to try things.",
                "Activity: Select a door, MOVE it. COPY a window. ROTATE furniture."
              ]
            },
            {
              day: "Day 3–4",
              title: "Mirror, Align, Trim & Offset",
              topics: [
                "MIRROR (MM): Creates a flipped copy — perfect for symmetric buildings",
                "ALIGN (AL): Snaps one element's edge to line up with another — makes things neat",
                "TRIM/EXTEND (TR): Shortens or extends a wall to meet another wall",
                "OFFSET (OF): Creates a parallel copy at a specific distance",
                "PIN: Locks an element in place so you can't accidentally move it",
                "TEMPORARY DIMENSIONS: Blue numbers that appear — click them and type new values to reposition!",
                "Activity: Use ALIGN on two walls. MIRROR one room side. OFFSET to make parallel walls."
              ]
            },
            {
              day: "Day 5–6",
              title: "Real Work Scenarios — Practical Editing",
              topics: [
                "Moving a door from one position to another in a wall",
                "Changing a door type: Select → Type Selector dropdown → pick different type",
                "Copying windows along a wall with consistent spacing",
                "Swapping elements: Select → Type Selector → choose different type",
                "Deleting carefully: Select → Delete. Always check you selected the right thing!",
                "UNDO (Ctrl+Z) is your best friend — use it freely. Nothing is permanent!",
                "Activity: Move the front door 1 meter left. Add two windows. Change a door type."
              ]
            }
          ],
          resources: [
            { type: "video", title: "Revit Modify Tools — Move, Copy, Rotate, Mirror", url: "https://www.youtube.com/watch?v=KoNzuduAIMw", lang: "English", duration: "12 min" },
            { type: "video", title: "Revit Modify Commands Tutorial", url: "https://www.youtube.com/watch?v=tSBrl-cema8", lang: "English", duration: "15 min" },
            { type: "video", title: "Revit Trim, Extend & Offset", url: "https://www.youtube.com/watch?v=Y7ePbIGy8LQ", lang: "English", duration: "8 min" }
          ],
          quiz: [
            { q: "Keyboard shortcut for MOVE:", options: ["MV", "MM", "CO", "RO"], answer: 0 },
            { q: "Difference between MOVE and COPY:", options: ["Same thing", "Move relocates; Copy duplicates and keeps original", "Copy deletes original", "Move creates two"], answer: 1 },
            { q: "To rotate an element:", options: ["Delete it", "Select it and choose Rotate tool", "Print it", "Close file"], answer: 1 },
            { q: "MIRROR tool is useful for:", options: ["Making invisible", "Creating flipped copy for symmetric designs", "Changing color", "Saving file"], answer: 1 },
            { q: "ALIGN tool helps:", options: ["Delete walls", "Line up elements neatly", "Change color", "Print drawings"], answer: 1 },
            { q: "UNDO shortcut:", options: ["Ctrl+Z", "Ctrl+P", "Delete", "Escape"], answer: 0 },
            { q: "Temporary Dimensions (blue numbers):", options: ["Only for viewing", "Can be clicked and changed to reposition", "Cannot be changed", "Are printed"], answer: 1 },
            { q: "To change a door type without deleting:", options: ["Delete and place new", "Select → Type Selector dropdown → different type", "Move outside", "Copy three times"], answer: 1 },
            { q: "PIN tool:", options: ["Adds decoration", "Locks element so it can't be accidentally moved", "Makes transparent", "Deletes slowly"], answer: 1 },
            { q: "Most work time will be spent:", options: ["Creating from scratch", "Editing existing projects", "Playing games", "Drawing by hand"], answer: 1 }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════
    // PHASE 3: ANNOTATIONS, SHEETS & DOCUMENTATION (Weeks 5–6)
    // ═══════════════════════════════════════════
    {
      id: "phase3",
      title: "Annotations, Sheets & Documentation",
      weeks: "Weeks 5–6",
      color: "#8E44AD",
      sections: [
        {
          id: "week5",
          week: 5,
          title: "Annotations — Adding Information to Drawings",
          description: "Add dimensions, text, tags, and labels to drawings. These details make drawings professional and usable on construction sites.",
          motivation: {
            quote: "The annotations you add will be read by contractors on construction sites. Your accuracy directly affects whether a building is built correctly!",
            futureConnect: "Being fast and accurate at annotations means you contribute to real projects from day one!"
          },
          days: [
            {
              day: "Day 1–2",
              title: "Dimensions — The Numbers That Build Buildings",
              topics: [
                "ALIGNED DIMENSION: Click two points = shows distance between them",
                "LINEAR DIMENSION: Horizontal or vertical only — for clear straight measurements",
                "How to place: Annotate tab → Dimension → Click first point → Click second → Click to place line",
                "Revit dimensions are REAL — they show actual model distance, not typed numbers",
                "Moving dimension text: Drag the number to reposition without changing value",
                "String of dimensions: Click multiple points → creates a chain of connected dimensions",
                "Activity: Add dimensions to 3 walls. Create a dimension string across a room."
              ]
            },
            {
              day: "Day 3–4",
              title: "Text, Tags & Labels",
              topics: [
                "TEXT: Annotate tab → Text → Click to place → Type your note",
                "Text Styles: Change font, size, bold/italic in Type Properties — keep consistent",
                "TAGS: Smart labels that read info from elements. Room tags show room names.",
                "Room Tags: Annotate → Tag → Room → Click inside room",
                "Tag All (Annotate → Tag All Not Tagged): Tags every door/window at once!",
                "Activity: Add text notes to 2 rooms. Use Tag All to tag every door."
              ]
            },
            {
              day: "Day 5–6",
              title: "Grid Lines, Levels & Section Marks",
              topics: [
                "GRIDS: Reference lines labeled A,B,C and 1,2,3 in floor plans and sections",
                "Editing grids: Move bubble positions, rename labels (click bubble text)",
                "LEVELS: Horizontal lines in sections showing floor heights (GF, FF, Roof)",
                "Editing levels: Click name to rename. Drag line = changes actual floor height! Be careful!",
                "SECTION MARKS: Lines on floor plans showing where sections are cut",
                "Activity: Check grid labels. Rename one. Look at section marks, adjust their range."
              ]
            }
          ],
          resources: [
            { type: "video", title: "Revit Annotations — Tags, Dimensions", url: "https://www.youtube.com/watch?v=zHvbzZ80YQM", lang: "English", duration: "10 min" },
            { type: "video", title: "Revit Dimensions — Beginner to Pro", url: "https://www.youtube.com/watch?v=q7Hc3i_BFSM", lang: "English", duration: "12 min" },
            { type: "video", title: "Revit Text Styles", url: "https://www.youtube.com/watch?v=4uOjKz-ZlX4", lang: "English", duration: "6 min" }
          ],
          quiz: [
            { q: "Aligned dimension shows:", options: ["Random number", "Actual distance between two model points", "Page number", "Budget"], answer: 1 },
            { q: "Can you type a fake distance for a Revit dimension?", options: ["Yes", "No — dimensions always show real model distance", "Only on Tuesdays", "Only admin can"], answer: 1 },
            { q: "To add text notes:", options: ["Structure tab", "Annotate tab → Text", "File → Print", "View → Close"], answer: 1 },
            { q: "A Room Tag shows:", options: ["Architect's name", "Room name from Room element", "Today's date", "Building address"], answer: 1 },
            { q: "Tag All Not Tagged:", options: ["Deletes tags", "Tags every untagged element at once", "Changes color", "Prints drawing"], answer: 1 },
            { q: "Grid lines are labeled:", options: ["Colors", "Letters (A,B,C) and numbers (1,2,3)", "Emojis", "Random words"], answer: 1 },
            { q: "Levels show:", options: ["Temperature", "Floor heights (Ground, First Floor, Roof)", "Room count", "Paint colors"], answer: 1 },
            { q: "Dragging a Level line:", options: ["Nothing", "Changes actual floor height — be careful!", "Changes text color", "Adds room"], answer: 1 },
            { q: "Section marks show:", options: ["Emergency exits", "Where sections are cut through building", "Furniture", "Outlets"], answer: 1 },
            { q: "To change grid label 'A' to '1':", options: ["Delete and redraw", "Click bubble text and type new label", "Cannot change", "Call IT"], answer: 1 }
          ]
        },
        {
          id: "week6",
          week: 6,
          title: "Sheets, Printing & Submitting Drawings",
          description: "Place views on sheets, set up title blocks, and export as PDF. The final step before drawings reach clients or construction sites.",
          motivation: {
            quote: "A drawing on your screen helps nobody. Put it on a sheet and export it — that's when your work reaches the real world.",
            futureConnect: "At SCDC, you'll regularly prepare drawing sets for clients. Being quick at sheet setup makes you the go-to person in the office!"
          },
          days: [
            {
              day: "Day 1–2",
              title: "Creating Sheets & Placing Views",
              topics: [
                "SHEETS = printed pages with border, title block, and views placed on them",
                "Creating: View tab → Sheet → Select title block template → OK",
                "Placing views: Drag from Project Browser onto the sheet",
                "Moving views on sheet: Click border → drag to reposition neatly",
                "Each view can only go on ONE sheet — no duplicates",
                "Activity: Create a sheet. Drag Ground Floor Plan onto it. Add a section view."
              ]
            },
            {
              day: "Day 3–4",
              title: "Title Blocks & Drawing Info",
              topics: [
                "Title block = info box in corner — loads from template",
                "Edit by clicking text: project name, drawing title, drawn by, date",
                "Sheet numbering: S-01, S-02 or A-101, A-102 — keep organized",
                "Revisions: When drawings change, add revision — everyone knows latest version",
                "Viewport titles: Label under each view showing name and scale — editable",
                "Activity: Fill title block with 'Sample Building' and your name as 'Drawn By'"
              ]
            },
            {
              day: "Day 5–6",
              title: "Exporting PDFs & Printing",
              topics: [
                "PDF EXPORT: File → Export → PDF. Choose sheets, set paper size",
                "Print: File → Print. Select printer, choose sheets, set size/orientation",
                "Batch export: Multiple sheets → one multi-page PDF or separate files",
                "Pre-export check: All dimensions visible? Tags placed? Title block correct?",
                "File naming: 'ProjectName_S-01_GroundFloor_Rev0.pdf'",
                "Activity: Create 2 sheets with views, fill title blocks, export as PDF."
              ]
            }
          ],
          resources: [
            { type: "video", title: "Revit Sheets & Titleblocks", url: "https://www.youtube.com/watch?v=Lj2SoZzRfIk", lang: "English", duration: "10 min" },
            { type: "video", title: "Export PDF from Revit", url: "https://www.youtube.com/watch?v=gr8AGOqELbE", lang: "English", duration: "5 min" },
            { type: "video", title: "Revit Sheet Setup (Hindi)", url: "https://www.youtube.com/watch?v=6S5RqBKf5_A", lang: "Hindi", duration: "12 min" }
          ],
          quiz: [
            { q: "A Sheet in Revit is:", options: ["Random page", "Printable page with border and title block", "3D view", "Shopping list"], answer: 1 },
            { q: "To place a view on a sheet:", options: ["Copy-paste", "Drag from Project Browser onto sheet", "Type name", "Print first"], answer: 1 },
            { q: "Can same view go on two sheets?", options: ["Yes, unlimited", "No — each view on one sheet only", "Only floor plans", "Only 3D"], answer: 1 },
            { q: "Title block contains:", options: ["Only decoration", "Project name, title, drawn by, date, revision", "Photo", "Nothing editable"], answer: 1 },
            { q: "Sheet numbering helps:", options: ["Make colorful", "Keep drawings organized and findable", "Make bigger", "Hide info"], answer: 1 },
            { q: "To export PDF:", options: ["Screenshot", "File → Export → PDF", "Save as .txt", "Ctrl+Z"], answer: 1 },
            { q: "Before exporting, always:", options: ["Delete annotations", "Review sheets — check dimensions, tags, title blocks", "Change language", "Remove title block"], answer: 1 },
            { q: "Revision number increases when:", options: ["You open file", "Drawing is updated", "You zoom in", "You add room"], answer: 1 },
            { q: "Good file naming uses:", options: ["Random letters", "Clear pattern like ProjectName_SheetNo_Description_Rev", "Emojis", "Single letter"], answer: 1 },
            { q: "Batch export means:", options: ["Export one sheet", "Export multiple sheets at once", "Delete sheets", "Close Revit"], answer: 1 }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════
    // PHASE 4: SIMPLE MODELING & FUTURE (Weeks 7–8)
    // ═══════════════════════════════════════════
    {
      id: "phase4",
      title: "Simple Modeling & Your Future",
      weeks: "Weeks 7–8",
      color: "#27AE60",
      sections: [
        {
          id: "week7",
          week: 7,
          title: "Simple Modeling — Walls, Doors, Windows",
          description: "Now create simple elements yourself — draw walls, place doors and windows, set up levels. Building on your editing confidence.",
          motivation: {
            quote: "You spent 4 weeks editing like a professional. Now add one more skill — creating simple elements. Editing + modeling = complete team member.",
            futureConnect: "Senior engineers sometimes ask juniors to model a small addition. Being able to both edit AND model means you handle almost any task!"
          },
          days: [
            {
              day: "Day 1–2",
              title: "Drawing Walls & Levels",
              topics: [
                "WALLS: Architecture tab → Wall → Select type → Click start → Click end (or type length)",
                "Wall types: Type Selector — different thicknesses (concrete, brick, partition)",
                "Straight walls: Click → move direction → type exact length → Enter",
                "Chain drawing: Keep clicking for connected walls",
                "LEVELS: Already exist. Add new in section view: Architecture → Level",
                "Walls draw between levels — Ground Floor to First Floor",
                "Activity: New project. Set levels. Draw outer walls of a 4-room house."
              ]
            },
            {
              day: "Day 3–4",
              title: "Doors, Windows & Floors",
              topics: [
                "DOORS: Architecture → Door → Select type → Click on wall",
                "Revit auto-cuts the opening — no need to delete wall parts!",
                "Flip door: Press SPACE before placing to flip swing direction",
                "WINDOWS: Architecture → Window → Select type → Click on wall",
                "Sill Height: Distance from floor to bottom of window (in Properties)",
                "FLOORS: Architecture → Floor → Draw boundary → Finish (green checkmark)",
                "Activity: Place a front door, back door, and 4 windows. Add floor slab."
              ]
            },
            {
              day: "Day 5–6",
              title: "Simple Roof & Rooms",
              topics: [
                "ROOF: Architecture → Roof by Footprint → Draw along walls → Set slope → Finish",
                "Slope: 0° = flat roof, 15-30° = sloped/pitched roof",
                "ROOMS: Architecture → Room → Click inside enclosed areas",
                "Room names: Click tag to type name — Living Room, Kitchen, Bedroom",
                "Room boundaries: Need fully enclosed walls for rooms to work",
                "Check in 3D: Switch to 3D view — does the house look right?",
                "Activity: Add roof. Create rooms and name them. View in 3D!"
              ]
            }
          ],
          resources: [
            { type: "video", title: "Revit House Tutorial — Walls, Doors, Windows (Hindi)", url: "https://www.youtube.com/watch?v=kcxTTB4aNgk", lang: "Hindi", duration: "60 min" },
            { type: "video", title: "Revit Walls for Beginners", url: "https://www.youtube.com/watch?v=8aIlLgjQ3wM", lang: "English", duration: "8 min" },
            { type: "video", title: "Revit Doors and Windows", url: "https://www.youtube.com/watch?v=jkjNLN4QHHI", lang: "English", duration: "10 min" }
          ],
          quiz: [
            { q: "To draw a wall:", options: ["Annotate → Text", "Architecture → Wall", "View → Sheet", "Modify → Move"], answer: 1 },
            { q: "Placing a door on a wall:", options: ["Delete wall first", "Revit auto-cuts the opening", "Removes entire wall", "Does nothing"], answer: 1 },
            { q: "Flip door swing before placing:", options: ["Delete", "Press SPACE", "Press Enter", "Press Escape"], answer: 1 },
            { q: "Sill Height of a window:", options: ["Building height", "Distance from floor to bottom of window", "Width of glass", "Number of windows"], answer: 1 },
            { q: "Levels determine:", options: ["Building color", "Floor heights — where floors and roofs are", "Number of doors", "Budget"], answer: 1 },
            { q: "To create a floor slab:", options: ["Wall tool", "Architecture → Floor → Draw boundary → Finish", "Ctrl+F", "Automatic"], answer: 1 },
            { q: "0° roof slope means:", options: ["Very steep", "Completely flat roof", "Missing roof", "Circular"], answer: 1 },
            { q: "To create a Room:", options: ["Automatic", "Architecture → Room → Click inside enclosed walls", "Search bar", "Rooms don't exist"], answer: 1 },
            { q: "3D view helps:", options: ["Make file bigger", "Check if walls connect and building looks correct", "Required for saving", "No purpose"], answer: 1 },
            { q: "Walls are drawn between:", options: ["Left and right", "Two levels (Ground Floor and First Floor)", "Two grids only", "Two rooms only"], answer: 1 }
          ]
        },
        {
          id: "week8",
          week: 8,
          title: "Putting It All Together & Your BIM Future",
          description: "Final week! Combine editing + annotations + sheets + modeling into a complete mini-project. Then explore BIM, AI, and your career future.",
          motivation: {
            quote: "8 weeks ago, you didn't know what a column was. Now you can navigate Revit, edit projects, annotate drawings, and model simple buildings. Be proud!",
            futureConnect: "BIM is changing construction. AI helps with design and error detection. Your skills are the FOUNDATION for this exciting future. Keep learning!"
          },
          days: [
            {
              day: "Day 1–2",
              title: "Mini-Project — Edit & Annotate",
              topics: [
                "TASK: Receive a simple 2-bedroom house Revit project",
                "Step 1: Review model — switch between floor plan, section, elevation, 3D",
                "Step 2: Edit — move a door, change window type, adjust wall position",
                "Step 3: Annotate — dimensions on walls, room tags, door/window tags, text notes",
                "Step 4: Check grids and levels — labeled correctly?",
                "This is exactly the kind of task you will do at SCDC!"
              ]
            },
            {
              day: "Day 3–4",
              title: "Mini-Project — Sheets & Export",
              topics: [
                "Step 5: Create sheets — Ground Floor Plan, Section, Elevation",
                "Step 6: Place views on sheets, arrange neatly",
                "Step 7: Fill title blocks — project name, your name, date, drawing numbers",
                "Step 8: Export all sheets as one PDF",
                "Step 9: Review PDF — could a contractor build from these drawings?",
                "Congratulations! Full workflow: model → edit → annotate → sheet → export!"
              ]
            },
            {
              day: "Day 5–6",
              title: "BIM & Your Career Future",
              topics: [
                "BIM = Building Information Modeling — not just 3D but smart models with data",
                "BIM contains: dimensions, materials, costs, manufacturer info, maintenance schedules",
                "Clash Detection: BIM finds where pipes hit beams or ducts cross each other",
                "AI + BIM: Helps design better, optimize energy, predict construction problems",
                "Career path: CAD Operator → BIM Technician → BIM Coordinator → BIM Manager",
                "For CS interest: Revit has programming (API + Dynamo) — BIM needs coders too!",
                "The construction industry is going digital — you are part of that transformation!"
              ]
            }
          ],
          resources: [
            { type: "video", title: "BIM Kya Hai? (Hindi)", url: "https://www.youtube.com/watch?v=L9wTaOib1kE", lang: "Hindi", duration: "8 min" },
            { type: "video", title: "What is BIM Explained", url: "https://www.youtube.com/watch?v=9hBkPb62rRk", lang: "English", duration: "5 min" },
            { type: "video", title: "AI in Construction", url: "https://www.youtube.com/watch?v=IRHkVBd10eI", lang: "English", duration: "7 min" }
          ],
          quiz: [
            { q: "BIM stands for:", options: ["Basic Interior Management", "Building Information Modeling", "Brick Installation Method", "Building Internet Model"], answer: 1 },
            { q: "BIM model contains:", options: ["Only colors", "Data: materials, costs, dimensions, maintenance info", "Only name", "Only address"], answer: 1 },
            { q: "Clash Detection:", options: ["Broken walls", "Finds where pipes and beams conflict", "Room count", "Paint colors"], answer: 1 },
            { q: "Drawing production order:", options: ["Print → Edit", "Edit → Annotate → Sheets → Export PDF", "Export → Delete", "Annotate → Delete → Restart"], answer: 1 },
            { q: "Before exporting, check:", options: ["Only colors", "Dimensions, tags, title blocks, view placement", "Only file size", "Only date"], answer: 1 },
            { q: "AI in construction helps:", options: ["Only painting", "Design optimization, clash detection, problem prediction", "Only coffee", "Nothing"], answer: 1 },
            { q: "Career path:", options: ["CAD → Chef → Pilot", "CAD Operator → BIM Technician → BIM Coordinator → Manager", "Painter → Plumber", "No path"], answer: 1 },
            { q: "Revit programming uses:", options: ["Microsoft Word", "Revit API and Dynamo", "Photoshop", "Calculator"], answer: 1 },
            { q: "Mini-project tests:", options: ["Only walls", "Combining editing, annotating, sheets, and export", "Only typing", "Only opening Revit"], answer: 1 },
            { q: "Most important skill from this training:", options: ["Playing games", "Editing existing projects — your daily work skill", "Memorizing shortcuts", "Changing background color"], answer: 1 }
          ]
        }
      ]
    }
  ]
};
