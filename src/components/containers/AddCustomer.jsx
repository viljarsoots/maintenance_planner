import React from 'react';
import './RegisterUser.css';
import {mockDataUrl} from '../data/config.js';
import {config} from '../data/config.js';
import {axios} from '../data/config.js';
import {agent} from '../data/config.js';
import {echoPostUrl} from '../data/config.js';

//const mockDataUrl = "https://api.mockaroo.com/api/6f8594a0?count=50&key=87536420"

export default class AddCustomer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name: '',
            address: '',
            location: ''
            
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handeleGet = this.handeleGet.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleCancel=this.handleCancel.bind(this);

        console.log(this.props.match.params.id);
        
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
     
    
    async handleSubmit(event) {
        const options = {
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            httpsAgent: agent
        };
        let data = {
            id: this.state.id,
            name: this.state.name,
            address: this.state.address,
            location: this.state.location
            
        };
        let replay = null;
        axios.post(echoPostUrl+"customer/save", data, options)
        
            .then((response) => {
                console.log("response from echo server");
                replay= response.data;
                console.log(response.data);
            }).catch((exception) => {
                console.log(exception);
            })
                await replay;
                await this.handleCancel();

        event.preventDefault();
    }
    componentDidMount(event){    
     this.handeleGet(event);
    }
    
    handleCancel(){
        this.props.history.push('/customerTable/')
    }
      
     handeleGet(event){
         let e = this.props.match.params.id;
          if(e >= 0){
         let getdata = null;
        axios.get(mockDataUrl+"customer/"+ e, config)
            .then((response) => {
                console.log(response);
                getdata = response.data.data;
                console.log(getdata);
                this.setState({ 'id': getdata.id });
                this.setState({ 'name': getdata.name });
                this.setState({ 'address': getdata.address });
                this.setState({ 'location': getdata.location });
                   

            }).catch((exception) => {
                console.log(exception);
            });

            }else{
                this.setState = {
                    id:'',
                    name: '',
                    address: '',
                    location: '',
                    
                };   
                
        }
        
    }


    render() {
        return (

            <div className="page-content--bge5">
                <div className="container">
                    <div className="wrap">
                        <div className="login-content">
                            <div className="login-logo">
                               
                                    <img src="/assets/images/icon/maitenence-01.png" alt="Maitenence" />
                                
                            </div>
                            <div className="login-form">
                                <form action="#" >
                                    <div className="form-group">
                                        <label>ID</label>
                                        <p className="au-input au-input--full" type="text"
                                            value={this.state.id} onChange={this.handleChange} name="id">
                                            {this.state.id}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Customer name</label>
                                        <input className="au-input au-input--full" type="text"
                                            value={this.state.name} onChange={this.handleChange} name="name" placeholder="Customer name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input className="au-input au-input--full" type="text"
                                            value={this.state.address} onChange={this.handleChange} name="address" placeholder="Address" />
                                    </div>
                                    <div className="form-group">
                                        <label>Production Location</label>
                                        <input className="au-input au-input--full" type="text"
                                            value={this.state.location} onChange={this.handleChange} name="location" placeholder="Location" />
                                    </div>
                                    
                                    <button className="au-btn au-btn--block au-btn--green m-b-20"  onClick={this.handleSubmit}  >Save Changes</button>

                                    {/* <button className="btn btn-warning btn-lg btn-block" onClick={this.handeleGet} >Get Data</button> */}

                                    <button className="btn btn-danger btn-lg btn-block" onClick={this.handleCancel} >Cancel Registration</button>
                                </form>
                                     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                                         
        );


    }

}