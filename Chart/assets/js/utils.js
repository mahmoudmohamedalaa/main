//functionality
let input1;
let input2;
let start_date;
let end_date;
let interval;
let period;
let average;
let percent;
let rate;
let sum;
const average_div=document.getElementById("average");
const rate_div=document.getElementById("rate");
const percent_div=document.getElementById("percent");


function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getUTCDate()-2).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}-${hours}:${minutes}`;
}   
let now1 = new Date();
const formattedDate = formatDate(now1);
console.log(formattedDate);

let quarter = new Date(now1);
quarter.setMinutes(now1.getMinutes()-15);
console.log(formatDate(quarter));


const dropdownItems1 = document.querySelectorAll('.currency1');
const firstinput = document.getElementById('currency1');
dropdownItems1.forEach(item => {
    item.addEventListener('click', function() {
        firstinput.textContent = this.textContent;
        document.getElementById("button1").textContent=this.textContent;
        input1=this.textContent;

    });
});
const dropdownItems2 = document.querySelectorAll('.currency2');
const secondinput = document.getElementById('currency2');
dropdownItems2.forEach(item => {
    item.addEventListener('click', function() {

        secondinput.textContent = this.textContent; 
        document.getElementById("button2").textContent=this.textContent;
        input2=this.textContent;
        Exchange = input1+input2;
        console.log(Exchange);
    // if(Data){
    //         const Data = JSON.parse(localStorage.getItem('Data'));
    //         console.log(Data);
    
    // }
    // else{

    // axios.get(`https://marketdata.tradermade.com/api/v1/timeseries?api_key=IhNDplgSDJWAxAXFyIKH&currency=${Exchange}&format=columns&start_date=${start_date}&end_date=${end_date}&interval=${interval}&period=${period}`)
    //         .then(response => {
    //         const Numbers = localStorage.setItem('Data',JSON.stringify(response.data));   
    
    //         })
    //         .catch(error => {
    //         console.log(error);
    //         });
            
    //     }
        



});

});
const button1 = document.getElementById('quarter');
const button2 = document.getElementById('hour');
const button3 = document.getElementById('day');
const button4 = document.getElementById('week');
const button5 = document.getElementById('month');
button1.addEventListener('click', function() {
    console.log('quarter was clicked!');
    let quarter = new Date(now1);
    quarter.setMinutes(now1.getMinutes()-15);
    start_date=formatDate(quarter);
    console.log(start_date);
    end_date=formattedDate;
    console.log(end_date);

    interval='minute';
    period=1;
    //time_series();
});
button2.addEventListener('click', function() {
    console.log('1 Hour was clicked!');
    let hour = new Date(now1);
    hour.setMinutes(now1.getMinutes()-60);
    start_date=formatDate(hour);
    console.log(start_date);
    end_date=formattedDate;
    console.log(end_date);

    interval='minute';
    period=5;
   // time_series();
});
button3.addEventListener('click', function() {
    console.log('1 Day was clicked!');
    let day = new Date(now1);
    day.setHours(now1.getHours()-24);
    start_date=formatDate(day);
    console.log(start_date);
    end_date=formattedDate;
    console.log(end_date);

    interval='hourly';
    period=4;
    //time_series();
});
button4.addEventListener('click', function() {
    console.log('1 Week was clicked!');
    let week = new Date(now1);
    week.setHours(now1.getHours()-24*7);
    start_date=formatDate(week);
    console.log(start_date);
    end_date=formattedDate;
    console.log(end_date);

    interval='daily';
    period=1;
    time_series();
});
button5.addEventListener('click', function() {
    console.log('1 Month was clicked!');
    let month = new Date(now1);
    month.setMonth(now1.getMonth()-1);
    start_date=formatDate(month);
    console.log(start_date);
    end_date=formattedDate;
    console.log(end_date);

    interval='daily';
    period=5;
time_series();
});


function time_series(){
    axios.get(`https://marketdata.tradermade.com/api/v1/timeseries?api_key=IhNDplgSDJWAxAXFyIKH&currency=${Exchange}&format=columns&start_date=${start_date}&end_date=${end_date}&interval=${interval}&period=${period}`)

            .then(response => {
            const Numbers = localStorage.setItem('Data',JSON.stringify(response.data));  
            let Data=response.data.quotes.close;
            let Data_points=Object.values(Data);
            console.log(Data_points);
            sum = Data_points.reduce((accumulator, current) => accumulator + current, 0);
            Average(Data_points);
            average_div.textContent='$' + average;
            Rate(Data_points);
            rate_div.textContent=rate;
            Percent(Data_points);
            percent_div.textContent=`(${percent}%)`;
            chart_points(Data_points);
            })
            .catch(error => {
            console.log(error);
            });
}
function Average(array){
average=sum/array.length;
console.log(average);
}
function Rate(array){
    length=array.length;
    rate=Math.abs(array[length-1]-array[length-2]);
    console.log(rate);
}
function Percent(array){
    let subtract=Math.abs(array[length-1]-array[0]);
    percent=rate/array[0];
    percent*=100;
    console.log(percent);

}

