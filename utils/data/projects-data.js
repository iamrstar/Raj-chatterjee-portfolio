import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'A Online Ticket Platform', 
        description: "I am building an online ticketing web application, focusing on the front-end and key features to enhance user experience. This includes APIs developed with Express, JavaScript, OpenAI, AWS, and MongoDB for functionality. The authentication system uses OTP via AWS SES, with options for Google and Facebook login. AI assistants leverage OpenAI’s latest model, and voice messages are converted to text using AWS Transcribe. Data is fetched from Google Sheets, and PDF term sheets are generated and sent via AWS SES.",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS Transcribe', 'Google Sheets API', 'React JavaScript', 'Node Mailer', 'PDF Generation', 'AWS S3', 'Next.js', 'Tailwind CSS', 'JWT Authentication'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
    id: 4,
    name: 'CRM Web App',
    description: "Developed a full-stack CRM web application using React, Node.js, Express, and MySQL. Built an interactive dashboard with React and Material UI, managed state with Redux, and handled form inputs using React Hook Form. Implemented RESTful APIs with Express and stored data in MySQL.",
    tools: ['ReactJs', 'Material UI', 'Redux', 'React Hook Form', 'Node.js', 'Express', 'MySQL', 'Calendar'],
    code: '',
    demo: '',
    image: ayla,
    role: 'Full Stack Developer',
}
,
    
 
    {
        id: 4,
        name: 'Employee Management',
        description: " Built a responsive employee management dashboard using React, Material UI, Redux, and React Hook Form. Used localStorage for backend-like data persistence and integrated Sun Editor for rich text input.",
        tools: ['ReactJs', 'Material UI', 'Redux', 'React Hook Form', 'localStorage', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// demo
// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },