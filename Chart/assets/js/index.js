const curr_arr=[];
let emp_arr=[];
let points;
let myAreaChart = null;

function chart_points(Data){
    points=Data;
    chart();
}
function empty_array(){
for(let i = 0;i<points.length;i++){
emp_arr.push('');
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
        labels: emp_arr,
        datasets: [{
            label:emp_arr,
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
function curr_array(){
    Object.keys(currency.available_currencies).forEach(key => {
        curr_arr.push(key);
        
    });
}
function dropdown1(){
    curr_array();
    const dropdownItemsContainer1 = document.getElementById('dropdownItems1');
    curr_arr.forEach(item =>{
        const dropdownItem = document.createElement('a');
        dropdownItem.className = 'dropdown-item currency1';
        dropdownItem.href = '#';
        dropdownItem.textContent = item;
        dropdownItemsContainer1.appendChild(dropdownItem);
    });
    
}
function dropdown2(){
    curr_array();
    const dropdownItemsContainer1 = document.getElementById('dropdownItems2');
    curr_arr.forEach(item =>{
        const dropdownItem = document.createElement('a');
        dropdownItem.className = 'dropdown-item currency2';
        dropdownItem.href = '#';
        dropdownItem.textContent = item;
        dropdownItemsContainer1.appendChild(dropdownItem);
    });
    
}

dropdown1();
dropdown2();
