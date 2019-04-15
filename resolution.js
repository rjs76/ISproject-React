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
  const adjustment = window.innerWidth;
  //in this instance limit will be largeComp only
  let limit = 'largeComp';
  //running loops for specified screen sizes
  
  //first condition for samll screen
  if (screenWidth < largeComp && screenWidth >= smallComp){
    limit = 'smallComp';
    //condition for tablet
  }else if (screenWidth < smallComp && screenWidth >= tablet){
    limit = 'tablet';
    //condition for for
  }else if (screenWidth < tablet){
    limit = 'mobile';
  }

  this.setState(state{limit, screenWidth});
  }
}

export default App;
