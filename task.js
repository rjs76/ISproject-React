import React from 'react';

class newItem extends React.Component {
  //initializing the state to be blank
  state = { create: '' }

  onFormSubmit = (event) => {
    event.preventDefault();
    //adding so page won't refresh empty if nothing is submitted

    this.props.onSubmit(this.state.create);
    this.setState({ create: '' })
  }

  render() {
    return (
      <form className="task-input form-group" onSubmit={this.onFormSubmit}>
        <const Add = props => {
  return (
    <div className = "New Item Page">
      <h3>Create New Item</h3>
    </div>
    )
  }
  );
  }
}

export default newItem;
