import React, { Component } from 'react';

import SideNavBar from '../containers/SideNavBar.jsx';
import TopNavBar from '../containers/TopNavBar.jsx';
import MainTable from '../containers/MainTable.jsx';
import CustomerMachines from '../tables/CustomerMachines.jsx';
import {Route, Switch } from 'react-router-dom';
import RegisterUser from '../containers/RegisterUser';
import AddMachine from '../containers/AddMachine.jsx';
import TechnicianTable from '../containers/TechnicianTable.jsx';
import SpareParts from '../containers/SpareParts.jsx';
import CustomerTable from '../tables/CustomerTable.jsx';
import CustomerTableTest from '../tables/CustomerTableTest.jsx';
import AddCustomer from '../containers/AddCustomer.jsx';



export default class MasterLayout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="page-wrapper">

                <SideNavBar />
                
                <div className="page-container">

                    <TopNavBar />

                    <div className="main-content">
                        <div className="section__content section__content--p30">


                            <Switch>
                                <Route exact path="/" component={MainTable} />
                                <Route path="/machineTable/" component={MainTable} />
                                <Route path="/techTable/" component={TechnicianTable} />
                                <Route path="/register/:id" component={RegisterUser}  />
                                <Route path="/register/" component={RegisterUser}  />
                                <Route path="/customerMachines/:id" component={CustomerMachines} />                                
                                <Route path="/customerMachines/" component={CustomerMachines} />
                                <Route path="/spareparts/" component={SpareParts} />
                                <Route path="/addmachine/:id" component={AddMachine} />
                                <Route path="/addmachine/" component={AddMachine} />
                                <Route path="/customerTable/" component={CustomerTableTest} />
                                <Route path='/addCustomer/:id' component={AddCustomer} />
                                <Route path="/addCustomer/" component={AddCustomer} />
                                
                            </Switch>

                        </div>
                    </div>

                </div>

            </div>


        );
    }

}