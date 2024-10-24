const curr_arr=[];

function chart(){
const ctx = document.getElementById('myChart').getContext('2d');
const myAreaChart = new Chart(ctx, {
    type: 'line', // Use 'line' for an area chart
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label:'',
            data: [65, 59, 80, 81, 56, 55, 40],
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
        dropdownItem.className = 'dropdown-item';
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
        dropdownItem.className = 'dropdown-item';
        dropdownItem.href = '#';
        dropdownItem.textContent = item;
        dropdownItemsContainer1.appendChild(dropdownItem);
    });
    
}

dropdown1();
dropdown2();
chart();
