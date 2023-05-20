const axios = require('axios');

exports.addLinks = (req,res) => {
    const authHeader = req.headers['authorization'];
    const data = req.body
    axios.post('http://tecnical.bewe.co/links/add',
        data,{
            headers: {
                'Authorization': `${authHeader}`,
                'Content-Type': 'application/json'
            }
        }
    )
    .then(response => {
        res.json(response.data)
    })
    .catch(error => {
        console.log(error)
        res.status(500).send(error);
    })
}
exports.getLinks = (req,res) => {
    const authHeader = req.headers['authorization'];
    axios.get('http://tecnical.bewe.co/links',{
        headers: {
            'Authorization': `${authHeader}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        res.json(response.data)
    })
    .catch(error => {
        console.log(error)
        res.status(500).send(error);
    })
}

exports.deleteLink = (req , res) => {
    const authHeader = req.headers['authorization'];
    const id = req.query.id;
    axios.delete(`http://tecnical.bewe.co/links?id=${id}`,{
        headers: {
            'Authorization': `${authHeader}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        res.json(response.data)
    })
    .catch(error => {
        console.log(error)
        res.status(500).send(error);
    })
}