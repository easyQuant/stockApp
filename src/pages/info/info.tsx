import Taro, { Component, Config } from '@tarojs/taro'

import { View, Text } from '@tarojs/components';

import Chart from '../../components/chart';

export default class Info extends Component {

  componentWillMount () {
    console.log('将要挂载时')
    console.log(this.$router.params.id)
  }

  componentDidMount () {
    console.log('挂载完成后')
  }

  config: Config = {
    navigationBarTitleText: '策略详情'
  }

  render () {
    return (
    <View>
      <Text>Page Info {this.$router.params.id}</Text>
      <Chart></Chart>
    </View>
    )
  }
}
