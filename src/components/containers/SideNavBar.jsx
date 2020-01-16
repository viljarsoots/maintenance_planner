import React from 'react';
import { Link, Route,Switch } from 'react-router-dom';
import './SideNavBar.css';


export default class SideNavBar extends React.Component {
    constructor(props) {
        super(props);
    
    }



    render() {
        return (
            
            <aside className="menu-sidebar d-none d-lg-block">
                <div className="logo">
                    <a href="#">
                        <img src="/assets/images/icon/maitenence-01.png" alt="Maintenece" />
                    </a>
                </div>
                <div className="menu-sidebar__content js-scrollbar1 ps">
                    <nav className="navbar-sidebar">
                        <ul className="list-unstyled navbar__list" id= "sidebar">
                            
                            <li id= "tables"><Link to="/"><i className="fas fa-table"></i>Machine List</Link></li>
                            <li id= "techTable"><Link to="/techTable"><i className="fas fa-table"></i>Technician List</Link></li>
                            {/* <li id= "register"><Link to="/register"><i className="far fa-plus-square"></i>Register User</Link></li>     */}
                            
                            
                            <li id= "calendar"><Link to="/calendar"><i className="fas fa-calendar-alt"></i>Calendar</Link></li>
                            <li id= "spareParts"><Link to="/spareparts"><i className="fas fa-calendar-alt"></i>Spare Parts</Link></li>
                            
                            
                            
                            <li id="addmachine">
                            <Link to="/addmachine">
                                    <i className="fas fa-copy"></i>Add Machine</Link>
                                
                            </li>
                            
                        </ul>
                    </nav>
                    <div className="ps__rail-x" style={{ left: "0px", bottom: "0px" }}>
                        <div className="ps__thumb-x" tabIndex="0" style={{ left: "0px", width: "0px"}}>
                </div>
                </div>
                    <div className="ps__rail-y" style={{top: "0px", right: "0px"}}>
                        <div className="ps__thumb-y" tabIndex="0" style={{top: "0px", height: "0px"}}>
                        </div>
                    </div>
                </div>
            </aside>
           
           
        );
    }

}
