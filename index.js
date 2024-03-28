import inquirer from "inquirer";
//Get User Input
let answer = await inquirer.prompt([
    {
        name: "value1",
        type: "number",
        message: "Enter 1st value..?"
    },
    {
        name: "value2",
        type: "number",
        message: "Enter 2nd value..?"
    },
    {
        name: "operator",
        type: "list",
        message: "Please select a operator..:",
        choices: ["+", "-", "/", "*"]
    }
]);
// console.log(answer);
// conditional statements
if (answer.operator === "+") {
    console.log(`${answer.value1} ${answer.operator} ${answer.value2} = ${answer.value1 + answer.value2}`);
}
else if (answer.operator === "-") {
    console.log(`${answer.value1} ${answer.operator} ${answer.value2} = ${answer.value1 - answer.value2}`);
}
else if (answer.operator === "*") {
    console.log(`${answer.value1} ${answer.operator} ${answer.value2} = ${answer.value1 * answer.value2}`);
}
else if (answer.operator === "/") {
    console.log(`${answer.value1} ${answer.operator} ${answer.value2} = ${answer.value1 / answer.value2}`);
}
else {
    console.log("Please select right operator");
}
