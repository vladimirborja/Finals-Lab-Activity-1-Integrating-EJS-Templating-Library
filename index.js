const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const user = {
    firstName: 'Borja',
    lastName: 'Karl Vladimir',
    age: 21,
    address: 'San Fernando',
    phoneNum: '09650561211'
};

const education = [
    'Bachelor of Science in Information Technology Major in Web Development',
    'High School Diploma, Holy Angel University'
];

const experience = [
    'HTML',
    'CSS',
    'JavaScript',
    'UI/UX Designer',
    'Intern, Software Development'
];

const skills = [
    'Web Design (HTML, CSS, JavaScript)',
    'Backend Development (Node.js, Express.js)',
    'UI/UX Design (Figma, Adobe XD)'
];

// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: "EJS PRACTICE",
        user,
        education,
        experience,
        skills
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
