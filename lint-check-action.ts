import * as fs from 'fs';

async function run() {
  try {
    
    const filePath = 'package.json';
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
