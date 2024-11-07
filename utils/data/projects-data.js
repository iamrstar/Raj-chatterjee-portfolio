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
        name: 'Employee Management',
        description: " I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

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