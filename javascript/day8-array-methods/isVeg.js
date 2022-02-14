const menu=[
    {id:1,name:'chilly paneer',price:50,isVeg:true},
    {id:2,name:'chilly chicken',price:75,isVeg:false},
    {id:3,name:'paneer biriyani',price:90,isVeg:true},
    {id:4,name:'mutton paneer',price:150,isVeg:false}
]
function isVeg(menu){
    result=menu.filter(function(menuItem){
        return menuItem.isVeg==true
    })
    return result
}
console.log(isVeg(menu))