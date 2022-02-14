<html>
<head>
    <title> </title>
</head>

<body>
    <div id="root">

    </div>

    <script src="./js/react.development.js"></script>
    <script src="./js/react-dom.development.js"></script>
    <script src="./js/babel.js"></script>
    <script src="./js/axios.js"></script>
    <script type="text/babel">
    

    const rootHandle = document.getElementById('root')

    class Data extends React.Component{
        constructor(){
            super()
            this.state = {
                users : [],
                posts : [],
                post : {}
            }
            this.handleUserChange = this.handlesUserChange.bind(this)
            this.handlePostChange = this.handlePostChange.bind(this)
        }

        componentDidMount() {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data
                this.setState({ users }) 
            })
            .catch((err) => {
                alert(err)
            })
        }

        handlesUserChange(e){
            const id = e.target.value
            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response) => {
                const posts = response.data
                this.setState({posts})
            })
        }

        handlePostChange(e){
            const id = e.target.value
            const post = this.state.posts.find(post => post.id == id)
            this.setState({post})
        }


        render(){
            return(
                <div>
                    <h4>User Details </h4>
                    <ul> 
                    <select onChange={this.handleUserChange}>
                        <option value=''>Select </option>
                        {
                            this.state.users.map(user => {
                                return  (
                                  <option key={user.id} value={user.id}>{user.name}</option>
                                  )  
                            })
                        }
                    </select>
                    </ul>
                    <h4>User Post</h4>
                    <ul>
                    <select onChange={this.handlePostChange}>
                        <option value=''>Select </option>
                        {
                            this.state.posts.map(post => {
                                return (
                                    <option key={post.id}>{post.title}</option>
            
                                )
                            })
                        }
                    </select>
                  
                    </ul>
                   
                </div>
            )
        }
    }

    ReactDOM.render(<Data />,rootHandle)
                
    </script>
    
</body>
</html>