const currency = JSON.parse(localStorage.getItem('currency'));
let Exchange;
let Data_points;



if(currency){
        console.log(currency);
}
else{
axios.get('https://marketdata.tradermade.com/api/v1/live_currencies_list?api_key=IhNDplgSDJWAxAXFyIKH')
        .then(response => {
        localStorage.setItem('currency',JSON.stringify(response.data));  
        })
        .catch(error => {
        console.log(error);
        alert('check variables in the link if they are correct');
        })
}
function time_series(){
        axios.get(`https://marketdata.tradermade.com/api/v1/timeseries?api_key=IhNDplgSDJWAxAXFyIKH&currency=${Exchange}&format=columns&start_date=${start_date}&end_date=${end_date}&interval=${interval}&period=${period}`)

                .then(response => {
                localStorage.setItem('Data',JSON.stringify(response.data));  
                let Data=response.data.quotes.close;
                Data_points=Object.values(Data);
                console.log(Data_points);
                show_calc();
                })
                .catch(error => {
                console.log(error);
                alert('check variables in the link if they are correct');

                });
}