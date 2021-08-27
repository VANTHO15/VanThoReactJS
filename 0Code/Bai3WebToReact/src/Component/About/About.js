import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div className="about" id="gioithieu">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-8 col-md-push-2">
                            <div className="row">
                            <div className="col-md-12">
                                <div className="text-center">
                                <h2>About</h2>
                                <div className="ngoisao"> <i className="fa fa-star" /></div>
                                </div>
                            </div> {/* end col12 */}
                            </div> {/* end row  */}
                            <div className="row">
                            <div className="col-md-6">
                                Fusce numquam quisque molestiae! Ullamco etiam. Quaerat suscipit ullamco, ipsum. Alias bibendum, dis? Justo aliquam rem perferendis ante massa luctus erat sollicitudin.
                            </div>
                            <div className="col-md-6">
                                Fusce numquam quisque molestiae! Ullamco etiam. Quaerat suscipit ullamco, ipsum. Alias bibendum, dis? Justo aliquam rem perferendis ante massa luctus erat sollicitudin.
                            </div>
                            </div> {/* end row */}
                            <div className="row">
                            <div className="text-center">
                                <a href className="btn btn-default nutdown"> <i className="fa fa-facebook" /> Facebook</a>
                            </div>
                            </div> {/* end row van ben trong 8 cot */}
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default About;