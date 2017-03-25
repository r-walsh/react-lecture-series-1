import React, { Component } from "react";

class AddToDo extends Component {
	constructor() {
		super();

		this.state = { input: "" }
	}

	handleInputChange( event ) {
		this.setState( { input: event.target.value } );
	}

	createTodo() {
		this.props.createTodo( this.state.input );
		this.setState( { input: "" } );
	}

	render() {
		console.log( this.props );
		return (
			<div className="add-to-do">
				<input
					onChange={ ( event ) => this.handleInputChange( event ) }
					type="text"
					value={ this.state.input }
				/>
				<button
					onClick={ () => this.props.createTodo( this.state.input ) }
				>
					Add To Do
				</button>
			</div>
		);
	}
}

export default AddToDo;
