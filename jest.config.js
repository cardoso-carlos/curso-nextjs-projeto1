module.exports = {
  setupFilesAfterEnv: ['./setupTests.js'], // Adicione isso se não estiver presente
  testEnvironment: 'jsdom', // Pode ser 'node' se não estiver usando DOM
};
