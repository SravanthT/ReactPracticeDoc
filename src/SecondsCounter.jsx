import React from "react"
class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state = {secs:0}
  }
  tick(){
    this.setState(state => ({
      secs: state.secs+1
    }))
  }

  componentDidMount(){
    this.interval=setInterval(() => this.tick(),1000 );
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  render(){
    return(
      <div>
          Seconds: {this.state.secs}
        </div>

    )
  }
}

export default Timer;