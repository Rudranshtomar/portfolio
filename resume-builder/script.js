const fields = [
  "name", "title", "email", "phone", "location",
  "linkedin", "github", "summary", "education",
  "skills", "projects", "experience"
];

const outputMap = {
  name: "rName",
  title: "rTitle",
  email: "rEmail",
  phone: "rPhone",
  location: "rLocation",
  linkedin: "rLinkedin",
  github: "rGithub",
  summary: "rSummary",
  education: "rEducation",
  skills: "rSkills",
  projects: "rProjects",
  experience: "rExperience"
};

function updateResume() {
  fields.forEach(field => {
    const value = document.getElementById(field).value.trim();
    const output = document.getElementById(outputMap[field]);

    if (field === "linkedin" && value) {
      output.textContent = value;
    } else if (field === "github" && value) {
      output.textContent = value;
    } else {
      output.textContent = value;
    }
  });
}

fields.forEach(field => {
  document.getElementById(field).addEventListener("input", updateResume);
});

document.getElementById("printBtn").addEventListener("click", () => {
  window.print();
});

updateResume();
