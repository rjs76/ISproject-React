import React from 'react';

const Page3 = props => {
  return (
    <div className="page-three">
      <h2>Add Task</h2>
      <form className='form'>
      Title<br></br><input type="text" name="title"></input><br></br>
      Type<br></br>
      <select>
  		<option>To Do</option>
  		<option>In Progress</option>
 		<option>Review</option>
  		<option>Done</option>
	  </select>
      <br></br><input type="submit" value="Add Task"></input>
      </form>
    </div>
  )
}

export default Page3;