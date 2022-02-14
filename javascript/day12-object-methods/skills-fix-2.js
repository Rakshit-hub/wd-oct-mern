const developer={
    name: 'sujith',
    skills:['js','react','node','py'],
    details:function(){
        
        this.skills.forEach(function(ele){
            console.log(`${this.name} knows ${ele}`)
        }.bind(this))
    }
}
developer.details()
