questions = [
  { q: "What is Terraform?", options: ["CI tool", "IaC tool", "Monitoring tool", "Debugger"], answer: 1 },
  { q: "What is the purpose of a .tf file in Terraform?", options: ["To run Docker", "To define infrastructure", "To build CI/CD", "For log analysis"], answer: 1 },
  { q: "What is the use of 'terraform init' command?", options: ["Deletes resources", "Creates state file", "Initializes the working directory", "Creates backup"], answer: 2 },
  { q: "What does 'terraform plan' output?", options: ["YAML config", "Preview of resource changes", "Logs", "Dockerfile"], answer: 1 },
  { q: "What does 'terraform apply' do?", options: ["Runs code", "Shows preview of changes", "Provisions infrastructure", "Nothing"], answer: 2 },
  { q: "In which format is Terraform state file?", options: ["YAML", "XML", "JSON", "INI"], answer: 2 },
  { q: "What is the purpose of Terraform backend?", options: ["Store logs", "Reuse modules", "Manage remote state", "Clean bucket"], answer: 2 },
  { q: "Which keyword is used to define variables in Terraform?", options: ["define", "var", "variable", "input"], answer: 2 },
  { q: "What is the use of Terraform modules?", options: ["Loop resources", "Make infrastructure modular and reusable", "Create logs", "Ignore in Git"], answer: 1 },
  { q: "What is the best way to secure sensitive variables in Terraform?", options: ["Hardcode them", "Use environment variables or secrets engine", "Keep in TF_LOG", "Push to GitHub"], answer: 1 }
];

initQuiz();
