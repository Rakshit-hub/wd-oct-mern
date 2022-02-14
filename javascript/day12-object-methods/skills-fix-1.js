const developer={
    name: 'sujith',
    skills:['js','react','node','py'],
    details:function(){
        const _this=this
        this.skills.forEach(function(ele){
            console.log(`${_this.name} knows ${ele}`)
        })
    }
}
developer.details()