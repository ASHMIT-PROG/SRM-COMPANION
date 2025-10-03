// Pre-populated data for SRM Companion App

export const demoAccounts = [
  {
    id: "1",
    email: "student@srmist.edu.in",
    password: "password123",
    name: "Pushpanjali",
    studentId: "RA2111003010001",
    department: "CSE",
    year: "2nd Year",
    phone: "+91 98765 43210",
    avatar: "P",
  },
  {
    id: "2",
    email: "senior@srmist.edu.in",
    password: "password123",
    name: "Priya Sharma",
    studentId: "RA2011003010045",
    department: "ECE",
    year: "4th Year",
    phone: "+91 98765 43211",
    avatar: "PS",
  },
];

export const studyMaterials = [
  {
    id: "1",
    title: "Data Structures Complete Notes - Semester 3",
    subject: "Data Structures",
    type: "Notes",
    department: "CSE",
    year: "2nd Year",
    fileSize: "2.5 MB",
    uploadedBy: "Prof. Kumar",
    uploadDate: "2024-10-20",
    downloads: 245,
    rating: 4.5,
    description: "Comprehensive notes covering all units of Data Structures including Arrays, Linked Lists, Stacks, Queues, Trees, and Graphs."
  },
  {
    id: "2",
    title: "DBMS Previous Year Question Papers 2023",
    subject: "Database Management Systems",
    type: "Previous Year Papers",
    department: "CSE",
    year: "2nd Year",
    fileSize: "1.8 MB",
    uploadedBy: "Dr. Patel",
    uploadDate: "2024-10-18",
    downloads: 189,
    rating: 4.8,
    description: "Collection of previous year papers with solutions for DBMS course."
  },
  {
    id: "3",
    title: "Operating Systems Complete Notes",
    subject: "Operating Systems",
    type: "Notes",
    department: "CSE",
    year: "2nd Year",
    fileSize: "3.8 MB",
    uploadedBy: "Prof. Singh",
    uploadDate: "2024-10-15",
    downloads: 312,
    rating: 4.9,
    description: "Complete OS notes covering process management, memory management, and file systems."
  },
  {
    id: "4",
    title: "Computer Networks Lab Manual",
    subject: "Computer Networks",
    type: "Lab Manual",
    department: "CSE",
    year: "3rd Year",
    fileSize: "3.2 MB",
    uploadedBy: "Lab Assistant",
    uploadDate: "2024-10-25",
    downloads: 156,
    rating: 4.3,
    description: "Complete lab manual with all experiments and procedures."
  },
  {
    id: "5",
    title: "Python Programming Cheat Sheet",
    subject: "Python",
    type: "Notes",
    department: "CSE",
    year: "1st Year",
    fileSize: "500 KB",
    uploadedBy: "Student Helper",
    uploadDate: "2024-10-28",
    downloads: 423,
    rating: 4.7,
    description: "Quick reference guide for Python syntax and common operations."
  },
  {
    id: "6",
    title: "Machine Learning Notes - Andrew Ng",
    subject: "Machine Learning",
    type: "Notes",
    department: "CSE",
    year: "3rd Year",
    fileSize: "4.1 MB",
    uploadedBy: "Prof. Reddy",
    uploadDate: "2024-10-22",
    downloads: 267,
    rating: 4.9,
    description: "Comprehensive ML notes based on Andrew Ng's course."
  },
  {
    id: "7",
    title: "Digital Electronics Theory Notes",
    subject: "Digital Electronics",
    type: "Notes",
    department: "ECE",
    year: "2nd Year",
    fileSize: "1.9 MB",
    uploadedBy: "Dr. Verma",
    uploadDate: "2024-10-19",
    downloads: 178,
    rating: 4.4,
    description: "Complete theory notes for Digital Electronics."
  },
  {
    id: "8",
    title: "C++ Programming Examples Collection",
    subject: "C++",
    type: "E-books",
    department: "CSE",
    year: "1st Year",
    fileSize: "1.2 MB",
    uploadedBy: "Prof. Gupta",
    uploadDate: "2024-10-26",
    downloads: 334,
    rating: 4.6,
    description: "100+ solved C++ programming examples."
  },
  {
    id: "9",
    title: "Software Engineering Case Studies",
    subject: "Software Engineering",
    type: "Notes",
    department: "CSE",
    year: "3rd Year",
    fileSize: "2.7 MB",
    uploadedBy: "Industry Expert",
    uploadDate: "2024-10-24",
    downloads: 201,
    rating: 4.5,
    description: "Real-world software engineering case studies."
  },
  {
    id: "10",
    title: "Web Development PYQ Collection",
    subject: "Web Development",
    type: "PYQ",
    department: "CSE",
    year: "2nd Year",
    fileSize: "2.1 MB",
    uploadedBy: "Prof. Mishra",
    uploadDate: "2024-10-27",
    downloads: 289,
    rating: 4.8,
    description: "Previous year questions for web development course."
  }
];

