const values=[0,false,'',undefined,null,NaN,1,true,-1,'dct',[],{},[10],{name:'arju'}]

for(let i=0;i<values.length;i++){
    if(values[i]){
        console.log('truthy',values[i])
    }else{
        console.log('falsy',values[i])
    }
}