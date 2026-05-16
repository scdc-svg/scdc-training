// ═══════════════════════════════════════════════════════════
// SCDC Training Portal — Course Data, Resources & MCQs
// REDESIGNED: Discovery-oriented, beginner-friendly, future-focused
// ═══════════════════════════════════════════════════════════

const COURSE_DATA = {
  title: "SCDC Training Program",
  subtitle: "Discover How Buildings Come to Life — With Technology",
  duration: "8 Weeks | 2–3 Hours/Day",
  totalWeeks: 8,

  phases: [
    // ═══════════════════════════════════════════
    // PHASE 1: DISCOVER BUILDINGS
    // ═══════════════════════════════════════════
    {
      id: "phase1",
      title: "Discover Buildings",
      weeks: "Weeks 1–2",
      color: "#2E8B8B",
      sections: [
        // ── WEEK 1 ──
        {
          id: "week1",
          week: 1,
          title: "What Makes a Building Stand Up?",
          description: "Have you ever wondered how a building stays standing? This week, you will discover the hidden skeleton inside every building — and start seeing buildings with completely new eyes.",
          motivation: {
            quote: "Every building you see started as someone's idea. This week, you start understanding how those ideas become real.",
            futureConnect: "Did you know? In the future, computers and AI will help design buildings automatically. But first, you need to understand what a building is made of. That's what makes this week so important!"
          },
          days: [
            {
              day: "Day 1–2",
              title: "The Secret Skeleton of Buildings",
              topics: [
                "Every building has two parts: what's below the ground (substructure) and what's above (superstructure) — just like a tree has roots and a trunk!",
                "Foundation: The hidden base under every building that transfers weight to the ground. Without it, buildings would sink!",
                "Types of buildings: residential (homes), commercial (offices, shops), industrial (factories)",
                "Activity: Look at the building you are sitting in right now. Can you imagine what's hidden underground holding it up?"
              ]
            },
            {
              day: "Day 3–4",
              title: "Columns, Beams & Slabs — The Building's Bones",
              topics: [
                "Column: Like the legs of a table — vertical members that carry weight straight down to the ground",
                "Beam: Like the horizontal bar of a football goal — connects columns and carries the weight of floors",
                "Slab: The flat floor you walk on and the roof over your head — supported by beams",
                "Together they form a FRAME — just like your body's skeleton holds you up!",
                "Activity: Next time you see a building under construction, try to spot the columns, beams, and slabs. Take a photo if you can!"
              ]
            },
            {
              day: "Day 5–6",
              title: "Walls, Doors, Windows & Stairs — The Pieces You See Every Day",
              topics: [
                "Load-bearing walls carry the building's weight; partition walls just divide rooms (like a curtain divides a stage)",
                "Doors: parts you can name — frame, shutter (the part that swings), threshold (bottom strip), handle",
                "Windows: frame, glass (glazing), sill (bottom ledge). Types: casement (opens like a door), sliding, fixed",
                "Stairs: tread (where your foot goes), riser (vertical face), landing (resting platform), railing (safety barrier)",
                "Activity: Walk through your home slowly. How many doors, windows, and stairs can you count? Write down the types you see."
              ]
            }
          ],
          resources: [
            { type: "video", title: "🎬 How Buildings Are Constructed — Beautiful 3D Animation (Foundation to Finish)", url: "https://www.youtube.com/watch?v=7SRVMZrN9R0", lang: "Visual / English" },
            { type: "video", title: "🎬 3D Animation of a House — Complete Building Process", url: "https://www.youtube.com/watch?v=YZH4KhvOOVw", lang: "Visual (no talking needed)" },
            { type: "video", title: "🎬 Column, Beam, Slab — 3D Animation Showing How They Connect", url: "https://www.youtube.com/watch?v=NA3PMfaGspo", lang: "Visual / English" },
            { type: "video", title: "🎬 Complete Construction Animation — Footing, Column, Beam, Slab", url: "https://www.youtube.com/watch?v=dn1uBzd0qPE", lang: "Visual (animation)" },
            { type: "video", title: "🇮🇳 What are Beams, Columns, Slabs? — Simple Explanation", url: "https://www.youtube.com/watch?v=H1sWkfHb2Hg", lang: "Hindi/English" },
            { type: "video", title: "🇮🇳 Beam, Column & Slab on a Real Construction Site", url: "https://www.youtube.com/watch?v=7d3mU-3J-vs", lang: "Hindi" },
            { type: "article", title: "📖 Basic Components of a Building — Simple Guide with Pictures", url: "https://happho.com/basic-components-building-structure/", lang: "English (easy)" }
          ],
          quiz: [
            { q: "What is the part of a building hidden below the ground called?", options: ["Superstructure", "Substructure", "Roof structure", "Interior"], answer: 1 },
            { q: "A column in a building works like the _____ of a table.", options: ["Top surface", "Drawer", "Legs", "Screws"], answer: 2 },
            { q: "What does a beam do in a building?", options: ["It goes vertical like a pole", "It connects columns horizontally and carries floor loads", "It is used for decoration", "It brings water to the building"], answer: 1 },
            { q: "The flat surface you walk on inside a building is called a:", options: ["Column", "Beam", "Slab", "Foundation"], answer: 2 },
            { q: "A load-bearing wall is different from a partition wall because:", options: ["It has windows", "It carries the building's weight, not just divides rooms", "It is always painted white", "It is made of glass"], answer: 1 },
            { q: "The part of a staircase where you place your foot is called:", options: ["Riser", "Tread", "Railing", "Landing"], answer: 1 },
            { q: "The riser in a staircase is the:", options: ["Flat stepping surface", "Vertical face between two steps", "Handrail", "The entire staircase"], answer: 1 },
            { q: "A casement window:", options: ["Slides left and right", "Cannot be opened", "Swings open on hinges, like a small door", "Rolls up like a shutter"], answer: 2 },
            { q: "What is the purpose of a foundation?", options: ["To make the building colorful", "To transfer the building's weight safely to the ground", "To keep insects away", "To provide parking space"], answer: 1 },
            { q: "Columns, beams, and slabs together form the building's:", options: ["Decoration", "Plumbing system", "Structural frame (skeleton)", "Electrical system"], answer: 2 }
          ]
        },

        // ── WEEK 2 ──
        {
          id: "week2",
          week: 2,
          title: "From Dream to Real Building — The Journey",
          description: "Every building you see was once just an idea in someone's mind. This week, discover how that idea becomes a real building — and where technology fits in.",
          motivation: {
            quote: "Today, buildings are designed on computers before a single brick is laid. You are learning the skills that make this possible!",
            futureConnect: "In modern construction, AI can now help architects design buildings faster. Imagine — a computer suggesting the best room layouts, the most energy-efficient designs, even finding mistakes before construction starts. This is called BIM, and you will learn it starting next week!"
          },
          days: [
            {
              day: "Day 1–2",
              title: "The 5 Phases of Making a Building",
              topics: [
                "Phase 1 — Planning: What does the owner want? How many rooms? What's the budget? Where to build?",
                "Phase 2 — Design: Architects draw how it looks, engineers calculate how it stands, MEP engineers plan pipes and wires",
                "Phase 3 — Approval: Submit drawings to the municipality (नगरपालिका). Get building permits. Ensure safety.",
                "Phase 4 — Construction: The actual building work — from digging the ground to painting the walls",
                "Phase 5 — Handover: Building is complete! Keys are given to the owner.",
                "Activity: Think about your own home. Who do you think planned it? Who drew the design? Who approved it?"
              ]
            },
            {
              day: "Day 3–4",
              title: "How Construction Actually Happens — Step by Step",
              topics: [
                "Step 1: Excavation — digging the ground for the foundation",
                "Step 2: Foundation — building the base underground",
                "Step 3: Columns and beams go up — the skeleton rises!",
                "Step 4: Slab casting — floors are poured with concrete",
                "Step 5: Walls, then plaster, then painting and finishing",
                "In Nepal, this process is called 'naksa pass' (नक्सा पास) before construction begins",
                "Activity: If you see any construction happening near you, watch it for 10 minutes. Can you tell which step they are on?"
              ]
            },
            {
              day: "Day 5–6",
              title: "Reading Floor Plans — Your First Superpower",
              topics: [
                "A floor plan is a bird's-eye view of a building, as if the roof was removed and you looked down from above",
                "Scale: 1:100 means 1 cm on paper = 1 meter in real life. A 4 cm line = a 4 meter wall!",
                "Door symbol: a line with a quarter circle showing which way the door swings open",
                "Window symbol: parallel lines breaking the wall — showing where glass sits",
                "Being able to read floor plans is a real professional skill — architects, engineers, and construction workers all use them!",
                "Activity: Look at a floor plan (ask Subhash dai for one). Try to find: bedrooms, kitchen, bathroom, main door."
              ]
            }
          ],
          resources: [
            { type: "video", title: "🇮🇳 Ghar Kaise Banaye — Full House Construction Process (Foundation to Finishing) in Hindi", url: "https://www.youtube.com/watch?v=J4sOWkJZ6s0", lang: "Hindi" },
            { type: "video", title: "🇮🇳 House Construction 20 Steps — Complete Process in Hindi (घर बनाने का तरीका)", url: "https://www.youtube.com/watch?v=shqsacoOsHM", lang: "Hindi" },
            { type: "video", title: "🎬 Indian House Construction Time-Lapse — 5 Months in 48 Minutes!", url: "https://www.youtube.com/watch?v=XGCaLzaNfF4", lang: "Visual (time-lapse)" },
            { type: "video", title: "🎬 EVERY Construction Project from Start to Finish — Explained!", url: "https://www.youtube.com/watch?v=hcZDm6rKeJw", lang: "Simple English" },
            { type: "video", title: "🎬 How to Read Construction Drawings — Floor Plans Explained", url: "https://www.youtube.com/watch?v=_s8lLUWQWno", lang: "Simple English" },
            { type: "video", title: "🇮🇳 Planning & Design Phase of a Construction Project", url: "https://www.youtube.com/watch?v=GTY5bT3BUhE", lang: "English/Hindi" },
            { type: "article", title: "📖 How to Read Floor Plans in 9 Easy Steps", url: "https://www.roomsketcher.com/blog/how-to-read-floor-plans-9-easy-steps/", lang: "English (easy, with pictures)" }
          ],
          quiz: [
            { q: "What is the correct order of building phases?", options: ["Construction → Design → Approval", "Planning → Design → Approval → Construction → Handover", "Design → Construction → Planning", "Approval → Planning → Design"], answer: 1 },
            { q: "During which phase do you get a building permit (नक्सा पास)?", options: ["Planning", "Design", "Approval", "Construction"], answer: 2 },
            { q: "An architect's main job is to design:", options: ["The electrical wiring only", "The layout, appearance, and functionality of the building", "Only the paint colors", "The plumbing pipes"], answer: 1 },
            { q: "What happens right after the foundation is built?", options: ["The building is painted", "Columns and beams are erected", "Windows are installed", "Furniture is placed"], answer: 1 },
            { q: "If a floor plan has a scale of 1:100, what does 3 cm on paper represent in real life?", options: ["3 cm", "30 cm", "3 meters (300 cm)", "30 meters"], answer: 2 },
            { q: "On a floor plan, a quarter-circle arc near a wall usually shows:", options: ["A window", "A staircase", "How a door swings open", "An air conditioner"], answer: 2 },
            { q: "MEP stands for:", options: ["Mechanical, Electrical, Plumbing", "Material, Equipment, Planning", "Masonry, Elevation, Plaster", "Money, Estimate, Plan"], answer: 0 },
            { q: "Why is the approval phase important?", options: ["It makes the building cheaper", "It ensures the design is safe and meets legal rules", "It is optional", "It only applies to big buildings"], answer: 1 },
            { q: "Excavation means:", options: ["Installing roof tiles", "Digging and removing earth to prepare for the foundation", "Painting walls", "Measuring rooms"], answer: 1 },
            { q: "A floor plan shows a building as if you are:", options: ["Standing in front of it", "Looking at it from above with the roof removed", "Inside a room looking at the wall", "Underground looking up"], answer: 1 }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════
    // PHASE 2: ENTER THE DIGITAL WORLD
    // ═══════════════════════════════════════════
    {
      id: "phase2",
      title: "Enter the Digital World of BIM",
      weeks: "Weeks 3–4",
      color: "#2E75B6",
      sections: [
        // ── WEEK 3 ──
        {
          id: "week3",
          week: 3,
          title: "Welcome to Revit — Your Digital Construction Tool",
          description: "Imagine building an entire house on your computer — placing walls, adding doors, seeing it in 3D. That's exactly what Revit does. This week, you step into the digital world of construction!",
          motivation: {
            quote: "Every great architect today uses software like Revit. By learning this, you are joining a community of modern builders and designers worldwide.",
            futureConnect: "Revit is the foundation of BIM (Building Information Modeling). BIM is not just software — it's a revolution in how buildings are designed. Companies around the world are looking for people who know BIM. In Nepal and India, BIM skills are becoming highly valuable. And guess what? Computer Science students have an advantage because BIM uses digital tools, data, and even programming!"
          },
          days: [
            {
              day: "Day 1–2",
              title: "What is BIM? And Why It's the Future",
              topics: [
                "BIM = Building Information Modeling. Think of it as building a 'digital twin' of a real building on your computer",
                "Unlike simple drawing, BIM creates a 3D model where every wall, door, and window has real information (size, material, cost)",
                "Change a wall in one view, and it updates EVERYWHERE automatically — like magic!",
                "Opening Revit for the first time: the start screen, creating a new project",
                "The Revit interface: Ribbon (tools at the top), Properties (details on the right), Project Browser (navigation on the left)",
                "Self-study: Open Revit. Don't try to build anything yet — just explore. Click around. Get comfortable."
              ]
            },
            {
              day: "Day 3–4",
              title: "Navigating Your Digital Building",
              topics: [
                "Navigation is like being a drone flying around your building: Zoom (scroll wheel), Pan (middle-click drag), Orbit (Shift + middle-click)",
                "Views are different ways to look at the same building: Floor Plans (top view), Elevations (side view), 3D (full model), Sections (cut-through view)",
                "Levels: horizontal planes for each floor — Ground Floor, First Floor, Roof. Like stacking floors in a building!",
                "Grids: vertical reference lines showing where columns go — like drawing lines on graph paper",
                "Self-study: Create a project with 2 levels (Ground Floor and First Floor) and a simple grid. Switch between different views."
              ]
            },
            {
              day: "Day 5–6",
              title: "Drawing Your First Walls!",
              topics: [
                "This is the exciting part — you will create your first walls in Revit!",
                "Select the Wall tool, choose a wall type, and draw by clicking start and end points",
                "Draw tools: Line (click-click), Rectangle (quick room), Pick Lines (trace existing lines)",
                "Modify tools: Select → Move, Copy, Rotate, Mirror, Trim/Extend — like editing in any software",
                "Properties palette: click any wall and change its type, height, or position",
                "Self-study: Draw a simple rectangular room (4 walls). Celebrate — you just created your first digital room!"
              ]
            }
          ],
          resources: [
            { type: "video", title: "🇮🇳 BIM Kya Hai? What is BIM? — Explained in Hindi/Urdu", url: "https://www.youtube.com/watch?v=L9wTaOib1kE", lang: "Hindi/Urdu" },
            { type: "video", title: "🇮🇳 Master Revit 2024 in 1 Hour — Complete Beginner's Tutorial in Hindi", url: "https://www.youtube.com/watch?v=kcxTTB4aNgk", lang: "Hindi" },
            { type: "video", title: "🇮🇳 Revit Architecture Full Tutorial in Hindi — Deepak Verma", url: "https://www.youtube.com/watch?v=5S-wYY464Pk", lang: "Hindi" },
            { type: "video", title: "🎬 Revit Full Beginner Course — Complete House Project (Start to Finish)", url: "https://www.youtube.com/watch?v=chom9hiewXI", lang: "Simple English (visual)" },
            { type: "video", title: "🎬 Revit Complete Tutorial for Beginners — Model a House (Part 1)", url: "https://www.youtube.com/watch?v=0uylIF0Pt5U", lang: "Simple English" },
            { type: "video", title: "🎬 What is BIM? — Beautiful Visual Explanation", url: "https://www.youtube.com/watch?v=-hXhyBjpRSo", lang: "English (animated)" },
            { type: "video", title: "🇮🇳 BIM Introduction Class — Akash Pandey (Unique Civil)", url: "https://www.youtube.com/watch?v=e-8VCBW8xP4", lang: "Hindi" }
          ],
          quiz: [
            { q: "BIM stands for:", options: ["Building Image Model", "Building Information Modeling", "Basic Interior Mapping", "Blueprint Integration Method"], answer: 1 },
            { q: "What makes BIM different from simple 2D drawing?", options: ["BIM uses colorful lines", "BIM creates a 3D model where every element has real information like size and material", "BIM is only for big companies", "There is no difference"], answer: 1 },
            { q: "In Revit, the Ribbon is:", options: ["A decorative border", "The toolbar at the top with all the tools organized in tabs", "The 3D view window", "A type of wall"], answer: 1 },
            { q: "How do you zoom in and out in Revit?", options: ["Press Z key", "Use the scroll wheel on your mouse", "Click a zoom button", "You cannot zoom"], answer: 1 },
            { q: "To orbit (rotate) the 3D view, you:", options: ["Press Ctrl + Click", "Hold Shift + Middle mouse button and drag", "Double-click the screen", "Press Spacebar"], answer: 1 },
            { q: "A 'Level' in Revit represents:", options: ["A difficulty setting", "A horizontal plane at a specific height — representing a floor of the building", "A type of wall", "The zoom level"], answer: 1 },
            { q: "The Project Browser is used to:", options: ["Browse the internet", "Navigate between views, sheets, and families in your project", "Change wall colors", "Install plugins"], answer: 1 },
            { q: "If you change a wall in the floor plan view, what happens in the 3D view?", options: ["Nothing changes", "The 3D view updates automatically too", "You need to redraw it", "Revit crashes"], answer: 1 },
            { q: "Grid lines in Revit help you:", options: ["Draw colorful patterns", "Mark where columns and structural elements should go", "Delete walls", "Print the document"], answer: 1 },
            { q: "The first thing you should do when opening Revit is:", options: ["Start drawing walls immediately", "Get comfortable with the interface — explore the Ribbon, views, and navigation", "Close the software", "Change the language"], answer: 1 }
          ]
        },

        // ── WEEK 4 ──
        {
          id: "week4",
          week: 4,
          title: "Building Your First Digital Room",
          description: "Doors, windows, floors, columns, beams, roofs, stairs — this week you add all the building components you learned about in Phase 1 into your Revit model. Watch your digital room come alive!",
          motivation: {
            quote: "Two weeks ago, you didn't know what a column or beam was. Now you're placing them in a 3D model. That's real progress!",
            futureConnect: "Fun fact: In advanced BIM, AI can automatically suggest where to place doors and windows for maximum natural light and ventilation. Companies are building 'smart buildings' that use sensors and data to optimize energy. Your Revit skills are the first step towards this exciting world!"
          },
          days: [
            {
              day: "Day 1–2",
              title: "Adding Doors & Windows — Bringing Life to Walls",
              topics: [
                "Placing doors: select a door family, click on a wall, and the door appears! Flip direction with the spacebar.",
                "Sill height: the distance from floor to the bottom of a window (usually 0.9m or 3 feet in residential buildings)",
                "Understanding Families in Revit: A 'family' is a group of similar elements — like 'Single Door' is a family, '900mm Single Door' is a type",
                "Editing properties: click any door/window to change its size, material, or type",
                "Self-study: Add 2 doors and 3 windows to your room from last week. View it in 3D!"
              ]
            },
            {
              day: "Day 3–4",
              title: "Floors, Columns & Beams — The Structure Takes Shape",
              topics: [
                "Creating a floor: sketch the boundary (edges) of the floor in plan view, then click Finish — the slab appears!",
                "Adding columns: place them at grid intersections — just like real construction!",
                "Adding beams: connect beams between columns. This creates the structural frame you learned about in Week 1!",
                "Remember: Columns → vertical (like legs), Beams → horizontal (connecting columns), Slabs → flat surface",
                "Self-study: Add a floor slab, 4 columns, and beams to your model. Look at it in 3D — does it look like a real building frame?"
              ]
            },
            {
              day: "Day 5–6",
              title: "Roofs & Stairs — Completing Your First Building!",
              topics: [
                "Creating a roof: sketch the boundary at the roof level. Choose flat or sloped (gable) roof.",
                "Overhang: the part of the roof that sticks out beyond the wall — protects from rain!",
                "Stairs: use the Stair tool — set the width, riser height, and number of steps. Revit calculates the rest!",
                "Add railings for safety — they automatically follow the stair path",
                "Self-study: Complete your first building! Add a roof and stairs. Walk through it in 3D view. Take a screenshot — you built this!"
              ]
            }
          ],
          resources: [
            { type: "video", title: "🎬 Designing a House in Revit — Beginner's Playlist (Walls, Doors, Windows, Roof)", url: "https://www.youtube.com/playlist?list=PL2swGutdcRt1fhJChB5B5OS-32l5xwMTG", lang: "Simple English" },
            { type: "video", title: "🎬 Revit House Project — 2D Plan to 3D Model Tutorial", url: "https://www.youtube.com/watch?v=NZu_jTdsN5k", lang: "Simple English" },
            { type: "video", title: "🎬 Revit Beginner Guide — First Project Start to Finish", url: "https://www.youtube.com/watch?v=0ILeLawe6Vc", lang: "Simple English" },
            { type: "video", title: "🎬 Modern House — Complete Step by Step Revit Tutorial", url: "https://www.youtube.com/watch?v=GwHu3B1ZMV0", lang: "Simple English (visual)" },
            { type: "video", title: "🇮🇳 Indian House Design in Revit — Complete Project", url: "https://www.youtube.com/watch?v=1BJ8857Am4I", lang: "Hindi/English" },
            { type: "article", title: "📖 10 Quick Steps to Building a House in Revit — ArchiStar", url: "https://academy.archistar.ai/10-quick-steps-to-building-a-residential-house-in-revit", lang: "English (easy, with images)" }
          ],
          quiz: [
            { q: "In Revit, a 'family' is:", options: ["Your relatives", "A group of similar elements with shared properties (like all single doors)", "A color theme", "A measurement unit"], answer: 1 },
            { q: "Doors in Revit can only be placed on:", options: ["A floor slab", "A host wall (the wall they belong to)", "A grid line", "A beam"], answer: 1 },
            { q: "The 'sill height' of a window is:", options: ["The window's total height", "The distance from the floor to the bottom of the window", "The width of the glass", "The window's weight"], answer: 1 },
            { q: "To create a floor slab in Revit, you:", options: ["Draw it in 3D view only", "Sketch the boundary in plan view and click Finish", "Type all dimensions manually", "Import it from another software"], answer: 1 },
            { q: "Architectural columns in Revit are mainly for:", options: ["Carrying calculated structural loads", "Appearance and visual positioning — not for structural analysis", "Holding electrical wires", "Supporting furniture"], answer: 1 },
            { q: "A beam in Revit typically connects:", options: ["Two walls together", "Two columns or grid intersections", "A door to a window", "The floor to the ceiling"], answer: 1 },
            { q: "A gable roof has:", options: ["A flat top", "Two sloping sides meeting at a ridge line at the top", "A dome shape", "Only one sloping side"], answer: 1 },
            { q: "The 'overhang' of a roof is:", options: ["The peak of the roof", "The part that extends beyond the wall (protects from rain)", "The gutter", "The insulation"], answer: 1 },
            { q: "When creating stairs in Revit, you set:", options: ["Only the color", "Width, riser height, and number of risers — Revit calculates the rest", "Just the stair's name", "Only the material"], answer: 1 },
            { q: "After adding all elements, you should check your model in:", options: ["Print preview", "3D view — to see everything together and find problems", "The title block", "The schedule view"], answer: 1 }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════
    // PHASE 3: BUILD A REAL HOUSE
    // ═══════════════════════════════════════════
    {
      id: "phase3",
      title: "Build a Real House in Revit",
      weeks: "Weeks 5–6",
      color: "#E67E22",
      sections: [
        // ── WEEK 5 ──
        {
          id: "week5",
          week: 5,
          title: "Your First Complete House — A 2-Story Home",
          description: "Everything you've learned comes together now. You will model a real 2-story residential house in Revit — the kind of house you see in your neighborhood. This is where it gets exciting!",
          motivation: {
            quote: "You are now doing what professional architects do every day. The only difference? They've been doing it longer. Keep going!",
            futureConnect: "In modern construction companies, one Revit model can contain ALL information about a building — its structure, its plumbing, its electricity, even its cost. This is called a 'Digital Twin.' Some companies in Dubai and Singapore are already required by law to use BIM for all new buildings. Nepal is heading this way too!"
          },
          days: [
            {
              day: "Day 1–2",
              title: "Setting Up the Project — Ground Floor",
              topics: [
                "Start a new project with levels: Plinth (base), Ground Floor, First Floor, Roof",
                "Create grids based on the floor plan Subhash dai provides",
                "Draw all ground floor walls: thick exterior walls and thin partition walls",
                "Place ground floor doors and windows according to the plan",
                "Think like an architect: Why are bedrooms at the back? Why is the kitchen near the dining room?",
                "Self-study: Complete the entire ground floor. Don't rush — accuracy matters more than speed!"
              ]
            },
            {
              day: "Day 3–4",
              title: "First Floor & Connecting with Stairs",
              topics: [
                "Add the ground floor slab and structural columns",
                "Work on the first floor: create a different room layout (more bedrooms? a balcony?)",
                "Place first floor doors and windows",
                "Create stairs connecting ground floor to first floor — this is the most satisfying part!",
                "Add a balcony using a floor slab that extends beyond the wall, with railings",
                "Self-study: Complete the first floor. Check in 3D — do both floors look connected and realistic?"
              ]
            },
            {
              day: "Day 5–6",
              title: "Roof, Room Labels & 3D Review",
              topics: [
                "Add the roof — choose a sloped style typical for Nepali/Indian residential houses",
                "Add Rooms and Room Tags: these label each room with its name (Bedroom, Kitchen, etc.) and area",
                "3D Review time: orbit around your model. Does everything connect properly? Any walls missing?",
                "Fix any errors — misaligned walls, overlapping elements, wrong heights",
                "Self-study: Walk through your house in 3D view. Show it to someone and explain what each room is!"
              ]
            }
          ],
          resources: [
            { type: "video", title: "🎬 Modeling a Complete Residential Building in Revit", url: "https://www.youtube.com/watch?v=BgWxfhrJ18I", lang: "Simple English (visual)" },
            { type: "video", title: "🎬 Modern House — Step by Step Revit Tutorial (Part 1)", url: "https://www.youtube.com/watch?v=GwHu3B1ZMV0", lang: "Simple English" },
            { type: "video", title: "🎬 House in Revit from Sketch to 3D Model — Beginner Course", url: "https://www.youtube.com/watch?v=1ItDjdmlFKk", lang: "Simple English" },
            { type: "video", title: "🎬 Revit 2025 Beginner Tutorial — Model a Small House", url: "https://www.youtube.com/watch?v=gnikgDzKTso", lang: "Simple English" },
            { type: "video", title: "🇮🇳 Indian House Design in Revit — Complete Project", url: "https://www.youtube.com/watch?v=1BJ8857Am4I", lang: "Hindi/English" },
            { type: "video", title: "🎬 A to Z Indian House Construction Time-Lapse — See How It's Built!", url: "https://www.youtube.com/watch?v=UrplA8Wz2LY", lang: "Visual (time-lapse)" }
          ],
          quiz: [
            { q: "When starting a house project in Revit, the first step is usually to:", options: ["Draw walls immediately", "Set up levels and grids to define the building's structure", "Place furniture", "Add materials"], answer: 1 },
            { q: "Exterior walls are typically _____ than interior partition walls.", options: ["Thinner", "The same thickness", "Thicker", "Shorter"], answer: 2 },
            { q: "The 'plinth level' is:", options: ["The roof level", "The level just above the ground where walls start rising", "The first floor level", "The basement"], answer: 1 },
            { q: "When building the first floor, you should:", options: ["Start completely from scratch", "Reference the ground floor layout and modify as needed", "Copy everything exactly", "Skip the first floor"], answer: 1 },
            { q: "Room tags in Revit display:", options: ["Room decoration ideas", "The room name and area for documentation", "Room temperature", "Room cost"], answer: 1 },
            { q: "A balcony can be created using:", options: ["A special balcony tool only", "A floor slab that extends beyond the exterior wall, with railings", "Curtain walls only", "The staircase tool"], answer: 1 },
            { q: "In the 3D review, you should look for:", options: ["Pretty colors", "Misaligned walls, missing elements, and incorrect heights", "The number of trees", "Font sizes"], answer: 1 },
            { q: "A 'Digital Twin' in construction means:", options: ["Two identical buildings", "A digital copy of a real building with all its information", "A twin brother who does construction", "Two copies of a floor plan"], answer: 1 },
            { q: "If walls from different floors don't align, the problem is usually:", options: ["Wrong wall color", "Incorrect grid positions or level heights", "Too many windows", "Missing roof"], answer: 1 },
            { q: "A complete residential model should include:", options: ["Only walls", "Walls, doors, windows, floors, columns, beams, stairs, roof, and room labels", "Only a roof and floor", "Only the exterior"], answer: 1 }
          ]
        },

        // ── WEEK 6 ──
        {
          id: "week6",
          week: 6,
          title: "Making It Real — Materials, Views & Your First Render",
          description: "Your house model is complete — now make it look real! Add brick walls, concrete floors, apply materials, create professional views, and generate your first 3D rendered image.",
          motivation: {
            quote: "You went from knowing nothing about buildings to creating a 3D house with materials and realistic views. That is genuinely impressive!",
            futureConnect: "Rendering technology is evolving fast. AI-powered tools like DALL-E and Midjourney can now generate building designs from just a text description! And real-time rendering engines (like Twinmotion and Enscape) connected to Revit can show photorealistic views instantly. The future of design is visual, digital, and AI-powered — and you are building the foundation for it right now."
          },
          days: [
            {
              day: "Day 1–2",
              title: "Wall Types & Materials — Making It Look Real",
              topics: [
                "Walls have layers! A typical wall: outer plaster → brick → inner plaster. Just like a sandwich!",
                "Creating custom wall types that match local construction (brick walls common in Nepal/India)",
                "The Material Browser: assign brick to exterior walls, plaster to interior walls, concrete to slabs",
                "Materials change how the model looks in 3D — suddenly it feels like a real building!",
                "Self-study: Apply materials to every element. Switch to 3D view with 'Realistic' visual style — see the difference!"
              ]
            },
            {
              day: "Day 3–4",
              title: "Elevation & Section Views — Professional Views",
              topics: [
                "Elevation: a view of the building from the side (front, back, left, right) — shows how tall it is and what it looks like from outside",
                "Section: a view that cuts through the building like slicing a cake — shows internal heights, floor thicknesses, room arrangement",
                "These views are what construction workers actually use to build! Floor plans show the 'where', sections show the 'how tall'",
                "View range and detail level: Coarse (simple), Medium, Fine (detailed) — use Medium for now",
                "Self-study: Create 4 elevations (front, back, left, right) and 2 sections through your house"
              ]
            },
            {
              day: "Day 5–6",
              title: "Your First 3D Render — See Your House Come to Life!",
              topics: [
                "Set up a Camera view — choose where you're standing and what you're looking at",
                "Rendering creates a photorealistic image of your 3D model, with shadows, light, and materials",
                "Adjust sun position to create beautiful lighting (morning light from the east!)",
                "Export the rendered image — you can share it, print it, or show it to your family!",
                "Model cleanup: resolve any Revit warnings (yellow triangles = things to fix)",
                "Self-study: Create one beautiful rendered image of your house. Save it. This is YOUR creation!"
              ]
            }
          ],
          resources: [
            { type: "video", title: "🎬 Rendering in Revit — Beginner to Pro Tutorial", url: "https://www.youtube.com/watch?v=cYZX6uvl92Y", lang: "Simple English (visual)" },
            { type: "video", title: "🎬 How to Make Stunning Elevations in Revit", url: "https://www.youtube.com/watch?v=_KGxDSGBGxg", lang: "Simple English" },
            { type: "video", title: "🎬 Revit Rendering Tutorials — Full Playlist by Balkan Architect", url: "https://www.youtube.com/playlist?list=PL1n-0H6b0FkUc-vP1i2alYueCW08517Un", lang: "Simple English" },
            { type: "video", title: "🎬 3D Animation of Multi-Story Building Construction", url: "https://www.youtube.com/watch?v=vc4_5M1rhFg", lang: "Visual (no talking)" },
            { type: "video", title: "🎬 Modeling a Modern House in Revit — Full Project", url: "https://www.youtube.com/watch?v=2tu_TuzaPT0", lang: "Simple English" }
          ],
          quiz: [
            { q: "A wall in Revit is made of:", options: ["A single solid material", "Multiple layers (like plaster → brick → plaster), defined in the wall type", "Only paint", "Only air"], answer: 1 },
            { q: "The Material Browser is used to:", options: ["Browse the internet", "Assign and manage materials (brick, concrete, glass) for building elements", "Delete elements", "Create views"], answer: 1 },
            { q: "An elevation view shows the building:", options: ["From the top, looking down", "From the side (front, back, left, or right)", "Cut through the middle", "From underground"], answer: 1 },
            { q: "A section view is like:", options: ["Taking a photo from outside", "Cutting through the building like slicing a cake — showing internal heights", "Looking at the roof from above", "Printing the floor plan"], answer: 1 },
            { q: "Detail Level in Revit has three settings:", options: ["Small, Medium, Large", "Coarse, Medium, Fine", "Low, Mid, High", "Draft, Normal, Print"], answer: 1 },
            { q: "Rendering creates:", options: ["A new floor plan", "A photorealistic image with materials, shadows, and lighting", "A construction schedule", "A cost estimate"], answer: 1 },
            { q: "Revit warnings (yellow triangles) indicate:", options: ["The software is crashing", "Potential problems like overlapping elements that should be fixed", "Your license expired", "The model is perfect"], answer: 1 },
            { q: "When creating a custom wall type, you define:", options: ["Only the color", "The layers — what materials and how thick each layer is", "The number of windows", "The wall's location"], answer: 1 },
            { q: "A camera view in Revit is used for:", options: ["Taking selfies", "Creating a perspective view from a specific eye point — like a photo of the building", "Measuring distances", "Editing wall types"], answer: 1 },
            { q: "What is a 'Digital Twin'?", options: ["A twin building next door", "A complete digital copy of a building that contains all its information", "Two computer monitors", "A backup file"], answer: 1 }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════
    // PHASE 4: PROFESSIONAL DOCUMENTATION & FUTURE
    // ═══════════════════════════════════════════
    {
      id: "phase4",
      title: "Documentation & Your Future in BIM",
      weeks: "Weeks 7–8",
      color: "#8E44AD",
      sections: [
        // ── WEEK 7 ──
        {
          id: "week7",
          week: 7,
          title: "Annotations — Making Drawings That Builders Can Read",
          description: "A beautiful 3D model is only half the job. Construction workers need clear 2D drawings with measurements and labels. This week, you learn the art of making drawings that communicate.",
          motivation: {
            quote: "The difference between an amateur and a professional? Professionals create documentation that others can build from. You are becoming a professional this week.",
            futureConnect: "Here's something exciting: AI tools are starting to auto-generate annotations! Imagine a computer that automatically adds all dimensions and tags to your drawing. This exists today in experimental BIM tools. But you need to understand how annotations work first — because you'll be the one checking if the AI did it right!"
          },
          days: [
            {
              day: "Day 1–2",
              title: "Dimensions — Measuring Everything on Your Drawing",
              topics: [
                "Why dimensions matter: without measurements, no one can build what you designed!",
                "Aligned dimensions: measuring along a wall's direction",
                "Linear dimensions: measuring horizontal or vertical distances",
                "Angular dimensions: measuring the angle between two walls",
                "Dimension strings: a chain of dimensions showing all measurements in a row",
                "Self-study: Add dimensions to your entire ground floor plan. Every wall, every opening should have a measurement."
              ]
            },
            {
              day: "Day 3–4",
              title: "Tags & Labels — Naming Everything",
              topics: [
                "Door tags: each door gets a number/label (D1, D2, D3...) so the builder knows which door goes where",
                "Window tags: each window gets a label (W1, W2...) with size information",
                "Room tags: show the room name (Bedroom, Kitchen) and area (15 sq.m.) inside each room",
                "Text annotations: custom notes you add when tags aren't enough ('Step down 150mm here')",
                "Self-study: Tag every door, window, and room on both floor plans. The drawing should be fully labeled."
              ]
            },
            {
              day: "Day 5–6",
              title: "Details & Keynotes — Adding Professional Touches",
              topics: [
                "Detail lines: 2D graphic lines you draw directly on views for additional clarity",
                "Detail components: symbols like insulation hatching or reinforcement bar patterns",
                "Keynotes: short codes that reference construction specifications ('K01 = 20mm cement plaster')",
                "Annotating sections and elevations: add dimensions, level markers, and notes to these views too",
                "Self-study: Annotate your 2 section views with dimensions, level heights, and notes. Make them look professional!"
              ]
            }
          ],
          resources: [
            { type: "video", title: "🎬 Revit Annotations Tutorial — Tags and Dimensions (Beginner)", url: "https://www.youtube.com/watch?v=zHvbzZ80YQM", lang: "Simple English" },
            { type: "video", title: "🎬 Every Annotation Tool in Revit — Complete Tutorial", url: "https://www.youtube.com/watch?v=HTtKD5ZkJfk", lang: "English (visual walkthrough)" },
            { type: "video", title: "🎬 Revit Basics: Text, Dimensions, and More", url: "https://www.youtube.com/watch?v=Dd3DJwcXSPE", lang: "Simple English" },
            { type: "video", title: "🎬 Revit Annotation Dimensions and Details — Tutorial 13", url: "https://www.youtube.com/watch?v=pInSn1sl5xs", lang: "Simple English" }
          ],
          quiz: [
            { q: "Why are annotations necessary on construction drawings?", options: ["To make them look decorative", "Because builders need measurements and labels to construct the building correctly", "To increase file size", "They are optional"], answer: 1 },
            { q: "An aligned dimension measures:", options: ["Only horizontal distances", "Along the direction of the element it references (follows the wall)", "Only vertical distances", "The area of a room"], answer: 1 },
            { q: "A door tag displays:", options: ["The door's color", "A label/number so the builder knows which door type goes where", "The door's weight", "The door's brand"], answer: 1 },
            { q: "Room tags typically show:", options: ["Only the room's paint color", "The room name and its area", "How many people fit in the room", "The room's temperature"], answer: 1 },
            { q: "You use text annotations when:", options: ["Tags and dimensions aren't enough and you need custom notes", "You want to write a letter", "You need to delete walls", "You want to create 3D views"], answer: 0 },
            { q: "A detail view shows:", options: ["A zoomed-in area of a drawing at a larger scale for more clarity", "A summary of the project", "A photo of the building", "A cost estimate"], answer: 0 },
            { q: "Keynotes are used to:", options: ["Play music", "Reference construction specifications (like material descriptions) with short codes", "Create 3D models", "Design electrical layouts"], answer: 1 },
            { q: "Good dimensioning practice means:", options: ["Add as few dimensions as possible", "Dimension every wall, opening, and important distance clearly", "Only dimension the longest wall", "Use random placement"], answer: 1 },
            { q: "Angular dimensions measure:", options: ["The length of a wall", "The angle between two walls or lines", "The area of a room", "The height of a column"], answer: 1 },
            { q: "In the future, AI may help with annotations by:", options: ["Removing all annotations", "Automatically adding dimensions and tags — but humans still need to check the result", "Making buildings invisible", "Replacing all architects"], answer: 1 }
          ]
        },

        // ── WEEK 8 ──
        {
          id: "week8",
          week: 8,
          title: "Sheets, Schedules & Your BIM Future",
          description: "The grand finale! Organize everything onto printable sheets, create professional schedules, and deliver a complete documentation set. Plus — discover where BIM can take your career!",
          motivation: {
            quote: "8 weeks ago, you didn't know what a column was. Today, you are delivering professional building documentation. Be proud of how far you've come!",
            futureConnect: "Your journey doesn't end here — it's just beginning! BIM professionals are in huge demand worldwide. With Computer Science knowledge added to BIM skills, you could become a BIM developer, create automation tools, or work with AI in construction. The construction industry is worth TRILLIONS of dollars globally, and it desperately needs people who understand both technology and buildings. That's YOU."
          },
          days: [
            {
              day: "Day 1–2",
              title: "Sheets & Title Blocks — Making It Printable",
              topics: [
                "A Sheet is like a printed page in a book — it holds your views at a specific scale with a professional border",
                "Title blocks: the border and information box on every drawing sheet (project name, drawing title, date, company name)",
                "Placing views on sheets: drag your floor plan, elevation, or section onto the sheet",
                "Adjusting scale: 1:100 for plans (1 cm = 1 meter), 1:50 for detailed sections (1 cm = 0.5 meter)",
                "Self-study: Create a sheet with your ground floor plan at 1:100 scale. Make it look professional!"
              ]
            },
            {
              day: "Day 3–4",
              title: "Schedules & Export — The Power of BIM Data",
              topics: [
                "This is where BIM shows its real power — automatic schedules generated from your model!",
                "Door schedule: Revit counts all doors and lists their type, size, and material automatically",
                "Window schedule: same for windows — type, dimensions, sill height, quantity",
                "Room schedule: lists every room with its name and area — perfect for clients",
                "Export to PDF: create a complete PDF package of all your sheets for sharing",
                "Self-study: Create 3 schedules (door, window, room), place them on a sheet, and export to PDF"
              ]
            },
            {
              day: "Day 5–6",
              title: "Final Project & Your Future in BIM + Technology",
              topics: [
                "Assemble your complete documentation set on organized sheets:",
                "Minimum deliverables: Ground Floor Plan, First Floor Plan, 4 Elevations, 2 Sections, Door Schedule, Window Schedule — all on sheets",
                "Review everything: missing dimensions? Wrong tags? Messy sheet layout? Fix it all!",
                "Export the complete set as PDF — this is your portfolio piece!",
                "The future is yours: BIM + Computer Science = powerful career. Think about automation, AI-assisted design, smart buildings, parametric modeling",
                "Celebrate your achievement! You completed an 8-week professional training program!"
              ]
            }
          ],
          resources: [
            { type: "video", title: "🎬 Door and Window Schedules in Revit — Sheet Setup", url: "https://www.youtube.com/watch?v=hnKjvHq7bSw", lang: "Simple English" },
            { type: "video", title: "🎬 How to Create Door & Window Schedules in Revit 2024", url: "https://www.youtube.com/watch?v=RnHJkmHwz8U", lang: "Simple English" },
            { type: "video", title: "🎬 Door, Window, and Finish Schedules — Revit Tutorial", url: "https://www.youtube.com/watch?v=0TtPXg3ttUo", lang: "Simple English" },
            { type: "video", title: "🎬 Revit Sheets and Views — How to Organize Your Drawings", url: "https://www.youtube.com/watch?v=BwKBQIkTT6A", lang: "Simple English" },
            { type: "inspiration", title: "🚀 The Future of BIM: How AI is Changing Construction", url: "https://www.maket.ai/post/the-future-of-bim-how-ai-is-driving-innovation-in-the-industry", lang: "English (article with visuals)" },
            { type: "inspiration", title: "🚀 Careers in BIM and Computational Design — Your Future Path", url: "https://www.novatr.com/blog/career-in-bim-and-computational-design", lang: "English (career guide)" },
            { type: "inspiration", title: "🚀 How Programming Helps in BIM — Automation, Coding & Architecture", url: "https://www.novatr.com/blog/automation-coding-and-bim", lang: "English (beginner-friendly)" }
          ],
          quiz: [
            { q: "A 'sheet' in Revit is:", options: ["Just another floor plan", "A printable page containing views at a specific scale, with a title block border", "A material", "A 3D perspective"], answer: 1 },
            { q: "A title block contains:", options: ["The 3D model", "Project name, drawing title, scale, date, and company information", "Only the page number", "Construction materials"], answer: 1 },
            { q: "When placing a view on a sheet, you should check:", options: ["That the view has the correct scale to fit the sheet properly", "That all views are deleted", "That annotations are removed", "That the background is black"], answer: 0 },
            { q: "A door schedule automatically lists:", options: ["Only door colors", "All doors with their type, size, material, and quantity — generated from the model", "Only exterior doors", "Door installation videos"], answer: 1 },
            { q: "Schedules in BIM are powerful because:", options: ["They look nice", "They are automatically generated from the 3D model — change the model, the schedule updates", "They replace floor plans", "They only work in expensive software"], answer: 1 },
            { q: "When exporting to PDF, you export:", options: ["Only the 3D model", "Selected sheets as printable PDF pages", "Only schedules", "The Revit file itself"], answer: 1 },
            { q: "BIM + Computer Science can lead to careers in:", options: ["Only traditional architecture", "BIM development, automation, AI-assisted design, and smart buildings", "Only construction labor", "Only web design"], answer: 1 },
            { q: "The scale 1:100 means:", options: ["The drawing is 100 times bigger than reality", "1 unit on paper represents 100 units in real life (1 cm = 1 meter)", "The building has 100 rooms", "The sheet is 100 cm wide"], answer: 1 },
            { q: "For a complete documentation set, you need at minimum:", options: ["Just one 3D view", "Floor plans, elevations, sections, and schedules — all on organized sheets", "Only a site plan", "Only a door schedule"], answer: 1 },
            { q: "After completing this course, you should feel:", options: ["That buildings are scary and complicated", "Confident that you understand how buildings are made and that BIM is an exciting career path", "That you know everything about construction", "That you should give up"], answer: 1 }
          ]
        }
      ]
    }
  ]
};
