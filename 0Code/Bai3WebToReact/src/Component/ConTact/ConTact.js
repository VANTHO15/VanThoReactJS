import React, { Component } from 'react';

class ConTact extends Component {
    render() {
        return (
            <div>
                <div className="contactme" id="lienhe">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-8 col-md-push-2">
                            <div className="row">
                            <div className="text-center">
                                <h2>Contact</h2>
                                <div className="ngoisao"> <i className="fa fa-star" /></div>
                            </div>
                            </div> {/* end row */}
                            <div className="row">
                            <form action method="POST" role="form">
                                <div className="form-group">
                                <input type="text" required className="form-control" id placeholder="Name" />
                                </div>
                                <div className="form-group">
                                <input type="email" required className="form-control" id placeholder="Email" />
                                </div>
                                <div className="form-group">
                                <input type="phone" required className="form-control" id placeholder="Phone" />
                                </div>
                                <div className="form-group">
                                <textarea defaultValue={"Message "} />
                                </div>
                                <button type="submit" className="btn btn-primary sendbutton">Send</button>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ConTact;