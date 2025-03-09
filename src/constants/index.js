import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    mariadb,
    nextjs,
    nodejs,
    react,
    python,
    tailwindcss,
    fill,
    arrowProjects

} from "../assets/icons";

// import {
//     Neuracity_demo
// } from "../../public/videos";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },

    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },

    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },

    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    }
];

export const experiences = [

    {
        title: "BackEnd developer",
        company_name: "TeachEasy",
        icon: fill,
        iconBg: "#fdac6b",
        date: "Apr 2024 - Present",

        points: [
            "Developed TeachEasy’s mobile application back-end completely..",
            "Provided Basic CRUD features for all sections like: classes, subjects, curses, students, calendar event assessments, etc",
            "Developed and implemented dynamic grading algorithms based on the Austrian school grading system.",
            "Implemented features such as grades data export. (Exporting report card into excel format)",
            "Implemented Photo-aided class creation. (User takes a picture of a list with student names, and the back-end recognizes that list, creates the students and enrolls them to the desired class.)",
            "Managed Server Deployment on a Microsoft ISS server",
        ],
    },
    
    {
        title: "Computer Science Student",
        company_name: "Gisma University of Applied Sciences, Potsdam",
        icon: fill,
        iconBg: "#b7e4c7",
        date: "Oct 2023 - Present",
        points: [
            "Studying Computer Science with proffesors with ample experience and qualifications.",
            "Placed second in Gisma's annual hackathon. With a start up Teach Easy, where the goal was to create an app to help Austrian teachers grade and keep track of their students accros differnt subjects.",
            "Had relevant courses in Data Structures, Databases and Python programming.",
        ],
    },


    {
        title: "Medical Interpreter",
        company_name: "Interpretia (Ecuador)",
        icon: fill,
        iconBg: "#b7e4c7",
        date: "April 2023 - Jan 2024",
        points: [
            "Interpreting from english to spanish, online medical calls live with patients and doctors based in the US.",
            "Collaborating with the mother company Language Line Solutions, a US company, as well as working under senior Interpreters and quality assurance teams.",
            "Interpreted calls ranging from, detailing proccedures, pre-operation talks, post-operations, insurance claims, 911 calls, therapy ssessions, etc...",
            "Worked under high pressure situations, due to the nature of the job. While mainting high quality work and excellent customer service to both the client and patitent.",
        ],
    },
    {
        title: "Product Production Assistant",
        company_name: "Seitea (Ecuador)",
        icon: fill,
        iconBg: "#fdac6b",
        date: "May 2023 - October 2023",
        points: [
            "Served as a key member in the production proccess, by taking part in activities such as labeling products, weighing and portoning products, among others.",
            "Reported inventory status monthly and assited in warehouse to store logistics.",
            "Had relevant courses in costumer service and product handelign.",
        ],
    },

    {
        title: "Freelance",
        company_name: "CoSeitea (Ecuador)",
        icon: fill,
        iconBg: "#fdac6b",
        date: "Feb 2022 - April 2023",
        points: [
            "Created description cards for products, for the implementation in the company's webpage as a summer vacation job.",
            "Worked jointly with both store manager and the web developer to keep an organized and concise list of priorities and deliverables."
        ],
    },


];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Mario-Albornoz',
    },
];

export const projects = [
    {
        iconUrl: arrowProjects,
        theme: 'btn-back-red',
        name: 'Schülerly - Neuracity',
        description: 'AI-powered education management platform for school teachers that automates content creation, assignments, curriculum alignment, and analytics to enhance teaching efficiency. In the future we will implement a protocol called multi model verification pipeline to verify the validity and accuracy of the generated material. We developed the front end with react and backend with Django',
        link: 'https://github.com/Mario-Albornoz/Neuracity-FrontEnd',
        demo: `${import.meta.env.BASE_URL}videos/Neuracity_demo.mp4`
    },
    {
        iconUrl: arrowProjects,
        theme: 'btn-back-green',
        name: 'Web Page Portfolio',
        description: 'Created a 3D web page portfolio using react, nodejs and three.js. Here showcase my front-end skills and at the same time have a original and interactive way of showing my experience and projects.',
        link: 'https://github.com/Mario-Albornoz/Portfolio',
        demo: null
    },
    {
        iconUrl: arrowProjects,
        theme: 'btn-back-red',
        name: 'Auxis - Coming soon...',
        description: 'Its a financial analyst management system for medium size companies. It works by taking the data from electronic billing systems, processing it and transforming it into relevant charts and statistics which will help in the future decision making of that company. It will also integrate basic AI capability like linear regression to make projections based on previous data and other parameters. Made with react for front end and django for the backend',
        link: '',
        demo: null
    },
    {
        iconUrl: arrowProjects,
        theme: 'btn-back-green',
        name: 'PacMan Modded',
        description: 'Pacman game made in Java, with an added feature, where after eating enough of the little pebbles the map starts moving and touching the wall immediatly makes the player loose all lives',
        link: 'https://github.com/Mario-Albornoz/Portfolio',
    },
    {
        iconUrl: arrowProjects,
        theme: 'btn-back-red',
        name: 'Flappy Bird',
        description: 'Developed a Flappy Bird game in python using exclusively the library pygame. Addtionally I added some features like a hardcore game mode. Finally designed and created art for new characters inspired on the famous Taylor Swift Eras Tour.',
        link: 'https://github.com/Mario-Albornoz/FlappyBird',
    },
    

];