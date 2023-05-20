const express = require('express');
const cors = require('cors');
const userController = require('../backend/controllers/UserController')
const linksController = require('../backend/controllers/LinksController')
const app = express();
app.use(cors());
const port = 3000;
app.use(express.json());

app.post('/api/register',cors(),userController.register);
app.post('/api/login',cors(),userController.login);
app.post('/api/links/add',cors(),linksController.addLinks);
app.get('/api/links',cors(),linksController.getLinks);
app.delete('/api/links', cors(), linksController.deleteLink);


app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});