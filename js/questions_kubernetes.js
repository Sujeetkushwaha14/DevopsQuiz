questions = [
  { q: "Kubernetes kya hai?", options: ["Database", "Container Orchestration Tool", "Cloud Storage", "Operating System"], answer: 1 },
  { q: "K8s me pod kya hota hai?", options: ["Single container", "Group of containers sharing resources", "Volume", "Service"], answer: 1 },
  { q: "kubectl get pods command ka use?", options: ["Cluster delete", "Pod status dekhne ke liye", "Log clear", "RBAC apply"], answer: 1 },
  { q: "Deployment aur StatefulSet me kya antar hai?", options: ["StatefulSet me fixed identity hoti hai", "Deployment me memory jyada lagta hai", "StatefulSet faster hota hai", "Koi antar nahi"], answer: 0 },
  { q: "K8s me ConfigMap ka use kya hai?", options: ["Binary file store karne", "Secret encrypt karne", "Configuration data inject karne", "Pod delete karne"], answer: 2 },
  { q: "Service type NodePort ka role kya hai?", options: ["Internal DNS resolve karta hai", "Pod ko IP deta hai", "Cluster internal traffic route karta hai", "External access deta hai fixed port par"], answer: 3 },
  { q: "kubectl describe pod ka kya output hota hai?", options: ["YAML manifest", "Detailed pod info (events, containers)", "Only logs", "RBAC policies"], answer: 1 },
  { q: "Liveness probe kisliye use hota hai?", options: ["Pod deploy karne", "Readiness check", "Container crash detect karne", "Volume mount karne"], answer: 2 },
  { q: "Namespace ka use kya hai?", options: ["Security ke liye", "Pod IP change karne ke liye", "Cluster isolate karne", "Resource group isolate karne"], answer: 3 },
  { q: "Kubernetes me rolling update kis resource ke through hota hai?", options: ["ConfigMap", "Pod", "Deployment", "DaemonSet"], answer: 2 }
];

initQuiz();