export const timetable = {
  Monday: [
    { time: "9:00-10:00", subject: "DBMS", color: "#B3D9FF" },
    { time: "10:00-11:00", subject: "OS Lab", color: "#D9B3FF" }
  ],
  Tuesday: [
    { time: "8:00-8:50", subject: "Transforms and Boundary Value Problems", color: "#0066CC" },
    { time: "8:50-9:40", subject: "Transforms and Boundary Value Problems", color: "#0066CC" },
    { time: "9:00-10:00", subject: "Computer Networks", color: "#B3D9FF" },
    { time: "10:00-11:00", subject: "DBMS", color: "#B3D9FF" },
    { time: "12:30-1:20", subject: "Data Structures and Algorithms", color: "#0066CC" },
    { time: "1:25-2:15", subject: "Data Structures and Algorithms", color: "#9966CC" },
    { time: "2:20-3:10", subject: "Data Structures and Algorithms", color: "#9966CC" },
    { time: "3:10-4:00", subject: "UHV-II: Universal Human Values...", color: "#0066CC" },
    { time: "4:00-4:50", subject: "Transforms and Boundary Value P...", color: "#0066CC" }
  ],
  Wednesday: [
    { time: "8:00-8:50", subject: "Computer Organization and Archi...", color: "#0066CC" },
    { time: "8:50-9:40", subject: "Computer Organization and Archi...", color: "#0066CC" },
    { time: "9:45-10:35", subject: "Transforms and Boundary Value P...", color: "#0066CC" },
    { time: "10:40-11:30", subject: "Advanced Programming Practice", color: "#0066CC" },
    { time: "11:35-12:25", subject: "Data Structures and Algorithms", color: "#0066CC" },
    { time: "12:30-1:20", subject: "Professional Ethics", color: "#9966CC" }
  ],
  Thursday: [
    { time: "12:30-1:20", subject: "Advanced Programming Practice", color: "#B3D9FF" },
    { time: "1:25-2:15", subject: "Advanced Programming Practice", color: "#B3D9FF" },
    { time: "2:20-3:10", subject: "Data Structures and Algorithms", color: "#B3D9FF" }
  ],
  Friday: [
    { time: "9:45-10:35", subject: "Computer Organization and Archi...", color: "#66B3FF" },
    { time: "10:40-11:30", subject: "Operating Systems", color: "#B3D9FF" },
    { time: "11:35-12:25", subject: "Advanced Programming Practice", color: "#66B3FF" }
  ],
};

export const attendanceData = [
  { subject: "Operating Systems", attended: 22, total: 25, percentage: 88, status: "good" },
  { subject: "APP", attended: 18, total: 24, percentage: 75, status: "warning" },
  { subject: "Data Structures", attended: 16, total: 23, percentage: 69.5, status: "danger" },
  { subject: "COA", attended: 20, total: 22, percentage: 90.9, status: "good" },
  { subject: "TBVP", attended: 21, total: 24, percentage: 87.5, status: "good" },
];

