import React from 'react'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Home from './component/Home'
import Register from './component/users/Register'
import Login from './component/users/Login'
import CustomerList from './component/customers/List'
import CustomerNew from './component/customers/New'
import CustomerShow from './component/customers/show'
import DepartmentList from './component/departments/List'
import CustomerEdit from './component/customers/Edit'
import EmployeeList from './component/employee/employeeList'
import EmployeeNew from './component/employee/employeeNew'
import EmployeeShow from './component/employee/employeeShow'
import EmployeeEdit from './component/employee/employeeEdit'
import TicketList from './component/tickets/ticketList'
import TicketNew from './component/tickets/TicketNew'
import TicketShow from './component/tickets/ticketShow'


function App(props){
    const handleLogout=()=>{
        localStorage.removeItem('authToken')
        window.location.href='/account/login'
    }
    return(
        <BrowserRouter>
        <div>
            <h1>Ticket Master</h1>
            <Link to="/">Home</Link>
            {
                localStorage.getItem('authToken')?(
                    <div>
                        <Link to="/customer">Customer</Link>
                        <Link to="/departments">Departments</Link>
                        <Link to="/employees">Employees</Link>
                        <Link to="/tickets">Tickets</Link>
                        <Link to="/account/logout" onClick={handleLogout}>Logout</Link>
                        
                        
                    </div>
                ):(
                    <div>
                        <Link to="/account/login">Login</Link>
                         <Link to="/account/register">Register</Link>

                    </div>
                )
            }
            <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/account/register" component={Register}/>
            <Route path="/account/login" component={Login}/>
            <Route path="/customer" component={CustomerList} exact={true}/>
            <Route path="/customers/new" component={CustomerNew}/>
            <Route path ="/customers/edit/:id" component={CustomerEdit}/>
            <Route path="/customers/:id" component={CustomerShow}/>
            <Route path="/departments" component={DepartmentList} exact={true}/>
            <Route path="/employees" component={EmployeeList} exact={true}/>
            <Route path="/employees/new" component={EmployeeNew}/>
            <Route path="/employees/edit/:id" component={EmployeeEdit}/>
            <Route path="/employees/:id" component={EmployeeShow}/>
            <Route path='/tickets' component={TicketList} exact={true}/>
            <Route path='/tickets/new' component={TicketNew}/>
            <Route path='/tickets/:id' component={TicketShow}/>
            </Switch>
        </div>
        </BrowserRouter>
    )
}
export default App