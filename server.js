const app = require('./src/app.js');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`O servidor está rodando em http://localhost:${PORT}`);
});
