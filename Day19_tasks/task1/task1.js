let arr=[];

function add(){
    let add = document.getElementById("add");


    add.addEventListener("click",function(){

    let input=document.getElementById("input").value;
        if(input){
            arr.push(input);
            document.getElementById("input").value='';
            
        }

        
    
    });

}
function display(){

let show = document.getElementById("disp");
const itemList = document.getElementById('itemList');
show.addEventListener("click",function(){
        
    arr.forEach(function(input,index) {
        const li = document.createElement('li');
        li.innerText = `Element ${index} = ${arr[index]}`;
        itemList.appendChild(li);
});

    


} );
}


add();
display();


