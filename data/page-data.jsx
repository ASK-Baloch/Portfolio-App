import "@fortawesome/fontawesome-free/css/all.css";
export const personalData = {
  name: "Ahmed Baloch",
  role: "Full Stack DEV.",
  education: "BSCS FUUAST  (2023-present)",

  contactLinks: [
    "mailto:emailto:itsahmed5525@gmail.com",
    "https://github.com/ASK-Baloch",
    "https://www.linkedin.com/in/ahmed-baloch-9553b1244/",
    "https://www.instagram.com/ahmed.__.baloch_/",
  ],
};

export const aboutMe = {
  title: "About Me",
  body: [
    "As a developer based in Islamabad, I excel in frontend technologies like Next.js 14, REACT, HTML, CSS, and TypeScript. I'm also proficient in backend tasks and API integrations. My experience with Python and Docker enhances my versatility, making me a well-rounded developer for modern web applications. I'm currently learning cloud-native technologies like Kubernetes, AI agents, and AI-powered applications. I'm always ready to leverage my skills to create impactful solutions.As a highly motivated and driven individual with a passion for making a positive impact . I possess a strong drive and unwavering motivation to make a meaningful difference, which is complemented by a distinctive combination of technical expertise and interpersonal abilities stemming from my background in computer science.I thrive on solving complex problems and remain determined to achieve my goals, even in challenging situations.",
    "When I'm not working,I find solace in activities such as sports, reading, and cherishing moments with my loved ones. I firmly believe that my determination, can-do attitude, and diligent work ethic render me an invaluable asset to any team..",
  ],
};

export const skills = {
  soft: [
    { icon: "👂🏼", text: "Active Listening" },
    { icon: "💬", text: "Effective Communication" },
    { icon: "👥", text: "Collaboration" },
    { icon: "⽓", text: "Teamwork" },
    { icon: "💡", text: "Creative Problem Solving" },
    { icon: "⌛️", text: "Time management" },
  ],
  hard: [
    { icon: <i className="fab fa-node"></i>, text: "NodeJS" },
    { icon: <i className="fab fa-react"></i>, text: "NextJs" },
    { icon: "ʦ", text: "TypeScript" },
    { icon: "🚀", text: "React" },
    { icon: <i className="fas fa-code"></i>, text: "TailwindCSS" },
    { icon: <i className="fab fa-js-square"></i>, text: "javascript" },
    { icon: <i className="fab fa-html5"></i>, text: "HTML" },
    { icon: <i className="fab fa-css3-alt"></i>, text: "CSS" },
    { icon: "💻", text: "Python" },
  ],
};

export const professionalData = {
  title: "Professional Experience",
  experiences: [
    {
      role: "Freelance Projects  (2023-Present)",
      description:
        "Offered a diverse range of services encompassing the creation and implementation of various projects ensuring timely delivery and client satisfaction. Independently designed and launched fully functional websites  that precisely met the clients' expectations. Delivered comprehensive technical support and mentoring to guide clients in efficiently operating their websites. Consistently received positive feedback and fostered enduring client relationships.",
      current: true,
    },
    
    {
      role: "Coding Instructor Volunteer (2024-present)",
      description: `Taught advanced web development topics including Next.js, TypeScript, and FastAPI.
      Delivered comprehensive lessons on Next.js covering routing, data fetching, and styling with Tailwind CSS. Taught FastAPI for building high-performance APIs with Python`,
      current: true,
    },
    {
      role: "Senior Frontend WebDeveloper  (2021-present)",
      description: `Proficiently developed websites utilizing a diverse tech stack, including TypeScript, ReactJS, Tailwind CSS, and Next.js, alongside traditional HTML, CSS, Bootstrap, and JavaScript.I have applied advanced logic and eye-catching designs  to multiple projects during my experience.With almost six months of experience in Frontend Development, I have gained valuable expertise in creating engaging and functional websites.`,
      current: false,
    },
  ],
};

export const certificationsData = {
  title: "Certifications",
  experiences: [
    {
      role: "Cloud Native and Mobile Web Computing Specialist",
      description: (
        <div>
           This certificate, offered by PIAIC in 2024, is highly regarded in the tech industry. It covers advanced topics in cloud-native technologies and mobile web computing. I am currently enrolled and actively pursuing it to enhance my expertise and stay at the forefront of technological advancements.
          <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <span>PIAIC</span>
            <span>2024-Present</span>
          </div>
        </div>
      ),

      current: true,
    },
    {
      role: "Certified Cloud Applied Generative AI Engineer",
      description: (
        <div>
          This certificate was offered by PIAIC in 2023, known for its excellent reputation. I graduated with an 85%.
          <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <span>PIAIC</span>
            <span>2023-2024</span>
          </div>
        </div>
      ),
      current: false,
    },
  ],
};
