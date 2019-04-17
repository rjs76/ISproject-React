import React, { Component } from 'react';

class Task extends Component{
	render(){
		return(
			<div className="Task">
				//accessing objects from list component
				//line through will go through items marked done
				<span style={{ textDecoration: this.prop.todo.done ? 'line-through' : 'none' }}>
					{this.props.todo.value}}
				</span>
				//creating button to add and remove items
				<button onClick={() => 
					this.props.submitRequest(this.props.index)}>{this.props.todo.done ? 'Undo' : 'Complete'}
				</button>
			</div>
		)
	}
}


export default Task;