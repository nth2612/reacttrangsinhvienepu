import React from "react";

function BoxSearch(){
    return(
        <div className="box-search">
            <span className="text-search">tìm kiếm</span>&nbsp;
            <input type="text" id="txtSearch" placeholder="Nhập nội dung cần tìm" style={{width: '350px', color: 'rgb(156, 151, 151)'}} />&nbsp;
            <select style={{width: '230px'}}>
                <option value={1}>Tất cả</option>
                <option value={2}>Giới thiệu</option>
                <option value={3}>Thông báo</option>
                <option value={4}>Đào tạo</option>
                <option value={5}>Sinh viên cần biết</option>
                <option value={6}>Dành cho tân sinh viên Đại học Khóa D18</option>
                <option value={7}>Thông báo</option>
                <option value={8}>Thanh toán học phí Online</option>
                <option value={9}>Lưu ý</option>
            </select>
            <input type="button" value="Tìm kiếm" style={{float: 'right'}} id="btnSearch" />
        </div>
    )
}
export default BoxSearch;