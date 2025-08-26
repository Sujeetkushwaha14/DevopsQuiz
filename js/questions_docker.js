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
