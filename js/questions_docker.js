questions = [
  { q: "In Docker networking, what is the main difference between 'bridge' and 'host' network modes?", options: ["Bridge isolates container networking with NAT, host shares the host’s network stack", "Bridge provides encryption, host disables networking", "Bridge uses overlay, host requires swarm", "Bridge allows IPv6 only, host IPv4 only"], answer: 0 },
  
  { q: "Why are multi-stage builds recommended in Dockerfiles?", options: ["They reduce image size by excluding build tools from final image", "They allow parallel container execution", "They improve runtime performance of containers", "They increase compatibility with Windows containers"], answer: 0 },
  
  { q: "What is the main security risk of running a container with '--privileged' flag?", options: ["Container gets access to host kernel capabilities and devices", "Container loses network isolation", "Docker daemon shuts down automatically", "Privileged mode disables SELinux"], answer: 0 },
  
  { q: "How does Docker overlay network work in Swarm mode?", options: ["It allows containers across different nodes to communicate via VXLAN tunneling", "It maps host network directly to containers", "It encrypts container traffic with TLS by default", "It creates a shared storage volume for containers"], answer: 0 },
  
  { q: "What is the effect of using 'docker commit' in production pipelines?", options: ["It creates immutable, reproducible images", "It breaks immutability by creating images from running container state", "It signs images with Docker Content Trust", "It optimizes layers for smaller image size"], answer: 1 },
  
  { q: "How does Docker Content Trust (DCT) enhance image security?", options: ["By enabling TLS encryption for registry traffic", "By signing and verifying image tags with Notary to prevent tampering", "By blocking all unsigned Dockerfiles", "By enforcing container scanning with Trivy"], answer: 1 },
  
  { q: "In a Dockerfile, why is 'ENTRYPOINT [\"executable\"]' often combined with 'CMD [\"args\"]'?", options: ["ENTRYPOINT defines the main executable, CMD provides default arguments", "ENTRYPOINT runs only if CMD fails", "ENTRYPOINT is for Windows containers, CMD for Linux", "ENTRYPOINT runs before COPY instructions"], answer: 0 },
  
  { q: "What problem does 'docker system prune' help mitigate?", options: ["It removes dangling images, stopped containers, and unused networks to free disk space", "It prevents container privilege escalation", "It rebuilds corrupted container layers", "It upgrades the Docker Engine"], answer: 0 },
  
  { q: "Why is 'distroless' base image used in production?", options: ["It provides OS-level package managers for flexibility", "It reduces attack surface by excluding shells, package managers, and unnecessary binaries", "It automatically patches vulnerabilities", "It allows GPU acceleration in containers"], answer: 1 },
  
  { q: "In Docker Swarm, what does 'docker service scale myapp=5' do?", options: ["Scales container resources (CPU/memory) per replica", "Ensures exactly 5 replicas of 'myapp' service are running across swarm nodes", "Scales up Docker daemon to 5 threads", "Creates 5 overlay networks for myapp"], answer: 1 }
];

initQuiz();

//old first easy 
// questions = [
//   { q: "What is Docker?", options: ["Web Browser", "Containerization Platform", "Text Editor", "Database"], answer: 1 },
//   { q: "What is the role of FROM instruction in a Dockerfile?", options: ["Starts logging", "Defines the base image", "Sets up networking", "Backup command"], answer: 1 },
//   { q: "What does 'docker build -t myapp .' mean?", options: ["Build image with tag myapp", "Start a container", "Delete a container", "Mount a volume"], answer: 0 },
//   { q: "What is the difference between a Docker image and a container?", options: ["Image runs, container is base", "Image is a file, container is a process", "Image gets deleted, container is a copy", "No difference"], answer: 1 },
//   { q: "What is the use of 'docker run -d'?", options: ["Run container in detached mode", "Download an image", "Delete a volume", "Show logs"], answer: 0 },
//   { q: "What does Docker Hub provide?", options: ["Open-source IDE", "Cloud-based CI/CD", "Public Docker image repository", "Container firewall"], answer: 2 },
//   { q: "What is the difference between COPY and ADD in a Dockerfile?", options: ["No difference", "ADD can extract compressed files", "COPY creates symlinks", "ADD exposes ports"], answer: 1 },
//   { q: "Are multiple CMD instructions allowed in a Dockerfile?", options: ["Yes, all are executed", "No, only the last CMD runs", "CMD is optional", "CMD is an alias of ENTRYPOINT"], answer: 1 },
//   { q: "Which command is best to check Docker container status?", options: ["docker top", "docker logs", "docker ps", "docker info"], answer: 2 },
//   { q: "How do you optimize Docker images for production?", options: ["Using a separate Dockerfile", "Use minimum layers and lightweight base image", "Comment out CMD", "Add UI in RUN command"], answer: 1 }
// ];

// initQuiz();


//docker+k8s+security yet to live
// questions = [
//   { q: "Why is running containers as root considered insecure?", options: ["It increases container memory usage", "It gives containers full access to host system if compromised", "It prevents pods from scaling", "It disables kubectl logs"], answer: 1 },

//   { q: "What is the role of Kubernetes RBAC (Role-Based Access Control)?", options: ["To encrypt etcd database", "To define fine-grained permissions for users and service accounts", "To assign container CPU/memory limits", "To enable auto-scaling"], answer: 1 },

