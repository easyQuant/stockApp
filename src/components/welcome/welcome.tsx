import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './welcome.less'

interface WelcomeState {
  name: string
  age: number
}

export default class Welcome extends Component<WelcomeState> {

  // constructor (prop) {
  //   console.log('构造函数 prop ', prop)
  //   super(prop)
  // }

  // 模版将要挂载时执行
  componentWillMount () {
    console.log('模版将要挂载时执行')
  }

  // 模版挂载后执行
  componentDidMount () {
    console.log('模版挂载后执行')
  }

  // 模版将要卸载前执行
  componentWillUnmount () {
    console.log('模版将要卸载时执行')
  }

  // 模版卸载后执行
  componentDidUnmount () {
    console.log('模版卸载后执行')
  }

  // 模版将要显示时执行
  componentDidShow () {
    console.log('模版将要显示时执行')
  }

  // 模版显示后执行
  componentWillShow () {
    console.log('模版显示后执行')
  }

  // 模版将要隐藏时执行
  componentDidHide () {
    console.log('模版将要隐藏时执行')
  }

  // 模版隐藏后执行
  componentWillHide () {
    console.log('模版隐藏后执行')
  }

  render () {
    return (
      <View>
        <Text> name - {this.props.name} </Text>
        <Text> age - {this.props.age} </Text>
      </View>
    )
  }
}
