import React, { Component } from "react";
import Main from "../main/main";

export default class Login extends Component {
    render() {
        return (
            <form>

                <h3>Login</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Lembrar senha</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Entrar</button>
                < button className="btn btn-dark btn-lg btn-block" onClick={Main} >
                    Visitar</button>

                <p className="forgot-password text-right">
                    Esqueci minha <a href="#">senha?</a>
                </p>
            </form>
        );
    }
}