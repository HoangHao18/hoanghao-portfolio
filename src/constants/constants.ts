import { TProject } from "../types/types"

export const portfolioSummary = "I'm a Front-End Developer with 3+ years of experience building fast, scalable, and user-focused web applications using React, TypeScript, and modern UI frameworks. Passionate about performance optimization, clean code, and seamless user experiences, I excel in collaborative environments and continuously strive for excellence in web development."
export const technicalSkills = [
    {
        name: "Languages",
        items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"]
    },
    {
        name: "Frameworks and Libraries",
        items: ["React.js", "Redux", "Zustand", "Tailwind CSS", "Bootstrap", "Material-UI", "Shadcn UI", "Maintine"]
    },
    {
        name: "Tools and Platforms",
        items: ["Git", "GitHub", "Webpack", "Vite", "Figma"]
    },
    {
        name: "Other Skills",
        items: ["Responsive Design", "UI/UX", "Jira"]
    }
]

export const workExperience = [
    {
        name: "Frontend Developer at NEXON Dev VINA (April 2020 - Present)",
        desc: "Developed and maintained back-office systems, including a translation data management website, a translation support platform, and a task management system for QA."
    },
    {
        name: "Frontend Developer Intern at SUMVIET Company (May 2021 - August 2021)",
        desc: "Assisted in building front-end components and integration REST APIs for Ecommerce projects."
    }
]

export const aboutDesc = "Passionate Frontend Developer with a focus on building user-friendly, responsive, and high-performance web applications. I love working with modern web technologies and always strive to improve user experience."
export const cotactDesc = "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
export const myEmail = "hoanghao18101999@gmail.com"
export const myLinkedin = "https://www.linkedin.com/in/hoanghao99"
export const myGithub = "https://github.com/hoanghao18"

export const projectList: TProject[] = [
    {
        id: "121",
        name: "PerfumeStore WEB",
        desc: "Scalable cloud infrastructure management with ral-time monitoring and automated scaling",
        techs: ["ReactJS"],
        linkDemo: "#",
        linkSource: "https://github.com/HoangHao18/ferfume-shop-web",
        image: `${import.meta.env.BASE_URL}/images/projects/1.jpg`
    },
    {
        id: "122",
        name: "Cloud Platform",
        desc: "Scalable cloud infrastructure management with ral-time monitoring and automated scaling",
        techs: ["React", "Node.js", "AWS", "Docker"],
        linkDemo: "#",
        linkSource: "https://github.com/HoangHao18/ferfume-shop-web",
        image: `${import.meta.env.BASE_URL}/images/projects/2.jpg`
    }
   
]