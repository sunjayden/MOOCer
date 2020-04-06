import React, { Component } from "react";
import "./authentication.css";

class LoginBox extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	submitLogin(e) { }

	render() {
		return (
			<div className="inner-container">
				<div className="header">
					Login
		  		</div>
				<div className="box">

					<div className="input-group">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							name="email"
							className="login-input"
							placeholder="Email" />
					</div>

					<div className="input-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							className="login-input"
							placeholder="Password" />
					</div>

					<button
						type="button"
						className="login-btn"
						onClick={this
							.submitLogin
							.bind(this)}>Login</button>
				</div>
			</div>
		);
	}
}

export default LoginBox;