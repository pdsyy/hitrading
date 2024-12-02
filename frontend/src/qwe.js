const axios = require("axios")
axios.post(`https://api.whitepay.com/private-api/crypto-orders/10k`, {
    amount: "99",
    currency: "USDT",
}, {
    headers: {
        'Authorization': `Bearer D8SqBILcivBK7FvHam85yAMZdcVdhNMenWFgBFMe`
    }
}).then((response) => {
    console.log(response.data.order.acquiring_url);
    console.error(response.status);
    //  document.location.href = response.data.order.acquiring_url
})