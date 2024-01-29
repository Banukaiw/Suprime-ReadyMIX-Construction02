import React, { Component } from 'react'
import { BrowserRouter,Route } from 'react-router-dom';

import "./App.css";

import Myhome from './components/Myhome';
import Navbar from './components/Navbar';

import AddMachine from './components/AddMachine';
import EditDetails from './components/EditDetails';

import Machinedetails from './components/Machinedetails';


import Vehiclehome from './components/Vehiclehome';
import Addvehicle from './components/Addvehicle';
import Editvehicle from './components/Editvehicle';
import vehicledetails from './components/vehicledetails';

import Machinehome from './components/Machinehome';




export default class App extends Component{
  render() {
    return (
      <BrowserRouter>
       <div className="container">

         <Route path="/mh" exact component={Myhome}></Route>
         <Navbar/>


        <Route path="/vh" exact component={Vehiclehome}></Route>
        <Route path="/vadd" exact component={Addvehicle}></Route>
        <Route path="/vedit/:id" exact component={Editvehicle}></Route>
        <Route path="/vpost/:id" exact component={vehicledetails}></Route>

         
         <Route path="/" exact component={Machinehome}></Route>
         <Route path="/post/:id" component={Machinedetails}></Route>
         <Route path="/edit/:id" component={EditDetails}></Route>
         <Route path="/add" component={AddMachine}></Route>
         
        
       </div>
      </BrowserRouter>
      
    ) 
  }
}



















/*import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
    constructor(props){
        super(props);

        this.state={
            MachineRepair:([])

        };
    }

    componentDidMount(){
         this.retreveMachineRepair();
    }


    retreveMachineRepair(){
        axios.get("http://localhost:8000/MachineRepair/MachineRepairs").then(res =>{
            if(res.data.success){
                this.setState({
                    MachineRepair:res.data.existingMachineRepairs
                });

                console.log(this.state.MachineRepair)
            }


    });
    }

  /*  render() {
      return (
        <div>

          
        {this.state.MachineRepair.map(MachineRepair =>(
            
                <div>
                    
                    <p>{MachineRepair.Machine_id}</p>
                    <p>{MachineRepair.Expense_id}</p>
                    <p>{MachineRepair.repairdate}</p>
                    <p>{MachineRepair.addedspare_parts}</p>
                    <p>{MachineRepair.nextservice_date}</p>
                    <p>{MachineRepair.m_description}</p>
                 </div>
             
         ))}
     </div>
      )
  }
}
*/

   /* render() {
      return (
        <div className="container">
        <p>All Details</p>
    
    
    
        <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
        <button className="btn btn-outline-success" type="button">Main button</button>
        <button className="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
         </form>
        </nav>
    
    
    
    
    
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Machine  ID</th>
              <th scope="col">Expense ID</th>
              <th scope="col">Repair Date</th>
              <th scope="col">Added Spare Part</th>
              <th scope="col">Next Servise Date</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
    
          <tbody>
            {this.state.MachineRepair.map((MachineRepair,index) =>(
              <tr>
              <th scope="row">{index+1}</th>
              
              <td>{MachineRepair.Machine_id}</td>
              <td>{MachineRepair.Expense_id}</td>
              <td>{MachineRepair.repairdate}</td>
              <td>{MachineRepair.addedspare_parts}</td>
              <td>{MachineRepair.nextservice_date}</td>
              <td>{MachineRepair.m_description}</td>
              <td>
                <a className="btn btn-warning" href="#">
                   <i className="fas fa-edit"></i>&nbsp;Edit
                </a>
                &nbsp;
                <a className="btn btn-danger" href="#">
                   <i className="fas fa-trash-alt"></i>&nbsp;Delect
                </a>
              </td>
               
              </tr>
             
            ))}
    
          </tbody>
    
        </table>     
      </div>
      )
    }
    }

    */
      


    
