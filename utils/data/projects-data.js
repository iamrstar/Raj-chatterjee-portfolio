import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
 {
    id: 1,
    name: 'Courier-Parcel Booking System',
    description: "I am developing a multi-step courier and parcel booking system focused on providing a seamless user experience. The front-end is built using Next.js and Tailwind CSS, while the backend uses Express.js, MongoDB, and JWT for secure authentication. Users can book parcels by selecting pickup/drop pincodes, delivery type (Surface, Air, Express, Premium), upload parcel images, and choose payment methods (COD or Online via Razorpay). AWS SES is used for OTP-based email authentication and confirmation emails. Dynamic pricing, tax, insurance, discount codes, and real-time order tracking are key features. The platform is designed to be scalable, fast, and user-friendly.",
    tools: ['Next.js', 'React', 'Tailwind CSS', 'Express.js', 'MongoDB', 'JWT Authentication', 'AWS SES', 'Razorpay Integration', 'Parcel Image Upload', 'Dynamic Pricing', 'PDF Generation', 'Cloud Storage', 'REST API'],
    role: 'Full Stack Developer',
    code: '',
    demo: '',
    image: crefin,
}
,
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
