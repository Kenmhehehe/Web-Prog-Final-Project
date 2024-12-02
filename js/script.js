function showPortfolio() {
  // Hide intro section
  document.getElementById('intro').style.display = 'none';

  // Show the main content section
  document.getElementById('main-content').classList.remove('hidden');
}

// Main
const data = {
  name: "Kyneth",
  title: "I'm a",
  typewriterText: ["Web Developer", "Software Developer", "Web Designer", "Youtuber", "Script Writer"], // Cycle through these dynamically
  description:
    "A versatile Web Developer, Designer, and Content Creator passionate about crafting stunning websites, seamless software, and inspiring content. Let's create something amazing together!",
  imageSrc: "images/ken.jpeg",
  socialLinks: {
    github: "https://github.com", 
  facebook: "https://facebook.com", 
  linkedin: "https://linkedin.com", 
  twitter: "https://twitter.com",
  },
  navLinks: ["Home", "About", "Skills", "Contacts"],
};

// Helper to create navigation links
const createNavLinks = (links) =>
  links
    .map((link) => `<div class="link"><a href="#${link.toLowerCase()}">${link}</a></div>`)
    .join("");

// Helper to create social icons
const createSocialIcons = (links) =>
  Object.entries(links)
    .map(
      ([platform, url]) =>
        `<a href="${url}" target="_blank" data-aos="fade-up" data-aos-duration="1500"><i class="fa-brands fa-${platform}"></i></a>` // target="_blank" added here
    )
    .join("");

// Populate the app dynamically
const app = document.getElementById("app");
app.innerHTML = `
  <div class="nav-container">
    <div class="logo" data-aos="zoom-in" data-aos-duration="1500">
      <span>${data.name}</span>
    </div>
    <div class="links">
      ${createNavLinks(data.navLinks)}
    </div>
    <i class="fa-solid fa-bars hamburg" onclick="hamburg()"></i>
  </div>
  <div class="dropdown">
    <div class="links">
      ${createNavLinks(data.navLinks)}
      <i class="fa-solid fa-xmark cancel" onclick="cancel()"></i>
    </div>
  </div>
  <section>
    <div class="main-container">
      <div class="image" data-aos="zoom-out" data-aos-duration="1500">
        <img src="${data.imageSrc}" alt="${data.name}">
      </div>
      <div class="content">
        <h1 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="700">
          Hey I'm <span>${data.name}</span>
        </h1>
        <div class="typewriter" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="900">
          ${data.title} <span class="typewriter-text"></span>
        </div>
        <p data-aos="flip-down" data-aos-duration="1500" data-aos-delay="1100">
          ${data.description}
        </p>
        <div class="social-links">
          ${createSocialIcons(data.socialLinks)}
        </div>
        <div class="btn" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1800">
          <button onclick="navigateToSection('about')">Click me</button>
        </div>
      </div>
    </div>
  </section>
`;

function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the section
    }
}

// Dynamic typewriter effect
const typewriterText = document.querySelector(".typewriter-text");
let currentIndex = 0; // Current string index
let charIndex = 0; // Current character index
let isDeleting = false; // Controls the deleting animation
const speed = 150; // Speed of typing/deleting
const pauseTime = 2000; // Pause between words

function sliceLetterEffect() {
  const currentText = data.typewriterText[currentIndex];

  // Determine if we are typing or deleting
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  // Update the text content
  typewriterText.textContent = currentText.slice(0, charIndex);

  // Adjust timing and switch actions
  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(sliceLetterEffect, pauseTime); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentIndex = (currentIndex + 1) % data.typewriterText.length; // Move to next word
    setTimeout(sliceLetterEffect, speed); // Delay before typing the next word
  } else {
    setTimeout(sliceLetterEffect, speed); // Regular typing/deleting speed
  }
}

// Start the effect
sliceLetterEffect();

// About
// Dynamic Data
    const aboutData = {
        title: "About Me",
        imageSrc: "images/ken.jpeg", // Replace with the actual image path
        imageAlt: "Kyneth A. Querimit",
        topic: "Hello!",
        description: "I am Kyneth A. Querimit, a 3rd-year college student at Marinduque State University pursuing a Bachelor of Science in Information Technology with a major in Software Development.",
        buttonText: "Learn More",
        buttonLink: "#services", // Add a valid link
    };

    // DOM Elements
    const aboutTitle = document.getElementById("about-title");
    const aboutImage = document.getElementById("about-image");
    const aboutTopic = document.getElementById("about-topic");
    const aboutDescription = document.getElementById("about-description");
    const aboutButton = document.getElementById("about-button");

    // Populate Content
    aboutTitle.textContent = aboutData.title;
    aboutImage.src = aboutData.imageSrc;
    aboutImage.alt = aboutData.imageAlt;
    aboutTopic.textContent = aboutData.topic;
    aboutDescription.textContent = aboutData.description;
    aboutButton.textContent = aboutData.buttonText;
    aboutButton.onclick = () => window.location.href = aboutData.buttonLink;

