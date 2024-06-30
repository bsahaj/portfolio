export type Job = {
  company: string;
  title: string;
  dates: string;
  duties: string[];
};

export const JOBS: Job[] = [
  {
    company: "Quadrant Technologies",
    title: "Software Engineer",
    dates: "November 2023 - July 2024",
    duties: [
      "Replaced legacy system: Developed a comprehensive dashboard application for tracking company assets, ensuring real-time data visibility and operational efficiency.",
      "Front-end using Next.js and React.js: Designed and implemented a scalable, modular architecture with reusable components, application state management using Redux, and custom hooks to streamline development and enhance performance.",
      "Implemented responsive design principles: Ensured the application is accessible and functional across various devices and screen sizes.",
      "Developed RESTful APIs using Node.js: Created and integrated APIs to ensure seamless communication between front-end and back-end components.",
      "Utilized Docker for containerization of the application.",
    ],
  },
  {
    company: "Wipro Ltd.",
    title: "Software Engineer",
    dates: "March 2022 - April 2023",
    duties: [
      "Developed web applications using React.js: Designed and implemented UI using React.js incorporating application state management with Redux.",
      "Built RESTful APIs with Java and Spring Boot: Implemented scalable APIs adhering to RESTful principles.",
      "Optimizing APIs and UI Components: Enhanced performance by debugging, refactoring, and integrating new features.",
      "Implemented test cases: Ensured code reliability with comprehensive Jest and JUnit tests.",
      "Azure DevOps pipeline: Streamlined CI/CD workflows with PowerShell scripts.",
      "Developed file automation tool for reducing manual effort in creating the configuration file resulting in cycle time reduction by 2 hours/day.",
      "Led Disaster Recovery Drills: Managed data migration to ensure business continuity.",
      "Collaborated across teams for developing solutions which meet client requirements.",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    title: "Software Engineer",
    dates: "October 2021 - March 2022",
    duties: [
      "Developed and tested web applications using Angular 9: Implemented new features and ensured functionality through rigorous testing.",
      "Created and integrated RESTful APIs with Java Spring Boot: Built and seamlessly integrated scalable APIs into web applications.",
      "Enhanced application performance: Collaborated with QA team to fix bugs and upgrade the User Interface, improving overall performance.",
      "Adapted design patterns for new features: Adjusted design patterns to incorporate and optimize new functionalities.",
      "Designed client-focused solutions: Reviewed project specifications to design solutions that met and exceeded client requirements.",
    ],
  },
  {
    company: "Schweitzer Engineering Laboratories",
    title: "Software Engineering Intern",
    dates: "May 2019 - August 2020",
    duties: [
      "Developed web applications: Implemented solutions for reading and writing SEL device data using React.js and Redux for application state management.",
      "Participated in the full SDLC: Engaged in all stages from initial specifications to the final rollout of the product.",
      "Created custom UI components: Utilized Material-UI to meet all UI/UX requirements.",
      "Contributed to SEL React-UI Library: Developed reusable UI components for company-wide use in React-based web applications.",
      "Worked in an agile environment: Collaborated effectively within an agile team to deliver high-quality software.",
    ],
  },
  {
    company: "Vedvaag Systems Limited",
    title: "Software Engineering Intern",
    dates: "May 2018 - July 2018",
    duties: [
      "Developed RESTful APIs: Created APIs using Java Spring Boot to collect and store delivery records in an SQL database.",
      "Built UI Components: Designed and implemented UI Components for the delivery manger web application using React.js",
      "Utilized Git for effective version control and collaboration.",
    ],
  },
];

export const ABOUT: string[] = [
  "I am a full stack developer with 4 years of experience, dedicated to building scalable solutions. Proficient in React, Java, and SQL, with expertise in building RESTful APIs and integrating databases like MySQL, and MongoDB.",
  "Throughout my career, I've delivered high-quality projects by collaborating closely with cross-functional teams, focusing on task scope, acceptance criteria, and best practices to enhance user experience. Passionate about staying current with industry trends, I continuously improve my skills to achieve exceptional results, successfully leading projects from conception to deployment.",
  "I have a deep passion for software development, driven by a commitment to mastering the craft. I excel in solving complex problems and take pride in creating user-friendly applications, both front-end and back-end. Continuous learning and staying updated with the latest technologies are essential to me. I thrive in collaborative environments, mentoring junior developers, and contributing to innovative projects that enhance user experiences.",
];

type Intro = {
  roles: string[];
  info: string;
};

export const INTRO: Intro = {
  roles: ["Full Stack Developer.", "Software Engineer.", "Frontend Developer."],
  info: "I have experience in developing user-friendly web applications, known for delivering exceptional projects that exceed client expectations and elevate user experience.",
};
