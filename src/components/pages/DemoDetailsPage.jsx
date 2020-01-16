import React from 'react';


import SideNavBar from '../containers/SideNavBar.jsx';
import TopNavBar from '../containers/TopNavBar.jsx';
import MainTable from '../containers/MainTable.jsx';
import Footer from '../containers/Footer.jsx';
import RegisterUser from '../containers/RegisterUser.jsx';
import Login from '../containers/Login.jsx';
import { Link, Route,Switch } from 'react-router-dom';



export default class DemoDetailsPage extends React.Component{
    constructor(props){
        super(props);
     
    }
 
    



render(){
    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col">
              <div className="au-card">
                <div id="calendar"></div>
              </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="copyright">
                    <p>Copyright © 2018 Colorlib. All rights reserved. Template by <a href="https://colorlib.com">Colorlib</a>.</p>
                </div>
            </div>
        </div>
    </div>
    );
}

}