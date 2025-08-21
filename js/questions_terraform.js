questions = [
  { q: "Terraform kya hai?", options: ["CI tool", "IaC tool", "Monitoring tool", "Debugger"], answer: 1 },
  { q: "Terraform me .tf file kis purpose se hoti hai?", options: ["Docker run karne ke liye", "Infra define karne ke liye", "CI/CD banane ke liye", "Log analysis"], answer: 1 },
  { q: "Terraform init command ka use kya hai?", options: ["Resource delete karta hai", "State file banata hai", "Working dir ko initialize karta hai", "Backup karta hai"], answer: 2 },
  { q: "Terraform plan ka output kya hota hai?", options: ["YAML config", "Resource diff preview", "Logs", "Dockerfile"], answer: 1 },
  { q: "Terraform apply kya karta hai?", options: ["Code run karta hai", "Changes preview deta hai", "Infra provision karta hai", "Nothing"], answer: 2 },
  { q: "Terraform state file kis format me hoti hai?", options: ["YAML", "XML", "JSON", "INI"], answer: 2 },
  { q: "Terraform backend kisliye use hota hai?", options: ["Logs store karne", "Module reuse", "Remote state manage karne", "Bucket clean karne"], answer: 2 },
  { q: "Variable define karne ke liye kaunsa keyword use hota hai?", options: ["define", "var", "variable", "input"], answer: 2 },
  { q: "Terraform module ka use?", options: ["Resource ko loop karne", "Infra ko modular aur reusable banane", "Logs create karne", "Git ignore karne"], answer: 1 },
  { q: "Terraform me sensitive variable ko secure karne ka best tarika?", options: ["Hardcode karna", "Environment variable ya secrets engine", "TF_LOG me rakhna", "GitHub me push karna"], answer: 1 }
];

initQuiz();
