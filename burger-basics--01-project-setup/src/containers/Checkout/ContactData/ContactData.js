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
		const formData = {};

		for (let formElementIdentifier in this.state.orderForm) {
			formData[formElementIdentifier] = this.state.orderForm[
				formElementIdentifier
			].value;
		}

		console.log(this.props.ingredients);
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price, //reallife scenario: should calculate on server to avoid manipulation
			orderData: formData
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

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedOrderForm = {
			...this.state.orderForm
		};
		const updatedOrderKeyObject = {
			...updatedOrderForm[inputIdentifier]
		};
		updatedOrderKeyObject.value = event.target.value;
		updatedOrderForm[inputIdentifier] = updatedOrderKeyObject;
		this.setState({ orderForm: updatedOrderForm });
	};

	render() {
		let formElementsArray = [];
		for (let key in this.state.orderForm) {
			formElementsArray.push({ id: key, config: this.state.orderForm[key] });
		}

		let form = (
			<form onSubmit={this.orderHandler}>
				{formElementsArray.map(formElement => (
					<Input
						key={formElement.id}
						elementType={formElement.config.elementType}
						elementConfig={formElement.config.elementConfig}
						value={formElement.config.value}
						changed={event => this.inputChangedHandler(event, formElement.id)}
					/>
				))}

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
