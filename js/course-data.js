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
    // ═══════════════════════════════════════════
    {
      id: "phase1",
      title: "Understand Buildings & Drawings",
      weeks: "Weeks 1–2",
      color: "#2E8B8B",
      sections: [
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
                { type: "diagram", caption: "The two main parts of any building", svg: '<svg viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="100" y="160" width="300" height="130" fill="#E8D5B7" stroke="#8B7355" stroke-width="2" rx="2"/><rect x="120" y="180" width="80" height="50" fill="#87CEEB" stroke="#4682B4" stroke-width="1.5"/><rect x="220" y="180" width="40" height="70" fill="#8B4513" stroke="#654321" stroke-width="1.5"/><rect x="300" y="180" width="80" height="50" fill="#87CEEB" stroke="#4682B4" stroke-width="1.5"/><polygon points="100,160 250,80 400,160" fill="#C0392B" stroke="#922B21" stroke-width="2"/><rect x="150" y="290" width="200" height="30" fill="#7D6608" stroke="#5D4E06" stroke-width="2" rx="2"/><rect x="130" y="285" width="240" height="40" fill="#A0522D" stroke="#8B4513" stroke-width="2" opacity="0.3"/><line x1="80" y1="290" x2="420" y2="290" stroke="#2C3E50" stroke-width="1" stroke-dasharray="4"/><text x="250" y="145" text-anchor="middle" font-size="13" font-weight="bold" fill="#2C3E50">SUPERSTRUCTURE</text><text x="250" y="30" text-anchor="middle" font-size="12" fill="#2C3E50">(What you see above ground)</text><text x="250" y="315" text-anchor="middle" font-size="13" font-weight="bold" fill="#7D6608">SUBSTRUCTURE (Foundation)</text><text x="440" y="295" font-size="11" fill="#666">Ground Level</text></svg>' },
                { type: "keyterm", term: "Substructure", definition: "The part of a building hidden below the ground. It includes the foundation — the base that transfers the building's weight safely into the soil." },
                { type: "keyterm", term: "Superstructure", definition: "Everything above the ground — walls, columns, beams, slabs, roof, doors, and windows. This is the part you see and use every day." },
                { type: "example", text: "<strong>Real world:</strong> Think of a tree. The roots hidden underground are like the substructure (foundation). The trunk, branches, and leaves above ground are like the superstructure." },
                { type: "heading", text: "Foundation — The Hidden Base" },
                { type: "text", text: "The <strong>foundation</strong> sits below the ground. You cannot see it, but without it, the building would sink or tilt. It spreads the building's weight over a large area of soil." },
                { type: "image", src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=300&fit=crop", alt: "Building foundation under construction", caption: "A foundation being poured on a construction site — this hidden base supports the entire building" },
                { type: "tip", text: "<strong>Fun fact:</strong> The Burj Khalifa (world's tallest building) has a foundation that goes 50 meters deep — as deep as a 16-story building is tall!" },
                { type: "task", text: "<strong>Look around you:</strong> Can you see any building under construction nearby? Look at the bottom — do you see the thick concrete base being poured? That's the foundation!" }
              ]
            },
            {
              day: "Day 3–4",
              title: "Columns, Beams & Slabs — The Building's Bones",
              content: [
                { type: "text", text: "Now let's look at the three most important structural members. Together, they form the building's skeleton — the <strong>frame</strong>." },
                { type: "diagram", caption: "How columns, beams, and slabs work together", svg: '<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="80" y="220" width="40" height="70" fill="#95A5A6" stroke="#7F8C8D" stroke-width="2"/><rect x="230" y="220" width="40" height="70" fill="#95A5A6" stroke="#7F8C8D" stroke-width="2"/><rect x="380" y="220" width="40" height="70" fill="#95A5A6" stroke="#7F8C8D" stroke-width="2"/><rect x="80" y="100" width="40" height="120" fill="#95A5A6" stroke="#7F8C8D" stroke-width="2"/><rect x="230" y="100" width="40" height="120" fill="#95A5A6" stroke="#7F8C8D" stroke-width="2"/><rect x="380" y="100" width="40" height="120" fill="#95A5A6" stroke="#7F8C8D" stroke-width="2"/><rect x="70" y="210" width="360" height="15" fill="#3498DB" stroke="#2980B9" stroke-width="2"/><rect x="70" y="90" width="360" height="15" fill="#3498DB" stroke="#2980B9" stroke-width="2"/><rect x="60" y="78" width="380" height="15" fill="#BDC3C7" stroke="#95A5A6" stroke-width="1.5" opacity="0.8"/><rect x="60" y="198" width="380" height="15" fill="#BDC3C7" stroke="#95A5A6" stroke-width="1.5" opacity="0.8"/><text x="100" y="175" font-size="11" fill="#7F8C8D" transform="rotate(-90,100,175)">COLUMN</text><text x="250" y="175" font-size="11" fill="#7F8C8D" transform="rotate(-90,250,175)">COLUMN</text><text x="400" y="175" font-size="11" fill="#7F8C8D" transform="rotate(-90,400,175)">COLUMN</text><text x="250" y="222" text-anchor="middle" font-size="10" fill="white" font-weight="bold">BEAM</text><text x="250" y="102" text-anchor="middle" font-size="10" fill="white" font-weight="bold">BEAM</text><text x="460" y="88" font-size="9" fill="#95A5A6">SLAB</text><text x="460" y="208" font-size="9" fill="#95A5A6">SLAB</text><text x="250" y="40" text-anchor="middle" font-size="13" font-weight="bold" fill="#2C3E50">Column + Beam + Slab = Structural Frame</text><text x="250" y="58" text-anchor="middle" font-size="11" fill="#666">This is how multi-story buildings stand up</text></svg>' },
                { type: "keyterm", term: "Column", definition: "A vertical (standing up) member that carries weight straight down to the foundation. Like a table leg." },
                { type: "keyterm", term: "Beam", definition: "A horizontal (lying flat) member connecting columns and supporting the floor above. Like a football goal crossbar." },
                { type: "keyterm", term: "Slab", definition: "The flat surface you walk on (floor) and above your head (ceiling/roof). Slabs rest on beams." },
                { type: "example", text: "<strong>Look at a parking garage:</strong> You can clearly see columns (vertical pillars), beams (horizontal bars above), and slabs (flat floor of each level). Parking garages are the easiest place to see a building's skeleton!" },
                { type: "image", src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=300&fit=crop", alt: "Building frame under construction showing columns and beams", caption: "Columns standing vertically with beams connecting them horizontally — the building's frame before walls are added" },
                { type: "task", text: "<strong>Activity:</strong> Go to the nearest parking area or building under construction. Count how many columns you can see. Are they square or round? Can you spot the beams connecting them?" }
              ]
            },
            {
              day: "Day 5–6",
              title: "Walls, Doors, Windows & Stairs",
              content: [
                { type: "text", text: "Now let's look at parts you see and use every day — the elements that make a building liveable." },
                { type: "heading", text: "Walls — Two Types" },
                { type: "diagram", caption: "Load-bearing wall vs Partition wall", svg: '<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="30" y="30" width="180" height="140" fill="none" stroke="#95A5A6" stroke-width="2" stroke-dasharray="4"/><rect x="50" y="40" width="20" height="120" fill="#E74C3C" stroke="#C0392B" stroke-width="2"/><rect x="170" y="40" width="20" height="120" fill="#E74C3C" stroke="#C0392B" stroke-width="2"/><rect x="50" y="30" width="140" height="12" fill="#3498DB" stroke="#2980B9" stroke-width="1.5"/><text x="120" y="110" text-anchor="middle" font-size="11" font-weight="bold" fill="#C0392B">LOAD-BEARING</text><text x="120" y="126" text-anchor="middle" font-size="9" fill="#666">Carries weight from above</text><text x="120" y="180" text-anchor="middle" font-size="9" fill="#E74C3C">Cannot remove!</text><rect x="290" y="30" width="180" height="140" fill="none" stroke="#95A5A6" stroke-width="2" stroke-dasharray="4"/><rect x="370" y="60" width="8" height="90" fill="#F39C12" stroke="#E67E22" stroke-width="2"/><text x="380" y="115" text-anchor="middle" font-size="11" font-weight="bold" fill="#E67E22">PARTITION</text><text x="380" y="131" text-anchor="middle" font-size="9" fill="#666">Only divides rooms</text><text x="380" y="180" text-anchor="middle" font-size="9" fill="#27AE60">Can be moved!</text></svg>' },
                { type: "text", text: "<strong>Load-bearing walls</strong> carry the building's weight. They are thick and cannot be removed. <strong>Partition walls</strong> only divide rooms — thin and movable." },
                { type: "heading", text: "Door & Window Parts" },
                { type: "text", text: "Door parts: <strong>Frame</strong> (outer border), <strong>Shutter</strong> (the swinging part), <strong>Threshold</strong> (bottom strip), <strong>Handle</strong>, <strong>Hinges</strong>." },
                { type: "text", text: "Window parts: <strong>Frame</strong> (border), <strong>Glass pane</strong> (glazing), <strong>Sill</strong> (bottom ledge). Types: Casement (swings open), Sliding (left-right), Fixed (cannot open)." },
                { type: "image", src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=300&fit=crop", alt: "Modern building windows", caption: "Different window styles on a building — casement, fixed, and sliding types" },
                { type: "heading", text: "Stair Parts" },
                { type: "diagram", caption: "Parts of a staircase", svg: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="50" y="150" width="60" height="30" fill="#BDC3C7" stroke="#95A5A6" stroke-width="1.5"/><rect x="110" y="120" width="60" height="30" fill="#BDC3C7" stroke="#95A5A6" stroke-width="1.5"/><rect x="170" y="90" width="60" height="30" fill="#BDC3C7" stroke="#95A5A6" stroke-width="1.5"/><rect x="230" y="60" width="60" height="30" fill="#BDC3C7" stroke="#95A5A6" stroke-width="1.5"/><rect x="290" y="30" width="60" height="30" fill="#BDC3C7" stroke="#95A5A6" stroke-width="1.5"/><line x1="135" y1="125" x2="135" y2="155" stroke="#E74C3C" stroke-width="2.5"/><text x="140" y="143" font-size="10" fill="#E74C3C" font-weight="bold">Riser</text><line x1="170" y1="118" x2="225" y2="118" stroke="#2E8B8B" stroke-width="2.5"/><text x="178" y="113" font-size="10" fill="#2E8B8B" font-weight="bold">Tread</text><text x="200" y="192" text-anchor="middle" font-size="10" fill="#666">Tread = where foot goes | Riser = vertical face between steps</text></svg>' },
                { type: "keyterm", term: "Tread", definition: "The flat horizontal part of a step — where you place your foot." },
                { type: "keyterm", term: "Riser", definition: "The vertical face between two treads — the front of each step." },
                { type: "task", text: "<strong>Activity:</strong> Walk through your home. Count doors, windows, stairs. For each door — find the frame, shutter, handle. For stairs — count treads and risers." }
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
            { q: "What does a beam do?", options: ["Goes vertical", "Connects columns horizontally and supports floors", "Decorates wall", "Brings water"], answer: 1 },
            { q: "The flat surface you walk on is a:", options: ["Column", "Beam", "Slab", "Foundation"], answer: 2 },
            { q: "A load-bearing wall:", options: ["Has windows", "Carries the building's weight", "Is always white", "Is made of glass"], answer: 1 },
            { q: "Where can you easily see columns and beams together?", options: ["Closed room", "Parking garage or construction site", "Garden", "Road"], answer: 1 },
            { q: "The staircase part where you step is:", options: ["Riser", "Tread", "Railing", "Landing"], answer: 1 },
            { q: "A casement window:", options: ["Slides left-right", "Cannot open", "Swings open on hinges", "Rolls up"], answer: 2 },
            { q: "Foundation's purpose:", options: ["Make colorful", "Transfer weight to ground safely", "Keep insects away", "Provide parking"], answer: 1 },
            { q: "Partition wall can be:", options: ["Never touched", "Moved or removed — it only divides rooms", "Used as foundation", "Made stronger by painting"], answer: 1 }
          ]
        },

        // ── WEEK 2 ──
        {
          id: "week2",
          week: 2,
          title: "Reading Building Drawings Like a Pro",
          description: "Learn to read floor plans, sections, and elevations — the language architects and engineers use. Once you read drawings, you can work on them!",
          motivation: {
            quote: "A building drawing is like a map — once you learn to read it, an entire building opens up in front of your eyes.",
            futureConnect: "Software like Revit has made drawings easier to create. But you still need to understand what a drawing MEANS. That skill makes you valuable!"
          },
          days: [
            {
              day: "Day 1–2",
              title: "Floor Plans — The Top-Down View",
              content: [
                { type: "text", text: "A <strong>floor plan</strong> is the most common drawing. Imagine removing the roof and looking straight down at the building from above." },
                { type: "diagram", caption: "A simple floor plan — view from above", svg: '<svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="50" y="40" width="400" height="270" fill="white" stroke="#2C3E50" stroke-width="4"/><line x1="250" y1="40" x2="250" y2="310" stroke="#2C3E50" stroke-width="3"/><line x1="50" y1="190" x2="250" y2="190" stroke="#2C3E50" stroke-width="3"/><text x="150" y="120" text-anchor="middle" font-size="13" fill="#2E8B8B" font-weight="bold">BEDROOM</text><text x="150" y="138" text-anchor="middle" font-size="10" fill="#666">3.5m × 4.0m</text><text x="150" y="260" text-anchor="middle" font-size="13" fill="#2E8B8B" font-weight="bold">KITCHEN</text><text x="370" y="180" text-anchor="middle" font-size="13" fill="#2E8B8B" font-weight="bold">LIVING ROOM</text><path d="M250,90 A30,30 0 0,1 280,120" fill="none" stroke="#8B4513" stroke-width="2"/><line x1="250" y1="90" x2="250" y2="120" stroke="#8B4513" stroke-width="1.5" stroke-dasharray="3"/><rect x="100" y="37" width="60" height="6" fill="none" stroke="#4682B4" stroke-width="2.5"/><rect x="320" y="37" width="80" height="6" fill="none" stroke="#4682B4" stroke-width="2.5"/><text x="250" y="335" text-anchor="middle" font-size="11" fill="#666">Door = arc showing swing | Window = double line on wall</text></svg>' },
                { type: "keyterm", term: "Floor Plan", definition: "A drawing showing a building from directly above — like a map of one floor. Shows walls, doors, windows, and rooms." },
                { type: "keyterm", term: "Grid Lines", definition: "Reference lines labeled A, B, C (vertical) and 1, 2, 3 (horizontal). Like coordinates on a map." },
                { type: "keyterm", term: "Dimensions", definition: "Numbers showing exact distances — wall lengths, room widths. Always in meters or millimeters." },
                { type: "example", text: "<strong>Real world:</strong> The hotel emergency exit map on the wall — that IS a floor plan! It shows that floor's layout from above." },
                { type: "tip", text: "The <strong>North arrow</strong> shows which direction the building faces. East = morning sun, West = evening sun." },
                { type: "task", text: "<strong>Activity:</strong> Draw a simple floor plan of your own home on paper. Show walls, doors, windows. Label rooms. Don't worry about being perfect — just practice!" }
              ]
            },
            {
              day: "Day 3–4",
              title: "Sections & Elevations",
              content: [
                { type: "text", text: "Floor plans show the building from above. But what about heights? How tall are rooms? For this, we need <strong>sections</strong>." },
                { type: "text", text: "Imagine cutting the building in half with a giant knife. The face you see — that is the <strong>section</strong>. It reveals everything hidden inside." },
                { type: "diagram", caption: "A building section — showing heights and layers", svg: '<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="80" y="220" width="340" height="25" fill="#D4A574" opacity="0.5"/><line x1="60" y1="220" x2="440" y2="220" stroke="#8B7355" stroke-width="1" stroke-dasharray="3"/><rect x="100" y="200" width="300" height="25" fill="#E67E22" stroke="#D35400" stroke-width="1.5"/><text x="250" y="216" text-anchor="middle" font-size="9" fill="white" font-weight="bold">FOUNDATION</text><rect x="100" y="80" width="300" height="120" fill="white" stroke="#2C3E50" stroke-width="2.5"/><rect x="100" y="72" width="300" height="12" fill="#BDC3C7" stroke="#95A5A6" stroke-width="1"/><rect x="100" y="192" width="300" height="12" fill="#BDC3C7" stroke="#95A5A6" stroke-width="1"/><rect x="150" y="120" width="50" height="72" fill="#87CEEB" stroke="#4682B4" stroke-width="1.5"/><rect x="300" y="100" width="55" height="92" fill="#8B4513" stroke="#654321" stroke-width="1.5"/><polygon points="100,72 250,25 400,72" fill="#C0392B" stroke="#922B21" stroke-width="2"/><text x="250" y="155" text-anchor="middle" font-size="12" fill="#2C3E50" font-weight="bold">ROOM</text><text x="65" y="145" font-size="9" fill="#E74C3C" font-weight="bold">3.0m</text><line x1="78" y1="84" x2="78" y2="192" stroke="#E74C3C" stroke-width="1.5"/><text x="250" y="268" text-anchor="middle" font-size="10" fill="#666">Section shows: room heights, foundation depth, slab thickness, roof</text></svg>' },
                { type: "keyterm", term: "Section", definition: "A drawing showing the building as if cut vertically. Reveals heights, slab positions, foundation depth." },
                { type: "keyterm", term: "Elevation", definition: "The outside face of a building from one side — front, back, left, or right. Like a photo." },
                { type: "keyterm", term: "Level", definition: "Horizontal reference line showing floor height. Ground Floor = 0.00m, First Floor = +3.00m." },
                { type: "example", text: "<strong>Real world:</strong> When you stand in front of a building — you see an elevation. When builders dig and you see underground layers — that's like a section." },
                { type: "task", text: "<strong>Activity:</strong> Draw your home from the front (elevation). Then imagine cutting it in half and draw the inside (section). Show roof, floors, rooms." }
              ]
            },
            {
              day: "Day 5–6",
              title: "Title Blocks, Scales & Drawing Sheets",
              content: [
                { type: "text", text: "Every professional drawing has a <strong>border</strong> and a <strong>title block</strong>. The title block is like an ID card for the drawing." },
                { type: "diagram", caption: "A drawing sheet with title block", svg: '<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="30" y="15" width="440" height="250" fill="white" stroke="#2C3E50" stroke-width="2"/><rect x="300" y="210" width="165" height="50" fill="#F8F9FA" stroke="#2C3E50" stroke-width="1.5"/><line x1="300" y1="225" x2="465" y2="225" stroke="#2C3E50" stroke-width="0.5"/><line x1="300" y1="240" x2="465" y2="240" stroke="#2C3E50" stroke-width="0.5"/><line x1="380" y1="225" x2="380" y2="260" stroke="#2C3E50" stroke-width="0.5"/><text x="310" y="222" font-size="8" fill="#2C3E50" font-weight="bold">Project: Sample House</text><text x="310" y="236" font-size="7" fill="#666">Drawing: Ground Floor Plan</text><text x="310" y="250" font-size="7" fill="#666">Scale: 1:100</text><text x="385" y="236" font-size="7" fill="#666">Drg No: S-01</text><text x="385" y="250" font-size="7" fill="#666">Rev: 0</text><rect x="80" y="50" width="200" height="140" fill="none" stroke="#95A5A6" stroke-width="1" stroke-dasharray="3"/><text x="180" y="125" text-anchor="middle" font-size="11" fill="#95A5A6">[View placed here]</text></svg>' },
                { type: "heading", text: "What's Inside a Title Block?" },
                { type: "steps", items: ["<strong>Project Name</strong> — Which building?", "<strong>Drawing Title</strong> — What this sheet shows (e.g., Ground Floor Plan)", "<strong>Drawing Number</strong> — Unique ID like S-01, S-02", "<strong>Scale</strong> — Size ratio between drawing and reality", "<strong>Date & Revision</strong> — When made and how many updates"] },
                { type: "heading", text: "Understanding Scale" },
                { type: "callout", text: "<strong>1:100</strong> = 1 cm on paper = 1 meter in real life<br><strong>1:50</strong> = 1 cm on paper = 50 cm (more detail, less area)<br><strong>1:200</strong> = 1 cm on paper = 2 meters (less detail, more area)" },
                { type: "tip", text: "Think of scale like zooming on your phone camera. 1:50 is zoomed IN (detail). 1:200 is zoomed OUT (overview)." },
                { type: "task", text: "<strong>Activity:</strong> Measure a table with a ruler. Draw it at 1:10 scale — divide every measurement by 10. A 100cm table becomes 10cm on paper!" }
              ]
            }
          ],
          resources: [
            { type: "video", title: "How to Read Floor Plans — Beginner", url: "https://www.youtube.com/watch?v=SsNmb2R75Jo", lang: "English", duration: "6 min" },
            { type: "video", title: "घर का नक्शा कैसे पढ़ें (Hindi)", url: "https://www.youtube.com/watch?v=fed4Exot8jk", lang: "Hindi", duration: "10 min" },
            { type: "video", title: "Sections & Elevations Explained", url: "https://www.youtube.com/watch?v=Cz_ORqXmVoQ", lang: "English", duration: "5 min" }
          ],
          quiz: [
            { q: "A floor plan shows a building from:", options: ["The front", "The side", "Directly above", "Underground"], answer: 2 },
            { q: "Grid lines are labeled with:", options: ["Colors", "Letters and numbers (A,B,C / 1,2,3)", "Animal names", "Random symbols"], answer: 1 },
            { q: "A section drawing is made by:", options: ["Photographing", "Imagining a vertical cut through building", "Drawing roof only", "Removing walls"], answer: 1 },
            { q: "1:100 scale means:", options: ["Building is 100m tall", "1cm on paper = 100cm real", "100 rooms", "100 colors"], answer: 1 },
            { q: "Title block contains:", options: ["Architect's photo", "Project name, drawing number, date, scale, revision", "Only address", "Nothing"], answer: 1 },
            { q: "Elevation shows:", options: ["Inside of room", "Foundation", "Outside face of building", "Electrical plan"], answer: 2 },
            { q: "Revision number increases when:", options: ["File opened", "Drawing is updated", "You zoom in", "Room added"], answer: 1 },
            { q: "1:50 compared to 1:200 shows:", options: ["Less detail", "More detail but less area", "Same thing", "Building is bigger"], answer: 1 },
            { q: "Door on floor plan shown as:", options: ["Circle", "Arc showing swing direction", "Triangle", "Star"], answer: 1 },
            { q: "Real-life example of a floor plan:", options: ["Food menu", "Hotel emergency exit map", "TV remote", "Book cover"], answer: 1 }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════
    // PHASE 2: REVIT NAVIGATION + EDITING (Weeks 3–4)
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
          description: "Your first week with Revit! Open projects, navigate the interface, switch views. No creating — just exploring and getting comfortable.",
          motivation: {
            quote: "You don't learn to drive by building a car. You learn by sitting in one and driving it. Same with Revit — start by exploring.",
            futureConnect: "Revit is used worldwide. Once comfortable navigating it, you have a skill that opens doors to jobs everywhere — even remote international work!"
          },
          days: [
            {
              day: "Day 1–2",
              title: "Opening Revit & the Interface",
              content: [
                { type: "text", text: "When you open Revit, you see the <strong>Start Screen</strong>. From here you can open recent files, start a new project, or open an existing one." },
                { type: "diagram", caption: "The Revit interface — main areas you need to know", svg: '<svg viewBox="0 0 550 350" xmlns="http://www.w3.org/2000/svg" style="background:#2C3E50;border-radius:8px"><rect x="0" y="0" width="550" height="35" fill="#3B5068"/><text x="10" y="22" font-size="11" fill="#ECF0F1" font-weight="bold">File  Architecture  Structure  Annotate  View  Modify</text><text x="275" y="22" text-anchor="middle" font-size="9" fill="#F39C12">← THE RIBBON (main toolbar with tabs) →</text><rect x="0" y="35" width="140" height="280" fill="#3D566E"/><text x="10" y="55" font-size="9" fill="#ECF0F1" font-weight="bold">Project Browser</text><text x="15" y="72" font-size="8" fill="#BDC3C7">▼ Floor Plans</text><text x="25" y="85" font-size="8" fill="#87CEEB">  Ground Floor</text><text x="25" y="98" font-size="8" fill="#BDC3C7">  First Floor</text><text x="15" y="115" font-size="8" fill="#BDC3C7">▼ Sections</text><text x="15" y="132" font-size="8" fill="#BDC3C7">▼ Elevations</text><text x="15" y="149" font-size="8" fill="#BDC3C7">▼ 3D Views</text><text x="15" y="166" font-size="8" fill="#BDC3C7">▼ Sheets</text><text x="15" y="200" font-size="9" fill="#ECF0F1" font-weight="bold">Properties</text><text x="15" y="215" font-size="8" fill="#BDC3C7">Type: Basic Wall</text><text x="15" y="228" font-size="8" fill="#BDC3C7">Width: 200mm</text><text x="15" y="241" font-size="8" fill="#BDC3C7">Height: 3000mm</text><rect x="140" y="35" width="410" height="280" fill="#4A6785"/><text x="345" y="180" text-anchor="middle" font-size="14" fill="#ECF0F1">DRAWING AREA</text><text x="345" y="200" text-anchor="middle" font-size="10" fill="#BDC3C7">(where you see and work on the building)</text><rect x="0" y="315" width="550" height="35" fill="#3B5068"/><text x="10" y="337" font-size="9" fill="#BDC3C7">Ready | Select an element to see its properties</text><text x="350" y="337" font-size="9" fill="#F39C12">← STATUS BAR (tells you what to do next)</text><rect x="530" y="38" width="15" height="12" fill="#E74C3C" rx="2"/><text x="537" y="48" text-anchor="middle" font-size="8" fill="white">3D</text></svg>' },
                { type: "keyterm", term: "Ribbon", definition: "The toolbar at the top with tabs — Architecture, Structure, Annotate, View, Modify. Each tab has different tools." },
                { type: "keyterm", term: "Project Browser", definition: "Left panel — your table of contents. Lists all views: Floor Plans, Sections, Elevations, 3D Views, Sheets." },
                { type: "keyterm", term: "Properties Panel", definition: "Left panel (below browser) — shows details of whatever you select: type, dimensions, material." },
                { type: "keyterm", term: "Drawing Area", definition: "The big central canvas where you see and work on the building model." },
                { type: "keyterm", term: "Status Bar", definition: "Bottom strip — tells you what Revit expects you to do next. Always read this!" },
                { type: "tip", text: "Don't try to memorize everything at once. Just remember: <strong>Ribbon</strong> = tools, <strong>Project Browser</strong> = views, <strong>Properties</strong> = info about selected item." },
                { type: "task", text: "<strong>Activity:</strong> Open Revit. Click on each tab in the Ribbon (Architecture, Structure, Annotate, View, Modify). Don't click any tools — just look at what's available in each tab." }
              ]
            },
            {
              day: "Day 3–4",
              title: "Navigating Around a Building Model",
              content: [
                { type: "text", text: "Moving around in Revit uses your <strong>mouse wheel</strong> (the scrolling button in the middle). These three actions are the most important:" },
                { type: "diagram", caption: "The three essential navigation actions", svg: '<svg viewBox="0 0 550 200" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="20" y="30" width="150" height="140" fill="#E8F8F5" stroke="#2E8B8B" stroke-width="2" rx="8"/><text x="95" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#2E8B8B">ZOOM</text><text x="95" y="80" text-anchor="middle" font-size="28" fill="#2C3E50">🖱️</text><text x="95" y="105" text-anchor="middle" font-size="10" fill="#2C3E50">Scroll wheel</text><text x="95" y="120" text-anchor="middle" font-size="10" fill="#2C3E50">up/down</text><text x="95" y="145" text-anchor="middle" font-size="9" fill="#666">Double-click wheel</text><text x="95" y="158" text-anchor="middle" font-size="9" fill="#666">= Zoom to Fit</text><rect x="195" y="30" width="150" height="140" fill="#FEF3E2" stroke="#E67E22" stroke-width="2" rx="8"/><text x="270" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#E67E22">PAN (Move)</text><text x="270" y="80" text-anchor="middle" font-size="28" fill="#2C3E50">🖱️</text><text x="270" y="105" text-anchor="middle" font-size="10" fill="#2C3E50">Hold wheel</text><text x="270" y="120" text-anchor="middle" font-size="10" fill="#2C3E50">+ drag</text><text x="270" y="150" text-anchor="middle" font-size="9" fill="#666">Moves the view</text><text x="270" y="163" text-anchor="middle" font-size="9" fill="#666">left/right/up/down</text><rect x="370" y="30" width="160" height="140" fill="#EDE7F6" stroke="#8E44AD" stroke-width="2" rx="8"/><text x="450" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#8E44AD">ORBIT (3D)</text><text x="450" y="80" text-anchor="middle" font-size="28" fill="#2C3E50">🖱️</text><text x="450" y="105" text-anchor="middle" font-size="10" fill="#2C3E50">Shift + Hold wheel</text><text x="450" y="120" text-anchor="middle" font-size="10" fill="#2C3E50">+ drag</text><text x="450" y="150" text-anchor="middle" font-size="9" fill="#666">Rotates 3D view</text><text x="450" y="163" text-anchor="middle" font-size="9" fill="#666">(only works in 3D)</text></svg>' },
                { type: "heading", text: "Switching Between Views" },
                { type: "text", text: "In the <strong>Project Browser</strong>, double-click any view name to open it. The main view types are:" },
                { type: "steps", items: ["<strong>Floor Plans</strong> — top-down view (like Week 2 drawings)", "<strong>Sections</strong> — cut-through view showing heights", "<strong>Elevations</strong> — outside face views (North, South, East, West)", "<strong>3D Views</strong> — full 3D model you can rotate around"] },
                { type: "example", text: "<strong>Real world:</strong> Think of switching views like looking at a building from different positions — from above (plan), from the side (elevation), cut open (section), or walking around it (3D)." },
                { type: "tip", text: "Press <strong>ZF</strong> (or double-click mouse wheel) anytime you get lost — it zooms out to show everything in the current view." },
                { type: "task", text: "<strong>Activity:</strong> Open a sample project. Switch between Ground Floor Plan, a Section, an Elevation, and 3D View. Practice zooming, panning, and orbiting in each." }
              ]
            },
            {
              day: "Day 5–6",
              title: "Selecting & Understanding Elements",
              content: [
                { type: "text", text: "Everything in a Revit model is an <strong>element</strong> — walls, doors, windows, columns, beams, floors. You interact with them by selecting." },
                { type: "heading", text: "How to Select" },
                { type: "text", text: "<strong>Click</strong> on any element to select it. It turns blue and its info appears in the Properties panel." },
                { type: "text", text: "<strong>Hover</strong> over an element (don't click) to see a tooltip showing what it is — Wall, Door, Window, etc." },
                { type: "keyterm", term: "Tab Key Trick", definition: "When elements overlap, press Tab while hovering to cycle through them. Very useful for selecting a wall behind a door, or a beam behind a slab!" },
                { type: "keyterm", term: "Type Selector", definition: "The dropdown at the top of Properties panel showing the specific type — like 'Basic Wall: Generic - 200mm'. You can change this to swap element types." },
                { type: "keyterm", term: "Escape Key", definition: "Press Escape to deselect everything and cancel any active command. Your panic button!" },
                { type: "image", src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=300&fit=crop", alt: "Person working on computer with CAD software", caption: "Working in Revit — selecting elements and reading their properties is your primary interaction" },
                { type: "callout", text: "<strong>Remember these 3 keys:</strong><br>• <strong>Click</strong> = Select<br>• <strong>Tab</strong> = Cycle through overlapping elements<br>• <strong>Escape</strong> = Cancel/Deselect" },
                { type: "task", text: "<strong>Activity:</strong> Open a project. Click on 5 different elements (wall, door, window, column, slab). For each one, read the Properties panel — what type is it? What are its dimensions?" }
              ]
            }
          ],
          resources: [
            { type: "video", title: "Revit Interface Tour — Quick Overview", url: "https://www.youtube.com/watch?v=0gBsSg3xQVw", lang: "English", duration: "8 min" },
            { type: "video", title: "Revit Navigation — Zoom, Pan, Orbit", url: "https://www.youtube.com/watch?v=TU1L-5T8Wvw", lang: "English", duration: "5 min" },
            { type: "video", title: "Revit Beginner Hindi — Quick Start", url: "https://www.youtube.com/watch?v=ZhVGr4v5X08", lang: "Hindi", duration: "10 min" }
          ],
          quiz: [
            { q: "The Ribbon in Revit is:", options: ["Decoration", "Main toolbar with tabs (Architecture, Structure, Annotate)", "Drawing canvas", "Status bar"], answer: 1 },
            { q: "Project Browser shows:", options: ["Internet bookmarks", "All views — Floor Plans, Sections, Elevations, Sheets", "Computer files", "Only 3D"], answer: 1 },
            { q: "To zoom in Revit:", options: ["Press Ctrl+Z", "Scroll mouse wheel", "Click File", "Press Enter"], answer: 1 },
            { q: "To PAN (move around):", options: ["Press Delete", "Hold mouse wheel and drag", "Double-click wall", "Press Escape"], answer: 1 },
            { q: "To open a 3D view:", options: ["Print drawing", "Double-click 3D Views in Project Browser", "Close Revit", "Delete walls"], answer: 1 },
            { q: "Properties Panel shows:", options: ["Recipes", "Selected element's type, dimensions, material", "Nothing", "Weather"], answer: 1 },
            { q: "Tab key while hovering:", options: ["Opens new project", "Cycles through overlapping elements", "Deletes element", "Changes color"], answer: 1 },
            { q: "Escape key:", options: ["Saves file", "Deselects and cancels commands", "Opens help", "Zooms in"], answer: 1 },
            { q: "Double-clicking mouse wheel:", options: ["Deletes view", "Zooms to Fit — shows everything", "Opens file", "Saves"], answer: 1 },
            { q: "Status Bar at bottom:", options: ["Just decoration", "Tells you what Revit expects next", "Shows time", "Plays music"], answer: 1 }
          ]
        },

        // ── WEEK 4 ──
        {
          id: "week4",
          week: 4,
          title: "Editing Existing Projects — Your Core Skill",
          description: "THE most important week. Learn to EDIT existing models — move, copy, rotate, mirror, align. These are your daily work tools!",
          motivation: {
            quote: "At work, 80% of your time will be spent EDITING existing projects. Master these tools and you master your daily work.",
            futureConnect: "The faster and more accurately you can edit, the more valuable you become. This is exactly what SCDC needs you to do!"
          },
          days: [
            {
              day: "Day 1–2",
              title: "Move, Copy & Rotate — The Big Three",
              content: [
                { type: "text", text: "These three tools are your bread and butter. You will use them every single day at work." },
                { type: "diagram", caption: "Move, Copy, and Rotate — the three tools you use most", svg: '<svg viewBox="0 0 550 180" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="15" y="20" width="160" height="145" fill="#E8F8F5" stroke="#2E8B8B" stroke-width="2" rx="8"/><text x="95" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#2E8B8B">MOVE (MV)</text><rect x="45" y="55" width="30" height="30" fill="#3498DB" opacity="0.3" stroke="#3498DB" stroke-width="1" stroke-dasharray="3"/><rect x="95" y="80" width="30" height="30" fill="#3498DB" stroke="#2980B9" stroke-width="2"/><path d="M75,70 L95,90" stroke="#E74C3C" stroke-width="2" marker-end="url(#arrowR)"/><text x="95" y="130" text-anchor="middle" font-size="9" fill="#2C3E50">Select → MV → Click</text><text x="95" y="143" text-anchor="middle" font-size="9" fill="#2C3E50">base → Click destination</text><text x="95" y="157" text-anchor="middle" font-size="8" fill="#666">Original disappears</text><rect x="195" y="20" width="160" height="145" fill="#FEF3E2" stroke="#E67E22" stroke-width="2" rx="8"/><text x="275" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#E67E22">COPY (CO)</text><rect x="220" y="60" width="30" height="30" fill="#3498DB" stroke="#2980B9" stroke-width="2"/><rect x="280" y="85" width="30" height="30" fill="#3498DB" stroke="#2980B9" stroke-width="2"/><path d="M255,75 L280,95" stroke="#27AE60" stroke-width="2" marker-end="url(#arrowG)"/><text x="275" y="130" text-anchor="middle" font-size="9" fill="#2C3E50">Select → CO → Click</text><text x="275" y="143" text-anchor="middle" font-size="9" fill="#2C3E50">base → Click destination</text><text x="275" y="157" text-anchor="middle" font-size="8" fill="#666">Original stays + copy made</text><rect x="375" y="20" width="160" height="145" fill="#EDE7F6" stroke="#8E44AD" stroke-width="2" rx="8"/><text x="455" y="42" text-anchor="middle" font-size="13" font-weight="bold" fill="#8E44AD">ROTATE (RO)</text><rect x="430" y="70" width="30" height="30" fill="#3498DB" stroke="#2980B9" stroke-width="2" transform="rotate(30,445,85)"/><rect x="430" y="70" width="30" height="30" fill="#3498DB" opacity="0.3" stroke="#3498DB" stroke-width="1" stroke-dasharray="3"/><path d="M455,60 A20,20 0 0,1 470,80" fill="none" stroke="#8E44AD" stroke-width="2" marker-end="url(#arrowP)"/><text x="455" y="130" text-anchor="middle" font-size="9" fill="#2C3E50">Select → RO → Click</text><text x="455" y="143" text-anchor="middle" font-size="9" fill="#2C3E50">center → drag angle</text><text x="455" y="157" text-anchor="middle" font-size="8" fill="#666">Spins around center point</text><defs><marker id="arrowR" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#E74C3C"/></marker><marker id="arrowG" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#27AE60"/></marker><marker id="arrowP" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#8E44AD"/></marker></defs></svg>' },
                { type: "callout", text: "<strong>Keyboard shortcuts save time:</strong><br>• <strong>MV</strong> = Move<br>• <strong>CO</strong> = Copy<br>• <strong>RO</strong> = Rotate<br>Type these letters after selecting an element — much faster than clicking menus!" },
                { type: "tip", text: "<strong>UNDO (Ctrl+Z)</strong> is your best friend. Made a mistake? Press Ctrl+Z to go back. You can press it many times. Don't be afraid to experiment!" },
                { type: "example", text: "<strong>At work:</strong> A senior engineer says 'Move that door 1 meter to the left.' You select the door → press MV → click the door → move left → type 1000 (millimeters) → Enter. Done in 5 seconds!" },
                { type: "task", text: "<strong>Activity:</strong> Open a sample project. Select a door and MOVE it to a new position. Then COPY a window (notice original stays). Then ROTATE a piece of furniture 90 degrees." }
              ]
            },
            {
              day: "Day 3–4",
              title: "Mirror, Align, Trim & Offset",
              content: [
                { type: "text", text: "These four tools give you precision control. They help you edit quickly and keep things neat." },
                { type: "diagram", caption: "Four precision editing tools", svg: '<svg viewBox="0 0 550 200" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="10" y="15" width="125" height="170" fill="#FFF9E6" stroke="#F0C040" stroke-width="1.5" rx="8"/><text x="72" y="35" text-anchor="middle" font-size="11" font-weight="bold" fill="#8B6914">MIRROR (MM)</text><rect x="30" y="50" width="20" height="40" fill="#3498DB" stroke="#2980B9" stroke-width="1.5"/><line x1="72" y1="45" x2="72" y2="100" stroke="#E74C3C" stroke-width="1.5" stroke-dasharray="3"/><rect x="85" y="50" width="20" height="40" fill="#3498DB" stroke="#2980B9" stroke-width="1.5" opacity="0.6"/><text x="72" y="120" text-anchor="middle" font-size="8" fill="#666">Creates flipped copy</text><text x="72" y="133" text-anchor="middle" font-size="8" fill="#666">across a line</text><text x="72" y="160" text-anchor="middle" font-size="8" fill="#27AE60">Great for symmetric</text><text x="72" y="173" text-anchor="middle" font-size="8" fill="#27AE60">buildings!</text><rect x="145" y="15" width="125" height="170" fill="#EDF7ED" stroke="#27AE60" stroke-width="1.5" rx="8"/><text x="207" y="35" text-anchor="middle" font-size="11" font-weight="bold" fill="#1E8449">ALIGN (AL)</text><rect x="165" y="55" width="40" height="10" fill="#3498DB" stroke="#2980B9" stroke-width="1.5"/><rect x="175" y="80" width="40" height="10" fill="#95A5A6" stroke="#7F8C8D" stroke-width="1.5"/><path d="M185,65 L185,80" stroke="#E74C3C" stroke-width="1" stroke-dasharray="2" marker-end="url(#alArrow)"/><text x="207" y="120" text-anchor="middle" font-size="8" fill="#666">Lines up edges</text><text x="207" y="133" text-anchor="middle" font-size="8" fill="#666">of two elements</text><text x="207" y="160" text-anchor="middle" font-size="8" fill="#27AE60">Makes things neat!</text><rect x="280" y="15" width="125" height="170" fill="#EEF2FF" stroke="#3B82F6" stroke-width="1.5" rx="8"/><text x="342" y="35" text-anchor="middle" font-size="11" font-weight="bold" fill="#1D4ED8">TRIM (TR)</text><line x1="300" y1="55" x2="365" y2="55" stroke="#3498DB" stroke-width="3"/><line x1="340" y1="45" x2="340" y2="90" stroke="#95A5A6" stroke-width="3"/><line x1="340" y1="55" x2="365" y2="55" stroke="#E74C3C" stroke-width="3" stroke-dasharray="3"/><text x="342" y="120" text-anchor="middle" font-size="8" fill="#666">Cuts or extends</text><text x="342" y="133" text-anchor="middle" font-size="8" fill="#666">walls to meet</text><text x="342" y="160" text-anchor="middle" font-size="8" fill="#1D4ED8">Cleans wall joints</text><rect x="415" y="15" width="125" height="170" fill="#FDF2F8" stroke="#EC4899" stroke-width="1.5" rx="8"/><text x="477" y="35" text-anchor="middle" font-size="11" font-weight="bold" fill="#BE185D">OFFSET (OF)</text><line x1="440" y1="60" x2="440" y2="95" stroke="#3498DB" stroke-width="3"/><line x1="500" y1="60" x2="500" y2="95" stroke="#3498DB" stroke-width="2" stroke-dasharray="0"/><text x="470" y="80" text-anchor="middle" font-size="9" fill="#666">←  d  →</text><text x="477" y="120" text-anchor="middle" font-size="8" fill="#666">Parallel copy at</text><text x="477" y="133" text-anchor="middle" font-size="8" fill="#666">specific distance</text><text x="477" y="160" text-anchor="middle" font-size="8" fill="#BE185D">Great for parallel</text><text x="477" y="173" text-anchor="middle" font-size="8" fill="#BE185D">walls!</text><defs><marker id="alArrow" markerWidth="6" markerHeight="6" refX="3" refY="6" orient="auto"><path d="M0,0 L3,6 L6,0" fill="#E74C3C"/></marker></defs></svg>' },
                { type: "keyterm", term: "Temporary Dimensions", definition: "The blue numbers that appear when you select something. Click them and type a new value to reposition with exact precision!" },
                { type: "keyterm", term: "PIN", definition: "Locks an element so you cannot accidentally move it. Right-click → Pin. Useful for reference elements." },
                { type: "example", text: "<strong>At work:</strong> A building is symmetric — one side mirrors the other. Draw one side, then use MIRROR to create the other side instantly. Saves hours!" },
                { type: "task", text: "<strong>Activity:</strong> Use ALIGN to line up two walls that are slightly off. Use MIRROR on one room to create a symmetric pair. Use OFFSET to make a wall 200mm away from an existing wall." }
              ]
            },
            {
              day: "Day 5–6",
              title: "Real Work Scenarios — Practice Editing",
              content: [
                { type: "text", text: "Let's practice the tools in real scenarios — the exact kind of tasks you'll do at SCDC." },
                { type: "heading", text: "Common Editing Tasks" },
                { type: "steps", items: ["<strong>Move a door:</strong> Select door → MV → click it → move to new position in the wall", "<strong>Change a door type:</strong> Select door → look at Type Selector (top of Properties) → pick a different type from dropdown", "<strong>Copy windows:</strong> Select window → CO → click it → place copies along the wall with even spacing", "<strong>Swap element type:</strong> Select any element → Type Selector → choose a different type (no delete needed!)", "<strong>Delete carefully:</strong> Select → press Delete. Always double-check you picked the right thing first!"] },
                { type: "tip", text: "<strong>UNDO (Ctrl+Z)</strong> works for multiple steps. If you mess up 5 things, press Ctrl+Z five times to go back. Nothing is permanent until you save!" },
                { type: "image", src: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=300&fit=crop", alt: "Person working at desk with computer", caption: "Editing existing projects is the daily reality of a CAD operator — practice makes you fast and confident" },
                { type: "example", text: "<strong>Real scenario:</strong> Client says 'Move the front door 1 meter left and add 2 windows to the living room.' This is a 2-minute job once you master Move and Copy!" },
                { type: "task", text: "<strong>Activity:</strong> Pretend a client request came in: Move the front door 1 meter to the left. Add two windows to the east wall. Change the back door to a sliding type. Try it!" }
              ]
            }
          ],
          resources: [
            { type: "video", title: "Revit Modify Tools — Move, Copy, Rotate, Mirror", url: "https://www.youtube.com/watch?v=KoNzuduAIMw", lang: "English", duration: "9 min" },
            { type: "video", title: "Revit Trim, Extend & Offset", url: "https://www.youtube.com/watch?v=Y7ePbIGy8LQ", lang: "English", duration: "8 min" },
            { type: "video", title: "Revit Modify Commands (Hindi)", url: "https://www.youtube.com/watch?v=JzZ6XKI9USI", lang: "Hindi", duration: "10 min" }
          ],
          quiz: [
            { q: "Shortcut for MOVE:", options: ["MV", "MM", "CO", "RO"], answer: 0 },
            { q: "MOVE vs COPY:", options: ["Same", "Move relocates; Copy keeps original + makes duplicate", "Copy deletes", "Move makes two"], answer: 1 },
            { q: "To rotate:", options: ["Delete it", "Select → Rotate tool → click center → drag", "Print", "Close file"], answer: 1 },
            { q: "MIRROR is for:", options: ["Making invisible", "Creating flipped copy for symmetric designs", "Changing color", "Saving"], answer: 1 },
            { q: "ALIGN helps:", options: ["Delete walls", "Line up element edges neatly", "Change color", "Print"], answer: 1 },
            { q: "UNDO shortcut:", options: ["Ctrl+Z", "Ctrl+P", "Delete", "Escape"], answer: 0 },
            { q: "Temporary Dimensions (blue numbers):", options: ["View only", "Can be clicked and changed to reposition precisely", "Cannot be changed", "Are printed"], answer: 1 },
            { q: "To change door type without deleting:", options: ["Delete + new", "Select → Type Selector dropdown → different type", "Move outside", "Copy 3x"], answer: 1 },
            { q: "PIN tool:", options: ["Decoration", "Locks element from accidental moves", "Transparent", "Slow delete"], answer: 1 },
            { q: "Most work time is spent:", options: ["Creating from scratch", "Editing existing projects", "Gaming", "Hand drawing"], answer: 1 }
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
          title: "Annotations — Adding Info to Drawings",
          description: "Add dimensions, text, tags, and labels. These details make drawings professional and usable on construction sites.",
          motivation: {
            quote: "The annotations you add will be read by contractors on real sites. Your accuracy directly affects whether buildings are built correctly!",
            futureConnect: "Being fast and accurate at annotations means you contribute to real projects from day one. This is where juniors prove themselves!"
          },
          days: [
            {
              day: "Day 1–2",
              title: "Dimensions — The Numbers That Build Buildings",
              content: [
                { type: "text", text: "Dimensions tell builders the exact size of everything. Without them, nobody knows how long a wall should be or where a door goes." },
                { type: "diagram", caption: "How dimensions appear on a Revit drawing", svg: '<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><line x1="50" y1="80" x2="450" y2="80" stroke="#2C3E50" stroke-width="4"/><line x1="50" y1="130" x2="50" y2="50" stroke="#2E8B8B" stroke-width="1.5"/><line x1="250" y1="130" x2="250" y2="50" stroke="#2E8B8B" stroke-width="1.5"/><line x1="450" y1="130" x2="450" y2="50" stroke="#2E8B8B" stroke-width="1.5"/><line x1="50" y1="55" x2="250" y2="55" stroke="#2E8B8B" stroke-width="1.5"/><line x1="250" y1="55" x2="450" y2="55" stroke="#2E8B8B" stroke-width="1.5"/><text x="150" y="48" text-anchor="middle" font-size="12" fill="#E74C3C" font-weight="bold">3500</text><text x="350" y="48" text-anchor="middle" font-size="12" fill="#E74C3C" font-weight="bold">4000</text><line x1="50" y1="35" x2="450" y2="35" stroke="#E67E22" stroke-width="1.5"/><text x="250" y="28" text-anchor="middle" font-size="12" fill="#E67E22" font-weight="bold">7500</text><text x="50" y="110" font-size="9" fill="#666">Wall start</text><text x="237" y="110" font-size="9" fill="#666">Door</text><text x="430" y="110" font-size="9" fill="#666">Wall end</text><rect x="230" y="70" width="40" height="20" fill="#8B4513" stroke="#654321" stroke-width="1.5"/><text x="250" y="160" text-anchor="middle" font-size="10" fill="#2C3E50">Dimensions show real distances in millimeters</text><text x="250" y="178" text-anchor="middle" font-size="10" fill="#2C3E50">Individual dimensions (3500 + 4000) and total (7500)</text></svg>' },
                { type: "keyterm", term: "Aligned Dimension", definition: "Click two points to show the real distance between them. The most common type — works at any angle." },
                { type: "keyterm", term: "Dimension String", definition: "Click multiple points in a row to create a chain of connected dimensions — shows all segments plus total." },
                { type: "callout", text: "<strong>Important:</strong> Revit dimensions are always REAL. You cannot type a fake number — the dimension reads the actual model distance. If you want to change the distance, MOVE the element, and the dimension updates automatically." },
                { type: "tip", text: "You CAN drag the dimension text to a clearer position. This doesn't change the value — just moves the label for readability." },
                { type: "task", text: "<strong>Activity:</strong> Open a floor plan. Go to Annotate tab → Dimension. Click two walls to add a dimension. Then click 4 points along one wall to make a dimension string." }
              ]
            },
            {
              day: "Day 3–4",
              title: "Text, Tags & Labels",
              content: [
                { type: "text", text: "Text and tags add names, notes, and labels to your drawings. They make the drawing readable by anyone." },
                { type: "heading", text: "Text Notes" },
                { type: "text", text: "Go to <strong>Annotate tab → Text</strong> → Click on the drawing → Type your note. Use text for general notes like 'All dimensions in millimeters' or 'Verify on site'." },
                { type: "heading", text: "Tags — Smart Labels" },
                { type: "text", text: "<strong>Tags</strong> are special — they automatically read information from the element. A Room Tag shows the room's name. A Door Tag shows the door number." },
                { type: "diagram", caption: "Tags read information directly from elements", svg: '<svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="40" y="30" width="180" height="100" fill="white" stroke="#2C3E50" stroke-width="3"/><rect x="120" y="90" width="30" height="40" fill="#8B4513" stroke="#654321" stroke-width="1.5"/><text x="130" y="75" text-anchor="middle" font-size="14" fill="#2E8B8B" font-weight="bold">BEDROOM 1</text><text x="130" y="55" text-anchor="middle" font-size="9" fill="#666">Room Tag</text><ellipse cx="135" cy="128" rx="12" ry="8" fill="#FEF3E2" stroke="#E67E22" stroke-width="1.5"/><text x="135" y="131" text-anchor="middle" font-size="8" fill="#E67E22" font-weight="bold">D1</text><text x="175" y="130" font-size="9" fill="#E67E22">Door Tag</text><rect x="290" y="30" width="180" height="100" fill="white" stroke="#2C3E50" stroke-width="3"/><rect x="340" y="27" width="50" height="6" fill="none" stroke="#4682B4" stroke-width="2.5"/><text x="380" y="75" text-anchor="middle" font-size="14" fill="#2E8B8B" font-weight="bold">KITCHEN</text><text x="365" y="21" text-anchor="middle" font-size="8" fill="#4682B4">W1 Window Tag</text><text x="250" y="150" text-anchor="middle" font-size="10" fill="#666">Tags are connected to elements — change the name and the tag updates!</text></svg>' },
                { type: "tip", text: "<strong>Tag All shortcut:</strong> Annotate → Tag All Not Tagged. This tags EVERY untagged element at once — saves huge time instead of tagging one by one!" },
                { type: "task", text: "<strong>Activity:</strong> Add text 'Ground Floor Plan' as a note. Then use Tag All to tag every door in the plan. Then click a room tag and rename the room." }
              ]
            },
            {
              day: "Day 5–6",
              title: "Grids, Levels & Section Marks",
              content: [
                { type: "text", text: "These are reference elements — they help everyone find their way around the drawing." },
                { type: "heading", text: "Grid Lines" },
                { type: "text", text: "<strong>Grids</strong> are reference lines forming a coordinate system. Labeled A, B, C vertically and 1, 2, 3 horizontally. They appear in plans AND sections." },
                { type: "diagram", caption: "Grid system — like a coordinate map for the building", svg: '<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><line x1="80" y1="30" x2="80" y2="220" stroke="#E74C3C" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="180" y1="30" x2="180" y2="220" stroke="#E74C3C" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="300" y1="30" x2="300" y2="220" stroke="#E74C3C" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="40" y1="60" x2="350" y2="60" stroke="#3498DB" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="40" y1="140" x2="350" y2="140" stroke="#3498DB" stroke-width="1.5" stroke-dasharray="5,3"/><line x1="40" y1="200" x2="350" y2="200" stroke="#3498DB" stroke-width="1.5" stroke-dasharray="5,3"/><circle cx="80" cy="25" r="12" fill="white" stroke="#E74C3C" stroke-width="2"/><circle cx="180" cy="25" r="12" fill="white" stroke="#E74C3C" stroke-width="2"/><circle cx="300" cy="25" r="12" fill="white" stroke="#E74C3C" stroke-width="2"/><text x="80" y="29" text-anchor="middle" font-size="10" fill="#E74C3C" font-weight="bold">A</text><text x="180" y="29" text-anchor="middle" font-size="10" fill="#E74C3C" font-weight="bold">B</text><text x="300" y="29" text-anchor="middle" font-size="10" fill="#E74C3C" font-weight="bold">C</text><circle cx="35" cy="60" r="12" fill="white" stroke="#3498DB" stroke-width="2"/><circle cx="35" cy="140" r="12" fill="white" stroke="#3498DB" stroke-width="2"/><circle cx="35" cy="200" r="12" fill="white" stroke="#3498DB" stroke-width="2"/><text x="35" y="64" text-anchor="middle" font-size="10" fill="#3498DB" font-weight="bold">1</text><text x="35" y="144" text-anchor="middle" font-size="10" fill="#3498DB" font-weight="bold">2</text><text x="35" y="204" text-anchor="middle" font-size="10" fill="#3498DB" font-weight="bold">3</text><text x="200" y="242" text-anchor="middle" font-size="10" fill="#666">Say "column at B-2" and everyone knows exactly where!</text></svg>' },
                { type: "heading", text: "Levels" },
                { type: "text", text: "<strong>Levels</strong> are horizontal lines in section views showing floor heights. Ground Floor, First Floor, Roof." },
                { type: "callout", text: "<strong>WARNING:</strong> If you drag a Level line up/down, it changes the ACTUAL floor height! This moves everything on that floor. Be very careful — only do this intentionally!" },
                { type: "heading", text: "Section Marks" },
                { type: "text", text: "<strong>Section marks</strong> are lines on floor plans showing where section views are cut. You can drag their ends to change what the section shows." },
                { type: "task", text: "<strong>Activity:</strong> Check the grid labels in a project — are they correct? Try renaming one (click the bubble). Look at section marks and adjust the range by dragging." }
              ]
            }
          ],
          resources: [
            { type: "video", title: "Revit Dimensions — Beginner Guide", url: "https://www.youtube.com/watch?v=q7Hc3i_BFSM", lang: "English", duration: "10 min" },
            { type: "video", title: "Revit Tags & Annotations", url: "https://www.youtube.com/watch?v=zHvbzZ80YQM", lang: "English", duration: "8 min" },
            { type: "video", title: "Revit Grids and Levels", url: "https://www.youtube.com/watch?v=BRNuV_SZKx8", lang: "Hindi", duration: "9 min" }
          ],
          quiz: [
            { q: "Aligned dimension shows:", options: ["Random number", "Actual distance between two model points", "Page number", "Budget"], answer: 1 },
            { q: "Can you type a fake dimension value?", options: ["Yes", "No — always shows real distance", "Only Tuesdays", "Only admin"], answer: 1 },
            { q: "To add text notes:", options: ["Structure tab", "Annotate tab → Text", "File → Print", "View → Close"], answer: 1 },
            { q: "Room Tag shows:", options: ["Architect name", "Room name from the element", "Date", "Address"], answer: 1 },
            { q: "Tag All Not Tagged:", options: ["Deletes tags", "Tags every untagged element at once", "Changes color", "Prints"], answer: 1 },
            { q: "Grid lines labeled:", options: ["Colors", "Letters and numbers (A,B / 1,2)", "Emojis", "Random"], answer: 1 },
            { q: "Levels show:", options: ["Temperature", "Floor heights (Ground, First, Roof)", "Room count", "Colors"], answer: 1 },
            { q: "Dragging a Level line:", options: ["Nothing", "Changes actual floor height — careful!", "Changes text color", "Adds room"], answer: 1 },
            { q: "Section marks show:", options: ["Exits", "Where section views cut the building", "Furniture", "Outlets"], answer: 1 },
            { q: "To rename a grid label:", options: ["Delete and redraw", "Click the bubble text and type new name", "Cannot change", "Call IT"], answer: 1 }
          ]
        },

        // ── WEEK 6 ──
        {
          id: "week6",
          week: 6,
          title: "Sheets, Printing & Exporting",
          description: "Place views on sheets, fill title blocks, and export PDFs. The final step before drawings reach clients.",
          motivation: {
            quote: "A drawing on screen helps nobody. Put it on a sheet and export — that's when your work reaches the real world.",
            futureConnect: "At SCDC, you'll prepare drawing sets for clients regularly. Being fast at sheets makes you the go-to person!"
          },
          days: [
            {
              day: "Day 1–2",
              title: "Creating Sheets & Placing Views",
              content: [
                { type: "text", text: "<strong>Sheets</strong> are the final printed pages. Each sheet has a border, a title block, and one or more views placed on it." },
                { type: "diagram", caption: "A sheet with views placed on it", svg: '<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="50" y="20" width="400" height="260" fill="white" stroke="#2C3E50" stroke-width="2.5"/><rect x="55" y="25" width="390" height="250" fill="white" stroke="#2C3E50" stroke-width="0.5"/><rect x="70" y="40" width="200" height="150" fill="#F8F9FA" stroke="#95A5A6" stroke-width="1.5" stroke-dasharray="3"/><text x="170" y="120" text-anchor="middle" font-size="11" fill="#2E8B8B" font-weight="bold">Ground Floor Plan</text><text x="170" y="140" text-anchor="middle" font-size="9" fill="#666">Scale 1:100</text><rect x="290" y="40" width="140" height="150" fill="#F8F9FA" stroke="#95A5A6" stroke-width="1.5" stroke-dasharray="3"/><text x="360" y="120" text-anchor="middle" font-size="11" fill="#8E44AD" font-weight="bold">Section A-A</text><text x="360" y="140" text-anchor="middle" font-size="9" fill="#666">Scale 1:50</text><rect x="310" y="220" width="130" height="50" fill="#FEF9E7" stroke="#2C3E50" stroke-width="1.5"/><text x="375" y="240" text-anchor="middle" font-size="8" fill="#2C3E50" font-weight="bold">SCDC Engineering</text><text x="375" y="253" text-anchor="middle" font-size="7" fill="#666">Sample House | S-01</text><text x="375" y="263" text-anchor="middle" font-size="7" fill="#666">Scale: As noted | Rev: 0</text><text x="250" y="295" text-anchor="middle" font-size="10" fill="#666">Drag views from Project Browser onto the sheet → arrange neatly</text></svg>' },
                { type: "steps", items: ["<strong>Create sheet:</strong> View tab → Sheet → Select title block template → OK", "<strong>Place view:</strong> Drag a view from the Project Browser onto the sheet", "<strong>Position view:</strong> Click the view border → drag to arrange neatly", "<strong>Note:</strong> Each view can only go on ONE sheet — no duplicates allowed"] },
                { type: "tip", text: "The view's <strong>scale</strong> (1:50, 1:100) controls how big it appears on the sheet. Change scale in View Properties if needed." },
                { type: "task", text: "<strong>Activity:</strong> Create a new sheet. Drag the Ground Floor Plan onto it. Then drag a Section view beside it. Arrange them neatly." }
              ]
            },
            {
              day: "Day 3–4",
              title: "Title Blocks & Drawing Information",
              content: [
                { type: "text", text: "The <strong>title block</strong> is the information box in the corner of every sheet. It tells everyone what this drawing is." },
                { type: "heading", text: "Filling in a Title Block" },
                { type: "text", text: "Click on text inside the title block to edit it. Fill in: project name, drawing title, your name (Drawn By), date, and drawing number." },
                { type: "heading", text: "Sheet Numbering" },
                { type: "text", text: "Give each sheet a unique number. Common patterns: <strong>S-01, S-02, S-03</strong> (structural) or <strong>A-101, A-102</strong> (architectural). Keep organized!" },
                { type: "heading", text: "Revisions" },
                { type: "text", text: "When a drawing is updated, add a <strong>revision</strong>. The revision number goes up (Rev 0 → Rev 1 → Rev 2). This tells everyone which version is latest." },
                { type: "example", text: "<strong>At work:</strong> You'll name sheets like 'S-01 Ground Floor Plan', 'S-02 First Floor Plan', 'S-03 Section A-A'. When the client requests changes, you update and change Rev 0 to Rev 1." },
                { type: "task", text: "<strong>Activity:</strong> Set up a title block with project name 'Sample Residential Building', your name as Drawn By, today's date, and sheet number S-01." }
              ]
            },
            {
              day: "Day 5–6",
              title: "Exporting PDFs & Final Checks",
              content: [
                { type: "text", text: "The final step — export your sheets as <strong>PDF files</strong> that anyone can view and print." },
                { type: "steps", items: ["<strong>Export:</strong> File → Export → PDF", "<strong>Choose sheets:</strong> Select which sheets to include", "<strong>Set paper size:</strong> A1 or A3 typically", "<strong>Batch export:</strong> Multiple sheets → one multi-page PDF or separate files", "<strong>Name clearly:</strong> 'ProjectName_S-01_GroundFloor_Rev0.pdf'"] },
                { type: "heading", text: "Pre-Export Checklist" },
                { type: "callout", text: "<strong>Before you hit Export, check:</strong><br>✓ All dimensions visible and readable?<br>✓ Room tags and door/window tags placed?<br>✓ Title block filled in completely?<br>✓ Views positioned neatly on sheets?<br>✓ Correct revision number?" },
                { type: "image", src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=300&fit=crop", alt: "Architectural drawings and blueprints on desk", caption: "Exported drawings on paper — this is what your Revit work becomes after export" },
                { type: "tip", text: "Sometimes clients want <strong>DWG files</strong> (AutoCAD format). File → Export → CAD Formats → DWG. But PDF is most common." },
                { type: "task", text: "<strong>Activity:</strong> Create 2 sheets with views, fill title blocks, run the checklist above, then export as a single PDF. Open the PDF — does it look professional?" }
              ]
            }
          ],
          resources: [
            { type: "video", title: "Revit Sheets & Title Blocks", url: "https://www.youtube.com/watch?v=Lj2SoZzRfIk", lang: "English", duration: "10 min" },
            { type: "video", title: "Export PDF from Revit", url: "https://www.youtube.com/watch?v=gr8AGOqELbE", lang: "English", duration: "5 min" },
            { type: "video", title: "Revit Sheet Setup (Hindi)", url: "https://www.youtube.com/watch?v=6S5RqBKf5_A", lang: "Hindi", duration: "9 min" }
          ],
          quiz: [
            { q: "A Sheet in Revit is:", options: ["Random page", "Printable page with border and title block", "3D view", "List"], answer: 1 },
            { q: "To place a view on sheet:", options: ["Copy-paste", "Drag from Project Browser onto sheet", "Type name", "Print first"], answer: 1 },
            { q: "Same view on two sheets?", options: ["Yes unlimited", "No — one sheet only per view", "Only plans", "Only 3D"], answer: 1 },
            { q: "Title block contains:", options: ["Decoration only", "Project name, title, date, drawn by, revision", "Photo", "Nothing"], answer: 1 },
            { q: "Sheet numbering:", options: ["Makes colorful", "Keeps drawings organized", "Makes bigger", "Hides info"], answer: 1 },
            { q: "Export PDF:", options: ["Screenshot", "File → Export → PDF", "Save .txt", "Ctrl+Z"], answer: 1 },
            { q: "Before exporting:", options: ["Delete annotations", "Check dimensions, tags, title blocks", "Change language", "Remove block"], answer: 1 },
            { q: "Revision number increases when:", options: ["File opened", "Drawing is updated", "Zoom in", "Add room"], answer: 1 },
            { q: "Good file naming:", options: ["Random letters", "ProjectName_SheetNo_Description_Rev", "Emojis", "Single letter"], answer: 1 },
            { q: "DWG export is for:", options: ["PDF viewers", "AutoCAD-compatible files", "Deleting", "Gaming"], answer: 1 }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════
    // PHASE 4: SIMPLE MODELING & BIM FUTURE (Weeks 7–8)
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
          description: "Now create simple elements — walls, doors, windows, floors. You are building on your editing confidence.",
          motivation: {
            quote: "You spent 4 weeks editing like a pro. Now add modeling to your toolkit. Editing + modeling = complete team member.",
            futureConnect: "Senior engineers sometimes ask juniors to model small additions. Being able to both edit AND model means you handle any task!"
          },
          days: [
            {
              day: "Day 1–2",
              title: "Drawing Walls & Setting Levels",
              content: [
                { type: "text", text: "Walls are the first thing you learn to create. In Revit, you draw walls by clicking a start point and an end point." },
                { type: "diagram", caption: "Drawing a wall — click start, click end", svg: '<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><circle cx="80" cy="90" r="8" fill="#27AE60" stroke="#1E8449" stroke-width="2"/><text x="80" y="120" text-anchor="middle" font-size="9" fill="#27AE60" font-weight="bold">Click 1 (start)</text><rect x="88" y="82" width="280" height="16" fill="#BDC3C7" stroke="#95A5A6" stroke-width="2"/><circle cx="368" cy="90" r="8" fill="#E74C3C" stroke="#C0392B" stroke-width="2"/><text x="368" y="120" text-anchor="middle" font-size="9" fill="#E74C3C" font-weight="bold">Click 2 (end)</text><text x="220" y="78" text-anchor="middle" font-size="10" fill="#2C3E50">5000 mm</text><line x1="88" y1="70" x2="368" y2="70" stroke="#2C3E50" stroke-width="1" marker-start="url(#dimL)" marker-end="url(#dimR)"/><text x="220" y="155" text-anchor="middle" font-size="11" fill="#2C3E50">Architecture tab → Wall → Select type → Click start → Click end</text><text x="220" y="172" text-anchor="middle" font-size="10" fill="#666">Or type the exact length and press Enter</text><defs><marker id="dimL" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto"><path d="M6,0 L0,3 L6,6" fill="none" stroke="#2C3E50" stroke-width="1"/></marker><marker id="dimR" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="none" stroke="#2C3E50" stroke-width="1"/></marker></defs></svg>' },
                { type: "steps", items: ["Go to <strong>Architecture tab → Wall</strong>", "Select a wall type from the Type Selector (top)", "Click the <strong>start point</strong> on the drawing", "Move in the direction you want → type exact length → press <strong>Enter</strong>", "Keep clicking for chain drawing (connected walls)", "Press <strong>Escape</strong> when done"] },
                { type: "keyterm", term: "Wall Types", definition: "Different walls have different thickness and material — concrete 200mm, brick 230mm, partition 100mm. Choose from Type Selector." },
                { type: "keyterm", term: "Levels", definition: "Walls are drawn between two levels (e.g., Ground Floor to First Floor). Levels control where walls start and end vertically." },
                { type: "tip", text: "Walls are drawn between <strong>Levels</strong>. So Ground Floor walls go from Level 0 (ground) to Level 1 (first floor). Levels must exist first!" },
                { type: "task", text: "<strong>Activity:</strong> Start a new project. Check that Ground Floor and First Floor levels exist. Draw the outer walls of a simple rectangular 4-room house (about 10m × 8m). Use partition walls to divide rooms." }
              ]
            },
            {
              day: "Day 3–4",
              title: "Placing Doors, Windows & Floors",
              content: [
                { type: "text", text: "Once walls exist, you place doors and windows ON the walls. Revit automatically cuts the opening — no manual hole needed!" },
                { type: "heading", text: "Doors" },
                { type: "steps", items: ["<strong>Architecture → Door</strong> → Select type", "Hover over a wall — you'll see a preview", "Click to place. Revit cuts the opening automatically!", "Press <strong>SPACE</strong> before clicking to flip the swing direction", "After placing, click flip arrows to adjust if needed"] },
                { type: "heading", text: "Windows" },
                { type: "text", text: "Same as doors: <strong>Architecture → Window</strong> → Select type → Click on a wall. Windows have a <strong>Sill Height</strong> — the distance from floor to window bottom (typically 900mm)." },
                { type: "heading", text: "Floor Slabs" },
                { type: "text", text: "Floors need a boundary (outline). Go to <strong>Architecture → Floor</strong> → Draw the outline → Click green checkmark to finish." },
                { type: "image", src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=300&fit=crop", alt: "Modern building with many windows", caption: "Doors and windows placed in walls — in Revit, you just click on the wall and the opening is cut automatically" },
                { type: "task", text: "<strong>Activity:</strong> In your 4-room house, place: 1 front door, 1 back door, and at least 4 windows. Add a floor slab. Check in 3D view — does it look right?" }
              ]
            },
            {
              day: "Day 5–6",
              title: "Simple Roof & Room Setup",
              content: [
                { type: "text", text: "The final elements — a roof to cover the building and rooms to label the spaces." },
                { type: "heading", text: "Roof" },
                { type: "steps", items: ["<strong>Architecture → Roof → Roof by Footprint</strong>", "Draw along the outer walls (or use Pick Walls)", "Set the <strong>slope</strong> — 0° = flat, 15-30° = sloped/pitched", "Click green checkmark to finish", "Switch to 3D view to check it looks correct"] },
                { type: "heading", text: "Rooms" },
                { type: "text", text: "<strong>Rooms</strong> are invisible elements that fill enclosed spaces. They carry the room's name and area." },
                { type: "steps", items: ["<strong>Architecture → Room</strong>", "Click inside each enclosed area", "A room tag appears with the name", "Click the tag text to rename — Kitchen, Bedroom, etc."] },
                { type: "tip", text: "Rooms need <strong>fully enclosed walls</strong> to work. If there's a gap in the walls, the room will 'leak' out. Close all gaps first!" },
                { type: "callout", text: "<strong>Final check:</strong> Switch to 3D view. Spin around your model. Do walls connect? Does the roof cover everything? Do doors and windows look correct? Fix any issues now!" },
                { type: "task", text: "<strong>Activity:</strong> Add a roof (sloped or flat). Then create rooms inside each enclosed area and name them: Living Room, Kitchen, Bedroom 1, Bedroom 2, Bathroom." }
              ]
            }
          ],
          resources: [
            { type: "video", title: "Revit Walls for Beginners", url: "https://www.youtube.com/watch?v=8aIlLgjQ3wM", lang: "English", duration: "8 min" },
            { type: "video", title: "Revit Doors & Windows Placement", url: "https://www.youtube.com/watch?v=jkjNLN4QHHI", lang: "English", duration: "10 min" },
            { type: "video", title: "Revit Roof & Rooms", url: "https://www.youtube.com/watch?v=UZ8MdyFfGd4", lang: "English", duration: "9 min" }
          ],
          quiz: [
            { q: "To draw a wall:", options: ["Annotate → Text", "Architecture → Wall", "View → Sheet", "Modify → Move"], answer: 1 },
            { q: "When you place a door on a wall:", options: ["Delete wall first", "Revit auto-cuts the opening", "Entire wall removed", "Nothing happens"], answer: 1 },
            { q: "Flip door swing before placing:", options: ["Delete", "Press SPACE", "Enter", "Escape"], answer: 1 },
            { q: "Sill Height means:", options: ["Building height", "Distance from floor to bottom of window", "Glass width", "Window count"], answer: 1 },
            { q: "Levels control:", options: ["Color", "Floor heights — where walls start and end", "Door count", "Budget"], answer: 1 },
            { q: "Floor slab is created by:", options: ["Wall tool", "Architecture → Floor → Draw boundary → Finish", "Ctrl+F", "Automatic"], answer: 1 },
            { q: "0° roof slope means:", options: ["Very steep", "Completely flat roof", "Missing", "Circular"], answer: 1 },
            { q: "Rooms need:", options: ["Nothing special", "Fully enclosed walls — no gaps", "Only one wall", "Only a door"], answer: 1 },
            { q: "3D view helps:", options: ["File bigger", "Check if everything connects and looks correct", "Required for save", "No purpose"], answer: 1 },
            { q: "Walls draw between:", options: ["Left-right only", "Two levels (Ground Floor to First Floor)", "Two grids only", "Two rooms"], answer: 1 }
          ]
        },

        // ── WEEK 8 ──
        {
          id: "week8",
          week: 8,
          title: "Complete Workflow & BIM Future",
          description: "Final week! Combine everything into a mini-project: edit, annotate, sheet, export. Then look ahead at BIM, AI, and your career.",
          motivation: {
            quote: "8 weeks ago, you didn't know what a column was. Now you can navigate Revit, edit projects, annotate, model, and export. Be proud!",
            futureConnect: "BIM is changing construction worldwide. AI helps with design and error detection. Your skills are the FOUNDATION for this future. Keep growing!"
          },
          days: [
            {
              day: "Day 1–2",
              title: "Mini-Project Part 1 — Edit & Annotate",
              content: [
                { type: "text", text: "This is your final test — a complete workflow just like real work at SCDC. You'll receive a simple house project and make it production-ready." },
                { type: "heading", text: "Your Task" },
                { type: "steps", items: ["<strong>Review:</strong> Open the project. Switch between floor plan, section, elevation, 3D views.", "<strong>Edit:</strong> Move a door to a better position. Change one window type. Adjust a wall.", "<strong>Annotate:</strong> Add dimensions to all walls. Place room tags. Tag all doors and windows.", "<strong>Check:</strong> Verify grid labels and level names are correct."] },
                { type: "diagram", caption: "The complete production workflow", svg: '<svg viewBox="0 0 550 120" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="20" y="35" width="90" height="50" fill="#E8F8F5" stroke="#2E8B8B" stroke-width="2" rx="6"/><text x="65" y="55" text-anchor="middle" font-size="9" fill="#2E8B8B" font-weight="bold">1. REVIEW</text><text x="65" y="70" text-anchor="middle" font-size="8" fill="#666">Check model</text><path d="M115,60 L135,60" stroke="#BDC3C7" stroke-width="2" marker-end="url(#fArrow)"/><rect x="140" y="35" width="90" height="50" fill="#FEF3E2" stroke="#E67E22" stroke-width="2" rx="6"/><text x="185" y="55" text-anchor="middle" font-size="9" fill="#E67E22" font-weight="bold">2. EDIT</text><text x="185" y="70" text-anchor="middle" font-size="8" fill="#666">Move, change</text><path d="M235,60 L255,60" stroke="#BDC3C7" stroke-width="2" marker-end="url(#fArrow)"/><rect x="260" y="35" width="90" height="50" fill="#EDE7F6" stroke="#8E44AD" stroke-width="2" rx="6"/><text x="305" y="55" text-anchor="middle" font-size="9" fill="#8E44AD" font-weight="bold">3. ANNOTATE</text><text x="305" y="70" text-anchor="middle" font-size="8" fill="#666">Dims, tags</text><path d="M355,60 L375,60" stroke="#BDC3C7" stroke-width="2" marker-end="url(#fArrow)"/><rect x="380" y="35" width="90" height="50" fill="#E8F8F0" stroke="#27AE60" stroke-width="2" rx="6"/><text x="425" y="55" text-anchor="middle" font-size="9" fill="#27AE60" font-weight="bold">4. SHEETS</text><text x="425" y="70" text-anchor="middle" font-size="8" fill="#666">Layout + title</text><path d="M475,60 L495,60" stroke="#BDC3C7" stroke-width="2" marker-end="url(#fArrow)"/><rect x="495" y="35" width="45" height="50" fill="#FDEDEC" stroke="#E74C3C" stroke-width="2" rx="6"/><text x="517" y="55" text-anchor="middle" font-size="8" fill="#E74C3C" font-weight="bold">5.</text><text x="517" y="68" text-anchor="middle" font-size="8" fill="#E74C3C" font-weight="bold">PDF</text><text x="275" y="108" text-anchor="middle" font-size="10" fill="#2C3E50">This is exactly what you will do at SCDC every day</text><defs><marker id="fArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,1 L6,4 L0,7" fill="none" stroke="#BDC3C7" stroke-width="1.5"/></marker></defs></svg>' },
                { type: "tip", text: "Take your time. Quality matters more than speed for now. Speed comes naturally with practice." },
                { type: "task", text: "<strong>Activity:</strong> Open a sample house project. Complete steps 1-4 above. Make the drawings clean and professional." }
              ]
            },
            {
              day: "Day 3–4",
              title: "Mini-Project Part 2 — Sheets & Export",
              content: [
                { type: "text", text: "Now take your annotated project and package it as professional drawings." },
                { type: "steps", items: ["<strong>Create sheets:</strong> One for Ground Floor Plan, one for Section, one for Elevation", "<strong>Place views:</strong> Drag views onto sheets and position neatly", "<strong>Title blocks:</strong> Fill in project name, your name, date, drawing numbers (S-01, S-02, S-03)", "<strong>Export:</strong> File → Export → PDF → Select all sheets → Export as one PDF", "<strong>Review:</strong> Open the PDF. Pretend you're a contractor — could you build from these?"] },
                { type: "callout", text: "<strong>Congratulations!</strong> If you completed this workflow, you just did what professional CAD operators do every day. You went from model → edit → annotate → sheet → export. That's a complete production workflow!" },
                { type: "image", src: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&h=300&fit=crop", alt: "Team collaborating on building project", caption: "Your drawings will be used by contractors, engineers, and clients — quality matters!" },
                { type: "task", text: "<strong>Activity:</strong> Complete the export. Name the file properly (e.g., 'SampleHouse_Drawings_Rev0.pdf'). Review every page of the PDF." }
              ]
            },
            {
              day: "Day 5–6",
              title: "BIM, AI & Your Career Future",
              content: [
                { type: "text", text: "You've learned the practical skills. Now let's look at the bigger picture — where is this industry going?" },
                { type: "heading", text: "What is BIM?" },
                { type: "text", text: "<strong>BIM (Building Information Modeling)</strong> is more than 3D drawings. A BIM model contains DATA about every element — dimensions, materials, costs, manufacturer info, maintenance schedules. It's a digital twin of the real building." },
                { type: "diagram", caption: "BIM = 3D Model + Data about everything", svg: '<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" style="background:#FAFBFC;border-radius:8px"><rect x="30" y="20" width="180" height="140" fill="#E8F8F5" stroke="#2E8B8B" stroke-width="2" rx="8"/><text x="120" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#2E8B8B">3D MODEL</text><rect x="60" y="55" width="120" height="80" fill="white" stroke="#95A5A6" stroke-width="1.5" rx="4"/><text x="120" y="80" text-anchor="middle" font-size="24" fill="#2E8B8B">🏠</text><text x="120" y="105" text-anchor="middle" font-size="9" fill="#666">Geometry</text><text x="120" y="118" text-anchor="middle" font-size="9" fill="#666">Visual model</text><text x="250" y="95" text-anchor="middle" font-size="24" fill="#2C3E50">+</text><rect x="290" y="20" width="180" height="140" fill="#EDE7F6" stroke="#8E44AD" stroke-width="2" rx="8"/><text x="380" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#8E44AD">INFORMATION</text><text x="380" y="68" font-size="9" fill="#666" text-anchor="middle">Materials: Concrete M25</text><text x="380" y="83" font-size="9" fill="#666" text-anchor="middle">Cost: ₹45,000</text><text x="380" y="98" font-size="9" fill="#666" text-anchor="middle">Manufacturer: ACC</text><text x="380" y="113" font-size="9" fill="#666" text-anchor="middle">Install date: 2026-03</text><text x="380" y="128" font-size="9" fill="#666" text-anchor="middle">Maintenance: 5 years</text><text x="380" y="143" font-size="9" fill="#666" text-anchor="middle">Fire rating: 2 hours</text><text x="250" y="175" text-anchor="middle" font-size="11" fill="#2C3E50" font-weight="bold">BIM = Building Information Modeling</text></svg>' },
                { type: "heading", text: "AI + BIM — The Future" },
                { type: "text", text: "AI (Artificial Intelligence) is starting to help with: design optimization, clash detection (finding where pipes hit beams), energy analysis, and even automated drawing generation." },
                { type: "heading", text: "Your Career Path" },
                { type: "steps", items: ["<strong>Now:</strong> CAD Operator — edit, annotate, produce drawings", "<strong>Next:</strong> BIM Technician — manage models, coordinate teams", "<strong>Future:</strong> BIM Coordinator → BIM Manager (senior role)", "<strong>For CS interest:</strong> Revit API + Dynamo = programming for BIM. The industry needs coders!"] },
                { type: "example", text: "<strong>Career reality:</strong> BIM Managers can earn 2-5x what junior operators earn. The path from where you are now to BIM Manager is real and achievable with consistent learning." },
                { type: "tip", text: "The construction industry is going fully digital. You are now part of that transformation. The skills you learned in 8 weeks are just the beginning — keep learning, keep growing!" },
                { type: "task", text: "<strong>Final activity:</strong> Search online for 'BIM jobs in Nepal' or 'Revit jobs remote'. See what's available. Notice the skills they ask for — you already have the basics!" }
              ]
            }
          ],
          resources: [
            { type: "video", title: "What is BIM? Explained Simply", url: "https://www.youtube.com/watch?v=9hBkPb62rRk", lang: "English", duration: "5 min" },
            { type: "video", title: "BIM Kya Hai? (Hindi)", url: "https://www.youtube.com/watch?v=L9wTaOib1kE", lang: "Hindi", duration: "8 min" },
            { type: "video", title: "AI in Construction — Future Tech", url: "https://www.youtube.com/watch?v=IRHkVBd10eI", lang: "English", duration: "7 min" }
          ],
          quiz: [
            { q: "BIM stands for:", options: ["Basic Interior Management", "Building Information Modeling", "Brick Installation Method", "Building Internet"], answer: 1 },
            { q: "BIM model contains:", options: ["Only colors", "Geometry + data (materials, costs, maintenance)", "Only name", "Only address"], answer: 1 },
            { q: "Clash Detection:", options: ["Broken walls", "Finds where pipes/ducts conflict with beams", "Room count", "Colors"], answer: 1 },
            { q: "Correct production workflow:", options: ["Print → Edit", "Review → Edit → Annotate → Sheets → Export", "Export → Delete", "Annotate → Delete"], answer: 1 },
            { q: "Before exporting, check:", options: ["Only colors", "Dimensions, tags, title blocks, views", "Only size", "Only date"], answer: 1 },
            { q: "AI in construction:", options: ["Only painting", "Design optimization, clash detection, prediction", "Only coffee", "Nothing"], answer: 1 },
            { q: "Career path:", options: ["CAD → Chef", "CAD Operator → BIM Technician → BIM Coordinator → Manager", "Painter → Plumber", "No path"], answer: 1 },
            { q: "Revit programming uses:", options: ["Word", "Revit API and Dynamo", "Photoshop", "Calculator"], answer: 1 },
            { q: "Mini-project tests:", options: ["Only walls", "Complete workflow: edit + annotate + sheets + export", "Only typing", "Only opening"], answer: 1 },
            { q: "Most important daily skill:", options: ["Gaming", "Editing existing projects accurately and quickly", "Memorizing shortcuts", "Background color"], answer: 1 }
          ]
        }
      ]
    }
  ]
};
