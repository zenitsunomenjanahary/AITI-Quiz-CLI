import inquirer from "inquirer";

import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";


console.log(gradient.pastel.multiline(" AITI-Quiz \n"));

const response = {
    reactCreator: "facebook",
    programmingLanguages:['PHP','Javascript'],
    javascriptFramework: 'Angular',
    calcul: 66
}


inquirer
    .prompt([
        {
            type: "input",
            name:"reactCreator",
            message: "Who create react ?",
            validate: (input) => {
                const response = input.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
                if(!response.length){
                    console.info("invalid response");
                    return
                }
                return true;
            }
        },
        {
            type: "checkbox",
            name: "programmingLanguages",
            message: "which is a programming language ?",
            choices: ["PHP","HTML","MySQL","JavaScript","CSS","MongoDB"],
            validate: (input)=>{
                if(!input.length){
                    console.info("required response")
                    return
                }
                return true
            }
        },
        {
            type: "checkbox",
            name: "framework",
            message: "which is a javascript framework ?",
            choices: ["React","Angular","Oracle"],
            validate: (input)=>{
                if(!input.length){
                    console.info("required response")
                    return
                }
                if(input.length > 1){
                    console.info("unique response")
                    return;
                }
                return true
            }
        },
        {
            type: "input",
            name: "calcul",
            message: " 16 * 4 + 2 = ",
            validate: (input) => {
                const nb = parseInt(input);
                if(isNaN(nb)) return "Not a valid Number"
                return true
            }
        },

    ])
    .then( answers => {
        let score = 0;
        if(answers.reactCreator.toLowerCase() == response.reactCreator.toLowerCase()) score = score + 5
        if(answers.programmingLanguages){
            if(response.programmingLanguages.length == answers.programmingLanguages.length){
                if(answers.programmingLanguages.includes("JavaScript")) score = score + 2
                if(answers.programmingLanguages.includes("PHP")) score = score + 3
            }else{
                if(answers.programmingLanguages.includes("Javascript") || answers.programmingLanguages.includes("PHP")) score = score + 2
            }
        }
        if(answers.framework.includes("Angular")) score = score + 5
        if(answers.calcul == '66') score = score + 5

        chalkAnimation.karaoke("Score : " + score + "/20");
    })
