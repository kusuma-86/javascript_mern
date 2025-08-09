// async function greet(){
//     return "helloworld";
// }
// greet().then(console.log);
// async function fetchData() {
//     let result=await Promise.reject("Data Error");
//     console.log(result);
// }
// fetchData();
// function getUser(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>resolve("user data"),2000);
//     });
// }
// async function displayUSer() {
//    console.log("fetching the data please wait...");
// let user=await getUser();
// console.log(user);
// console.log("data fetched successfully");
// };
// let delay=(ms)=>new Promise((resolve) => setTimeout(resolve.ms));
// async function runTask(){
//     console.log("task1 started");
//     await delay(3000);
//     console.log("task1 completed");
//     console.log("task2 started");
//     await delay(2000);
//     console.log("task 2 completed");
//     console.log("task 3 started");
//     await delay(1000);
// }

// runTask();
// const fetchUser = ()=>new Promise(resolve)=>setTimeout(()=>resolve('user data'),5000);
// const fetchPost = ()=>new Promise(resolve)=>setTimeout(()=>resolve('Post data'),3000);
// async function fetchAllData() {
//     const [user,post]=await Promise.all([fetchUser(),fetchPost]);
//     console.log(user,post);
// }
// fetchAllData();
// const delay=(ms)=> new Promise((resolve) => setTimeout(resolve,ms));
// async function runTask() {
//    const tasks=[1000,2000,3000];
//    for(const time of tasks){
//     console.log(`waiting ${time/1000} seconds.....`);
//     await delay(time);
//     console.log("Task done");
//    } 
// }
// runTask();
// async function gatherData() {
//   try{
//    const response=await fetch("https://dummyjson.com/product/1");
//    const data=await response.json();
//    console.log(data);
//   }catch(error){
//    console.error(error);
//   }
// }
// gatherData();
// async function newApi(){
//   try{
//     let res=await fetch("https://jsonplaceholder.typeicode.com/todos/1");
//     const data=await res.json();
//     console.log(data);
//   }catch(error){
//     console.log(error);
//    }

// }
// newApi();
function curryAdd(a){
  return function(b){
    return function(c){
      return a+b+c;
    }
  }
}
console.log(curryAdd(3)(1)(2));

