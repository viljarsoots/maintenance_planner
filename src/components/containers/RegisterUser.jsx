import React from 'react';
import './RegisterUser.css';
import {mockDataUrl} from '../data/config.js';
import {config} from '../data/config.js';
import {axios} from '../data/config.js';
import {agent} from '../data/config.js';
import {echoPostUrl} from '../data/config.js';



export default class RegisterUser extends React.Component {

    

    constructor(props) {
        super(props);
        this.state = {
            id:'',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            startDate: '',
            userRoleId:''
            // rookie: '',
            // technician: false,
            // specialist: false,
            // productSpecialist: false,
            // admin: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handeleGet = this.handeleGet.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleCancel=this.handleCancel.bind(this);
        this.handleRadioChange=this.handleRadioChange.bind(this);
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
    onChangeRookie (event) {
        this.setState({
            rookie: event.target.value,
        });
    }
    onChangeTechnician = () => {
        this.setState(initialState => ({
            technician: !initialState.technician,
        }));
    }
    onChangeSpecialist = () => {
        this.setState(initialState => ({
            specialist: !initialState.specialist,
        }));
    }
    onChangeProductSpecialist = () => {
        this.setState(initialState => ({
            productSpecialist: !initialState.productSpecialist,
        }));
    }
    onChangeAdmin = () =>{
        this.setState(initialState => ({
            admin: !initialState.admin,
        }));
    }
    handleRadioChange(event) {
        this.setState({
            userRoleId: event.target.value
        });
      }


    handleSubmit(event) {
        const options = {
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            httpsAgent: agent
        };
        let data = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            //password: this.state.password,
            startDate: this.state.startDate,
            userRoleId: this.state.userRoleId
            // rookie: this.state.rookie,
            // technician: this.state.technician,
            // specialist: this.state.specialist,
            // productSpecialist: this.state.productSpecialist,
            // admin: this.state.admin
        };

        axios.post(echoPostUrl+"user/save", data, options)
            .then((response) => {
                console.log("response from echo server");
                console.log(data);
            }).catch((exception) => {
                console.log(exception);
            });
                this.handleCancel();
        event.preventDefault();
    }
    componentDidMount(){    
     this.handeleGet();
    }
    
    handleCancel(){
        this.props.history.push('/techTable')
    }
     
     
     handeleGet(event){
         let e = this.props.match.params.id;
         let getdata = null;
        axios.get(mockDataUrl+"user/"+ e, config)
            .then((response) => {
                console.log(response);
                getdata = response.data.data;
                console.log(getdata);
        //  if(e >= 0){
           console.log(getdata.id);
                this.setState({ 'id': getdata.id });
                this.setState({ 'firstName': getdata.firstName });
                this.setState({ 'lastName': getdata.lastName });
                this.setState({ 'email': getdata.email });
                this.setState({ 'password': getdata.password });
                this.setState({ 'startDate': getdata.startDate });
                // this.setState({ 'rookie': response.data[e].rookie });
                // this.setState({ 'technician': response.data[e].technician });
                // this.setState({ 'specialist': response.data[e].specialist });
                // this.setState({ 'productSpecialist': response.data[e].productSpecialist });
                // this.setState({ 'admin': response.data[e].admin });

                
        // }else{
        //     this.state = {
        //         id:'',
        //         firstName: '',
        //         lastName: '',
        //         email: '',
        //         password: '',
        //         startDate: '',
        //         rookie: false,
        //         technician: false,
        //         specialist: false,
        //         productSpecialist: false,
        //         admin: false
        //     };
        // }
   
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);

            }).catch((exception) => {
                console.log(exception);
            });

        // event.preventDefault();
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
                                <form action="#" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>ID</label>
                                        <p className="au-input au-input--full" type="text"
                                            value={this.state.id} onChange={this.handleChange} name="id">
                                            {this.state.id}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>First name</label>
                                        <input className="au-input au-input--full" type="text"
                                            value={this.state.firstName} onChange={this.handleChange} name="firstName" placeholder="First name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Last name</label>
                                        <input className="au-input au-input--full" type="text"
                                            value={this.state.lastName} onChange={this.handleChange} name="lastName" placeholder="Last name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input className="au-input au-input--full" type="email"
                                            value={this.state.email} onChange={this.handleChange} name="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input className="au-input au-input--full" type="password"
                                            value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <label>Starting date</label>
                                        <input className="au-input au-input--full" type="date"
                                            value={this.state.startDate} onChange={this.handleChange} name="startDate" placeholder="Start Date" />
                                    </div>
                                    <div className="form-group">
                                        <div>
                                            <label className=" form-control-label">Technican Competences</label>
                                        </div>
                                        <br />
                                        <div className="radio">
                                        <div className="row form-group" id="radio">
                                            <div className="col-md-12">
                                            <div className="form-check-inline form-check">
                                                        
                                            <div className="radio">    
                                                <label >
                                                    <input type="radio" id="rookie" value="5" checked={this.state.userRoleId === 5}
                                                        onChange={this.handleRadioChange} className="form-check-input" />Rookie
                                        
                                                        </label>
                                        </div>                                        
                                        <div className="radio">
                                                <label >
                                                    <input type="radio" id="technician" value="4" checked={this.state.userRoleId === 4}
                                                        onChange={this.handleRadioChange} className="form-check-input" />Technician
                                                        </label>
                                                        </div>                                        
                                        <div className="radio">
                                                <label htmlFor="inline-specialist" className="form-check-label ">
                                                    <input type="radio" id="specialist" value="3" checked={this.state.userRoleId === 3}
                                                        onChange={this.handleRadioChange} className="form-check-input" />Specialist
                                                        </label>
                                                        </div>                                        
                                        <div className="radio">
                                                <label htmlFor="inline-productSpecialist" className="form-check-label ">
                                                    <input type="radio" id="productSpecialist" value="2" checked={this.state.userRoleId === 2}
                                                        onChange={this.handleRadioChange} className="form-check-input" />Product Specialist
                                                        </label>
                                                        </div>                                        
                                        <div className="radio">
                                                <label htmlFor="inline-admin" className="form-check-label ">
                                                    <input type="radio" id="admin" value="1" checked={this.state.userRoleId === 1}
                                                        onChange={this.handleRadioChange} className="form-check-input" />Admin
                                                        </label>
                                                        </div>
                                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>

                                    <button className="au-btn au-btn--block au-btn--green m-b-20" type="submit">Save New Technican</button>

                                    <button className="btn btn-warning btn-lg btn-block" onClick={this.handeleGet} >Get Data</button>

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