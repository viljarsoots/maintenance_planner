import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {mockDataUrl} from '../data/config.js';
import {config} from '../data/config.js';
import {axios} from '../data/config.js';
import {agent} from '../data/config.js';


export default class TechnicianTable extends React.Component{
    


    constructor(props) {
        super(props);
        this.state = {
          techniciansData:[]
          };


        this.formattechnicanDetailsButtonCell=this.formattechnicanDetailsButtonCell.bind(this);
        this.technicanDetails=this.technicanDetails.bind(this);
        this.handeleAdd=this.handeleAdd.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handeleGet = this.handeleGet.bind(this);
    }
    handeleAdd= ()=> {
        this.props.history.push('/register');
    }

    technicanDetails = (e)=> {   
        
        let {id} = e.target;
        console.log("See Details for Id: "+ id);
        this.props.history.push('/register/'+id);
    }
    
    formattechnicanDetailsButtonCell =(cell, row)=>{  
        let clickHandler= this.technicanDetails;			
        let aBtn = React.createElement('button',{id:row.id, className:"btn btn-success btn-lg btn-block", onClick:clickHandler},'Edit' );
        return aBtn;	
    }

    componentDidMount(){    
      this.handeleGet();
       }

    handeleGet(event) {
      axios.get(mockDataUrl+"user", config)
          .then((response) => {
            console.log(response);
      this.setState({techniciansData: response.data.data});
      
    }).catch((exception) => {
              console.log(exception);
          });

       //event.preventDefault();
  }




    render() {

        const  columns = [{
            dataField: 'id',
            text: 'ID',
            sort: true,
          }, {
            dataField: 'firstName',
            text: 'First Name',
            sort: true
          }, {
            dataField: 'lastName',
            text: 'Last Name',
            sort: true
          }, {
            dataField: 'email',
            text: 'Email'
          }, {
            dataField: 'startDate',
            text: 'Satrt Date'
          }, {  
              dataField: 'action',    
              text:'',
              formatter: this.formattechnicanDetailsButtonCell
          }];

        return (        
            <div> {/* className="container"> (needed in standalone)*/}
            <h2>Technician Table</h2>
            <button type="button" className="btn btn-secondary" onClick={this.handeleAdd}>Add New Technician</button>

                <BootstrapTable 
                    keyField='id' data={ this.state.techniciansData } columns={ columns } 
                    striped
                    hover
                    condensed                                        
                    //selectRow={ selectRow } 
                    />
                                        
            </div>        
        );
    }


}