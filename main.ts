#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import gradient from "gradient-string";
import showBanner from "node-banner";

(async () => {
    await showBanner("The Word Counter!", "Count Letters, or Words in your Sentence or words!", "red", "green")
})();

async function WordCounter() {
    let ask1 = await inquirer.prompt([
        {
            name: "Type101_",
            type: "list",
            choices: [`Find Sentence Word-Length`,`Letters from Words Length`],
            message: gradient.retro("What do you want to do?")
        }
    ])
    let { Type101_ } = ask1;

    if (Type101_ === "Find Sentence Word-Length") {
        let answers: {
            Sentence: string
        } = await inquirer.prompt([
            {
                name: "Sentence",
                type: "input",
                message: chalk.cyanBright.italic("Enter your Sentence:")
            }
        ])
        let { Sentence } = answers;

        let words = Sentence.trim().split(' ');
        console.log(`Your sentence length is ${words.length}`);
        
        let Again_ = await inquirer.prompt([
            {
                name: "Again",
                type: "list",
                choices: [`Yes`,`No`],
                message: gradient.retro("Use counter again?")
            }
        ])
        let { Again } = Again_
        
        Again === "Yes" 
        ? WordCounter()
        : process.exit();
    } else {
        let answers = await inquirer.prompt([
            {
                name: "Word",
                type: "input",
                message: chalk.cyanBright.italic("Enter your Word:"),
                validate: (input: string) => {
                    if (input.length > 14) {
                        return "Words are smaller than that."
                    }
                    return true
                }
            }
        ])
        let { Word } = answers;

        if (Word) {
            console.log(`Length of your word is ${Word.length}`);
        }
    }
}

setTimeout(() => {
    WordCounter()
}, 100)