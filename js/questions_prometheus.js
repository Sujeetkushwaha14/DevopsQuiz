questions = [
  { q: "What is Prometheus used for?", options: ["Code compilation", "Monitoring and alerting", "Logging only", "Running CI/CD"], answer: 1 },
  { q: "What is the primary purpose of Grafana?", options: ["Code formatting", "Monitoring data visualization", "Image hosting", "IDE integration"], answer: 1 },
  { q: "Which data model does Prometheus use?", options: ["Relational", "Document-based", "Time-series", "GraphQL"], answer: 2 },
  { q: "How does Prometheus collect metrics?", options: ["Push", "Webhook", "Pull mechanism", "CLI scan"], answer: 2 },
  { q: "What is PromQL?", options: ["Python-based monitoring language", "Query language for Prometheus metrics", "Alerting template", "Grafana plugin"], answer: 1 },
  { q: "What is required to create Grafana dashboards?", options: ["YAML file", "SQL script", "Data source config (e.g., Prometheus)", "Kubeconfig"], answer: 2 },
  { q: "What is the role of AlertManager in Prometheus?", options: ["Storage engine", "Dashboard renderer", "Alert delivery via email/Slack", "Pod autoscaler"], answer: 2 },
  { q: "What does drill-down mean in a Grafana panel?", options: ["Delete data", "Detailed view on click", "Export multiple dashboards", "Resize chart"], answer: 1 },
  { q: "What is a target in Prometheus?", options: ["Metrics endpoint from which Prometheus pulls data", "User profile", "Database schema", "Load balancer"], answer: 0 },
  { q: "What is the use of variables in Grafana?", options: ["Changing themes", "Dynamic filtering on dashboards", "Auto backup", "Log rotation"], answer: 1 }
];

initQuiz();
