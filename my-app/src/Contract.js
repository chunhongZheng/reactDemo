//import ReactDOM from 'react-dom';
import React from 'react';
//import logo from './logo.svg';
import web3 from './web3';
import lottery from './lottery';
/*
function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}
*/
class Contract extends React.Component{
  //Class 组件应该始终使用 props 参数来调用父类的构造函数。
  constructor(props) {
     super(props);
     this.state = {
       isToggleOn: true,
       lotteryAddress:'',
       managerAddress:'',
       players:[],
       value:'',
       balance:'',
       message:''

     };

     // 为了在回调中使用 `this`，这个绑定是必不可少的
  //   this.handleClick = this.handleClick.bind(this);
//     this.handleChange = this.handleChange.bind(this);
  }
// onSubmit  = async event =>
onSubmit = async event=>{
     event.preventDefault();
     const accounts = await web3.eth.getAccounts();
     this.setState({message:'等待交易完成.....'});
     console.log("提交的地址::="+accounts[0]);
  //   await lottery.methods.enetr().sender({from:accounts[0],value:web3.utils.toWei(this.state.value,'ether')});
     await lottery.methods.enetr().send({from:accounts[0],value:web3.utils.toWei(this.state.value,'ether')});
     console.log("入场成功了");
     this.setState({message:'入场成功.....'});

}
onClick = async event=>{
   event.preventDefault();
   const accounts = await web3.eth.getAccounts();
   this.setState({message:'开始博彩,等待交易完成......'});
   await lottery.methods.pickwiner().send({from:accounts[0]});
   this.setState({message:'赢家产生'});
}
  handleClick() {
    this.setState(
     {
      isToggleOn:  !this.state.isToggleOn
     }
    )
  }
  //  <input type="text" value={this.state.value} onChange={this.handleChange} />
  handleChange(event) {
  //   alert('提交的值: ' + event.target.value);
    this.setState({value: event.target.value});
  }
 ////componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行
  async componentDidMount(){
      const manager = await lottery.methods.manager().call();
      const players = await lottery.methods.getPlayers().call();
      const balance = await web3.eth.getBalance(lottery.options.address);
      this.setState(
        {
          lotteryAddress: lottery.options.address,
          managerAddress:manager,
          players:players,
          balance:balance
        }
      );

  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h1>lottery的地址：{this.state.lotteryAddress}</h1>
        <h1>lottery管理者地址：</h1>
        <p>this is manager by  {this.state.managerAddress}</p>
        <p>当前参与者的数量 : {this.state.players.length}</p>
        <p>当前资金池：{web3.utils.fromWei(this.state.balance,'ether')} ether</p>
        <br/>


        <form  onSubmit={this.onSubmit} >
         <h4>参与到博彩项目?</h4>
         <div>
            <label>你想参与的金额:</label>
             <input type="text"
                 value={this.state.value}
                 onChange={event=>{this.setState({value:event.target.value})}}
             /> ether
         </div>
         <button>提交</button>
        </form>

        <h4>判断输赢</h4>
        <button onClick={this.onClick}>开始博彩</button>
        <p>{this.state.message}</p>




      </div>






    );
  }
}

export default Contract;
