import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                {/*/ Form Search Star /*/}
        <div className="box-collapse">
          <div className="title-box-d">
            <h3 className="title-d">Tìm Kiếm</h3>
          </div>
          <span className="close-box-collapse right-boxed ion-ios-close" />
          <div className="box-collapse-wrap form">
            <form className="form-a">
              <div className="row">
                <div className="col-md-12 mb-2">
                  <div className="form-group">
                    <label htmlFor="Type">Từ Khoá</label>
                    <input type="text" className="form-control form-control-lg form-control-a" placeholder="Keyword" />
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label htmlFor="Type">Tình Trạng</label>
                    <select className="form-control form-control-lg form-control-a" id="Type">
                      <option>Bất Kì</option>
                      <option>Cho Thuê</option>
                      <option>Rao Bán</option>
                      <option>Có Thể Tham quan</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label htmlFor="city">Khu Vực</label>
                    <select className="form-control form-control-lg form-control-a" id="city">
                      <option>Bất Kì</option>
                      <option>Alabama</option>
                      <option>Arizona</option>
                      <option>California</option>
                      <option>Colorado</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label htmlFor="bedrooms">Số Lượng Phòng Ngủ</label>
                    <select className="form-control form-control-lg form-control-a" id="bedrooms">
                      <option>Bất Kì</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label htmlFor="garages">Số Lượng Gara</label>
                    <select className="form-control form-control-lg form-control-a" id="garages">
                      <option>Bất Kì</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label htmlFor="bathrooms">Số Lượng Phòng Tắm</label>
                    <select className="form-control form-control-lg form-control-a" id="bathrooms">
                      <option>Bất Kì</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label htmlFor="price">Giá Tối Thiểu</label>
                    <select className="form-control form-control-lg form-control-a" id="price">
                      <option>Bất Kì</option>
                      <option>$50,000</option>
                      <option>$100,000</option>
                      <option>$150,000</option>
                      <option>$200,000</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-b">Tìm Kiếm</button>
                </div>
              </div>
            </form>
          </div>
        </div>
            </div>
        )
    }
}
