const currency = JSON.parse(localStorage.getItem('currency'));
let Exchange;


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
        console.log('check variables in the link if they are correct');
        })
}
function time_series(){
        axios.get(`https://marketdata.tradermade.com/api/v1/timeseries?api_key=IhNDplgSDJWAxAXFyIKH&currency=${Exchange}&format=columns&start_date=${start_date}&end_date=${end_date}&interval=${interval}&period=${period}`)

                .then(response => {
                localStorage.setItem('Data',JSON.stringify(response.data));  
                let Data=response.data.quotes.close;
                let Data_points=Object.values(Data);
                console.log(Data_points);
                sum = Data_points.reduce((accumulator, current) => accumulator + current, 0);
                Average_Calculate(Data_points);
                average_div.textContent='$' + average;
                Rate_Calculate(Data_points);
                rate_div.textContent=rate;
                Percent_Calculate(Data_points);
                percent_div.textContent=`(${percent}%)`;
                chart_points(Data_points);
                })
                .catch(error => {
                console.log(error);
                console.log('check variables in the link if they are correct');

                });
}