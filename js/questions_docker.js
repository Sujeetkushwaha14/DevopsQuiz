questions = [
  { q: "What is Docker?", options: ["Web Browser", "Containerization Platform", "Text Editor", "Database"], answer: 1 },
  { q: "What is the role of FROM instruction in a Dockerfile?", options: ["Starts logging", "Defines the base image", "Sets up networking", "Backup command"], answer: 1 },
  { q: "What does 'docker build -t myapp .' mean?", options: ["Build image with tag myapp", "Start a container", "Delete a container", "Mount a volume"], answer: 0 },
  { q: "What is the difference between a Docker image and a container?", options: ["Image runs, container is base", "Image is a file, container is a process", "Image gets deleted, container is a copy", "No difference"], answer: 1 },
  { q: "What is the use of 'docker run -d'?", options: ["Run container in detached mode", "Download an image", "Delete a volume", "Show logs"], answer: 0 },
  { q: "What does Docker Hub provide?", options: ["Open-source IDE", "Cloud-based CI/CD", "Public Docker image repository", "Container firewall"], answer: 2 },
  { q: "What is the difference between COPY and ADD in a Dockerfile?", options: ["No difference", "ADD can extract compressed files", "COPY creates symlinks", "ADD exposes ports"], answer: 1 },
  { q: "Are multiple CMD instructions allowed in a Dockerfile?", options: ["Yes, all are executed", "No, only the last CMD runs", "CMD is optional", "CMD is an alias of ENTRYPOINT"], answer: 1 },
  { q: "Which command is best to check Docker container status?", options: ["docker top", "docker logs", "docker ps", "docker info"], answer: 2 },
  { q: "How do you optimize Docker images for production?", options: ["Using a separate Dockerfile", "Use minimum layers and lightweight base image", "Comment out CMD", "Add UI in RUN command"], answer: 1 }
];

initQuiz();
