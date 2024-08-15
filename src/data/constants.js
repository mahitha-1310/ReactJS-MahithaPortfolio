import mprompt from "../assets/mprompt.png";
import password from "../assets/password.png";
import expensetracker from "../assets/expensetracker.png";
import todo from "../assets/todo.png";
import qtrip from "../assets/qtrip.png";
import meats from "../assets/m-eats.png";

export const heroDetails = {
  name: "Mahitha Rammohan",
  roles: [
    "Full Stack Developer",
    "Mobile App Developer",
    "UI/UX Designer",
    "Programmer",
  ],
};

export const experience = [
  {
    year: "Jun 2023 - Jul 2024",
    role: "Software Analyst",
    company: "Bounteous",
    description:
      "Developed multiple projects using ReactJS, React Native, Java, Spring Boot, SwiftUI, and SAP Hybris, significantly improving client satisfaction and reducing project delivery times. Collaborated with cross-functional teams and US clients, efficiently resolving tasks and incidents, and actively participating in knowledge transfer sessions and status meetings.",
    technologies: [
      "ReactJS",
      "React Native",
      "Node.js",
      "Java",
      "SwiftUI",
      "MongoDB",
    ],
  },
  {
    year: "Jan 2023 - May 2023",
    role: "Software Intern",
    company: "Bounteous",
    description:
      "Developed over 10 applications using the MERN stack, including a dynamic travel website- QTrip, an e-commerce website- QKart, showcasing proficiency in MongoDB, React, and Node.js. Additionally, received comprehensive training in Java and JavaScript, which was applied to contribute to the QMoney project, enhancing its financial management functionalities.",
    technologies: ["MongoDB", "ReactJS", "Node.js", "Java", "Express"],
  },
  {
    year: "May 2022 - Jun 2022",
    role: "Software Intern",
    company: "Zoho",
    description:
      "Created individual and organizational password managers using Java and JDBC, incorporating SHA-256 and AES encryption algorithms to ensure strong security and confidentiality of sensitive information. Enhanced data retrieval speed and secured storage.",
    technologies: ["Java", "JDBC", "MySQL", "Cryptography"],
  },
  {
    year: "Oct 2021 - Nov 2021",
    role: "Web Developer Intern",
    company: "Be A Petizen",
    description:
      "Designed and developed the official website for Be a Petizen, a dog adoption platform. Implemented features including pet profiles, adoption forms, and payment gateway integration, leading to a notable increase in adoption inquiries.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "WordPress",
      "WooCommerce",
    ],
  },
];

export const educationData = [
  {
    year: "2019 - 2023",
    degree: "Bachelor of Technology in Information Technology",
    institution: "Easwari Engineering College, Anna University",
    score: "CGPA : 9.45",
  },
  {
    year: "2018 - 2019",
    degree: "Higher Secondary Education",
    institution: "Swamy's Matriculation Higher Secondary School",
    score: "Score : 88.16%",
  },
  {
    year: "2016 - 2017",
    degree: "Secondary Education",
    institution: "Swamy's Matriculation Higher Secondary School",
    score: "Score : 97.2%",
  },
];

export const achievementsData = [
  {
    title: "SECRETARY",
    description:
      "Secretary of ACM Student Chapter of Easwari Engineering College",
    date: "March 2023",
  },
  {
    title: "Academic Topper Award",
    description:
      "Received Academic Topper Award of Easwari Engineering College",
    date: "December 2022",
  },
  {
    title: "HEAD - PRIDE",
    description:
      "Head of P.R.I.D.E (Project, Research, Internship, Development, Evaluation) Activities of EEC",
    date: "October 2022",
  },
  {
    title: "DIPLOMA",
    description: "Acquired a Diploma in FASHION TECHNOLOGY",
    date: "November 2022",
  },

  {
    title: "DBHPS Exam Completion",
    description:
      "Completed all exams conducted by DBHPS (Dakshin Bharat Hindi Prachar Sabha)",
    date: "September 2022",
  },
  {
    title: "Member of NSS",
    description: "Volunteer of NSS (National Service Scheme)",
    date: "August 2022",
  },
];

export const projects = [
  {
    image: mprompt,
    title: "MPrompt - Discovering and Sharing AI Prompts",
    description:
      "Developed a web application built with Next.js and implemented features for users to create, browse, and collaborate on AI prompts, enhancing creative exploration in AI applications.",
    technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
  },
  {
    image: meats,
    title: "MEats - A Food Delivery Web Application",
    description:
      "Developed a food ordering web application built with the MERN stack, enabling users to browse menus, place orders, and manage their food delivery seamlessly, enhancing the overall experience.",
    technologies: ["Node.js", "React", "MongoDB", "Express", "Bootstrap"],
  },
  {
    image: qtrip,
    title: "QTrip - Dynamic Travel Website",
    description:
      "Created a dynamic travel platform using React, empowering users to explore destinations, plan itineraries, enhancing the ease and enjoyment of travel planning.",
    technologies: ["React", "MongoDB", "Express"],
  },
  {
    image: todo,
    title: "To-Do App - Task Management",
    description:
      "Developed a mobile to-do application using React Native, allowing users to create, organize, and manage tasks efficiently, enhancing productivity and task tracking on mobile devices.",
    technologies: ["React Native"],
  },
  {
    image: expensetracker,
    title: "Expense Tracker - Manage Your Finances",
    description:
      "Built an expense tracking application using React Native for Android and iOS, also with SwiftUI for iOS, enabling users to track expenses, set budgets, and visualize spending habits across multiple platforms, promoting financial awareness and management on the go.",
    technologies: ["React Native", "SwiftUI"],
  },
  {
    image: password,
    title: "Password Manager - Secure Credentials",
    description:
      "Developed a robust password manager application using Java, providing users with a secure platform to store, manage, and retrieve their credentials, enhancing security and convenience in managing personal and professional accounts.",
    technologies: ["Java", "JDBC", "MySQL", "Cryptography"],
  },
];