//Skills
// Data for skills and experience
const skillsData = [
  { name: 'HTML', percentage: 90 },
  { name: 'CSS', percentage: 80 },
  { name: 'JAVASCRIPT', percentage: 70 },
  { name: 'PHP', percentage: 60 }
];

const yearsOfExperience = 1;

// Render the skills section dynamically
document.addEventListener("DOMContentLoaded", function () {
  // Set the years of experience
  document.getElementById('years-of-experience').textContent = yearsOfExperience;

  // Get the container for skill boxes
  const skillsContainer = document.getElementById('skills-boxes');

  // Loop through the skills data and create the skill boxes
  skillsData.forEach(skill => {
    // Create a div for each skill box
    const skillBox = document.createElement('div');
    skillBox.classList.add('box');

    // Create the skill name (topic)
    const skillTopic = document.createElement('div');
    skillTopic.classList.add('topic');
    skillTopic.setAttribute('data-aos', 'fade-right');
    skillTopic.setAttribute('data-aos-duration', '1200');
    skillTopic.setAttribute('data-aos-delay', '150');
    skillTopic.textContent = skill.name;

    // Create the skill percentage
    const skillPercentage = document.createElement('div');
    skillPercentage.classList.add('per');
    skillPercentage.setAttribute('data-aos', 'zoom-in');
    skillPercentage.setAttribute('data-aos-duration', '1200');
    skillPercentage.setAttribute('data-aos-delay', '300');
    skillPercentage.textContent = `${skill.percentage}%`;

    // Append topic and percentage to the skill box
    skillBox.appendChild(skillTopic);
    skillBox.appendChild(skillPercentage);

    // Append the skill box to the container
    skillsContainer.appendChild(skillBox);
  });
});

// Services
const services = [
  {
    icon: "fas fa-desktop",
    title: "Web Development",
    description: "We specialize in creating custom websites that cater to your unique business needs. From responsive design to user-friendly interfaces, we ensure your website stands out and performs seamlessly across all devices and browsers.",
  },
  {
    icon: "fas fa-paint-brush",
    title: "Graphic Design",
    description: "Our graphic design services help brands communicate effectively through visual design. Whether it's logos, branding, or promotional materials, we create designs that capture attention and leave a lasting impression.",
  },
  {
    icon: "fas fa-chart-line",
    title: "Digital Marketing",
    description: "We offer tailored digital marketing strategies to boost your online presence. From SEO to social media marketing, we ensure your brand reaches its target audience and generates measurable results.",
  },
  {
    icon: "fab fa-android",
    title: "Icon Design",
    description: "Our icon design services create visually appealing and meaningful icons that represent your brand or application. We focus on simplicity, clarity, and relevance to ensure your icons are easily recognizable.",
  },
  {
    icon: "fas fa-camera-retro",
    title: "Photography",
    description: "Our photography services capture the essence of your brand through high-quality images. Whether it's for product photography, corporate events, or personal projects, we deliver professional images that tell your story.",
  },
  {
    icon: "fas fa-tablet-alt",
    title: "Apps Development",
    description: "We create custom mobile applications that are intuitive, reliable, and scalable. Our team works closely with you to develop apps that cater to your specific needs and provide an engaging user experience.",
  },
];

document.addEventListener("DOMContentLoaded", function() {
  const servicesBox = document.getElementById('services-boxes');

  services.forEach((service, index) => {
    const box = document.createElement('div');
    box.classList.add('box');
    box.setAttribute('data-aos', 'fade-up');
    box.setAttribute('data-aos-duration', '1500');
    box.setAttribute('data-aos-delay', `${index * 200}`);

    box.innerHTML = `
      <div class="icon">
        <i class="${service.icon}"></i>
      </div>
      <div class="topic">${service.title}</div>
      <p>${service.description}</p>
    `;

    servicesBox.appendChild(box);
  });
});

// Contact Me 
 const contactData = {
  topic: "Have Any Project?",
  description: "Feel free to reach out via email or phone.",
  email: "kenethaguilar0.com", 
  phone: "09166591391", 
  buttonText: "Let's Chat",
};

// Function to render the contact section dynamically
function renderContact() {
  const contactSection = document.getElementById('contact-text');

  // Create the dynamic content for the contact section
  contactSection.innerHTML = `
    <div class="topic" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200">${contactData.topic}</div>
    <p>${contactData.description}</p>
    <p><strong>Email:</strong> <a href="mailto:${contactData.email}" target="_blank">${contactData.email}</a></p>
    <p><strong>Phone:</strong> <a href="tel:${contactData.phone.replace(/ /g, '')}">${contactData.phone}</a></p>
    <div class="button" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="400">
        <button onclick="openGmail()">${contactData.buttonText}</button>
    </div>
  `;
}

// Function to open Gmail in a new tab
function openGmail() {
  // This will open Gmail in a new tab
  window.open('https://mail.google.com/', '_blank');
}

// Call the render function when the page loads
window.onload = renderContact;
