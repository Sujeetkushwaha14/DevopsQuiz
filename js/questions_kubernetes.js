questions = [
  { q: "What is Kubernetes?", options: ["Database", "Container Orchestration Tool", "Cloud Storage", "Operating System"], answer: 1 },
  { q: "What is a Pod in Kubernetes?", options: ["Single container", "Group of containers sharing resources", "Volume", "Service"], answer: 1 },
  { q: "What is the use of the 'kubectl get pods' command?", options: ["Delete cluster", "Check pod status", "Clear logs", "Apply RBAC"], answer: 1 },
  { q: "What is the difference between Deployment and StatefulSet?", options: ["StatefulSet provides fixed identity", "Deployment consumes more memory", "StatefulSet is faster", "No difference"], answer: 0 },
  { q: "What is the use of ConfigMap in Kubernetes?", options: ["Store binary files", "Encrypt secrets", "Inject configuration data", "Delete pods"], answer: 2 },
  { q: "What is the role of Service type NodePort?", options: ["Resolves internal DNS", "Assigns IP to Pod", "Routes internal cluster traffic", "Provides external access on a fixed port"], answer: 3 },
  { q: "What does 'kubectl describe pod' show?", options: ["YAML manifest", "Detailed pod info (events, containers)", "Only logs", "RBAC policies"], answer: 1 },
  { q: "What is a Liveness Probe used for?", options: ["Deploy pods", "Readiness check", "Detect container crashes", "Mount volumes"], answer: 2 },
  { q: "What is the purpose of Namespaces in Kubernetes?", options: ["For security", "To change pod IP", "To isolate the cluster", "To isolate resource groups"], answer: 3 },
  { q: "In Kubernetes, which resource handles Rolling Updates?", options: ["ConfigMap", "Pod", "Deployment", "DaemonSet"], answer: 2 }
];

initQuiz();
