import React, { Component } from 'react';


import Task from './Task';

class List extends Component{


	render(){
		return(
			<div className="List">
			//accessing array, tracing over it to access each item in array
			{this.state.todos.map((todos, index) =>{
				return(
					//key is included to specify which part of array to look for
					<Task 
					key =[index]
					index={index}
					submitRequest={this.props.submitRequest}
					//todo reference current iteration of array 
					todo={(todo)}
					/>
					)
				})}
			<Task />
		</div>
		)
	}
}



export default List;