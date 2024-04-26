
function ForParents(){
    const forparent = ["Tra cứu thông tin", "Tra cứu văn bằng", "Tra cứu thông tin cố vấn học tập - cán bộ lớp"]
    return(
        <div className="mod menu-list">
            <div className="head">
                <h3>Dành cho phụ huynh</h3>
            </div>
            <div className="body">
                <ul>
                    {forparent.map((item,index) =>(
                        <li key={index}>
                            <a href="cmm">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default ForParents;