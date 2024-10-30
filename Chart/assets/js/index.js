const currency_arr=[];
let none_array=[];
let points;
let myAreaChart = null;
const currencyToFlagCode = {
    AED: "ae",
    ALL: "al",
    AMD: "am",
    AOA: "ao",
    ARS: "ar",
    AUD: "au",
    BAM: "ba",
    BDT: "bd",
    BGN: "bg",
    BHD: "bh",
    BIF: "bi",
    BRL: "br",
    BYN: "by",
    CAD: "ca",
    CHF: "ch",
    CLP: "cl",
    CNH: "cn",
    CNY: "cn",
    COP: "co",
    CZK: "cz",
    DKK: "dk",
    EGP: "eg",
    EUR: "eu",
    GBP: "gb",
    GHS: "gh",
    HKD: "hk",
    HRK: "hr",
    HUF: "hu",
    IDR: "id",
    ILS: "il",
    INR: "in",
    ISK: "is",
    JOD: "jo",
    JPY: "jp",
    KES: "ke",
    KRW: "kr",
    KWD: "kw",
    KZT: "kz",
    LBP: "lb",
    LKR: "lk",
    MAD: "ma",
    MUR: "mu",
    MXN: "mx",
    MYR: "my",
    NGN: "ng",
    NOK: "no",
    NZD: "nz",
    OMR: "om",
    PEN: "pe",
    PHP: "ph",
    PKR: "pk",
    PLN: "pl",
    QAR: "qa",
    RON: "ro",
    RUB: "ru",
    SAR: "sa",
    SEK: "se",
    SGD: "sg",
    THB: "th",
    TND: "tn",
    TRY: "tr",
    TWD: "tw",
    TZS: "tz",
    UAH: "ua",
    UGX: "ug",
    USD: "us",
    VND: "vn",
    XAF: "cm",
    XOF: "sn",
    XAG: "ag",
    XAU: "au",
    XPD: "pd",
    XPT: "pt",
    ZAR: "za",
    ZWL: "zw",
};

function flag_Show(flag,icon){
    icon.className="";
    icon.classList.add("fi","fis",`fi-${currencyToFlagCode[flag]}` , "rounded-circle");

}

function chart_points(Data){
    points=Data;
    chart();
}
function empty_array(){
for(let i = 0;i<points.length;i++){
none_array.push('');
}
}
function chart(){
    empty_array();
    if(myAreaChart){
        myAreaChart.destroy();
    }
const ctx = document.getElementById('myChart').getContext('2d');
myAreaChart = new Chart(ctx, {
    type: 'line', // Use 'line' for an area chart
    data: {
        labels: none_array,
        datasets: [{
            label:none_array,
            data: points,
            fill: true, // Enable filling
            backgroundColor: '#f3f9eb',
            borderColor: '#93c64e',
            borderWidth: 1,
        }]
    },
    options: {
        scales: {
            x: {
                display: false
            },
            y: {
                display: false
            }
        }, plugins: {
            legend: {
                display: false // Optional: Hide the legend
            }
        }
        }
    
});}
function currency_array(){
    Object.keys(currency.available_currencies).forEach(key => {
        currency_arr.push(key);
        
    });
}
function dropdown_currency1(){
    currency_array();
    const dropdownItemsContainer1 = document.getElementById('dropdownItems1');
    currency_arr.forEach(item =>{
        const dropdownItem = document.createElement('a');
        dropdownItem.className = 'dropdown-item currency1';
        dropdownItem.textContent = item;
        dropdownItemsContainer1.appendChild(dropdownItem);
    });
    
}
function dropdown_currency2(){
    currency_array();
    const dropdownItemsContainer1 = document.getElementById('dropdownItems2');
    currency_arr.forEach(item =>{
        const dropdownItem = document.createElement('a');
        dropdownItem.className = 'dropdown-item currency2';
        dropdownItem.textContent = item;
        dropdownItemsContainer1.appendChild(dropdownItem);


    });
    
}
function default_chart(){
    if(myAreaChart){
        myAreaChart.destroy();
    }
const ctx = document.getElementById('myChart').getContext('2d');
myAreaChart = new Chart(ctx, {
    type: 'line', // Use 'line' for an area chart
    data: {
        labels: ['','','',''],
        datasets: [{
            label:none_array,
            data: [1,2,3,4],
            fill: true, // Enable filling
            backgroundColor: '#f3f9eb',
            borderColor: '#93c64e',
            borderWidth: 1,
        }]
    },
    options: {
        scales: {
            x: {
                display: false
            },
            y: {
                display: false
            }
        }, plugins: {
            legend: {
                display: false //Hide the legend
            }
        }
        }
    
});}


//mobile view handle
function updateClassForMobile() {
    const element = document.getElementById('size');
    const element2 = document.getElementById('dropdown');
    const element3 = document.getElementById('chart');


    if (window.innerWidth <= 450) { // Mobile view
        element.classList.add('flex-column');
        element2.classList.add('w-100');
        element3.classList.add('w-100');


    } else {
        element.classList.remove('flex-column');
    }
}
window.onload = updateClassForMobile();
window.onresize = updateClassForMobile();
dropdown_currency1();
dropdown_currency2();
default_chart();
