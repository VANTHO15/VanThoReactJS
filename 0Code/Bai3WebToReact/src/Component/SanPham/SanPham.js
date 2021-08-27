import React, { Component } from 'react';

class SanPham extends Component {
    render() {
        return (
            <div>
                    <div className="portfolio" id="sanpham">
                        <div className="container">
                            <div className="row">
                            <div className="text-center">
                                <h2>Sản Phẩm</h2>
                                <div className="ngoisao"> <i className="fa fa-star" /></div>
                            </div>
                            </div> {/* end row */}
                            <div className="row">
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                <div className="sanpham" hieuung="tooltip" title="web bootstrap">
                                <img src="images/1.png" alt="" className="anh img-responsive" />
                                <div className="phongto" data-toggle="modal" href="#id1"> <i className="fa fa-search-plus" /></div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                <div className="sanpham" hieuung="tooltip" title="web bootstrap">
                                <img src="images/2.png" alt="" className="anh img-responsive" />
                                <div className="phongto" data-toggle="modal" href="#id2"> <i className="fa fa-search-plus" /></div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                <div className="sanpham" hieuung="tooltip" title="web bootstrap">
                                <img src="images/3.png" alt="" className="anh img-responsive" />
                                <div className="phongto" data-toggle="modal" href="#id3"> <i className="fa fa-search-plus" /></div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                <div className="sanpham" hieuung="tooltip" title="web bootstrap">
                                <img src="images/4.png" alt="" className="anh img-responsive" />
                                <div className="phongto" data-toggle="modal" href="#id4"> <i className="fa fa-search-plus" /></div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                <div className="sanpham" hieuung="tooltip" title="web bootstrap">
                                <img src="images/5.png" alt="" className="anh img-responsive" />
                                <div className="phongto" data-toggle="modal" href="#id5"> <i className="fa fa-search-plus" /></div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                <div className="sanpham" hieuung="tooltip" title="web bootstrap">
                                <img src="images/6.png" alt="" className="anh img-responsive" />
                                <div className="phongto" data-toggle="modal" href="#id6"> <i className="fa fa-search-plus" /></div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

            </div>
        );
    }
}

export default SanPham;