#import "@preview/simple-technical-resume:0.1.1": *

#let name = "Colin Perry"
#let phone = "+1 (949) 606-6878"
#let email = "cperry27@g.ucla.edu"
#let github = "17ColinMiPerry"
#let personal-site = "cperry.codes"

#show: resume.with(
  top-margin: 0.45in,
  personal-info-font-size: 9.2pt,
  author-position: center,
  personal-info-position: center,
  author-name: name,
  phone: phone,
  email: email,
  website: personal-site,
  github-username: github,
)

#custom-title("Education")[
  #education-heading(
    "University of California, Los Angeles",
    "Los Angeles, California",
    "Bachelor of Science",
    "Electrical Engineering",
    datetime(year: 2019, month: 9, day: 1),
    datetime(year: 2023, month: 6, day: 1),
  )[]
]

#custom-title("Experience")[
  #work-heading(
    "Fullstack Software Engineer (Open Source)",
    "Mintplex Labs",
    "Santa Ana, CA",
    datetime(year: 2025, month: 3, day: 1),
    "Present",
  )[
    - Owned and shipped user-facing AI agent infrastructure using Node.js used by hundreds of thousands of users, including agent implementations, embedding pipelines, and reliability tooling
    - Implemented the ReAct architecture to grant Cohere reasoning models with tool-calling, with deduplication safeguards to prevent redundant tool calls
    - Extended the platform's provider agnostic AI embedding system by integrating OpenRouter embedding models, expanding user choice and flexibility while improving overall user experience
    - Rapidly prototyped and iterated user-facing React interfaces using AI-assisted tools like Cursor and gemini-cli to ensure a consistent product vision and provide users with a performant and premium experience
  ]

  #work-heading(
    "Development Engineer",
    "UCLA Nanolab",
    "Los Angeles, CA",
    datetime(year: 2023, month: 10, day: 1),
    datetime(year: 2024, month: 12, day: 1),
  )[
    - Engineered a Python/PyQt control interface with a custom physics library to enforce hardware safety constraints, preventing critical user errors that have historically caused >\$100,000 in damages
    - Executed structured Design of Experiments (DoE) to optimize etch and lithography parameters, delivering reliable recipes that improved process yields and efficiency for all lab users
    - Directed and managed lab assistants in executing essential lab operations, including chemical and supply ordering, inventory management, and chemical waste removal, ensuring smooth operations and safety
  ]

  #work-heading(
    "Fullstack Web3 Engineer",
    "GYS Blockchain Solutions",
    "Mission Viejo, CA",
    datetime(year: 2021, month: 6, day: 1),
    datetime(year: 2022, month: 9, day: 1),
  )[
    - Engineered full-stack web3 apps using React and Solidity, implementing a CI pipeline with Chai.js unit tests to ensure production reliability for thousands of users
    - Built internal tools with Python to automate project asset generation, enabling artists to rapidly produce production-ready assets
    - Led a team of 4 software engineers, working with cross-disciplinary teams to meet aggressive deadlines on time and under budget
    - Drove >\$500,000 in launch revenue through design and implementation of the project's tokenomics system
  ]
]


#custom-title("Projects")[
  #project-heading(
    "Journal Club - Scientific Paper Sharing Platform",
  )[
    - Built a full-stack web and mobile platform for sharing and discussing scientific papers, handling frontend (React/React Native + TypeScript) and backend (Express + Firestore) to deliver real-time user collaboration
    - Implemented social features (posting, commenting, voting) and access control rules, demonstrating strong user focused product design
    - Developed secure authentication and multi-user interaction flows with Firebase Auth and Express to ensure safe collaboration in a multi-user environment
  ]

  #project-heading(
    "Wafer Defect Detection CNN",
  )[
    - Designed a Convolutional Neural Network in Python + PyTorch to detect defects in wafer maps
    - Utilized synthetic minority oversampling to address data imbalances and improve overall model performance
    - Leveraged cloud computing resources via GCP to train the model with optimized hyperparameters, achieving an overall test accuracy of nearly 95%
  ]
]


#custom-title("Skills")[
  #skills()[
    - *Languages & Frameworks:* JS/TS, Node.js, Express.js, React/React Native, TailwindCSS, Python, Go, C++
    - *Backend & Infrastructure:* Kubernetes, Docker, Linux, CI/CD, SQL(PostgreSQL, SQLite), NoSQL(Firestore)
  ]
]
