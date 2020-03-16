import React from 'react';

const axios = require("axios"); //external library  https://github.com/axios/axios
let httpsProxyAgent = require('https-proxy-agent');

var agent = new httpsProxyAgent('http://kn.proxy.int.kn:80');


const mockDataUrl = "https://api.mockaroo.com/api/9424bf70?count=1&key=87536420";
const echoPostUrl = "http://localhost:7000/machine";

var config = {
    httpsAgent: agent
}


export default class AddMachine extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            id:'',
            machineName: '',
            producerName: '',
            installDate: '',
            nrOfMaitn: '',
            location: '',
            lastMtnDate:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handeleGet2 = this.handeleGet2.bind(this);
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

    handleSubmit(event) {
        const options = {
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            httpsAgent: agent
        };
        let data = {
            machineName: this.state.machineName,
            producerName: this.state.producerName,
            installDate: this.state.startupDate,
            nrOfMaitn: this.state.nrOfMaitn,
            location: this.state.location,
            lastMtnDate: this.state.lastMtnDate
        };

        axios.post(echoPostUrl, data, options)
            .then((response) => {
                console.log("response from echo server");
                console.log(response.data);
            }).catch((exception) => {
                console.log(exception);
                this.handleCancel();
            });

        event.preventDefault();
    }

    handeleGet2(event) {
        axios.get(mockDataUrl, config)
            .then((response) => {
                console.log(response.data);

                this.setState({ 'id': response.data[0].id });
                this.setState({ 'machineName': response.data[0].machineName });
                this.setState({ 'producerName': response.data[0].producerName });
                this.setState({ 'installDate': response.data[0].installDate });
                this.setState({ 'nrOfMaitn': response.data[0].nrOfMaitn });
                this.setState({ 'location': response.data[0].location });
                this.setState({ 'lastMtnDate': response.data[0].lastMtnDate });


                //console.log(response.status);
                // console.log(response.statusText);
                // console.log(response.headers);
                // console.log(response.config);

            }).catch((exception) => {
                console.log(exception);
            });

         event.preventDefault();
    }

    handleCancel(){
        this.props.history.push('/machineTable/')
    }

    render() {
        return (

            <div className="page-content--bge5">
                <div className="container">
                    <div className="wrap">
                        <div className="login-content">
                            <div className="login-logo">
                                <a href="#">
                                    <img src="/assets/images/icon/maitenence-01.png" alt="Maitenence" />
                                </a>
                            </div>
                            <div className="login-form">
                                <form action="" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                        <label>ID</label>
                                        <p className="au-input au-input--full" type="text"
                                            value={this.state.id} onChange={this.handleChange} name="id">
                                            {this.state.id}</p>
                                            </div>
                                    <div className="form-group">
                                        <label>Machine Name</label>
                                        <input className="au-input au-input--full" type="text"
                                            value={this.state.machineName} onChange={this.handleChange} name="machineName" placeholder="Machine Name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Producer Name</label>
                                        <input className="au-input au-input--full" type="text"
                                            value={this.state.producerName} onChange={this.handleChange} name="producerName" placeholder="Producer Name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Install date</label>
                                        <input className="au-input au-input--full" type="date"
                                            value={this.state.installDate} onChange={this.handleChange} name="installDate" placeholder="Install Date" />
                                    </div>
                                    <div className="form-group">
                                        <label>Number of maitenences</label>
                                        <input className="au-input au-input--full" type="number"
                                            value={this.state.nrOfMaitn} onChange={this.handleChange} name="nrOfMaitn" placeholder="Number of maitenences" />
                                    </div>
                                    <div className="form-group">
                                        <label>Location</label>
                                        <input className="au-input au-input--full" type="text"
                                            value={this.state.location} onChange={this.handleChange} name="location" placeholder="Location" />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Maitenece Date</label>
                                        <input className="au-input au-input--full" type="date"
                                            value={this.state.lastMtnDate} onChange={this.handleChange} name="lastMtnDate" placeholder="Last Maitenence Date" />
                                    </div>


                                    <button className="au-btn au-btn--block au-btn--green m-b-20" type="submit">Save New Machine</button>

                                    <button className="btn btn-warning btn-lg btn-block" onClick={this.handeleGet2} >Get Data</button>

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