// ═══════════════════════════════════════════════════════════
// SCDC Training Portal — Course Data, Resources & MCQs
// ═══════════════════════════════════════════════════════════

const COURSE_DATA = {
  title: "SCDC New Hire Training Program",
  subtitle: "Building Fundamentals & Revit Operations",
  duration: "8 Weeks | 2–3 Hours/Day",
  totalWeeks: 8,

  phases: [
    // ═══════ PHASE 1 ═══════
    {
      id: "phase1",
      title: "Building Fundamentals",
      weeks: "Weeks 1–2",
      color: "#2E8B8B",
      sections: [
        // ── WEEK 1 ──
        {
          id: "week1",
          week: 1,
          title: "Understanding Buildings & Their Components",
          description: "Learn what buildings are made of — from foundations to rooftops. You will identify and name every major component you will later model in Revit.",
          days: [
            {
              day: "Day 1–2",
              title: "What is a Building?",
              topics: [
                "What is a building? Types: residential, commercial, industrial",
                "Parts of a building: substructure (below ground) vs. superstructure (above ground)",
                "Introduction to foundations: what holds a building up — isolated footings, strip footings, raft foundations",
                "Self-study: Label the parts of a building from a printed diagram"
              ]
            },
            {
              day: "Day 3–4",
              title: "Structural Components: Columns, Beams & Slabs",
              topics: [
                "What is a column? A vertical member that carries weight from above down to the foundation",
                "What is a beam? A horizontal member connecting columns, carrying floor loads",
                "What is a slab? The flat surface you walk on — floors and roof decks",
                "How columns, beams, and slabs work together as a structural frame",
                "Self-study: Look at photos of buildings under construction and identify columns, beams, and slabs"
              ]
            },
            {
              day: "Day 5–6",
              title: "Walls, Doors, Windows & Staircases",
              topics: [
                "Walls: load-bearing walls (carry weight) vs. partition walls (divide rooms)",
                "Doors: types (single, double, sliding), parts (frame, shutter, threshold, handle)",
                "Windows: types (casement, sliding, fixed), parts (frame, glazing, sill, lintel)",
                "Staircases: parts (tread, riser, landing, railing, handrail, stringer)",
                "Self-study: Walk around your building and try to identify each component"
              ]
            }
          ],
          resources: [
            { type: "video", title: "What are Beams, Columns, Slabs? — CEB Series", url: "https://www.youtube.com/watch?v=H1sWkfHb2Hg" },
            { type: "video", title: "Beam, Column and Slab Details on Construction Site", url: "https://www.youtube.com/watch?v=7d3mU-3J-vs" },
            { type: "video", title: "Formwork to Suspended Slabs, Beams and Columns", url: "https://www.youtube.com/watch?v=OBXsA1vuKR0" },
            { type: "article", title: "Basic Components of a Building — Happho", url: "https://happho.com/basic-components-building-structure/" },
            { type: "article", title: "Slab, Beam, Column, and Footing Construction — The Constructor", url: "https://theconstructor.org/tips/slab-beam-column-footing-construction/24934/" },
            { type: "article", title: "Building Construction Step by Step — Civil Practical Knowledge", url: "https://civilpracticalknowledge.com/building-construction-step-by-step/" }
          ],
          quiz: [
            { q: "What is the part of a building below the ground level called?", options: ["Superstructure", "Substructure", "Infrastructure", "Megastructure"], answer: 1 },
            { q: "Which structural element is a vertical member that carries loads from beams and slabs down to the foundation?", options: ["Beam", "Slab", "Column", "Wall"], answer: 2 },
            { q: "A beam is best described as:", options: ["A vertical member supporting the roof", "A horizontal member connecting columns and carrying floor loads", "The flat surface you walk on", "A foundation element buried underground"], answer: 1 },
            { q: "What is the primary purpose of a foundation?", options: ["To make the building look attractive", "To provide ventilation", "To transfer the building's weight safely to the ground", "To keep rainwater out"], answer: 2 },
            { q: "What is the difference between a load-bearing wall and a partition wall?", options: ["Load-bearing walls are thinner", "Partition walls carry structural loads", "Load-bearing walls carry structural weight; partition walls only divide spaces", "There is no difference"], answer: 2 },
            { q: "Which part of a staircase is the horizontal surface you step on?", options: ["Riser", "Tread", "Landing", "Stringer"], answer: 1 },
            { q: "The riser in a staircase is the:", options: ["Horizontal stepping surface", "Vertical face between two steps", "Handrail at the side", "Flat platform between flights"], answer: 1 },
            { q: "A casement window:", options: ["Slides horizontally to open", "Is fixed and cannot open", "Swings open on hinges like a door", "Rolls up like a shutter"], answer: 2 },
            { q: "What is a slab in building construction?", options: ["A vertical column", "A horizontal flat element forming floors and roofs", "A type of foundation", "A window component"], answer: 1 },
            { q: "The lintel above a door or window is used to:", options: ["Lock the door", "Provide decoration", "Support the wall weight above the opening", "Allow ventilation"], answer: 2 }
          ]
        },

        // ── WEEK 2 ──
        {
          id: "week2",
          week: 2,
          title: "How Buildings Are Made — From Idea to Reality",
          description: "Understand the entire journey of a building project — from the first idea to handing over the keys. Learn where your Revit work fits in the bigger picture.",
          days: [
            {
              day: "Day 1–2",
              title: "The Building Lifecycle",
              topics: [
                "The 5 phases: Planning → Design → Approval → Construction → Handover",
                "Planning phase: understanding what the client wants, choosing a site, estimating budget",
                "Design phase: architectural design (how it looks), structural design (how it stands), MEP design (pipes, wires, ducts)",
                "What architects, structural engineers, and MEP engineers each contribute",
                "Self-study: Think about a simple house — list what each professional would design"
              ]
            },
            {
              day: "Day 3–4",
              title: "Approval & Construction",
              topics: [
                "Approval phase: submitting drawings to the municipality, getting building permits",
                "Why approval matters: safety, legal compliance, neighborhood standards",
                "Construction sequence: excavation → foundation → columns & beams → slabs → walls → plaster → finishing",
                "Each construction stage explained simply with real-world examples",
                "Self-study: Arrange construction steps in the correct order (try from memory first)"
              ]
            },
            {
              day: "Day 5–6",
              title: "Reading Floor Plans",
              topics: [
                "What is a floor plan? A bird's-eye view of a building cut at waist height",
                "Understanding scale: 1:100 means 1 cm on paper = 100 cm (1 m) in real life",
                "Reading dimensions: length, width, room sizes",
                "Common symbols: door swings (quarter circles), windows (parallel lines), section cut lines",
                "Self-study: Print a simple floor plan and try to read every room, door, and window"
              ]
            }
          ],
          resources: [
            { type: "video", title: "Planning and Design Phase of a Construction Project", url: "https://www.youtube.com/watch?v=GTY5bT3BUhE" },
            { type: "video", title: "EVERY Construction Project from START to FINISH — Explained!", url: "https://www.youtube.com/watch?v=hcZDm6rKeJw" },
            { type: "video", title: "Learn to Read & Understand Construction Drawings — Floor Plans", url: "https://www.youtube.com/watch?v=_s8lLUWQWno" },
            { type: "article", title: "The 5 Phases of a Construction Project — BigRentz", url: "https://www.bigrentz.com/blog/phases-of-construction" },
            { type: "article", title: "Building Construction Process: Start to Finish — Autodesk", url: "https://www.autodesk.com/blogs/construction/building-construction-process-start-to-finish/" },
            { type: "article", title: "How to Read Floor Plans — RoomSketcher", url: "https://www.roomsketcher.com/blog/how-to-read-floor-plans-9-easy-steps/" },
            { type: "article", title: "Floor Plan Symbols & Abbreviations — BigRentz", url: "https://www.bigrentz.com/blog/floor-plan-symbols" }
          ],
          quiz: [
            { q: "What is the correct order of building phases?", options: ["Construction → Design → Approval → Planning", "Planning → Design → Approval → Construction → Handover", "Design → Planning → Construction → Approval", "Approval → Planning → Design → Construction"], answer: 1 },
            { q: "During which phase are building permits obtained?", options: ["Planning", "Design", "Approval", "Construction"], answer: 2 },
            { q: "What does an architect primarily design?", options: ["The electrical wiring", "The structural strength of columns", "The layout, appearance, and functionality of the building", "The plumbing system"], answer: 2 },
            { q: "In construction, what happens immediately after the foundation is built?", options: ["Painting", "Columns and beams are erected", "Windows are installed", "Plaster is applied"], answer: 1 },
            { q: "If a floor plan has a scale of 1:100, what does 2 cm on paper represent in real life?", options: ["2 cm", "20 cm", "200 cm (2 meters)", "2000 cm"], answer: 2 },
            { q: "On a floor plan, a quarter-circle arc near a wall usually represents:", options: ["A window", "A staircase", "A door swing showing how the door opens", "An air conditioning unit"], answer: 2 },
            { q: "What does MEP stand for in building design?", options: ["Mechanical, Electrical, Plumbing", "Material, Equipment, Planning", "Masonry, Elevation, Plaster", "Measurement, Engineering, Piping"], answer: 0 },
            { q: "Why is the approval phase important?", options: ["It makes the building cheaper", "It ensures the design meets safety codes and legal requirements", "It is optional for small buildings", "It only applies to commercial buildings"], answer: 1 },
            { q: "A structural engineer is primarily responsible for:", options: ["Choosing paint colors", "Designing the building's appearance", "Ensuring the building can safely carry all loads without collapsing", "Installing plumbing fixtures"], answer: 2 },
            { q: "What is excavation in the context of construction?", options: ["Installing roof tiles", "Digging and removing earth to prepare the site for foundation", "Painting the exterior walls", "Testing electrical connections"], answer: 1 }
          ]
        }
      ]
    },

    // ═══════ PHASE 2 ═══════
    {
      id: "phase2",
      title: "Introduction to Revit",
      weeks: "Weeks 3–4",
      color: "#2E75B6",
      sections: [
        // ── WEEK 3 ──
        {
          id: "week3",
          week: 3,
          title: "Getting Started with Revit",
          description: "Time to open the software! This week you will learn the Revit interface, navigation, views, levels, grids, and draw your first walls.",
          days: [
            {
              day: "Day 1–2",
              title: "The Revit Interface & Navigation",
              topics: [
                "What is BIM (Building Information Modeling)? Why Revit is more than just a drawing tool",
                "Opening Revit: the start screen, creating a new project using an Architectural template",
                "The Revit interface: Ribbon (tabs and panels), Properties palette, Project Browser",
                "Navigation: Zoom (scroll wheel), Pan (hold middle mouse button), Orbit (Shift + middle button)",
                "Self-study: Open Revit and spend 30 minutes just navigating — zoom, pan, orbit freely"
              ]
            },
            {
              day: "Day 3–4",
              title: "Views, Levels & Grids",
              topics: [
                "Understanding Views: Floor Plans, Elevations, Sections, 3D Views — each shows the building differently",
                "Switching between views using the Project Browser (left panel)",
                "What is a Level? Horizontal planes representing each floor (Ground Floor, First Floor, etc.)",
                "What is a Grid? Vertical reference lines showing column positions",
                "Self-study: Create a project with 2 levels and a simple column grid"
              ]
            },
            {
              day: "Day 5–6",
              title: "Drawing Walls & Basic Editing",
              topics: [
                "Drawing your first walls: selecting wall types, setting wall height and base",
                "Draw tools: Line, Rectangle, Circle, Pick Lines",
                "Modifying elements: Select (click), Move, Copy, Rotate, Mirror, Trim/Extend",
                "Using the Properties palette to change wall type, height, and other parameters",
                "Self-study: Draw a simple rectangular room (4 walls) and practice editing them"
              ]
            }
          ],
          resources: [
            { type: "video", title: "Revit Full Beginner Course — Complete Project Start to Finish", url: "https://www.youtube.com/watch?v=chom9hiewXI" },
            { type: "video", title: "Revit Architecture 2024 Full Beginner's Tutorial", url: "https://www.youtube.com/watch?v=SzDFsJR2Pd0" },
            { type: "video", title: "Revit Complete Tutorial for Beginners — Part 1 (House Exercise)", url: "https://www.youtube.com/watch?v=0uylIF0Pt5U" },
            { type: "playlist", title: "Balkan Architect — Revit Tutorials Playlist", url: "https://www.youtube.com/playlist?list=PL1n-0H6b0FkVukVOsK0hM59edtQDKhh0A" },
            { type: "playlist", title: "Revit Tutorials for Beginners — Full Playlist", url: "https://www.youtube.com/playlist?list=PLFrF_CCMis_abgzZiFA5PL7fydiUoPqj9" },
            { type: "article", title: "Balkan Architect — Free Revit Courses", url: "https://balkanarchitect.com/" }
          ],
          quiz: [
            { q: "What does BIM stand for?", options: ["Building Image Model", "Building Information Modeling", "Basic Interior Mapping", "Blueprint Integration Method"], answer: 1 },
            { q: "In Revit, the Ribbon is:", options: ["A decorative element", "The toolbar at the top containing all tools organized in tabs and panels", "The 3D view window", "A type of wall"], answer: 1 },
            { q: "How do you zoom in and out in Revit?", options: ["Press Z and X keys", "Use the scroll wheel on your mouse", "Click the zoom button repeatedly", "You cannot zoom in Revit"], answer: 1 },
            { q: "To orbit (rotate) the 3D view in Revit, you:", options: ["Press Ctrl + Click", "Hold Shift + Middle mouse button and drag", "Double-click the view", "Press the spacebar"], answer: 1 },
            { q: "A 'Level' in Revit represents:", options: ["A difficulty setting", "A horizontal plane at a specific height, representing a floor of the building", "A type of wall material", "The zoom level of the view"], answer: 1 },
            { q: "The Project Browser in Revit is used to:", options: ["Browse the internet", "Navigate between different views, sheets, and families in your project", "Change wall colors", "Install new plugins"], answer: 1 },
            { q: "What does a Grid line represent in Revit?", options: ["A wall line", "A reference line showing column or structural positions", "A plumbing line", "A property boundary"], answer: 1 },
            { q: "To pan (move sideways) in a Revit view, you:", options: ["Press arrow keys", "Hold the middle mouse button and drag", "Use the scroll bar only", "Press Ctrl + P"], answer: 1 },
            { q: "When drawing walls in Revit, you can set the wall's:", options: ["Color only", "Height, type, and base constraint", "Smell and texture", "Speed and direction"], answer: 1 },
            { q: "The 'Modify' tools in Revit include:", options: ["Only the eraser", "Move, Copy, Rotate, Mirror, and Trim/Extend", "Only zoom and pan", "Print and export only"], answer: 1 }
          ]
        },

        // ── WEEK 4 ──
        {
          id: "week4",
          week: 4,
          title: "Essential Revit Elements",
          description: "Place doors, windows, floors, columns, beams, roofs, and stairs. By the end of this week, you will build a simple one-room structure with all components.",
          days: [
            {
              day: "Day 1–2",
              title: "Doors, Windows & Families",
              topics: [
                "Placing doors: loading door families, selecting a host wall, flipping door direction",
                "Placing windows: loading window families, setting sill height (distance from floor to bottom of window)",
                "Understanding Revit families, types, and instances — the building blocks of every element",
                "Editing element properties: changing dimensions, materials, and type parameters",
                "Self-study: Add 2 doors and 3 windows to your rectangular room from Week 3"
              ]
            },
            {
              day: "Day 3–4",
              title: "Floors, Columns & Beams",
              topics: [
                "Creating floors (slabs): sketching the floor boundary, choosing floor type and thickness",
                "Creating ceilings: automatic ceiling vs. sketch-based ceiling",
                "Adding columns: architectural columns vs. structural columns, placing on grid intersections",
                "Adding beams: connecting beams between columns along grid lines",
                "Self-study: Add a floor, 4 columns, and beams to your model"
              ]
            },
            {
              day: "Day 5–6",
              title: "Roofs & Stairs",
              topics: [
                "Creating a roof: flat roof (constant height) and simple gable/sloped roof",
                "Setting roof slope (pitch) and overhang distance",
                "Adding stairs: using the Stair by Component tool — set run width, riser height, number of risers",
                "Adding railings to stairs and balconies",
                "Self-study: Complete a single-room structure with walls, door, windows, floor, columns, roof, and stairs"
              ]
            }
          ],
          resources: [
            { type: "video", title: "Designing a House in Revit — Beginners Guide (Full Playlist)", url: "https://www.youtube.com/playlist?list=PL2swGutdcRt1fhJChB5B5OS-32l5xwMTG" },
            { type: "video", title: "Revit House Project Tutorial — 2D Plan and 3D Model", url: "https://www.youtube.com/watch?v=NZu_jTdsN5k" },
            { type: "video", title: "Revit Beginner Guide — First Architectural Project Start to Finish", url: "https://www.youtube.com/watch?v=0ILeLawe6Vc" },
            { type: "video", title: "Modern House — Complete Step by Step Revit Tutorial", url: "https://www.youtube.com/watch?v=GwHu3B1ZMV0" },
            { type: "article", title: "10 Quick Steps to Building a Residential House in Revit — ArchiStar", url: "https://academy.archistar.ai/10-quick-steps-to-building-a-residential-house-in-revit" }
          ],
          quiz: [
            { q: "In Revit, a 'family' refers to:", options: ["Your relatives", "A group of similar elements with shared parameters (e.g., all single-flush doors)", "A color palette", "A measurement unit"], answer: 1 },
            { q: "Doors in Revit must be placed on:", options: ["A floor slab", "A host wall", "A grid line", "A beam"], answer: 1 },
            { q: "The 'sill height' of a window is:", options: ["The total height of the window", "The distance from the floor to the bottom of the window", "The width of the window frame", "The glass thickness"], answer: 1 },
            { q: "To create a floor slab in Revit, you:", options: ["Draw it in 3D view only", "Sketch the floor boundary in plan view and finish the sketch", "Type the dimensions in a dialog box", "Import it from AutoCAD"], answer: 1 },
            { q: "What is the difference between an architectural column and a structural column in Revit?", options: ["There is no difference", "Architectural columns are for appearance; structural columns carry calculated loads", "Structural columns are always round", "Architectural columns are taller"], answer: 1 },
            { q: "When adding a beam in Revit, it typically connects:", options: ["Two walls", "Two columns or grid intersections", "A door to a window", "The floor to the ceiling"], answer: 1 },
            { q: "A gable roof has:", options: ["A flat top surface", "Two sloping sides that meet at a ridge at the top", "A dome shape", "Only one sloping side"], answer: 1 },
            { q: "The 'overhang' of a roof is:", options: ["The part of the roof that extends beyond the exterior wall", "The peak of the roof", "The gutter system", "The insulation layer"], answer: 0 },
            { q: "When creating stairs in Revit, you set the:", options: ["Color and texture only", "Run width, riser height, and number of risers", "The stair's name only", "Only the landing material"], answer: 1 },
            { q: "After placing elements in Revit, you can check the complete model by switching to:", options: ["The print preview", "The 3D view", "The title block view", "The schedule view"], answer: 1 }
          ]
        }
      ]
    },

    // ═══════ PHASE 3 ═══════
    {
      id: "phase3",
      title: "Revit Modeling — Residential",
      weeks: "Weeks 5–6",
      color: "#E67E22",
      sections: [
        // ── WEEK 5 ──
        {
          id: "week5",
          week: 5,
          title: "Modeling a Complete Residential House",
          description: "Apply everything you have learned to model a realistic 2-story residential house from a provided floor plan. This is where individual skills come together into a real project.",
          days: [
            {
              day: "Day 1–2",
              title: "Project Setup & Ground Floor",
              topics: [
                "Setting up a new project: levels for Plinth, Ground Floor, First Floor, and Roof",
                "Creating grids based on the provided floor plan layout",
                "Drawing all ground floor walls: exterior walls (thicker) and interior partition walls (thinner)",
                "Placing ground floor doors and windows according to the plan",
                "Self-study: Complete the entire ground floor layout before moving on"
              ]
            },
            {
              day: "Day 3–4",
              title: "First Floor & Stairs",
              topics: [
                "Adding ground floor slab and structural columns",
                "Working on the first floor: modifying the layout for different room arrangements",
                "Adding a balcony on the first floor",
                "Placing first floor doors and windows",
                "Creating stairs connecting ground floor to first floor",
                "Self-study: Complete the first floor with all elements"
              ]
            },
            {
              day: "Day 5–6",
              title: "Roof, Rooms & Review",
              topics: [
                "Adding the roof: sloped roof with appropriate overhangs",
                "Adding rooms and room tags to both floor plans",
                "Checking the model in 3D view: finding and fixing errors or misalignments",
                "Adding a basic building pad for site context",
                "Self-study: Walk through the 3D model and verify everything looks correct"
              ]
            }
          ],
          resources: [
            { type: "video", title: "Modeling a Modern House in Revit — Full Tutorial", url: "https://www.youtube.com/watch?v=2tu_TuzaPT0" },
            { type: "video", title: "Revit Complete Project — Modeling Residential Building", url: "https://www.youtube.com/watch?v=BgWxfhrJ18I" },
            { type: "video", title: "Modern House Complete Step by Step — Revit Tutorial Part 1", url: "https://www.youtube.com/watch?v=GwHu3B1ZMV0" },
            { type: "video", title: "Revit Complete Project — Modern House Tutorial Part 1", url: "https://www.youtube.com/watch?v=w-kROX6JdxI" }
          ],
          quiz: [
            { q: "When starting a residential project in Revit, the first step is usually to:", options: ["Draw walls immediately", "Set up levels and grids to define the building's vertical and horizontal structure", "Place furniture", "Create sheets"], answer: 1 },
            { q: "Exterior walls in a residential building are typically:", options: ["Thinner than interior walls", "The same thickness as interior walls", "Thicker than interior partition walls", "Made of glass only"], answer: 2 },
            { q: "The 'plinth level' in a building is:", options: ["The roof level", "The level just above the ground/foundation, where walls start rising", "The first floor level", "The basement level"], answer: 1 },
            { q: "When copying a layout from ground floor to first floor, you should:", options: ["Redraw everything from scratch every time", "Copy elements and then modify as needed for the different floor layout", "Use the same identical layout without changes", "Only copy the columns"], answer: 1 },
            { q: "Room tags in Revit are used to:", options: ["Decorate the floor plan", "Label rooms with their name and area for documentation", "Change the room's color", "Delete unwanted rooms"], answer: 1 },
            { q: "A building pad in Revit represents:", options: ["A notepad for writing", "A landing pad for helicopters", "The ground/site surface around the building", "A type of insulation"], answer: 2 },
            { q: "When checking a model in 3D view, you should look for:", options: ["Pretty colors", "Misaligned walls, overlapping elements, and incorrect heights", "The number of trees", "Font sizes"], answer: 1 },
            { q: "A balcony in Revit can be created using:", options: ["Only a special balcony tool", "A floor slab that extends beyond the exterior wall, with railings", "Curtain walls only", "The staircase tool"], answer: 1 },
            { q: "If walls from different floors don't align properly, the most likely cause is:", options: ["Wrong wall color", "Incorrect grid positions or level heights", "Too many windows", "Missing roof"], answer: 1 },
            { q: "Before moving to annotations and documentation, your 3D model should have:", options: ["Only walls", "All elements: walls, doors, windows, floors, columns, beams, stairs, and roof", "Only a roof and floor", "Furniture and landscaping"], answer: 1 }
          ]
        },

        // ── WEEK 6 ──
        {
          id: "week6",
          week: 6,
          title: "Refining the Model & Materials",
          description: "Add realistic materials, create elevation and section views, and learn basic rendering to present your residential house model professionally.",
          days: [
            {
              day: "Day 1–2",
              title: "Wall Types & Materials",
              topics: [
                "Understanding wall layers: a wall is not just one material — it has layers (brick, plaster, insulation, etc.)",
                "Creating custom wall types suited to local construction methods",
                "Assigning materials to walls, floors, and roofs using the Material Browser",
                "Understanding how materials affect the appearance in different views",
                "Self-study: Apply realistic materials to every element in your house model"
              ]
            },
            {
              day: "Day 3–4",
              title: "Elevation & Section Views",
              topics: [
                "Creating elevation views: front, back, left, right elevations of the building",
                "Creating section views: cutting through the building to show interior heights and details",
                "Adjusting view range and detail level (Coarse, Medium, Fine)",
                "Understanding what information elevations and sections communicate to builders",
                "Self-study: Create 4 elevations and 2 sections through your house"
              ]
            },
            {
              day: "Day 5–6",
              title: "Basic Rendering & Model Cleanup",
              topics: [
                "Setting up a camera view for a 3D perspective",
                "Basic rendering settings: image quality, sun position for lighting",
                "Exporting a rendered image of your house for presentation",
                "Model cleanup: resolving Revit warnings, fixing overlapping elements",
                "Self-study: Produce one rendered image and fix all model warnings"
              ]
            }
          ],
          resources: [
            { type: "video", title: "Revit Materials and Rendering Tutorial", url: "https://www.youtube.com/watch?v=2tu_TuzaPT0" },
            { type: "video", title: "Revit Section and Elevation Views — Beginner Guide", url: "https://www.youtube.com/watch?v=chom9hiewXI" },
            { type: "article", title: "Revit Tutorials — Comprehensive Library", url: "https://www.youtube.com/c/RevitTutorials" }
          ],
          quiz: [
            { q: "A wall in Revit is made up of:", options: ["A single solid material", "Multiple layers (e.g., brick, insulation, plaster) defined in the wall type", "Only paint", "Air gaps only"], answer: 1 },
            { q: "The Material Browser in Revit is used to:", options: ["Browse the internet for images", "Assign and manage materials (appearance, physical properties) for building elements", "Delete elements", "Create new views"], answer: 1 },
            { q: "An elevation view shows:", options: ["A top-down view of the building", "The building as seen from the side (front, back, left, or right)", "A cross-section through the building", "Only the roof"], answer: 1 },
            { q: "A section view is created by:", options: ["Taking a photo of the building", "Cutting through the building with a cut plane to show interior heights and details", "Rotating the 3D view", "Printing the floor plan"], answer: 1 },
            { q: "View 'Detail Level' in Revit has three settings:", options: ["Small, Medium, Large", "Coarse, Medium, Fine", "Low, Mid, High", "Draft, Normal, Print"], answer: 1 },
            { q: "Rendering in Revit creates:", options: ["A new floor plan", "A photorealistic image of the 3D model with materials, shadows, and lighting", "A construction schedule", "A cost estimate"], answer: 1 },
            { q: "Revit 'warnings' indicate:", options: ["The software is about to crash", "Potential issues in the model like overlapping elements or duplicate instances", "That your license has expired", "The model is perfect"], answer: 1 },
            { q: "When creating a custom wall type, you define:", options: ["Only the wall color", "The layers (materials and thicknesses) that make up the wall", "The number of windows in the wall", "The wall's location on the floor plan"], answer: 1 },
            { q: "A camera view in Revit is used for:", options: ["Taking selfies", "Creating a perspective view from a specific eye point to show what the building looks like", "Measuring distances", "Editing wall types"], answer: 1 },
            { q: "Before sharing your model, you should:", options: ["Delete all views", "Resolve all warnings and clean up misaligned or overlapping elements", "Remove all materials", "Reset to default settings"], answer: 1 }
          ]
        }
      ]
    },

    // ═══════ PHASE 4 ═══════
    {
      id: "phase4",
      title: "Annotations & Documentation",
      weeks: "Weeks 7–8",
      color: "#8E44AD",
      sections: [
        // ── WEEK 7 ──
        {
          id: "week7",
          week: 7,
          title: "Annotations & Detailing",
          description: "A 3D model alone is not enough — construction workers need 2D annotated drawings. Learn to add dimensions, tags, text, and details to your drawings.",
          days: [
            {
              day: "Day 1–2",
              title: "Dimensions",
              topics: [
                "Why annotations matter: construction teams build from 2D annotated drawings, not 3D models",
                "Adding aligned dimensions: measuring along walls and between elements",
                "Adding linear dimensions: horizontal and vertical measurements",
                "Angular dimensions: measuring angles between walls or elements",
                "Dimension strings: continuous dimensioning and baseline dimensioning",
                "Self-study: Fully dimension the ground floor plan of your house"
              ]
            },
            {
              day: "Day 3–4",
              title: "Tags & Text",
              topics: [
                "Door tags: automatically labeling each door with its type/number",
                "Window tags: labeling windows with type and size information",
                "Room tags: showing room name and area in each room",
                "Wall tags: identifying wall types on the plan",
                "Text annotations: adding custom notes and labels",
                "Self-study: Tag all doors, windows, and rooms on both floor plans"
              ]
            },
            {
              day: "Day 5–6",
              title: "Detail Views & Symbols",
              topics: [
                "Detail lines: adding 2D graphic elements to views",
                "Detail components: insulation hatching, reinforcement bar symbols",
                "Creating a simple wall section detail view",
                "Adding annotations to section and elevation views",
                "Keynotes: referencing construction specifications on drawings",
                "Self-study: Annotate section views with dimensions, notes, and detail marks"
              ]
            }
          ],
          resources: [
            { type: "video", title: "Revit Beginner Tutorial — Annotations (Tags and Dimensions)", url: "https://www.youtube.com/watch?v=zHvbzZ80YQM" },
            { type: "video", title: "Every Annotation Tool in Revit — Complete Tutorial", url: "https://www.youtube.com/watch?v=HTtKD5ZkJfk" },
            { type: "video", title: "Revit Basics: Text, Dimensions, and More", url: "https://www.youtube.com/watch?v=Dd3DJwcXSPE" },
            { type: "article", title: "Revit Annotation Tips: Tags, Dimensions & More — Revit Gamers", url: "https://revitgamers.com/revit-annotation-tips/" }
          ],
          quiz: [
            { q: "Why are annotations necessary on construction drawings?", options: ["To make drawings look decorative", "Because construction workers build from annotated 2D drawings, not 3D models", "To increase file size", "They are optional and not needed"], answer: 1 },
            { q: "An aligned dimension in Revit measures:", options: ["Only horizontal distances", "Along the direction of the element it references", "Only vertical distances", "Angles between walls"], answer: 1 },
            { q: "A door tag in Revit displays:", options: ["The door's color", "The door's identifying number/type so it can be referenced in schedules", "The door's weight", "The door's manufacturer website"], answer: 1 },
            { q: "Room tags show:", options: ["Only the room color", "The room name and typically its area", "The number of people in the room", "The room temperature"], answer: 1 },
            { q: "Text annotations are used when:", options: ["Tags and dimensions are not sufficient and you need to add custom notes", "You want to change the building design", "You need to delete elements", "You want to create a 3D view"], answer: 0 },
            { q: "A detail view in Revit is:", options: ["A zoomed-in view showing construction details at a larger scale", "A summary of the project", "A rendering of the building", "An animation of the building"], answer: 0 },
            { q: "Keynotes in Revit are used to:", options: ["Play music", "Reference construction specifications and material descriptions on drawings", "Create 3D models", "Design electrical circuits"], answer: 1 },
            { q: "When dimensioning a floor plan, best practice is to:", options: ["Add as few dimensions as possible", "Dimension all walls, openings, and key distances clearly and consistently", "Only dimension the longest wall", "Use random placement"], answer: 1 },
            { q: "Angular dimensions measure:", options: ["The length of a wall", "The angle between two elements or lines", "The area of a room", "The height of a column"], answer: 1 },
            { q: "Detail components in Revit include:", options: ["3D furniture", "2D symbols like insulation hatching and reinforcement bar representations", "Rendered images", "Audio files"], answer: 1 }
          ]
        },

        // ── WEEK 8 ──
        {
          id: "week8",
          week: 8,
          title: "Sheets, Schedules & Final Project",
          description: "The final week! Learn to organize your annotated views on printable sheets, create door and window schedules, and deliver a complete documentation set.",
          days: [
            {
              day: "Day 1–2",
              title: "Sheets & Title Blocks",
              topics: [
                "What is a sheet? A printable page that contains one or more views at a specific scale",
                "Creating sheets and selecting a title block family (the border and info box)",
                "Placing views on sheets: dragging floor plans, elevations, and sections onto sheets",
                "Adjusting view scale to fit the sheet (1:100, 1:50, etc.)",
                "Self-study: Create a sheet with the ground floor plan at 1:100 scale"
              ]
            },
            {
              day: "Day 3–4",
              title: "Schedules & Export",
              topics: [
                "Creating a door schedule: listing all doors with type, size, material, and quantity",
                "Creating a window schedule: listing all windows with type, dimensions, and sill height",
                "Creating a room schedule: listing all rooms with name and area",
                "Placing schedules on sheets",
                "Exporting to PDF: creating a complete PDF set for sharing or printing",
                "Self-study: Create 3 schedules and place them on a sheet"
              ]
            },
            {
              day: "Day 5–6",
              title: "Final Project — Complete Documentation",
              topics: [
                "Assemble your complete documentation set on organized sheets:",
                "Required deliverables: Ground Floor Plan, First Floor Plan, 4 Elevations, 2 Sections, Door Schedule, Window Schedule",
                "Review your entire set: check for missing dimensions, incorrect tags, and proper sheet organization",
                "Export the complete set as a PDF",
                "Celebrate — you have completed the course!"
              ]
            }
          ],
          resources: [
            { type: "video", title: "Door and Window Schedules in Revit", url: "https://www.youtube.com/watch?v=hnKjvHq7bSw" },
            { type: "video", title: "How To Create Schedules of Doors and Windows in Revit 2024", url: "https://www.youtube.com/watch?v=RnHJkmHwz8U" },
            { type: "video", title: "Door, Window, and Finish Schedules in Revit", url: "https://www.youtube.com/watch?v=0TtPXg3ttUo" },
            { type: "video", title: "Creating a Door Schedule — Revit Tutorial", url: "https://www.youtube.com/watch?v=pv-xBsPpaeA" },
            { type: "video", title: "Revit Sheets and Views — Duplicate & Annotations", url: "https://www.youtube.com/watch?v=BwKBQIkTT6A" }
          ],
          quiz: [
            { q: "A 'sheet' in Revit is:", options: ["Another name for a floor plan", "A printable page containing views at specific scales, with a title block border", "A material type", "A 3D perspective"], answer: 1 },
            { q: "A title block on a sheet contains:", options: ["The 3D model", "Project information like project name, drawing title, scale, date, and company name", "Only the page number", "Construction materials list"], answer: 1 },
            { q: "When placing a view on a sheet, you should check that:", options: ["The view has the correct scale to fit the sheet", "The view is deleted first", "All annotations are removed", "The background is white"], answer: 0 },
            { q: "A door schedule lists:", options: ["Only door colors", "All doors in the project with details like type, size, material, and quantity", "Only exterior doors", "Door installation instructions"], answer: 1 },
            { q: "A window schedule typically includes:", options: ["Window cleaning instructions", "Type, dimensions, sill height, and quantity of each window", "Only window prices", "Window brand names only"], answer: 1 },
            { q: "When exporting to PDF from Revit, you export:", options: ["Only the 3D model", "Selected sheets or all sheets as printable PDF pages", "Only schedules", "The Revit project file itself"], answer: 1 },
            { q: "A room schedule in Revit shows:", options: ["Room temperatures", "A list of rooms with their names, numbers, and areas", "Room furniture details", "Room paint colors"], answer: 1 },
            { q: "The standard scale 1:100 means:", options: ["The drawing is 100 times bigger than reality", "1 unit on paper represents 100 units in real life", "The building has 100 rooms", "The sheet is 100 cm wide"], answer: 1 },
            { q: "For a complete residential documentation set, you need at minimum:", options: ["Just one 3D view", "Floor plans, elevations, sections, and schedules on organized sheets", "Only a site plan", "Only a door schedule"], answer: 1 },
            { q: "At the end of this course, you should be able to:", options: ["Design skyscrapers", "Create a complete Revit model of a residential house and produce annotated documentation sheets", "Write structural engineering calculations", "Only open Revit"], answer: 1 }
          ]
        }
      ]
    }
  ]
};
