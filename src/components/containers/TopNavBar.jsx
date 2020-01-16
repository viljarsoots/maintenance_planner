import React from 'react';

import './TopNavBar.css';

export default class TopNavBar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
           
            <header className="header-desktop">
            <div className="section__content section__content--p30">
                <div className="container-fluid">
                    <div className="header-wrap">
                        <form className="form-header" action="https://www.google.com/search" method="get" target="_blank">
                            <input className="au-input au-input--xl" type="text" name="q" placeholder="Search from Google"/>
                            <button className="au-btn--submit" type="submit">
                                <i className="zmdi zmdi-search"></i>
                            </button>
                        </form>
                        <div className="header-button">
                  
                            <div className="account-wrap">
                                <div className="account-item clearfix js-item-menu">
                                    <div className="image">
                                        <img src="/assets/images/icon/service-100x100.png" alt="Service Manager"/>
                                    </div>
                                    <div className="content">
                                        <a className="js-acc-btn" href="#">Service Manager</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        );
    }
    
    
    
    



}