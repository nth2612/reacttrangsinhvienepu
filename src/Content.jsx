import MenuList from "./components/MenuList";
import BoxSearch from "./components/BoxSearch";
import Login from "./components/Login";
import data1 from "./data.json";
import data2 from "./data2.json";
import data3 from "./data3.json";
import data4 from "./data4.json";
import ForParents from "./components/ForParents";
import Statistical from "./components/Statistical";

function Content(){
    return(
        <div className="col-full clearfix">
            <div className="col-left">
                <BoxSearch/>
                <MenuList data={data1} title="Dành cho tân sinh viên Đại học Khóa D18" class="new-list"/>
                <MenuList data={data2} title="THÔNG BÁO" class="new-list" new="6" />
                <MenuList data={data3} title="Thanh toán học phí online" class="new-list"/>
            </div>
            <div className="col-right">
                <Login/>
                <ForParents/>
                <MenuList data={data4} title="Lưu ý" class="new-list"/>
                <Statistical/>
            </div>
        </div>
    )
}
export default Content;