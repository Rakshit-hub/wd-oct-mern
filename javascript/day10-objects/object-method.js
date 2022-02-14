const article={
    title:'Trending Technologies',
    body:'javascript,React and node',
    isPublished:true,
    publishDate:new Date()
}
console.log(Object.values(article))
console.log(Object.keys(article))//

//check for key
console.log(article.hasOwnProperty('title'))
console.log(article.hasOwnProperty('author'))

console.log(article.author==undefined)
console.log(article.title==undefined)
console.log(Object.keys(article))//returns array
console.log(Object.keys(article).includes('title'))

//check for value
console.log(Object.values(article))
console.log(Object.values(article).includes('javascript,React and node'))
console.log(Object.keys(article).length)
console.log(article.publishDate)