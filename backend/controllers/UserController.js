const axios = require('axios');
exports.register = (req, res) => {
    const data = req.body
    axios.post('http://tecnical.bewe.co/auth/singin', data)
    .then(response => {
        console.log(response.data)
        res.json(response.data)
    })
    .catch(error => {
        console.log(error)
        res.status(500).send(error);
    })
}

exports.login = (req,res) => {
    const data = req.body
    axios.post('http://tecnical.bewe.co/auth/login', data)
    .then(response => {
        console.log(response.data)
        res.json(response.data)
    })
    .catch(error => {
        console.log(error)
        res.status(500).send(error);
    })
}