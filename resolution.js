import React from 'react';


const largeComp = 1366;
const smallComp = 1024;
const tablet = 768;

class App extends React.Component{
  state = {
  screenWidth: 0,
  adjustment: 'largeComp',
};

componentDidMount(){
  window.addEventListener('resize', this.handleResize);
  this.handleResize();
}

//setting screen resolutions to be displayed on respectable devices
handleResize = () => {//no arguments provided so that it wouldn't be a function call
  const screenWidth = window.innerWidth;
  //in this instance adjustment will be largeComp only
  let adjustment = 'largeComp';

  if (screenWidth < largeComp && screenWidth >= smallComp){
    adjustment = 'smallComp';
  }else if (screenWidth < smallComp && screenWidth >= tablet){
    adjustment = 'tablet';
  }else if (screenWidth < tablet){
    adjustment = 'mobile';
  }

  this.setState({adjustment, screenWidth});
  }
}

export default App;
