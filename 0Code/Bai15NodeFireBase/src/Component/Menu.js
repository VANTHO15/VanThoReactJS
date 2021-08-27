import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div>
                    <nav className="navbar navbar-expand-sm navbar-dark bg-danger">	
                        <a className="navbar-brand" href="#">ChuMuc15</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mt-2 mt-lg-0 ">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Info </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Product </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Contact </a>
                            </li>
                            </ul>
                        </div>
                    </nav>

            </div>
        );
    }
}

export default Menu;