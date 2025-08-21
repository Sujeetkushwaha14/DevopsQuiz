questions = [
  { q: "How do you assign a variable in Bash?", options: ["x = 5", "x := 5", "x=5", "set x 5"], answer: 2 },
  { q: "What is the correct syntax to print a variable in Bash?", options: ["echo x", "print($x)", "echo $x", "printf x"], answer: 2 },
  { q: "What is the correct syntax for an if condition in Bash?", options: ["if [ condition ]; then", "if (condition) {", "if condition: then", "if condition end"], answer: 0 },
  { q: "Which syntax is correct for a loop in Bash?", options: ["repeat 1 to 10", "for i=1;i<=10;i++", "for i in {1..10}; do", "loop (1-10)"], answer: 2 },
  { q: "How do you define a function in Bash?", options: ["function myFunc() {}", "myFunc() { ... }", "def myFunc():", "fun myFunc()"], answer: 1 },
  { q: "What does $0 represent in a Bash script?", options: ["Last argument", "Exit code", "Current script name", "User name"], answer: 2 },
  { q: "Which symbol is used to check the exit status in Bash?", options: ["exitCode", "$?", "$status", "code"], answer: 1 },
  { q: "Which command checks if a file exists in Bash?", options: ["if file.exist", "if [ -f filename ]", "check file filename", "testfile filename"], answer: 1 },
  { q: "Which command gives execute permission to a file in Bash?", options: ["chmod +x file.sh", "run file.sh", "exec file.sh", "permission file.sh"], answer: 0 },
  { q: "Which command is used to take user input in Bash?", options: ["input", "echo", "prompt", "read"], answer: 3 }
];

initQuiz();
