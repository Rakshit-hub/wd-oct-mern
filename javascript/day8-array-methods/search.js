const menu=[
    {id:1,name:'chilly paneer' ,price:50,isVeg:true},
    {id:2,name:'chilly chicken',price:75,isVeg:false},
    {id:3,name:'paneer biriyani',price:90,isVeg:true},
    {id:4,name:'mutton biriyani',price:150,isVeg:false}
]
function searchMenu(menu,search){
   const result= menu.filter(function(menuItem){
        return menuItem.name.includes(search)
    })
    return result
}
console.log(searchMenu(menu,'chilly'))
//console.log(searchMenu(menu,' biriyani'))   