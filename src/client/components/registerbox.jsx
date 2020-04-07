import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
	getFromStorage, setInStorage
} from "./storage";
import { withRouter } from "react-router-dom";

class RegisterBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			errors: [],
			pwdState: null,
		};
	}

	showValidationErr(elm, msg) {
		this.setState((prevState) => ({
			errors: [
				...prevState.errors, {
					elm,
					msg
				}
			]
		}));
	}

	clearValidationErr(elm) {
		this.setState((prevState) => {
			let newArr = [];
			for (let err of prevState.errors) {
				if (elm != err.elm) {
					newArr.push(err);
				}
			}
			return { errors: newArr };
		});
	}

	onFirstNameChange(e) {
		this.setState({ firstName: e.target.value });
		this.clearValidationErr("firstName");
	}

	onLastNameChange(e) {
		this.setState({ lastName: e.target.value });
		this.clearValidationErr("lastName");
	}

	onEmailChange(e) {
		this.setState({ email: e.target.value });
		this.clearValidationErr("email");
	}

	onPasswordChange(e) {
		this.setState({ password: e.target.value });
		this.clearValidationErr("password");

		this.setState({ pwdState: "weak" });
		if (e.target.value.length > 8) {
			this.setState({ pwdState: "medium" });
		}
		if (e.target.value.length > 12) {
			this.setState({ pwdState: "strong" });
		}
	}

	submitRegister(e) {
		const {
			firstName,
			lastName,
			email,
			password,
		} = this.state;

		if (firstName == "") {
			this.showValidationErr("firstName", "First Name Cannot be empty!");
		}
		if (lastName == "") {
			this.showValidationErr("lastName", "Last Name Cannot be empty!");
		}
		if (email == "") {
			this.showValidationErr("email", "Email Cannot be empty!");
		}
		if (password == "") {
			this.showValidationErr("password", "Password Cannot be empty!");
		}

		if (firstName && lastName && email && password) {
			fetch("/api/user/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					firstName: firstName,
					lastName: lastName,
					email: email,
					password: password
				})
			}).then(res => res.json())
				.then(json => {
					if (json.success) {
						setInStorage("moocer", { token: json.token })
						this.props.history.push("/catalog");
					}
				})
		}
	}


	render() {
		let firstNameErr = null,
			lastNameErr = null,
			passwordErr = null,
			emailErr = null;

		for (let err of this.state.errors) {
			if (err.elm == "firstName") {
				firstNameErr = err.msg;
			}
			if (err.elm == "lastName") {
				lastNameErr = err.msg;
			}
			if (err.elm == "password") {
				passwordErr = err.msg;
			}
			if (err.elm == "email") {
				emailErr = err.msg;
			}
		}

		let pwdWeak = false,
			pwdMedium = false,
			pwdStrong = false;

		if (this.state.pwdState == "weak") {
			pwdWeak = true;
		} else if (this.state.pwdState == "medium") {
			pwdWeak = true;
			pwdMedium = true;
		} else if (this.state.pwdState == "strong") {
			pwdWeak = true;
			pwdMedium = true;
			pwdStrong = true;
		}

		return (
			<div className="inner-container">
				<div className="header">
					Sign Up
          </div>
				<div className="box">

					<div className="input-group">
						<label htmlFor="first-name">First Name</label>
						<input
							type="text"
							name="firstName"
							className="login-input"
							placeholder="First Name"
							onChange={this
								.onFirstNameChange
								.bind(this)} />
						<small className="danger-error">{firstNameErr
							? firstNameErr
							: ""}</small>
					</div>

					<div className="input-group">
						<label htmlFor="last-name">Last Name</label>
						<input
							type="text"
							name="lastName"
							className="login-input"
							placeholder="Last Name"
							onChange={this
								.onLastNameChange
								.bind(this)} />
						<small className="danger-error">{lastNameErr
							? lastNameErr
							: ""}</small>
					</div>

					<div className="input-group">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							name="email"
							className="login-input"
							placeholder="Email"
							onChange={this
								.onEmailChange
								.bind(this)} />
						<small className="danger-error">{emailErr
							? emailErr
							: ""}</small>
					</div>

					<div className="input-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							className="login-input"
							placeholder="Password"
							onChange={this
								.onPasswordChange
								.bind(this)} />
						<small className="danger-error">{passwordErr
							? passwordErr
							: ""}</small>

						{this.state.password && <div className="password-state">
							<div
								className={"pwd pwd-weak " + (pwdWeak
									? "show"
									: "")}></div>
							<div
								className={"pwd pwd-medium " + (pwdMedium
									? "show"
									: "")}></div>
							<div
								className={"pwd pwd-strong " + (pwdStrong
									? "show"
									: "")}></div>
						</div>}

					</div>

					<button
						type="button"
						className="login-btn"
						onClick={this.submitRegister.bind(this)}>Register</button>
				</div>
			</div>
		);
	}
}

export default withRouter(RegisterBox);