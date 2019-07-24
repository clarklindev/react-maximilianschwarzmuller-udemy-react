import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
	state = {
		orderForm: {
			name: {
				elementType: 'input',
				elementConfig: { type: 'text', placeholder: 'your name' },
				value: ''
			},
			street: {
				elementType: 'input',
				elementConfig: { type: 'text', placeholder: 'street' },
				value: ''
			},
			zipCode: {
				elementType: 'input',
				elementConfig: { type: 'text', placeholder: 'ZIP code' },
				value: ''
			},

			country: {
				elementType: 'input',
				elementConfig: { type: 'text', placeholder: 'Country' },
				value: ''
			},

			email: {
				elementType: 'input',
				elementConfig: { type: 'email', placeholder: 'Your email' },
				value: ''
			},

			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					type: 'email',
					options: [
						{ value: 'fastest', displayValue: 'Fastest' },
						{ value: 'cheapest', displayValue: 'cheapest' }
					]
				},
				value: ''
			}
		},
		loading: false
	};
	orderHandler = event => {
		event.preventDefault(); //prevents send request as it reloads form
		this.setState({ loading: true });
		console.log(this.props.ingredients);
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price //reallife scenario: should calculate on server to avoid manipulation
		};
		axios
			.post('/orders.json', order)
			.then(response => {
				console.log(response);
				this.setState({ loading: false });
				this.props.history.push('/');
			})
			.catch(error => {
				console.log(error);
				this.setState({ loading: false });
			});
	};

	render() {
		let form = (
			<form>
				<Input elementType="..." elementConfig="..." value="..." />
				<Input
					inputtype="input"
					type="email"
					name="email"
					placeholder="your email"
				/>
				<Input
					inputtype="input"
					type="text"
					name="street"
					placeholder="street"
				/>
				<Input
					inputtype="input"
					type="text"
					name="postal"
					placeholder="postal code"
				/>
				<Button btnType="Success" clicked={this.orderHandler}>
					ORDER
				</Button>
			</form>
		);
		if (this.state.loading) {
			form = <Spinner />;
		}
		return (
			<div className={classes.ContactData}>
				<h4>Enter your Contact Data</h4>
				{form}
			</div>
		);
	}
}

export default ContactData;
