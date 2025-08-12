const { test } = require("./example02");

try {
  console.log("Iniciando o processo...");

  // Exemplo de erro ao tentar acessar propriedade de null
  // const user = null;
  // console.log(user.name); // Isso vai gerar um erro

  test();

  // throw new Error('Este é um erro personalizado!')
} catch (error) {
  console.error("❌ Ocorreu um erro:", error.message);
} finally {
  console.log("Finalizando o processo...");
}
