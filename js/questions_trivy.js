questions = [
  { q: "What does Trivy do?", options: ["Monitoring", "Vulnerability scanning tool", "CI pipeline manager", "Docker runtime"], answer: 1 },
  { q: "Which resources can Trivy scan?", options: ["Only images", "Only source code", "Images, filesystem, Git repos, Kubernetes", "Logs only"], answer: 2 },
  { q: "Which package is used to install Trivy CLI on Linux?", options: ["brew", "snap", "apt", "npm"], answer: 2 },
  { q: "By default, what does Trivy scan?", options: ["Kubernetes Pod", "Container image", "EC2", "Vault secrets"], answer: 1 },
  { q: "What is the output of a Trivy scan?", options: ["Build logs", "System performance", "List of vulnerabilities with severity", "None"], answer: 2 },
  { q: "What is the purpose of severity levels in Trivy?", options: ["To show image name", "Writing test cases", "Filter vulnerabilities by impact", "Cloud billing"], answer: 2 },
  { q: "Which command is used to scan configuration files in Trivy?", options: ["trivy conf", "trivy fs", "trivy config", "trivy rule"], answer: 2 },
  { q: "Can Trivy scan a GitHub repository?", options: ["No", "Yes, using --repo flag", "Only public repos", "Only forks"], answer: 1 },
  { q: "How do you change the output format in Trivy?", options: ["--type", "--level", "--format", "--report"], answer: 2 },
  { q: "What is the role of an ignore file in Trivy?", options: ["Skip scanning specific IDs", "Improve performance", "Save RAM", "Beautify logs"], answer: 0 }
];

initQuiz();
