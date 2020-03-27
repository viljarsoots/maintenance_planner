import React from 'react';
import { Link,} from 'react-router-dom';
import './SideNavBar.css';


export default class SideNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                        active: false, 
                        class: 'has-sub'
                    }

        this.handleClick = this.handleClick.bind(this);
  
    }



    handleClick (e) {

        const currentState = this.state.active; //false

        if(!currentState) {
            
            e.target = 'has-sub active'
            this.setState({class: e.target});
            this.setState({active: true});

        }   else {
            this.setState({class: 'has-sub'});
            this.setState({active: false});
        }     

    }

    render() {
        return (
            
            <aside className="menu-sidebar d-none d-lg-block">
                <div className="logo">
                    <a href="/" title= "Maitenance Planner">
                        <img src="/assets/images/icon/maitenence-01.png" alt="Maintenece" />
                    </a>
                </div>
                <div className="menu-sidebar__content js-scrollbar1 ps">
                    <nav className="navbar-sidebar">
                        <ul className="list-unstyled navbar__list" id= "sidebar">
                            
                            <li id= "tables" className= {this.state.class} onClick= {this.handleClick}>
                                <Link to="/"><i className="fas fa-table"></i>Machine List</Link>
                                </li>
                            <li id= "techTable" className= {this.state.class} onClick= {this.handleClick}>
                                <Link to="/techTable/"><i className="fas fa-table"></i>Technician List</Link>
                                </li>
                            <li id= "customerTable" className= {this.state.class} onClick= {this.handleClick}>
                                <Link to="/customerTable/"><i className="fas fa-table"></i>Customer Table</Link>
                                </li>    
                            
                            {/* <li id= "calendar" className= {this.state.class} onClick= {this.handleClick}>
                            <Link to="/calendar/"><i className="fas fa-calendar-alt"></i>Calendar</Link>
                            </li> */}
                            <li id= "spareParts" className= {this.state.class} onClick= {this.handleClick}>
                                <Link to="/spareparts/"><i className="fas fa-calendar-alt"></i>Spare Parts</Link>
                                </li>
                            {/* <li id="addmachine" className= {this.state.class} onClick= {this.handleClick}>
                            <Link to="/addmachine/"><i className="fas fa-copy"></i>Add Machine</Link>
                            </li> */}
                            
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
