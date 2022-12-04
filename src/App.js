import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>函数式组件 vs 类式组件</h1>
      <Box1 name="wuxh" age="123" />
      <Box2 name="box2" />
    </div>
  );
}
// 完整写法
function Box1(props) {
  return (
    <div>
      {props.name}的年龄 {props.age}
    </div>
  );
}
// 解构赋值的写法
function Box1({ name, age }) {
  return (
    <div>
      <h2>函数组件</h2>
      {name}的年龄 {age}
    </div>
  );
}

// 类式组件
class Box2 extends React.Component {
  // 状态
  state = {
    isHot: true,
    wind: '微风',
  };
  // 自定义函数用箭头函数
  changeWeather = () => {
    const isHot = this.state.isHot;
    this.setState({ isHot: !isHot });
  };
  // 渲染函数
  render() {
    return (
      <h2 onClick={this.changeWeather}>
        今天的天气很{this.state.isHot ? '炎热' : '凉爽'}，{this.state.wind}
      </h2>
    );
  }
}
