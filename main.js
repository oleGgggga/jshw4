// ////массивы/////////////
// let arr =['hj', 'shj'];
// arr[8]='gf';
// console.log(arr.length);


// arr['jbo'] = 87;

// console.log(arr.length);
// arr[arr.length]='sjcbukvwdcu';
// console.log(arr);
// arr.length=6;
// console.log(arr);
// ///push at end
// arr.push('apple');
// console.log(arr);
// //// unshift at begin
// arr.unshift('dbkldclsakbdchabakl');
// console.log(arr);
// ////pop delet last elemen in array
// /////shift delet first element in array
// let a =arr.pop();
// let b =arr.shift();
// console.log(`${a}, ${b}`);
// console.log(arr);
// ///////splace
// arr.splice(1, 1);
// console.log(arr);
// arr.splice(1, 0, 'cdabIUGDVUFDSCYGcfuo', 'asbcohSAUCygi,', 'JCBXLhbhiB');
// console.log(arr);
// arr.splice(1, 3);
// //////slice
// arr2 = arr.slice(1, 2);
// ////////split
// let names ='dhsljk,sdhvbk,hsdvuyh,hdwf';
// let namesArr = names.split(',');
// let namesArr2 = names.split(',', 2);
// console.log(namesArr);
// /////join from array to string
// console.log(new Array(10).join('ko'));
// /////sort
// /////reverse
// ////concat
// ////indexof and lastindexof if no -1 //from right to left(lastinsexof)
// /////// перебор массивов
// let fruits =['apple', 'orange', 'pinaple'];
// console.log(fruits);
// for (let i=0; i< fruits.length; i++){
//     console.log(fruits[i]);
// }
// let number=[];
// for (let i=8; i<=20; i++){
//     number.push(i);

// }
// console.log(number);
let arr=[1,2,3,4,5];
for(let i=0; i < arr.length; i++){
    console.log(arr[i]);
}
/////////////////
let arr2=[-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(let i=0; i< arr2.length; i++){
    if (arr2[i]>=-10 && arr2[i]<=-3){
        console.log(arr2[i]);
    } 
}
///////////////////////
let number1=[];
let number2=[];
let result=0;
for (let i=23; i<=57; i++){
    number1.push(i);
}
console.log(number1);
for(let i=0; i<number1.length; i++){
   result +=number1[i];
}
console.log(result);
//////////////////
let i=23;
while(i<=57){
    number2.push(i);
    i++;
}
console.log(number2);
let a=0;
result2=0;
while(a<number2.length){
    result2+=number2[a];
    a++;
}
console.log(result2);
//////////////////

let arr3=['10', '20', '30', '50', '235', '3000'];
for (let i=0; i<arr3.length; i++){
    if(arr3[i].startsWith(1)){
        console.log(arr3[i]);
    }
    else if(arr3[i].startsWith(2)){
        console.log(arr3[i]);
    }
    else if(arr3[i].startsWith(5)){
        console.log(arr3[i]);
    }
    else{
        continue
    }  
}
//////////////////////////////
let arr4=['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];
let arr4_2 =arr4.splice(arr4.length-2, 2);
document.write(`<strong> ${arr4_2} </strong> ${arr4}`);
///////////////////////////
let arr5 =[5, 6, 8, 'h', 9];
let arr5_1 = arr5.push(1);
let u = arr5_1[arr5_1.length-1]; ////?????????????/
console.log(u);
/////////////////////////
let arr6=[];
let arr6_1 =[];
let z=0;
for(; ;){
    z=prompt('number');
    if (z===' ' || z ===NaN || z ===undefined || z ===null){
        break
    } else {
        arr6.push(z);
    }
}
arr6_1=arr6.sort(function(a, b){
    return a-b;
})
console.log(arr6_1);












