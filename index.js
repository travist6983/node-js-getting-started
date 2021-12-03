const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://baf33550a38ad5448f4cecb267f46b06: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@qualfonteststore.myshopify.com/admin/api/2021-10/orders.json',
  headers: {
    'Content-Type': 'application/json'
  }
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });