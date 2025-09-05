```bash
EduSphere/
│
├── config/
│   └── db.js
│       # MongoDB connection file
│       # Connects to database using Mongoose
│
├── models/
│   ├── student.js
│   │   # User Schema
│   │   # Fields: name, email, password, role (student/outsider)
│   │   # Email domain decides role
│   │
│   ├── event.js
│   │   # Event Schema
│   │   # Fields: club, title, description, date, time, registrationLink, isPaid, eligibility
│   │   # Stores event information
│   │
│   └── roadmap.js
│       # Roadmap Schema
│       # Fields: title, steps (array of step-wise skills or career paths)
│       # Can store both course & career roadmaps
│
├── routes/
│   ├── authRoutes.js
│   │   # Authentication Routes
│   │   # POST /api/auth/register → Register user
│   │   # POST /api/auth/login → Login and return JWT
│   │
│   ├── eventRoutes.js
│   │   # Event Routes
│   │   # GET /api/events → Fetch all events
│   │   # POST /api/events → Create a new event
│   │
│   └── roadmapRoutes.js
│       # Roadmap Routes
│       # GET /api/roadmaps → Fetch all roadmaps
│       # POST /api/roadmaps → Create a new roadmap
│
├── index.js
│   # Main Entry Point
│   # Loads Express app
│   # Connects MongoDB via db.js
│   # Registers all routes
│
├── package.json
    # Project dependencies and scripts
