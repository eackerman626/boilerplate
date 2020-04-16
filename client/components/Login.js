import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
	async handleSubmit(event) {
		event.preventDefault();
		const login = {
			email: event.target.email.value,
			password: event.target.password.value,
		};
		await axios.put('/auth/login', login);
	}

	async handleLogout(event) {
		event.preventDefault();
		await axios.delete('/auth/logout');
	}

	render() {
		return (
			<div>
				Login:
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="email">Email: </label>
					<input name="email" />
					<label htmlFor="password">Password: </label>
					<input name="password" />
					<button type="submit">Log In</button>
				</form>
				<button type="button" onClick={this.handleLogout}>
					Log Out
				</button>
			</div>
		);
	}
}

export default Login;
