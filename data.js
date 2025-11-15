/* data.js
   Edit this file to update your portfolio content.
   - Add projects by pushing objects into the `projects` array.
   - Add research items into `research`.
   - Add books into `books`.
   - Add experience into `experience`.
   - Add posts into `posts`.

   Keep it simple: each array item is a plain JS object.
*/

window.SITE_DATA = {
  // Basic identity
  name: "Balaji Chejarla",
  tagline: "Robotics • Automation • Machine Learning",
  email: "balajichejarla02@gmail.com",
  phone: "+91 7995498925",
  resume: "balaji_chejarla.pdf", // put your resume file in repo root or external URL

  // Social links (label + href). You can include SVG in iconSvg if you like.
  socials: [
    { label: "GitHub", href: "https://github.com/Chejarlabalaji2112" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-linkedin-profile" },
    { label: "X", href: "https://x.com/your_x_handle" }
  ],

  // About text (HTML allowed)
  about: `
    <strong>I'm an AI & Robotics researcher and engineer</strong> focused on perception, control and real-time systems for assistive robotics and automation.
    I build end-to-end systems using ROS2, PyTorch/TensorFlow, and strong software engineering practices. I enjoy designing reproducible experiments and shipping small, useful robotic products.
  `,

  // Projects: add or remove objects here. To add a project, copy the example and edit fields.
  projects: [
    {
      title: "Personalized Companion Robot",
      date: "2024",
      summary: "Real-time environment recognition with ROS2, room-cleaning routine automation and voice-commanded web utilities.",
      tags: ["ROS2","OpenCV","PyTorch","Gazebo"],
      link: "#", // optional: link to a live demo or project page
      repo: "https://github.com/Chejarlabalaji2112/personalized-companion-robot"
    },
    {
      title: "Dynamic Feedback Driven Fine-Tuning for Speech Emotion Recognition",
      date: "2024",
      summary: "Implemented dynamic feedback in the training loop increasing accuracy by approx. 7% and enabling on-the-fly LR adjustments.",
      tags: ["TensorFlow","Speech","ML"],
      repo: "https://github.com/Chejarlabalaji2112/adaptive_ser"
    },
    {
      title: "Automation Tool for College Results",
      date: "2023",
      summary: "Scrapes college result pages and delivers notifications directly to Telegram using a bot and SQLite scheduling.",
      tags: ["Python","Telegram API","BeautifulSoup"],
      repo: "https://github.com/Chejarlabalaji2112/results_automation"
    }
  ],

  // Research / publications
  research: [
    {
      title: "Dynamic Feedback Fine-Tuning for SER",
      venue: "Submitted to ICASSP (example)",
      year: 2024,
      link: "https://github.com/Chejarlabalaji2112/adaptive_ser",
      abstract: "Proposes a feedback-driven schedule for fine-tuning speech emotion recognition models, enabling adaptive LR and improved generalization."
    }
  ],

  // Books (if you have any)
  books: [
    // Example: { title: "Title", publisher: "Publisher", year: 2025, desc: "Short description", link: "#" }
  ],

  // Experience
  experience: [
    {
      role: "Python Developer Intern",
      company: "CG Innovations",
      period: "Sep 2024 - Nov 2024",
      location: "Remote",
      summary: [
        "Built and maintained Python scripts for automation and data processing.",
        "Reduced processing time for pipelines by ~20%.",
        "Worked with datasets up to 3GB and automated ETL tasks."
      ]
    }
  ],

  // Blog posts or posts
  posts: [
    {
      title: "How I tuned a speech-emotion model with feedback",
      date: "2024-11-01",
      excerpt: "Short notes on a feedback-based fine-tuning loop that improved SER metrics.",
      link: "https://your-blog.example/post1"
    }
  ],

  // Optional top-level convenience links used at bottom
  github: "https://github.com/Chejarlabalaji2112",
  linkedin: "https://www.linkedin.com/in/your-linkedin-profile",
  x: "https://x.com/your_x_handle"
};
