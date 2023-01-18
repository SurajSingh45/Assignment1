let arr = [4,8,12,16,20];
let n = arr.length;

function gcd(a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
}

let g=0;

for (let index = 0; index < n; index++) {
  g=gcd(g,arr[index]);  
}// found out the gcd of the array


if(g===1){
  console.log(0);
  return;
}

let ans=3;

for (let index = 1; index <= n; index++) {
  if(gcd(g,index)==1){
    ans=Math.min(ans,n-index+1);
  }
}

console.log(ans);``