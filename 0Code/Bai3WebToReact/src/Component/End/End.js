import React, { Component } from 'react';

class End extends Component {
    render() {
        return (
            <div>
                 <div className="footer1">
                    <div className="container">
                        <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <h3>Địa chỉ</h3>
                            <p>Bách Khoa ĐN <br /> Thọ Xuân, Thanh Hóa</p>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <h3>Liên Hệ Với Tôi</h3>
                            <div className="xahoi">
                            <div className="fa fa-facebook" />
                            <div className="fa fa-twitter" />
                            <div className="fa fa-google-plus" />
                            <div className="fa fa-linkedin" />
                            </div>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <h3>ChuMuc15</h3>
                            <p>Dù cho nước chảy đá mòn, với em anh vẫn một lời thủy chung</p>
                        </div>
                        </div>
                    </div>
                 </div>

            </div>
        );
    }
}

export default End;