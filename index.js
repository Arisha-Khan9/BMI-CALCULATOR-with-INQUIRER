import inquirer from "inquirer";
const main = async () => {
    let answers = await inquirer.prompt([
        {
            name: 'weight',
            type: 'number',
            message: 'weight (kg):'
        },
        {
            name: 'height',
            type: 'number',
            message: 'height (m):'
        },
    ]);
    const calculateBMI = (weight, height) => weight / (height * height);
    const { weight, height } = (answers);
    console.log(`BMI: ${calculateBMI(weight, height).toFixed(2)}`);
};
// here, tofixed is used for taking 2 numbers in decimal answer
main();
