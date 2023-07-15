
// let a={
//     name: 'chin',
//     address: 'hanoi'
// };
// let b ='abc';
// console.log('name: ' , a['name']);
// console.log('address: ' ,a['address']);

// console.log(`hello world`);
// let a={
//     name: 'chien',
//     age: 21
// };
// console.log(`check data object:`, a);
// console.log(`my name's:`, a['name']);


// let b=['mu','chensi','liver'];
// console.log(`typee of b:`,typeof b, b);
// console.log('fisrt item:',b[0], 'second item:',b[1], 'third item:',b[2]);

// let family=[
//     {
//         name: 'chien',
//         age: 21},
//     {
//         name: 'quynh',
//         age: 19}
// ]
// console.log(`my family:`,family);

// console.log(`hello word right now`)
// let a=5;
// let b='5';
// console.log(`compare a == b:`,`a=`,a,`b=`,b,`result:`,a==b)
// console.log(`compare a === b:`,`a=`,a,`b=`,b,`result:`,a===b)

//empty null undefined
// let c='';
//loop 
// console.log(`hello world from html`)

// let arr=['Mu','Mancity','Liver','chelsea']
// for(var i=0; i<arr.length; i++){
//     console.log(`print i=`,arr[i])
// }
// console.log(`check variable i=`,i)
// console.log(`hello world from html`)

// let arr=['Man City',' Mu',' Liverpool','Chelsea']
// // for(let i=0;i<arr.length;i++){
//     console.log('top',i+1,arr[i])
// }
// while
// var i=0;
// while(i<arr.length){
//     console.log('top:',i+1,arr[i])
//     i++

// }

//  do while
// do{
//     console.log('top',i+1,arr[i])
// }while(i<0);
// console.log('hello world from html')
// let arr=['chien','dat','hoang','ngoc']
// let i=0
// while(i<arr.length){
//     //if else condition
//     console.log('check i:',i)
//     if(arr[i]==='ngoc'){
//         console.log('da tim thay',arr[i])
//         break
//     }
//     i++
// }
// console.log('hello world from html')

// for(let i=0;i<10;i++){
//     console.log('>>> check variable 1:',i)
// }

//input parameter
// console.log('hello world from html')
// function sum(a,b){
//     return a+b;
// }
// let c= sum(10,20)
// console.log('some c=',c)
// console.log('some a+b=',sum(6,9))
// console.log('hello world from html');

// function sum(x,y){
//     console.log('1')
//     console.log('2')
//     console.log('3')
//     console.log('4')
//     console.log('5')
//     return x+y;
// }
// console.log('check sum:',sum(9,7));
// console.log('hello world from html');
// //arrow function
// function sum2(x,y){
//     return x+y;
// }
// let sum=(a,b)=>{
//     return a+b;
// }
// console.log('check sum',sum(6,9))
// console.log('hello world from html');
// let sum = (a,b) => {
//     return a+b;
// }
// console.log('check sum=',sum(9,6))

// console.log('hello world from html')
// let sum=(a,b,callback)=>{
//     let tong=a+b;
//     // setTimeout(()=>{
//     //     callback(tong);
//     // },5000)
//     let i=0;
//     let timer=setInterval(()=>{
//         callback(tong);
//         i++
//         console.log('',i);
//         if(i===5) clearInterval(timer);
//     },1000)
    
    
// }
// let printsum=(message)=>{
//     console.log('6+9=',message)
// }

// sum(6,9,printsum)
// console.log('hello world from html')

// // filter, find

// // let arr=['1','2','3','4','5','6','7','8','9','10']
// let arr=[
//     {name: 'chien',age: 21},
//     {name: 'dat',age: 22},
//     {name: 'hoang',age: 21},
//     {name: 'ngoc',age: 23},
//     {name: 'doan',age: 21},
//     {name: 'phuong2',age: 25},
// ]

// let filter=arr.find((item,index)=>{
//     console.log('check filter item:',item,'index:',index)
//     return item && item.age===21;
// });
// console.log('filter',filter)
// console.log('hello world from html')
// let arr=['1','2','3','4','5','6','7','8','9','10']
// // for(let i=0; i<arr.length; i++){
// //     arr[i]=arr[i]*arr[i]
// // }

// let maparr=arr.map((item,index)=>{
//     item=item*item;
//     return item;
// })
// console.log('check i:',arr)
// console.log('check i:',maparr)
// console.log('hello world from html 3')

// const array1 = [1, 30, 4, 21, 100000];
// let arr=[]
// array1.sort((item1,item2) => {
//         if(item1>item2) arr.push(item1)
//         console.log(arr)
//     return item1-item2;
// });
// console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]
console.log('hello world from html')