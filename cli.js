const { soma, lerArquivo } = require('./index.js');
const chalk = require('chalk');

const resultado = soma (1, 2);

console.log(chalk.bgRed('a soma é: ')), (chalk.red(resultado));

const caminhoArquivo = process.argv[2]
lerArquivo(caminhoArquivo)
.then((conteudoArquivo) => {
    console.log(chalk.bgGreen(conteudoArquivo))
});

const inputs = process.argv
console.log(inputs);