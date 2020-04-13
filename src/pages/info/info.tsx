import Taro, { Component, Config } from '@tarojs/taro'

import { View } from '@tarojs/components';

export default class Info extends Component {

  config: Config = {
    navigationBarTitleText: '策略详情'
  }

  render () {
    return (
      <View>Page Info</View>
    )
  }
}
