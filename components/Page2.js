import React, { Component } from 'react';
import mapData from '../data/db.json';

class Page2 extends Component {
state = { data: [] };

  componentDidMount() {
    fetch('http://my-json-server.typicode.com/bnissen24/project2DB/posts')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

	render() {
  		return (
    		<div className="page-two">
    		<form>
      		<table>
      			<tr>
      				<td>Sort</td>
      				<td>Status</td>
      				<td>Type</td>
      			</tr>
      			<tr>
					<td>
						<select>
  							<option>Title</option>
  							<option>Status</option>
 							<option>Type</option>
	  					</select>
					</td>
      				<td>
						<select>
  							<option>Select Status</option>
  							<option>To Do</option>
 							<option>In Progress</option>
  							<option>Review</option>
  							<option>Done</option>
	  					</select>
					</td>
					<td>
						<select>
							<option>Select Type</option>
  							<option>bug</option>
  							<option>feature</option>
 							<option>task</option>
	  					</select>
					</td>
      			</tr>
      		</table>
      		</form>
      		<table>
      			<tr>
      				<td><h2>Title</h2></td>
      				<td><h2>Status</h2></td>
      				<td><h2>Type</h2></td>
      			</tr>
      		</table>
		<table>
		<td>
        {
          this.state.data.map(function(dbdata){
            return <tr>{dbdata.title}</tr>;
          })
        }
        </td>
        </table>
    		</div>
  		)
	}
}

export default Page2;