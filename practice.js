// function checkPalindrome(str) {
//     let j = str.length - 1;
//     for (let i = 0; i <= j / 2; i++) {
//         let x = str[i]; //forward character
//         let y = str[j - i]; //backward character
//         if (x != y) {
//         }
//     }
//     ///return false if string not match
//     return true;
// }

// function square(num) {
//     return num * num 
// }

// const square = function(num) {
//     return num * num
// }

// const square = (num) => num * num

// const Greeting = (props) => {
//     return <h1>{props.message}</h1>
// }

// function Greeting(props){
//     return <h1>{props.message}</h1>
// }

// Array.prototype.map
// array.map() returns the new array by transforming each and every element
// in the original array by applying a function to it
// Immutable

// const numbers = [1,2,3,4,5,6,7,8,9]
// numbers.reverse() // Mutable Method

//  const squareNumbers = numbers.map((num)=> num*num)
// const tenMultiplesArray = numbers.map((num)=> num*10)
// const stringsArray = ["Product1","Product2","Product3","Product4"]
// const elementsArray = stringsArray.map((product)=>{
//     return `<h1>${product}</h1>`
// })

// Array.prototype.filter
// array.filter() will loop through each and every element in the array and returns new array
// with elements matching the condition in thte callback function

// const evens = numbers.filter((num)=> num % 2 === 0)
// const odds = numbers.filter((num)=> num % 2 != 0)
// const ages = [23,12,24,6,45,52,16]
// const childrens = ages.filter((age) => age < 18)//ages less than 18 
//[12,6,16] //output

// A list of podcasts. find out the podcasts which are free
// const podcasts = [
//     {title:"Learn React",rating:9,paid:true},
//     {title:"Learn HTML5",rating:6,paid:false},
//     {title:"Learn Redux",rating:9,paid:true},
//     {title:"Learn CSS3",rating:8,paid:false},
//     {title:"Learn Node",rating:9,paid:false}
// ]
//required output after filter
// [
//     {title:"Learn HTML5",rating:6,paid:false},
//     {title:"Learn CSS3",rating:8,paid:false},
//     {title:"Learn Node",rating:9,paid:false},
// ]

// output after map
// [   
//    {title:"Learn HTML5",rating:6}
//    {title:"Learn CSS3",rating:8}
//    {title:"Learn Node",rating:9}
// ]

// function getfreepodcasts(podcasts){
    // filter list by paid prop
    // use map to create a new array with the spacified properties
//     return podcasts
//         .filter(item=>item.paid === false)
//         .map(podcast => {
//             return{
//                 title:podcast.title,
//                 rating:podcast.rating
//             }
//         })
// }

//by map
// var arr=[2,4,6];
// var result = arr.map(x=>x*3);//output multiplied by 3

//by forEach
// function func(){
//     //original array
//     const items=[12,24,36];
//     const copy=[];

//     items.forEach(funciton(item){
//         //item*2+2
//         copy.push(item*2+2);
//     });
//     console.log(copy);
// }

// const employees=[
//     {name:"Adam",salary:5000,bonus:500,tax:1000},
//     {name:"Noah",salary:8000,bonus:1500,tax:2500},
//     {name:"Fabiano",salary:1500,bonus:500,tax:200},
//     {name:"Ali",salary:4500,bonus:1000,tax:900},
// ]

// // require output:
// // [
// //     {name:"Adam",netEarning:4500},
// //     {name:"Noah",netEarning:7500},
// //     {name:"fabiano",netEarning:1800},
// //     {name:"Ali",netEarning:4600} 
// let newArr = employees.map((obj)=>{
//     newObj={};
//     newObj.name=obj.name;
//     newObj.newEarning=obj.salary+obj.bonus-obj.tax;
//     return newObj;
// });
// console.log(newArr);

// const prices = [1800,2000,null,3000,5000,"Thousand",500,8000];

// //elt>2000 && ele is not a null
// //output = [3000,5000,8000]
// const filteredPrices = prices.filter((x)=>x>2000);
// console.log(filteredPrices);