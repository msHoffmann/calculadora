const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000 || process.env.PORT;
const bodyparser = require('body-parser');
app.use(express.json());
app.use(cors());


app.use(bodyparser.urlencoded({extended: true}))

app.get('/calculadora/about', (req, res) => {
  res.send ({message: 'Calculadora para facilitar sua vida'});
})

app.get('/calculadora', (req, res) => {
  res.sendFile(__dirname+"/index.html")
})

app.post('/soma', (req, res) => {
  const n1=Number(req.body.num1)
  const n2=Number(req.body.num2)
  const soma=n1 +n2
  res.send('O resultado é ' + soma)
})

app.post('/subtracao', (req, res) => {
  const n1=Number(req.body.num1)
  const n2=Number(req.body.num2)
  const subtracao=n1 -n2
  res.send('O resultado é ' + subtracao)
})

app.post('/divisao', (req, res) => {
  const n1=Number(req.body.num1)
  const n2=Number(req.body.num2)
  const divisao=n1 /n2
  res.send('O resultado é ' + divisao)
})

app.post('/multiplicacao', (req, res) => {
  const n1=Number(req.body.num1)
  const n2=Number(req.body.num2)
  const multiplicacao=n1 *n2
  res.send('O resultado é ' + multiplicacao)
})

app.listen(PORT, (error) => {
  if (error) {
    console.log("Deu erro.", error);
  } else {
    console.log("Está rodando, parabéns.", PORT);
  }
});