//   { q: "How does PodSecurityPolicy (PSP) improve security in Kubernetes?", options: ["By enforcing security contexts like privilege escalation, host networking, and volume types", "By reducing Docker image size", "By restricting node labels", "By monitoring container logs"], answer: 0 },

//   { q: "What is the main advantage of using signed Docker images?", options: ["Ensures the image layers are compressed", "Verifies authenticity and integrity of images to prevent tampering", "Improves container boot speed", "Reduces network bandwidth"], answer: 1 },

//   { q: "Why should secrets not be stored in Docker images?", options: ["Secrets increase image size", "Secrets get baked into immutable layers and can be extracted by anyone with access to the image", "Secrets cannot be mounted inside Kubernetes pods", "Secrets automatically expire inside images"], answer: 1 },

//   { q: "Which Kubernetes object is recommended for managing sensitive data like passwords?", options: ["ConfigMap", "Secret", "DaemonSet", "ReplicaSet"], answer: 1 },

//   { q: "How does Kubernetes NetworkPolicy enhance cluster security?", options: ["By enforcing IP and port-based traffic rules between pods", "By monitoring Docker daemon logs", "By blocking Docker Hub pulls", "By enforcing YAML validation"], answer: 0 },

//   { q: "What is the security risk of using 'hostPath' volumes in Kubernetes?", options: ["They consume too much CPU", "They allow pods direct access to the host filesystem", "They disable node affinity", "They require rootless containers"], answer: 1 },

//   { q: "Why is it recommended to use tools like Trivy or Clair with Docker/Kubernetes?", options: ["For automatic image compression", "For vulnerability scanning of container images before deployment", "For reducing YAML verbosity", "For faster pod scheduling"], answer: 1 },

//   { q: "What is the purpose of Kubernetes Admission Controllers in security?", options: ["They enforce policies at runtime before objects are persisted in etcd", "They encrypt container traffic", "They manage Docker swarm nodes", "They auto-scale deployments"], answer: 0 }
// ];

// initQuiz();

//very tough yet to live
// questions = [
//   { q: "When running Docker containers inside Kubernetes, what is the role of kubelet?", options: ["It provisions persistent volumes", "It schedules pods to nodes", "It communicates with the container runtime (like Docker/Containerd) to start/stop containers", "It balances traffic across pods"], answer: 2 },
  
//   { q: "Why is it recommended to use Kubernetes Deployments instead of 'docker run' for managing containers?", options: ["Deployments auto-heal failed containers and handle rolling updates", "Deployments reduce image size", "Deployments eliminate the need for Dockerfiles", "Deployments directly manage container logs"], answer: 0 },
  
//   { q: "What happens if a Docker container inside a Kubernetes Pod crashes?", options: ["The pod is deleted permanently", "Kubelet restarts the container based on pod’s restartPolicy", "Kubernetes reverts the image to a previous version", "The container automatically switches to privileged mode"], answer: 1 },
  
//   { q: "Why is Kubernetes preferred over Docker Swarm for large-scale orchestration?", options: ["Kubernetes supports advanced networking, scaling, and service discovery across clusters", "Swarm cannot build Docker images", "Swarm does not support Dockerfiles", "Kubernetes requires less configuration"], answer: 0 },
  
//   { q: "How does Kubernetes handle Docker images for Pods?", options: ["Images must always be built on the same cluster", "Images are pulled from registries defined in Pod specs", "Images are converted into YAML manifests", "Images are encrypted and stored in etcd"], answer: 1 },
  
//   { q: "What is the benefit of using Kubernetes DaemonSet for Docker-based workloads?", options: ["It ensures one pod runs on every node, ideal for logging/monitoring agents", "It prevents multiple containers from running", "It forces containers to run in privileged mode", "It deletes unused Docker images automatically"], answer: 0 },
  
//   { q: "How does Kubernetes Service help overcome the limitation of Docker container IPs being ephemeral?", options: ["It assigns static host IPs to containers", "It provides a stable virtual IP (ClusterIP) and DNS name for accessing pods", "It embeds container IPs into YAML manifests", "It tunnels traffic through Docker CLI"], answer: 1 },
  
//   { q: "In Kubernetes, why should Docker-in-Docker (DinD) generally be avoided in CI/CD pipelines?", options: ["It reduces container portability", "It introduces security risks and complexity due to nested Docker daemons", "It disables Kubernetes namespaces", "It prevents mounting ConfigMaps"], answer: 1 },
  
//   { q: "What is the impact of using 'imagePullPolicy: Always' in a Kubernetes Pod spec?", options: ["Forces Kubernetes to always pull the latest image from registry when pod starts", "Caches images to reduce network usage", "Deletes old Docker images from node", "Disables kubelet image caching"], answer: 0 },
  
//   { q: "Why is Kubernetes moving from Docker runtime to Containerd?", options: ["Docker runtime is slower and adds unnecessary layers, while Containerd is lightweight and CRI-compliant", "Docker cannot run multi-container pods", "Containerd removes the need for YAML manifests", "Docker lacks support for namespaces"], answer: 0 }
// ];

// initQuiz();
