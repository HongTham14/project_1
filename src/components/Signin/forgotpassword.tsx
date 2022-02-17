import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Style/css/login.css";

export default class ForgotForm extends Component {

    handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    };
    email!: string;
    text!: string;
    
    render() {
        return (
            <div className="login">
                <img className="logo" src="./Style/images/logo123.png" alt="logo"/>
            <form className="form" onSubmit={this.handleSubmit}>
                <h3>Cấp lại mật khẩu</h3>

                <div className="form-group">
                    <label>Tên đăng nhập</label>
                    <input id="email" type='email' className="form-control"
                    onChange={e => this.email = e.target.value}>
                    </input>
                </div>

                <div className="form-group">
                    <label>Mã xác thực</label>
                    <input type='text' className="form-control"
                    onChange={e => this.text = e.target.value}>
                    </input>
                </div>
                <p className="forgot-pw">
                    <Link className="forgot-pw" to={'/'}>Quay lại trang chủ</Link>
                </p>
                <button className="btn-forgot">Cấp lại mật khẩu</button>
            </form>
            </div>

            
        )
    }
}