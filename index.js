/*let s="1112223331";

let a=-1,b=-1,c=-1;
let ans=100000000000;

for (let index = 0; index < s.length; index++) {
  const element = s[index];
  
  if(element=='1')a=index;
  else if(element=='2')b=index;
  else if(element=='3')c=index;

  if(a!=-1 && b!=-1 && c!=-1){
    ans=Math.min(ans,Math.max(a,b,c)-Math.min(a,b,c)+1)
  }
}

console.log(ans);*/

//constructor functions
// const Person,
//   this.name = name;
//   this.age = age;
//   this.sayHey = function(){
//     console.log("hey!!....")
//   }

// }

// const p1 = new Person("suraj",20);
// //write your code here
// p1.email = "suraj@gmail.com"

// console.log(p1)
class Person{
  constructor(){

  }
  hello(){
    console.log("saying hello")
  }
}

const p1 = new Person();
console.log(p1)
