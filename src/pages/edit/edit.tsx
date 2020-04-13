import Taro, { Component, Config } from "@tarojs/taro";
import { View } from '@tarojs/components';

export default class Edit extends Component {

  config: Config = {
    navigationBarTitleText: '编辑策略'
  }

  render () {
    return (
      <View>Page Edit</View>
    )
  }
}
