const str ='develop';
function slicee(str){
    const slicee = str.slice(-3);
    console.log(slicee);
    return slicee;



}
if(str.length >= 3){
    console.log(slicee(str)+str+slicee(str));
    
}

