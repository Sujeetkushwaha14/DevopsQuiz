questions = [
  { q: "Snyk ka primary use kya hai?", options: ["Load testing", "Security scanning of dependencies", "Image building", "Cloud billing"], answer: 1 },
  { q: "Snyk scan kispe apply hota hai?", options: ["Sirf Java code", "Only YAML files", "Code dependencies, Docker images, IaC", "Linux only"], answer: 2 },
  { q: "Snyk CLI install karne ka tarika kya hai?", options: ["apt install snyk-cli", "snyk setup", "npm install -g snyk", "docker pull snyk"], answer: 2 },
  { q: "Snyk CLI ka command to scan a Node.js project?", options: ["snyk check", "snyk scan node", "snyk test", "snyk validate"], answer: 2 },
  { q: "Snyk me fix command kya karta hai?", options: ["File delete karta hai", "Auto-upgrade vulnerable packages", "Push code to prod", "Log error"], answer: 1 },
  { q: "Snyk monitor command ka use kya hai?", options: ["Project log save karta hai", "Live monitoring via dashboard setup karta hai", "CPU watch", "Debugging"], answer: 1 },
  { q: "Snyk me token ka use kya hai?", options: ["Scan schedule set karne ke liye", "Auth ke liye CLI/Dashboard integration", "Download ZIP", "Log coloring"], answer: 1 },
  { q: "Snyk dashboard me high severity issue kis color me show hota hai?", options: ["Green", "Blue", "Red", "Grey"], answer: 2 },
  { q: "Snyk open source ka kya role hai?", options: ["Project creation", "Public DB of known vulnerabilities", "License manager", "Package formatter"], answer: 1 },
  { q: "Snyk Infrastructure as Code (IaC) scan kis file type pe hota hai?", options: ["Only .env", "JSON/XML", "Terraform, Kubernetes YAML", "SQL scripts"], answer: 2 }
];

initQuiz();
