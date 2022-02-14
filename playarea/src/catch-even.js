import React from 'react'
class CatchEvens extends React.Component{
    constructor(){
        super()
        this.state={
            evens:[],
            number:''
        }
    }
    componentDidMount(){
        setInterval(()=>{
            const number=Math.round(Math.random()*10)
            this.setState({number})
            if(number%2==0){
                this.setState((prevState)=>{
                    return{
                        evens:prevState.evens.concat(number)
                    }
                })
               
            }
        },1000) 
    }
    render(){
        return(
            <div>
                <h2>{this.state.number}</h2>
                <h2>All Evens-{this.state.evens.length}</h2>
                {this.state.evens.map((even)=>{
                    return<li key={even.id}>{even}</li>
                })}
            </div>
        )
    }
}
export default CatchEvens