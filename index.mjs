import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/form', (req, res) => {
    console.log(req);
    console.log(res);
    res.send('Thank you!');
})

app.listen(3000, () => console.log('app listeningon port 3000!'))