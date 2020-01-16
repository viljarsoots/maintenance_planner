import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {techniciansData} from '../data/TechniciansData.js';



const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    
  };

export default class TechnicianTable extends React.Component{
    


    constructor(props) {
        super(props);

        this.formatProductDetailsButtonCell=this.formatProductDetailsButtonCell.bind(this);
        this.productDetails=this.productDetails.bind(this);
        this.handeleAdd=this.handeleAdd.bind(this);
    }
    handeleAdd= ()=> {
        this.props.history.push('/register');
    }
       
   

    productDetails = (e)=> {   
        
        let { id} = e.target;
        console.log("See Details for Id: "+ id);
        this.props.history.push('/register/'+id);
    }
    
    formatProductDetailsButtonCell =(cell, row)=>{  
        let clickHandler= this.productDetails;			
        let aBtn = React.createElement('button',{id:row.id, className:"btn btn-success btn-lg btn-block", onClick:clickHandler},'Edit' );
        return aBtn;	
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
              formatter: this.formatProductDetailsButtonCell
          }];

        return (        
            <div> {/* className="container"> (needed in standalone)*/}
            <h2>Technician Table</h2>
            <button type="button" className="btn btn-secondary" onClick={this.handeleAdd}>Add New Technician</button>

                <BootstrapTable 
                    keyField='id' data={ techniciansData } columns={ columns } 
                    striped
                    hover
                    condensed                                        
                    //selectRow={ selectRow } 
                    />
                                        
            </div>        
        );
    }


}