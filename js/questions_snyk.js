questions = [
  { q: "What is the primary use of Snyk?", options: ["Load testing", "Security scanning of dependencies", "Image building", "Cloud billing"], answer: 1 },
  { q: "What does Snyk scan apply to?", options: ["Only Java code", "Only YAML files", "Code dependencies, Docker images, IaC", "Linux only"], answer: 2 },
  { q: "How do you install Snyk CLI?", options: ["apt install snyk-cli", "snyk setup", "npm install -g snyk", "docker pull snyk"], answer: 2 },
  { q: "Which Snyk CLI command scans a Node.js project?", options: ["snyk check", "snyk scan node", "snyk test", "snyk validate"], answer: 2 },
  { q: "What does the 'snyk fix' command do?", options: ["Deletes files", "Auto-upgrades vulnerable packages", "Pushes code to production", "Logs errors"], answer: 1 },
  { q: "What is the purpose of 'snyk monitor'?", options: ["Saves project logs", "Sets up live monitoring via dashboard", "CPU watch", "Debugging"], answer: 1 },
  { q: "What is the use of a token in Snyk?", options: ["Set scan schedule", "Authenticate CLI/Dashboard integration", "Download ZIP", "Log coloring"], answer: 1 },
  { q: "In Snyk dashboard, which color indicates a high severity issue?", options: ["Green", "Blue", "Red", "Grey"], answer: 2 },
  { q: "What is the role of Snyk Open Source?", options: ["Project creation", "Public database of known vulnerabilities", "License manager", "Package formatter"], answer: 1 },
  { q: "Which file types are scanned in Snyk Infrastructure as Code (IaC)?", options: ["Only .env", "JSON/XML", "Terraform, Kubernetes YAML", "SQL scripts"], answer: 2 }
];

initQuiz();
