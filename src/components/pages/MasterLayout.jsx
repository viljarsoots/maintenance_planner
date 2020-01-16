import React, { Component } from 'react';

import SideNavBar from '../containers/SideNavBar.jsx';
import TopNavBar from '../containers/TopNavBar.jsx';
import MainTable from '../containers/MainTable.jsx';
import DemoDetailsPage from '../pages/DemoDetailsPage.jsx';
import {Route, Switch } from 'react-router-dom';
import RegisterUser from '../containers/RegisterUser';
import AddMachine from '../containers/AddMachine.jsx';
import TechnicianTable from '../containers/TechnicianTable.jsx';
import SpareParts from '../containers/SpareParts.jsx';



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
                                <Route path="/machineTable" component={MainTable} />
                                <Route path="/techTable" component={TechnicianTable} />
                                <Route path="/register/:id" component={RegisterUser}  />
                                <Route path="/register/" component={RegisterUser}  />                                
                                <Route path="/calendar" component={DemoDetailsPage} />
                                <Route path="/spareparts" component={SpareParts} />
                                <Route path="/addmachine" component={AddMachine} />
                                <Route path="/addmachine/:id" component={AddMachine} />
                            </Switch>

                        </div>
                    </div>

                </div>

            </div>


        );
    }

}