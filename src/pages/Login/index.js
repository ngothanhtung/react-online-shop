import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import {
	Segment,
	Grid,
} from 'semantic-ui-react'

import createHistory from 'history/createBrowserHistory';
const history = createHistory({
	forceRefresh: false
});

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = { username: '', password: '' };
	}

	handleChange = (e, { name, value }) => {
		this.setState({ [name]: value });
	}

	handleSubmit = () => {
		const { username, password } = this.state;
		console.log({ username, password });
		//this.setState({ submittedName: username, submittedEmail: password })

		var data = JSON.stringify(this.state);
		console.log(data);
		// url (required), options (optional)
		fetch('http://localhost:9000/api/authenticate', {
			method: 'POST',
			body: data,
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		}).then(function (response) {
			return response.json()
		}).then(function (result) {
			console.log(result);
			if (result.success === true) {
				//save token to sessionStorage        
				sessionStorage.setItem("token", result.token);

				// Use push, replace, and go to navigate around.
				// https://github.com/ReactTraining/history
				history.push('/');
				history.go(-1);
				history.goBack();

			} else {
				sessionStorage.removeItem("token");
				//his.setState({ isLoggedin: false });
			}

		}).catch(function (err) {
			// Error :(
			console.log(err);
		});
	}

	render() {
		return (
			<Segment style={{ padding: '8em 0em' }} vertical>
				<Grid container stackable verticalAlign='middle'>
					<Grid.Row>
						<Grid.Column width={8}>
							<Form onSubmit={this.handleSubmit}>
								<Form.Field>
									<label>UserName</label>
									<Form.Input placeholder='Username' name='username' value={this.state.username} onChange={this.handleChange} />
								</Form.Field>
								<Form.Field>
									<label>Password</label>
									<Form.Input placeholder='Password' type='password' name='password' value={this.state.password} onChange={this.handleChange} />
								</Form.Field>
								<Form.Field>
									<Checkbox label='Remember me' />
								</Form.Field>
								<Button type='submit'>Login</Button>
							</Form>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		);
	}
}

export default Login; 