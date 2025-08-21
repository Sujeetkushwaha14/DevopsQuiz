questions = [
  { q: "Trivy kya karta hai?", options: ["Monitoring", "Vulnerability scanning tool", "CI pipeline manager", "Docker runtime"], answer: 1 },
  { q: "Trivy kaunse resource scan kar sakta hai?", options: ["Sirf images", "Only source code", "Images, Filesystem, Git repos, K8s", "Logs only"], answer: 2 },
  { q: "Trivy CLI install karne ke liye kaunsa package use hota hai (Linux)?", options: ["brew", "snap", "apt", "npm"], answer: 2 },
  { q: "Trivy me default scan kis ke liye hoti hai?", options: ["Kubernetes Pod", "Container image", "EC2", "Vault secrets"], answer: 1 },
  { q: "Trivy scan result me kya output hota hai?", options: ["Build logs", "System performance", "Vulnerability list with severity", "None"], answer: 2 },
  { q: "Trivy me severity level ka use kya hai?", options: ["Image name dikhane ke liye", "Test case likhne", "Filter vulnerabilities by impact", "Cloud billing"], answer: 2 },
  { q: "Trivy config files ko scan karne ke liye kya use hota hai?", options: ["trivy conf", "trivy fs", "trivy config", "trivy rule"], answer: 2 },
  { q: "Trivy GitHub repo scan kar sakta hai?", options: ["Nahi", "Haan, --repo flag se", "Sirf public repos", "Sirf forks"], answer: 1 },
  { q: "Trivy output format kaise change karte hain?", options: ["--type", "--level", "--format", "--report"], answer: 2 },
  { q: "Trivy me ignore file ka kya role hai?", options: ["Scanning skip karne ke liye specific IDs", "Performance improve", "RAM save", "Log beautify"], answer: 0 }
];

initQuiz();
