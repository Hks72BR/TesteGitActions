import * as fs from 'fs';

async function run() {
  try {
    // Verifica se o arquivo necessário para o build está presente
    const filePath = 'caminho/do/arquivo/necessario.txt';
    if (!fs.existsSync(filePath)) {
      console.error('Arquivo necessário não encontrado. Abortando a pipeline.');
      process.exit(1);
    }

    console.log('Arquivo necessário encontrado. Continuando a pipeline.');
  } catch (error) {
    console.error('Ocorreu um erro durante a execução da action:', error);
    process.exit(1);
  }
}

run();