export const notifications = [
  { id: "1", type: "attendance", icon: "🔴", title: "Attendance Alert", message: "APP attendance is 75%. Attend next classes.", time: "2 hours ago", read: false },
  { id: "2", type: "assignment", icon: "📅", title: "Upcoming Deadline", message: "Data Structures Assignment due in 2 days", time: "3 hours ago", read: false },
  { id: "3", type: "exam", icon: "📝", title: "Exam Reminder", message: "Mid-term exams start next week", time: "5 hours ago", read: true },
  { id: "4", type: "club", icon: "🎉", title: "Club Event", message: "Tech Club hosting Hackathon on Nov 15", time: "1 day ago", read: false },
  { id: "5", type: "material", icon: "📚", title: "New Material", message: "Operating Systems Unit 4 Notes uploaded", time: "1 day ago", read: true },
  { id: "6", type: "transport", icon: "🚌", title: "Transport Update", message: "Bus schedule updated for weekend", time: "2 days ago", read: true },
  { id: "7", type: "placement", icon: "📢", title: "Placement Alert", message: "TCS drive registration opens tomorrow", time: "2 days ago", read: false },
  { id: "8", type: "forum", icon: "💬", title: "Forum Reply", message: "Someone replied to your question in Peer Help", time: "3 days ago", read: true },
];

export const lostFoundItems = {
  lost: [
    { id: "1", title: "Blue JBL Headphones", location: "Library", date: "Oct 28", postedBy: "Amit Shah", contact: "9876543210", status: "Active", category: "Electronics" },
    { id: "2", title: "Chemistry Textbook", location: "Classroom 302", date: "Oct 27", postedBy: "Sneha Patel", contact: "9876543211", status: "Active", category: "Books" },
    { id: "3", title: "Student ID Card - Pushpanjali", location: "Cafeteria", date: "Oct 26", postedBy: "Pushpanjali", contact: "9876543212", status: "Resolved", category: "ID Cards" },
    { id: "4", title: "Black Umbrella", location: "Basketball Court", date: "Oct 25", postedBy: "Priya Singh", contact: "9876543213", status: "Active", category: "Accessories" },
  ],
  found: [
    { id: "5", title: "Silver Watch", location: "Cafeteria", date: "Oct 28", postedBy: "Vikram Joshi", contact: "9876543214", status: "Active", category: "Accessories" },
    { id: "6", title: "USB Drive 16GB", location: "Lab 3", date: "Oct 27", postedBy: "Ananya Roy", contact: "9876543215", status: "Active", category: "Electronics" },
    { id: "7", title: "Notebook with name 'Priya'", location: "Library", date: "Oct 26", postedBy: "Security Guard", contact: "9876543216", status: "Resolved", category: "Books" },
  ]
};

export const clubs = [
  {
    id: "1",
    name: "SRM Tech Innovators",
    icon: "💻",
    description: "Exploring cutting-edge technology and innovation",
    members: 450,
    category: "Technical",
    updates: [
      { id: "1", title: "Hackathon 2024 Registration Open!", date: "Oct 28", content: "Register for our biggest hackathon - Oct 15-16" },
      { id: "2", title: "Workshop on Machine Learning", date: "Oct 25", content: "Hands-on ML workshop this Saturday at 10 AM" }
    ]
  },
  {
    id: "2",
    name: "Kalakaar - Cultural Club",
    icon: "🎭",
    description: "Celebrating arts, culture, and creativity",
    members: 380,
    category: "Cultural",
    updates: [
      { id: "1", title: "Cultural Fest 2024", date: "Oct 27", content: "Annual cultural fest coming next month!" }
    ]
  },
  {
    id: "3",
    name: "Athletic Association",
    icon: "⚽",
    description: "Sports and fitness for everyone",
    members: 520,
    category: "Sports",
    updates: [
      { id: "1", title: "Inter-College Tournament", date: "Oct 26", content: "Registration open for basketball tournament" }
    ]
  },
  {
    id: "4",
    name: "Code Warriors",
    icon: "👨‍💻",
    description: "Competitive programming and coding challenges",
    members: 340,
    category: "Technical",
    updates: [
      { id: "1", title: "Weekly Contest #45", date: "Oct 28", content: "This Sunday at 8 PM - Practice problems available" }
    ]
  },
  {
    id: "5",
    name: "Robo SRM",
    icon: "🤖",
    description: "Robotics and automation enthusiasts",
    members: 280,
    category: "Technical",
    updates: []
  },
  {
    id: "6",
    name: "Lens Crafters",
    icon: "📷",
    description: "Photography and visual storytelling",
    members: 195,
    category: "Cultural",
    updates: [
      { id: "1", title: "Photography Walk", date: "Oct 29", content: "This Sunday - Meet at 7 AM main gate" }
    ]
  },
  {
    id: "7",
    name: "Melody Makers",
    icon: "🎵",
    description: "Music, beats, and harmony",
    members: 230,
    category: "Cultural",
    updates: [
      { id: "1", title: "Open Mic Night", date: "Oct 28", content: "Friday 6 PM at Auditorium" }
    ]
  },
  {
    id: "8",
    name: "E-Cell SRM",
    icon: "💡",
    description: "Entrepreneurship and startup ecosystem",
    members: 310,
    category: "Business",
    updates: []
  }
];

