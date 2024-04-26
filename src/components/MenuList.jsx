
function MenuList(props){
    const data = props.data;
    let classes = 'mod'
    if(props.class){
        classes = `mod ${props.class}`
    }
    let news= 0;
    if(props.new){
        news = props.new - 1 + 1;
    }
    return(
        <div className={classes}>
            <div className="head">
                <h3>{props.title}</h3>
            </div>
            <div className="body">
                {data.map((item,index) =>(
                    <div className="item" key={item.id}>
                        <p className="title">
                            <a href="cmm">{item.title}</a>{index < news ? <img alt="new" src="/assets/new.gif"/> : null}
                            <br/>
                            <span className="date">Ngày đăng: {item.date}</span>
                        </p>
                    </div>
                ))}
                <a href="cmm" className="read_more">Xem thêm</a>
            </div>
        </div>

    )
}
export default MenuList;