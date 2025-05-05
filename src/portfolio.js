const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://WoodstockXP.github.io',
  title: 'EM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Emilio Moreno',
  role: 'Jr. Software Engineer',
  description:
    'I am a student at the Polytechnic University of Santa Rosa Jauregui majoring in Software Engineering. I am passionate about software development and I am always looking for ways to improve my skills. I am currently looking for new professional opportunities to gain experience in the field.',
  resume: 'https://drive.google.com/file/d/1nGMuy7ATJ2mKHouDAkBVk2dR6H1QJ4rJ/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/emilio-moren0/',
    github: 'https://github.com/WoodstockXP',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Portfolio',
    description:
      'Portfolio web page displaying my contact info, projects, education & skills. Developed specifically for academic purposes.',
    stack: ['React', 'TypeScript'],
    sourceCode: 'https://github.com/WoodstockXP/woodstockxp.github.io',
    livePreview: 'https://WoodstockXP.github.io',
  },
  {
    name: 'UPSRJ Landing Backend',
    description:
      "UPSRJ's Landing page redesign alongside a team of students only. This project is currently in development.",
    stack: ['NestJS', 'MongoDB'],
    sourceCode: 'https://github.com/WoodstockXP/upsrj-landing-backend_fork',
    livePreview: 'https://example.com',
  },
  {
    name: 'Academic Project',
    description:
      'Administration service for point of sale through a terminal. Management of inventory, clients, & payments.',
    stack: ['C++', 'Code::Blocks'],
    sourceCode: 'https://github.com/WoodstockXP/PointOfSaleC-',
    livePreview: 'https://youtu.be/Htq-uey3XPo',
  },
]

// const education = {
//   title: 'Education',
//   description: 'Here is a summary of my academic background and additional courses I have completed to further my knowledge.',
//   academic: [
//     {
//       id: '1',
//       degree: 'Bachelor of Software Engineering',
//       institution: 'Polytechnic University of Santa Rosa',
//       duration: '2023 - Present',
//       details: 'Pursuing a bachelor’s degree in Software Engineering, focusing on software development and project management.',
//     },
//   ],
//   courses: [
//     {
//       id: '1',
//       title: 'Web Development',
//       provider: 'Oracle ONE & Alura LATAM',
//       duration: '2022',
//       details: 'Completed a comprehensive course covering frontend and backend development with projects in HTML, CSS & JavaScript.',
//     },
//     {
//       id: '2',
//       title: 'Big Data & Artificial Intelligence',
//       provider: 'University of Texas at Austin',
//       duration: '2024',
//       details: 'Travelled to Austin, Texas to participate in a course on Big Data and Artificial Intelligence, using R and Python.',
//     },
//   ],
// }

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'Bootstrap',
  'Tailwind CSS',
  'React',
  'TypeScript',
  'NestJS',
  'Python',
  'C++',
  'Java',
  'Git',
  'LaTeX',
  'PostgreSQL',
  'MongoDB',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'emil.moreno2002@gmail.com',
}

export { header, about, projects, education, skills, contact }