export const transportRoutes = [
  { route: "Route 1", name: "Main Gate - Hostel A", firstBus: "7:00 AM", lastBus: "10:00 PM", frequency: "Every 15 mins", status: "running", nextIn: "8 mins" },
  { route: "Route 2", name: "Academic Block - Sports Complex", firstBus: "7:30 AM", lastBus: "8:00 PM", frequency: "Every 20 mins", status: "running", nextIn: "3 mins" },
  { route: "Route 3", name: "Hostel - Off-Campus Markets", firstBus: "8:00 AM", lastBus: "9:00 PM", frequency: "Every 30 mins", status: "running", nextIn: "15 mins" },
  { route: "Weekend Special", name: "Campus - City Center", firstBus: "10:00 AM", lastBus: "6:00 PM", frequency: "10AM, 2PM, 6PM", status: "weekend", nextIn: "-" },
];

export const forumPosts = [
  {
    id: "1",
    title: "Need help with DBMS normalization concepts",
    author: "studentuser",
    authorYear: "2nd Year CSE",
    category: "Study Help",
    preview: "Can someone explain 3NF vs BCNF with examples...",
    replies: 5,
    views: 45,
    time: "3 hours ago",
    content: "I'm confused about the difference between 3NF and BCNF. Can someone explain with practical examples?",
    answers: [
      { author: "seniorhelper", content: "3NF allows transitive dependencies while BCNF doesn't. Let me explain with an example...", time: "2 hours ago", helpful: true }
    ]
  },
  {
    id: "2",
    title: "Best resources for learning React.js?",
    author: "webdev_learner",
    authorYear: "2nd Year CSE",
    category: "Technical Help",
    preview: "Looking for good React tutorials and documentation...",
    replies: 8,
    views: 67,
    time: "5 hours ago",
    content: "I want to learn React.js. What are the best resources for beginners?",
    answers: []
  },
  {
    id: "3",
    title: "How to prepare for placement tests?",
    author: "aspiring_engineer",
    authorYear: "3rd Year CSE",
    category: "Career Guidance",
    preview: "Need guidance on aptitude and technical preparation...",
    replies: 15,
    views: 123,
    time: "1 day ago",
    content: "Placements are coming up. How should I prepare for aptitude and technical rounds?",
    answers: []
  },
  {
    id: "4",
    title: "Looking for team members for hackathon",
    author: "innovator_23",
    authorYear: "2nd Year CSE",
    category: "Project Collaboration",
    preview: "Need 2 more members for upcoming Tech Club hackathon...",
    replies: 6,
    views: 34,
    time: "4 hours ago",
    content: "Looking for backend developer and UI designer for hackathon team.",
    answers: []
  }
];

