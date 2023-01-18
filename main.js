// const nums= [12,14,21,54,75,47,8,9]

// //forEach

// const num_square = []
// const num_square2 = []
// nums.forEach(function(num){
//     num_square.push(num*num);
// })

// nums.forEach(function(num,i){
//     num_square2.push(nums[i]*nums[i]);
// })

// console.log(num_square);
// console.log(num_sqaure2);
//for(let i=0;i<nums.length ; i++){
//    console.log(nums[i]);
//}

//array.forEach(callback(element, index, arr), thisValue)

// const nums= [12,14,21,54,75,47,8,9]

// const num_square=[]

// nums.forEach((num)=>{
//     num_square.push(num*)
// })

// const nums= [12,14,21,54,75,47,8,9]
// const names = []

//Map

//array.map(function(currentValue, index, arr), thisValue)

// const num_sqaure=[]

// nums.map(function(num){
//     num_sqaure.push(10+num);
// })

// nums.map((num,i)=>{
//     num_sqaure.push(10+nums[i]);
// })



// const nums= [12,14,21,54,75,47,8,9]
// Filter
// array.filter(callback(element, index, arr), thisValue)

// const num2 = []

// nums.filter(function(num){
//     if(num>15){
//         num2.push(num);
//     }
// })

// console.log(num2)

// const nums= [12,14,21,54,75,47,8,9]
// // Reduce

// total = 176
// // array.reduce( function(total, currentValue, currentIndex, arr). initialValue)

// const a = nums.reduce(function(total,num){
//     return total+num;
// },10)
// console.log(a); 


// const nums= [12,14,21,54,75,47,8,9]
// // 100<2
// // sort

// // arr.sort(compareFunction)

// const a = nums.sort();
// const b = nums.sort((a,b)=>a-b);

// console.log(a);
// console.log(b);

// console.log(nums);
// Q. Write a code which gives the sum of nums b/w 20 to 50
const nums= [12,14,21,54,75,47,8,9]

const ans = nums.filter(function(num){
    if(num>20 && num<50){
        return true;
    }
}).reduce((total,i)=>{
    return total+i
},0);

console.log(ans);