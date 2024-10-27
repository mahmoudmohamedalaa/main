const currency = JSON.parse(localStorage.getItem('currency'));
//const Data = JSON.parse(localStorage.getItem('Data'));
let Exchange;


if(currency){
        const currency = JSON.parse(localStorage.getItem('currency'));
        console.log(currency);
}
else{
axios.get('https://marketdata.tradermade.com/api/v1/live_currencies_list?api_key=IhNDplgSDJWAxAXFyIKH')
        .then(response => {
        const cachedData = localStorage.setItem('currency',JSON.stringify(response.data));  
        })
        .catch(error => {
        console.log(error);
        })
}
