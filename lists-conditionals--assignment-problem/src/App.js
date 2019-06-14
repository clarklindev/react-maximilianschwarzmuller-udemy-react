import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
class App extends Component {
	state = {
		length: 0,
		charlist: []
	};

	captureInputHandler = event => {
		let inputLength = event.target.value.length;
		let charlistArr = event.target.value.split('');

		console.log('length: ', inputLength);
		console.log('charlistArr: ', charlistArr);
		this.setState({
			length: inputLength,
			charlist: charlistArr
		});
	};

	removeItemHandler = removeIndex => {
		const tempArr = [...this.state.charlist];
		tempArr.splice(removeIndex, 1);
		this.setState({ length: tempArr.length, charlist: tempArr });
	};

	render() {
		return (
			<div className="App">
				<input
					type="text"
					onChange={event => this.captureInputHandler(event)}
					value={this.state.charlist.join('')}
				/>
				<p>length: {this.state.length}</p>
				<ValidationComponent textlength={this.state.length} />

				{this.state.charlist.map((item, index) => {
					return (
						<CharComponent
							letter={item}
							click={event => this.removeItemHandler(index)}
						/>
					);
				})}

				<ol>
					<li>
						Create an input field (in App component) with a change listener
						which outputs the length of the entered text below it (e.g. in a
						paragraph).
					</li>
					<li>
						Create a new component (=> ValidationComponent) which receives the
						text length as a prop`
					</li>
					<li>
						Inside the ValidationComponent, either output "Text too short" or
						"Text long enough" depending on the text length (e.g. take 5 as a
						minimum length)
					</li>
					<li>
						Create another component (=> CharComponent) and style it as an
						inline box (=> display: inline-block, padding: 16px, text-align:
						center, margin: 16px, border: 1px solid black).
					</li>
					<li>
						Render a list of CharComponents where each CharComponent receives a
						different letter of the entered text (in the initial input field) as
						a prop.
					</li>
					<li>
						When you click a CharComponent, it should be removed from the
						entered text.
					</li>
				</ol>
				<p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
			</div>
		);
	}
}

export default App;
