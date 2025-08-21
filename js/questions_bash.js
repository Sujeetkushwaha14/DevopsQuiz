questions = [
  { q: "Bash me variable assign kaise karte hain?", options: ["x = 5", "x := 5", "x=5", "set x 5"], answer: 2 },
  { q: "Bash me variable print karne ka sahi syntax kya hai?", options: ["echo x", "print($x)", "echo $x", "printf x"], answer: 2 },
  { q: "Bash me if condition syntax kaise hota hai?", options: ["if [ condition ]; then", "if (condition) {", "if condition: then", "if condition end"], answer: 0 },
  { q: "Bash loop ke liye kaunsa syntax sahi hai?", options: ["repeat 1 to 10", "for i=1;i<=10;i++", "for i in {1..10}; do", "loop (1-10)"], answer: 2 },
  { q: "Bash me function define kaise karte hain?", options: ["function myFunc() {}", "myFunc() { ... }", "def myFunc():", "fun myFunc()"], answer: 1 },
  { q: "$0 ka matlab kya hai bash script me?", options: ["Last argument", "Exit code", "Current script name", "User name"], answer: 2 },
  { q: "Bash me exit status check karne ke liye kya use hota hai?", options: ["exitCode", "$?", "$status", "code"], answer: 1 },
  { q: "Kaunsi command use karte hain file existence check karne ke liye?", options: ["if file.exist", "if [ -f filename ]", "check file filename", "testfile filename"], answer: 1 },
  { q: "Kaunsi command use hoti hai file execute permission dene ke liye?", options: ["chmod +x file.sh", "run file.sh", "exec file.sh", "permission file.sh"], answer: 0 },
  { q: "Kaunsa command use hota hai user input lene ke liye bash me?", options: ["input", "echo", "prompt", "read"], answer: 3 }
];

initQuiz();
