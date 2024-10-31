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
const averageDiv=document.getElementById("average");
const rate_div=document.getElementById("rate");
const percent_div=document.getElementById("percent");
const button_15m = document.getElementById('quarter');
const button_hour = document.getElementById('hour');
const button_day = document.getElementById('day');
const button_week = document.getElementById('week');
const button_month = document.getElementById('month');
button_15m.disabled = true;
button_hour.disabled = true;
button_day.disabled = true;
button_week.disabled = true;
button_month.disabled = true;

function Button_Enable(){
    if(Exchange){
        button_15m.disabled = false;
        button_hour.disabled = false;
        button_day.disabled = false;
        button_week.disabled = false;
        button_month.disabled = false;
        }
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getUTCDate()).padStart(2, '0');
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


const dropdownItems_currency1 = document.querySelectorAll('.currency1');
const firstinput = document.getElementById('currency1');
dropdownItems_currency1.forEach(item => {
    item.addEventListener('click', function() {
        firstinput.textContent = this.textContent;
        document.getElementById("button1").textContent=this.textContent;
        input1=this.textContent;
        console.log(input1);
        let flag1=document.getElementById("flag1")
        showFlag(input1,flag1);

    });
});
const dropdownItems_currency2 = document.querySelectorAll('.currency2');
const secondinput = document.getElementById('currency2');
dropdownItems_currency2.forEach(item => {
    item.addEventListener('click', function() {

        secondinput.textContent = this.textContent; 
        document.getElementById("button2").textContent=this.textContent;
        input2=this.textContent;
        let flag2=document.getElementById("flag2")
        showFlag(input2,flag2);
        Exchange = input1+input2;
        Button_Enable();
        console.log(Exchange);

});

});
button_15m.addEventListener('click', function() {
    console.log('quarter was clicked!');
    let quarter = new Date(now1);
    quarter.setMinutes(now1.getMinutes()-15);
    start_date=formatDate(quarter);
    console.log(start_date);
    end_date=formattedDate;
    console.log(end_date);

    interval='minute';
    period=1;
    time_series();
});
button_hour.addEventListener('click', function() {
    console.log('1 Hour was clicked!');
    let hour = new Date(now1);
    hour.setMinutes(now1.getMinutes()-60);
    start_date=formatDate(hour);
    console.log(start_date);
    end_date=formattedDate;
    console.log(end_date);

    interval='minute';
    period=5;
    time_series();
});
button_day.addEventListener('click', function() {
    console.log('1 Day was clicked!');
    let day = new Date(now1);
    day.setHours(now1.getHours()-24);
    start_date=formatDate(day);
    console.log(start_date);
    end_date=formattedDate;
    console.log(end_date);

    interval='hourly';
    period=1;
    time_series();
});
button_week.addEventListener('click', function() {
    console.log('1 Week was clicked!');
    let week = new Date(now1);
    week.setHours(now1.getHours()-24*7);
    start_date=formatDate(week);
    console.log(start_date);
    end_date=formattedDate;
    console.log(end_date);

    interval='hourly';
    period=6;
    time_series();
});
button_month.addEventListener('click', function() {
    console.log('1 Month was clicked!');
    let month = new Date(now1);
    month.setMonth(now1.getMonth()-1);
    start_date=formatDate(month);
    console.log(start_date);
    end_date=formattedDate;
    console.log(end_date);

    interval='daily';
    period=1;
time_series();
});



function average_calculate(array){
average=sum/array.length;
console.log(average);
}
function rate_calculate(array){
    length=array.length;
    rate=array[length-1]-array[length-2];
    console.log(rate);
}
function percent_calculate(array){
    let subtract=array[length-1]-array[0];
    percent=rate/array[0];
    percent*=100;
    console.log(percent);

}
