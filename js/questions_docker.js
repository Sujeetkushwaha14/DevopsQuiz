questions = [
  { q: "Docker kya hai?", options: ["Web Browser", "Containerization Platform", "Text Editor", "Database"], answer: 1 },
  { q: "Dockerfile me FROM instruction ka role kya hai?", options: ["Logging start karta hai", "Base image define karta hai", "Networking setup karta hai", "Backup command hota hai"], answer: 1 },
  { q: "docker build -t myapp . ka matlab kya hai?", options: ["Tag myapp ke sath image build karna", "Container start karna", "Container delete karna", "Volume mount karna"], answer: 0 },
  { q: "Docker image aur container me kya antar hai?", options: ["Image run hota hai, container base hota hai", "Image ek file hai, container ek process hai", "Image delete hota hai, container copy hota hai", "Koi antar nahi"], answer: 1 },
  { q: "docker run -d ka use kisliye hota hai?", options: ["Detach mode me container run karna", "Download image", "Delete volume", "Show logs"], answer: 0 },
  { q: "Docker Hub kya provide karta hai?", options: ["Open-source IDE", "Cloud-based CI/CD", "Public docker image repository", "Container firewall"], answer: 2 },
  { q: "Dockerfile me COPY aur ADD me kya farq hai?", options: ["Koi farq nahi", "ADD compressed files extract karta hai", "COPY symlink banata hai", "ADD port expose karta hai"], answer: 1 },
  { q: "Ek Dockerfile me multiple CMD allowed hai kya?", options: ["Haan, sab run hoti hain", "Nahi, sirf last CMD run hoti hai", "CMD optional hai", "CMD entrypoint ka alias hai"], answer: 1 },
  { q: "Docker container ka status dekhne ke liye best command?", options: ["docker top", "docker logs", "docker ps", "docker info"], answer: 2 },
  { q: "Production ke liye Docker images kaise optimize karte hain?", options: ["Alag Dockerfile use karke", "Minimum layers aur lightweight base image", "CMD comment karke", "RUN command me UI add karke"], answer: 1 }
];

initQuiz();
