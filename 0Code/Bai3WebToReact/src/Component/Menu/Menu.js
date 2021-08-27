import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="#">LoGoTho</a>
                        </div>
                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a className="n1" href="#sanpham">Infomation</a></li>
                            <li><a className="n2" href="#gioithieu">About</a></li>
                            <li><a className="n3" href="#lienhe">Contact</a></li>
                            <li><a className="n4" href="#">LOGIN</a></li>
                        </ul>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Menu;