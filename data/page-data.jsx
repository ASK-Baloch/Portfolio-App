import "@fortawesome/fontawesome-free/css/all.css";
export const personalData = {
  name: "Ahmed Baloch",
  role: "FrontEnd DEV.",
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
    "As a highly motivated and driven individual with a passion for making a positive impact . I possess a strong drive and unwavering motivation to make a meaningful difference, which is complemented by a distinctive combination of technical expertise and interpersonal abilities stemming from my background in computer science.I thrive on solving complex problems and remain determined to achieve my goals, even in challenging situations.",
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
          This certificate was offered by PIAIC in 2024. I am still enrolled and
          pursuing it.
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
          This certificate was offered by PIAIC in 2023. I Passed out with a
          85%.
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
      current: true,
    },
  ],
};
