import React from "react";

function Login(){
    return(
        <div className="mod">
            <div className="head">
                <h3>Đăng nhập</h3>
            </div>
            <div className="body">
                <table className="table-login">
                    <tbody>
                        <tr>
                            <td className="style1"> Mã sinh viên: </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" style={{width: '170px'}} />
                            </td>
                        </tr>
                        <tr>
                            <td> Mật khẩu: </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="password" style={{width: '170px'}} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table className="rd-sinhvien">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="radio" id="svdh" name="typesv" defaultChecked="checked" /><label htmlFor="svdh">Sinh viên đang học</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="radio" name="typesv" id="svtn" /><label htmlFor="svtn">Sinh viên tốt nghiệp</label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td> Mã bảo vệ: </td>
                        </tr>
                        <tr>
                            <td className="a-right">
                                <input type="text" className="captcha"/>&nbsp;
                                <img src="/assets/captcha.gif" alt="" style={{height: '22px', marginTop: '2px'}}/>&nbsp;
                                <a href="cmm">
                                    <img src="/assets/Refresh.gif" alt="" height="20px"/>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="submit" value="Đăng Nhập" className="log-btn" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Login;