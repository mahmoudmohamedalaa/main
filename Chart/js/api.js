axios.get('https://marketdata.tradermade.com/api/v1/live_currencies_list?api_key=IhNDplgSDJWAxAXFyIKH')
        .then(response => {
    
        console.log(response.data);
    
        })
        .catch(error => {
        console.log(error);
        });
        axios.get(' https://marketdata.tradermade.com/api/v1/timeseries?api_key=IhNDplgSDJWAxAXFyIKH&currency=USDEGP&format=records&start_date=2024-10-16-19:32&end_date=2024-10-22-19:32&interval=hourly&period=24')
        .then(response => {
    
        console.log(response.data);
    
        })
        .catch(error => {
        console.log(error);
        });
        