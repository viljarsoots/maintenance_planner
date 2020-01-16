

import React from 'react';

const axios = require("axios"); //external library  https://github.com/axios/axios
let httpsProxyAgent = require('https-proxy-agent');

var agent = new httpsProxyAgent('http://kn.proxy.int.kn:80');


const mockDataUrl="https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";
const echoPostUrl="http://localhost:7000/login";

var config = {
       httpsAgent: agent
}


export default class Login extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
                headers: {"Content-Type": "application/json","Accept": "application/json" },
                httpsAgent: agent
            };
            let data = {
                email: this.state.email,
                password: this.state.password 
            };
        
            axios.post(echoPostUrl, data, options)
            .then((response) => {
                console.log("response from echo server");
                console.log(response.data);
            }).catch((exception)=>{
                console.log(exception);
            });
            
            event.preventDefault();
        }
    


	render() {
		return (

<div className="page-content--bge5">
            <div className="container">
                <div className="login-wrap">
                    <div className="login-content">
                        <div className="login-logo">
                            <a href="#">
                                <img src="/assets/images/icon/maitenence-01.png" alt="Maitenence"/>
                            </a>
                        </div>
                        <div className="login-form">
                            <form action="" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                        <label>Email Address</label>
                                        <input className="au-input au-input--full" type="email"
                                            value={this.state.value} onChange={this.handleChange} name="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input className="au-input au-input--full" type="password"
                                            value={this.state.value} onChange={this.handleChange} name="password" placeholder="Password" />
                                    </div>
                                <div className="login-checkbox">
                                    <label>
                                        <input type="checkbox" name="remember"/>Remember Me
                                    </label>
                                    <label>
                                        <a href="#">Forgotten Password?</a>
                                    </label>
                                </div>
                                <button className="au-btn au-btn--block au-btn--green m-b-20" type="submit">sign in</button>
                                
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );


}

}