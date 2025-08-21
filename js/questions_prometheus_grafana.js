questions = [
  { q: "Prometheus ka use kya hai?", options: ["Code compile", "Monitoring and alerting", "Logging only", "CI/CD run"], answer: 1 },
  { q: "Grafana ka primary purpose kya hai?", options: ["Code formatting", "Monitoring data visualization", "Image hosting", "IDE integration"], answer: 1 },
  { q: "Prometheus kaunsa data model use karta hai?", options: ["Relational", "Document-based", "Time-series", "GraphQL"], answer: 2 },
  { q: "Prometheus metrics pull karta hai kis method se?", options: ["Push", "Webhook", "Pull mechanism", "CLI scan"], answer: 2 },
  { q: "PromQL kya hai?", options: ["Python based monitoring language", "Query language for Prometheus metrics", "Alerting template", "Grafana plugin"], answer: 1 },
  { q: "Grafana dashboards banane ke liye kya chahiye hota hai?", options: ["YAML file", "SQL script", "Data source config (e.g., Prometheus)", "Kubeconfig"], answer: 2 },
  { q: "Prometheus me AlertManager ka role kya hai?", options: ["Storage engine", "Dashboard renderer", "Alert delivery via email/slack", "Pod autoscaler"], answer: 2 },
  { q: "Grafana panel me drill-down ka matlab kya hai?", options: ["Data delete karna", "Detailed view on click", "Multiple dashboards export", "Chart resize"], answer: 1 },
  { q: "Prometheus me target kya hota hai?", options: ["Metrics endpoint jisse Prometheus data pull karta hai", "User profile", "Database schema", "Load balancer"], answer: 0 },
  { q: "Grafana me variable ka use kisliye hota hai?", options: ["Theme change karne ke liye", "Dynamic filtering dashboard pe", "Auto backup", "Log rotation"], answer: 1 }
];

initQuiz();
