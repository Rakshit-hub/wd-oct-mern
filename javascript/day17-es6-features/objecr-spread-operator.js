 var person={
     name:'sujith'
 }
 var userInfo={
     username:'sijith',
     email:'sujit@gamil.com'
 }

 var user=Object.assign({},person,userInfo)
 console.log(user)

 //es6
 const emp={
     name:'tejas'
 }
 const empInfo={
     username:'tejas',
     email:'tejas@company.com'
 }

 const employee={...emp, ...empInfo}
 console.log(employee)