const inquirer = require("inquirer");
const figlet = require("figlet");

figlet("Amir Mustafa   ( o . o )", function(err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
  display();
});
const display = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "c1",
        choices: ["About", "Projects", "Skills", "Exit"]
      }
    ])
    .then(ans => {
      //console.log(ans);
      if (ans.c1 == "About") {
        console.log(
          "I am an allround web developer. I am a programmer with good knowledge of Node JS, React JS, Mongo DB, Laravel, JavaScript. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing website. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'"
        );
        displayNext();
      } else if (ans.c1 == "Projects") {
        console.log("Check out my github: https://github.com/AmirMustafa");
        displayNext();
      } else if (ans.c1 == "Skills") {
        console.log("React JS, Node JS, Laravel, mysql, mongo, PHP, git");
        displayNext();
      } else {
        console.log("Ok Bye");
      }
    });
};

const displayNext = () => {
  inquirer
    .prompt([{ type: "list", name: "c2", choices: ["Back"] }])
    .then(ans => {
      //console.log(ans);
      if (ans.c2 == "Back") {
        display();
      }
    });
};
