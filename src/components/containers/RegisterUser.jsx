import React from 'react';
import './RegisterUser.css';
import {techniciansData} from '../data/TechniciansData.js';


const axios = require("axios"); //external library  https://github.com/axios/axios
let httpsProxyAgent = require('https-proxy-agent');

var agent = new httpsProxyAgent('http://kn.proxy.int.kn:80');


const mockDataUrl = "https://api.mockaroo.com/api/c4ece440?count=1&key=87536420";
const echoPostUrl = "http://localhost:7000/user";

var config = {
    httpsAgent: agent
}


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
            rookie: false,
            technician: false,
            specialist: false,
            productSpecialist: false
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
    onChangeRookie = () => {
        this.setState(initialState => ({
            rookie: !initialState.rookie,
        }));
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

    handleSubmit(event) {
        const options = {
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            httpsAgent: agent
        };
        let data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            startDate: this.state.startDate,
            rookie: this.state.rookie,
            technician: this.state.technician,
            specialist: this.state.specialist,
            productSpecialist: this.state.productSpecialist
        };

        axios.post(echoPostUrl, data, options)
            .then((response) => {
                console.log("response from echo server");
                console.log(data);
            }).catch((exception) => {
                console.log(exception);
            });

        event.preventDefault();
    }
    componentDidMount(){    
     this.handeleGet();
    }
    
    handleCancel(){
        this.props.history.push('/techTable')
    }
     
     
     handeleGet(event){
         let e = this.props.match.params.id -1;
    //     axios.get(mockDataUrl, config)
    //         .then((response) => {
    //             console.log(response.data);
        if(e >= 0){
            console.log(techniciansData[e].id);
                this.setState({ 'id': techniciansData[e].id });
                this.setState({ 'firstName': techniciansData[e].firstName });
                this.setState({ 'lastName': techniciansData[e].lastName });
                this.setState({ 'email': techniciansData[e].email });
                this.setState({ 'password': techniciansData[e].password });
                this.setState({ 'startDate': techniciansData[e].startDate });
                this.setState({ 'rookie': techniciansData[e].rookie });
                this.setState({ 'technician': techniciansData[e].technician });
                this.setState({ 'specialist': techniciansData[e].specialist });
                this.setState({ 'productSpecialist': techniciansData[e].productSpecialist });
                
        }else{
            this.state = {
                id:'',
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                startDate: '',
                rookie: false,
                technician: false,
                specialist: false,
                productSpecialist: false
            };
        }
   
                //console.log(response.status);
                // console.log(response.statusText);
                // console.log(response.headers);
                // console.log(response.config);

            // }).catch((exception) => {
            //     console.log(exception);
            // });

        //event.preventDefault();
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
                                        <div className="row form-group" id="checkBoxes">
                                            <div className="col col-md-3">
                                                <label htmlFor="inline-rookie" className="form-check-label ">
                                                    <input type="checkbox" id="rookie" name="rookie" checked={this.state.rookie}
                                                        onChange={this.onChangeRookie} className="form-check-input" />Rookie
                                                        </label>
                                            </div>
                                            <div className="col col-md-3">
                                                <label htmlFor="inline-technician" className="form-check-label ">
                                                    <input type="checkbox" id="technician" name="technician" checked={this.state.technician}
                                                        onChange={this.onChangeTechnician} className="form-check-input" />Technician
                                                        </label>
                                            </div>
                                            <div className="col col-md-3">
                                                <label htmlFor="inline-specialist" className="form-check-label ">
                                                    <input type="checkbox" id="specialist" name="specialist" checked={this.state.specialist}
                                                        onChange={this.onChangeSpecialist} className="form-check-input" />Specialist
                                                        </label>
                                            </div>
                                            <div className="col col-md-3">
                                                <label htmlFor="inline-productSpecialist" className="form-check-label ">
                                                    <input type="checkbox" id="productSpecialist" name="productSpecialist" checked={this.state.productSpecialist}
                                                        onChange={this.onChangeProductSpecialist} className="form-check-input" />Product Specialist
                                                        </label>
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