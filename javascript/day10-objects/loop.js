const article={
    title:'Trending Technologies',
    body:'javascript,React and node',
    isPublished:true,
    publishDate:new Date()
}
console.log(article.title)
console.log(article['body'])

const prop='title'
console.log(article.prop)

console.log(article[prop])

for(const key in article){
    console.log(key,article[key])
}