export const marketplaceItems = [
  { id: "1", title: "Operating Systems Textbook (Galvin) - 9th Edition", price: 400, originalPrice: 800, condition: "Good", seller: "Senior_Student", sellerRating: 4.5, category: "Books", image: "📚", postedDate: "Oct 28" },
  { id: "2", title: "Scientific Calculator (Casio fx-991) Like New", price: 600, originalPrice: 1000, condition: "Like New", seller: "Priya_Student", sellerRating: 4.8, category: "Electronics", image: "🔢", postedDate: "Oct 27" },
  { id: "3", title: "Arduino Uno Kit with Sensors", price: 1200, originalPrice: 2000, condition: "Good", seller: "Tech_Geek", sellerRating: 4.7, category: "Lab Equipment", image: "🔌", postedDate: "Oct 26" },
  { id: "4", title: "Data Structures & Algorithms in C++ Book", price: 350, originalPrice: 700, condition: "Fair", seller: "BookWorm_23", sellerRating: 4.3, category: "Books", image: "📚", postedDate: "Oct 25" },
  { id: "5", title: "USB Drive 32GB", price: 200, originalPrice: 400, condition: "Like New", seller: "Gadget_Store", sellerRating: 4.6, category: "Electronics", image: "💾", postedDate: "Oct 28" },
  { id: "6", title: "Lab Coat (Size M)", price: 150, originalPrice: 300, condition: "Good", seller: "Med_Student", sellerRating: 4.4, category: "Miscellaneous", image: "🥼", postedDate: "Oct 24" },
  { id: "7", title: "Badminton Racket with Shuttlecocks", price: 500, originalPrice: 900, condition: "Good", seller: "Sports_Fan", sellerRating: 4.5, category: "Sports Equipment", image: "🏸", postedDate: "Oct 27" },
  { id: "8", title: "Engineering Drawing Kit Complete Set", price: 300, originalPrice: 600, condition: "Like New", seller: "Mechanical_Whiz", sellerRating: 4.7, category: "Stationery", image: "📐", postedDate: "Oct 26" },
];

export const placementDrives = [
  { id: "1", company: "TCS", role: "Software Engineer", ctc: "3.5 LPA", eligibility: "All Branches", deadline: "Nov 5", status: "Open" },
  { id: "2", company: "Infosys", role: "System Engineer", ctc: "4.0 LPA", eligibility: "CSE, IT", deadline: "Nov 8", status: "Open" },
  { id: "3", company: "Wipro", role: "Project Engineer", ctc: "3.75 LPA", eligibility: "All Branches", deadline: "Nov 10", status: "Open" },
  { id: "4", company: "Amazon", role: "SDE Intern", ctc: "50k/month", eligibility: "CSE, IT", deadline: "Nov 3", status: "Closing Soon" },
  { id: "5", company: "Cognizant", role: "GenC Trainee", ctc: "4.5 LPA", eligibility: "All Branches", deadline: "Nov 12", status: "Open" },
  { id: "6", company: "Accenture", role: "Application Developer", ctc: "4.0 LPA", eligibility: "All Branches", deadline: "Nov 15", status: "Open" },
];

export const importantLinks = [
  { id: "1", title: "SRM University Official Website", url: "https://www.srmist.edu.in", category: "Academic", icon: "🏛️", description: "Main university portal" },
  { id: "2", title: "Academic ERP Login", url: "#", category: "Academic", icon: "📊", description: "Access grades and records" },
  { id: "3", title: "Digital Library", url: "#", category: "Academic", icon: "📚", description: "Online books and journals" },
  { id: "4", title: "NPTEL Courses", url: "https://nptel.ac.in", category: "Academic", icon: "🎓", description: "Free online courses" },
  { id: "5", title: "GitHub Student Pack", url: "https://education.github.com", category: "Tools", icon: "💻", description: "Free developer tools" },
  { id: "6", title: "Coursera for Students", url: "https://www.coursera.org", category: "Academic", icon: "📖", description: "Online learning platform" },
  { id: "7", title: "Grammarly", url: "https://www.grammarly.com", category: "Tools", icon: "✍️", description: "Writing assistant" },
  { id: "8", title: "Canva Education", url: "https://www.canva.com/education", category: "Tools", icon: "🎨", description: "Design tool for students" },
];
