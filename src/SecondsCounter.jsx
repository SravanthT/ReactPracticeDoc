import React from "react";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secs: 0 };
  }
  tick() {
    this.setState((state) => ({
      secs: state.secs + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), Trick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        Seconds: {this.state.secs}
        <Trick />
      </div>
    );
  }
}
function Trick() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2> It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Timer;
