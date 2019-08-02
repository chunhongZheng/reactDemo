import ReactDOM from 'react-dom';
import React from 'react';
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }
//参数 => 函数体
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
/*     <buttononClick={(e) => this.handleClick(e)} >
         Click me
       </button>*/
/*
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
*/
      <input  value={this.state.value}  onChange={event=>{this.setState({value:event.target.value})}} ></input>

/*      <input    value={this.state.value}
            onChange={event=>{this.setState({value:event.target.value})}}
        />
      */
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
export default Toggle;
