var developer={
    name: 'sujith',
    skills:['js','react','node','py'],
    details:function(){
        this.skills.forEach((ele)=>{
            console.log(this.name + ' knows ' ,ele)
        })
    }
}
developer.details()

