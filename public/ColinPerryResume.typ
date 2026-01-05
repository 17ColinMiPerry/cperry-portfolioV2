#import "@preview/simple-technical-resume:0.1.1": *

#let name = "Colin Perry"
#let phone = "+1 (949) 606-6878"
#let email = "cperry27@g.ucla.edu"
#let github = "17ColinMiPerry"
#let personal-site = "cperry.vercel.app"

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
    "Fullstack Software Engineer/OSS Maintainer",
    "Mintplex Labs",
    "Santa Ana, CA",
    datetime(year: 2025, month: 3, day: 1),
    "Present",
  )[
    - Owned and shipped critical full-stack features using Node.js and React + JS/TS to hundreds of thousands of users in a project with >50k GitHub stars
    - Equipped non-agentic models with tool use by implementing the ReAct architecture, enabling reasoning and function calling for complex tasks and user queries
    - Integrated a selection of additional embedding models for enhanced user experience and model flexibility
    - Owned UI/UX stabilization, resolving high priority rendering bugs and implemented quality of life changes requested by the community
  ]

  #work-heading(
    "Development Engineer",
    "UCLA Nanolab",
    "Los Angeles, CA",
    datetime(year: 2023, month: 10, day: 1),
    datetime(year: 2024, month: 12, day: 1),
  )[
    - Engineered a Python/PyQt control interface with a custom physics library to validate inputs against hardware specifications, protecting wafer fab equipment and preventing \$400,000+ in potential damage
    - Built strong vendor relationships, negotiated discounts, and reduced inventory purchasing costs by over 20%
    - Managed laboratory assistants to ensure ISO Class 5 cleanroom standards throughout lab spaces
  ]

  #work-heading(
    "Software Engineer/Blockchain Developer",
    "GYS Blockchain Solutions",
    "Mission Viejo, CA",
    datetime(year: 2021, month: 6, day: 1),
    datetime(year: 2022, month: 9, day: 1),
  )[
    - Authored and deployed Solidity smart contracts, integrating them with Web3.js APIs, and built user interfaces using HTML/CSS and JavaScript
    - Designed and executed unit tests for smart contract functions with Chai.js to ensure reliability
    - Developed Python scripts to automate asset generation processes, streamlining development for artists
    - Led a team of 4 software engineers, working with cross-disciplinary teams to meet aggressive deadlines on time and under budget
    - Contributed to the generation of over \$500,000 in revenue through the design and implementation of the project's tokenomics systems
  ]
]


#custom-title("Projects")[
  #project-heading(
    "Journal Club - Scientific Paper Sharing Platform",
  )[
    - Published a web and mobile application that enables users to post, browse, and discuss scientific papers via a social voting and comment system, supporting real-time contributions within scientific communities
    - Developed clean and approachable UI/UX using TypeScript with React + Tailwind (webapp) and React Native + Nativewind (mobile)
    - Integrated Firebase authentication for sign-in and Firestore as a real-time NoSQL database to store user-generated posts, comments, and votes
    - Defined custom security rules as Express.js middleware to enforce access controls and validate user permissions, securing multi-user interactions
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
    - *Languages & Frameworks:* JS/TS, React, React Native, TailwindCSS, Python, Go, C/C++
    - *Backend & Infrastructure:* Kubernetes, Docker, Linux, CI/CD, SQL(PostgreSQL, SQLite), NoSQL(Firestore)
  ]
]
