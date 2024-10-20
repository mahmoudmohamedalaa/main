const arr1=[1,2,3,4,5];
const arr2=[1,2,3,4,5];
let arr_sum=[];

function sum(array1,array2){
    for(let i=0;i<arr1.length&&i<arr2.length;i++){

        arr_sum[i]=arr1[i]+arr2[i];}
        console.log(arr_sum);


    }

sum(arr1,arr2);