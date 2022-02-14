//using filter method return all falsy values
// var  values=[0,false,'',undefined,null,NaN,1,true,-1,'dct',[],{},[10],{name:'arju'}]
// const falsy=values.filter(function(ele){
//     return !ele
// })
// console.log(falsy)

// //using filter method return all truthy values
// var values=[0,false,'',undefined,null,NaN,1,true,-1,'dct',[],{},[10],{name:'arju'}]
// const truthy=values.filter(function(ele){
//     return ele
// })
// console.log(truthy)

var  values=[0,false,'',undefined,null,NaN,1,true,-1,'dct',[],{},[10],{name:'arju'}]
for(i=0;i<values.length;i++){
    if(values[i]){
        console.log(values[i])
    }
}