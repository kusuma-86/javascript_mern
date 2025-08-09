// let a=23;
// const b=34;
// c=45;
// {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// function a(){
//     const a=45;
//     console.log(a);
// function b(){

//     const a=23;
//     console.log(a);
// function c()
// {
//     const a =34;
//     console.log(a);
// }
//  c();
// }
// b();
// }
//  a();
// var fun = () => {
//     console.log(a);
//     var a =45;
// var b = () => {
//     console.log(a);
//     console.log(z);
// };
// let z=45;
// b();
// };
// let result= fun();
// console.log(result);
// function scope(){
//     if(true){
//         var x =45;//global scope
//         let y= 10;//let and const are block scpoe
//         const z=15;
//     }
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
// scope();
// function example(){
//     var a=10;
//     function inner(){
//         var b=23;
//         console.log(a);
//         console.log(b);//because of closures b is not defined
//     }
//     inner();
//     console.log(b);
// }
// example();
// let arr=[1,2,3,4,5];
// for(let i of arr){
//     console.log(i);
// }
//write a function if the number is positive or negative or zero
// function numcheck(n) {
//     if(n>0){
//         console.log("positive");
//     }

//     if(n<0) {
//         console.log("negative");
//     }
        
//     else {
//         console.log("zero");
//     }
// }
// console.log(numcheck(-1));
// function sum(arr){
//     return arr.reduce((acc,curr) => acc+curr,0);
//     }
// console.log(sum(1,2,3,4,5));
//maximum number array
// arr=[1,22,3];
// console.log(Math.max(...arr));
// function max(arr){
//     return Math.max(...arr);
// }
// console.log(max([1,2,3,9,5]));
//take an object of college details and make shallow copy with new addrss
// let obj1={
//   collegename:'AiTAM',
//   Place:'Tekkali',
//   address : {
//     city: 'srikakulam',
//     pin:"532201"
//   }
// };
// let obj2 = {...obj1};
// obj2.address.city="hyd";
// console.log(obj2)
// console.log(obj1);
// console.log(obj2.address);
//write a function that returns another functionn and call it
//reverse printing
// const items =["apple","orange","mango"];
// for(let i=items.length-1;i>=0;i--)
// {
//     console.log(`${i}. ${items[i]}`)
// }
// let arr1=[1,2,3,4];
// let arr2=[5,6,7,8];
// let result=arr1.concat(arr2);
// console.log(result);
// let obj={
//     id:86,
//     name:"kusuma",
//     branch:"csm",
//     salary:45567,
// };
// let {id,name,...rest} =obj;
// console.log(id);
// console.log(name);
// console.log(rest);
// let details = {
//     fname: "kusuma",

// }
// let {fname,lname="not available"}=details;
// console.log(fname);
// console.log(lname);
// let obj={
//     name:"kallu",
//     age:35,
// };
// let {name,branch="ece"}=obj;
// let details = {
//     fname: "kusuma",
//     age:20,
//     lname:"chikati",
//     college:{

//         branch:"csm",
//         roll:86,

//     }

// };
// let obj=Object.assign({},details);
// console.log(obj);
// obj.name="vamsi";
// details.college.branch="cse";
// console.log(details);
// console.log(obj);
//api response
// let response={
//     status:200,
//     data :{
//     user:{
//         name:"vedu",
//         age:25,
//         address:"delhi",
//     },
// },
// };
// let {data:{user:{name,age,address}}}=response;
// console.log(name);
// console.log(age);

