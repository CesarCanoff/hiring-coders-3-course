class Cielo {
  static compra(params) {
    var fetch  = require('node-fetch');
    
    const response = fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales/', {
      method: 'post',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
        'MerchantId': '1377ee0d-cfbc-4d3f-9105-38b527205986',
        'MerchantKey': 'RJGWKLEOXAHIIYKGQYFIKJZYLAMXPLJCRZAKFGYO'
      }
    });
    const data = response.json();
    
    console.log(data);
}
}
module.exports = Cielo;