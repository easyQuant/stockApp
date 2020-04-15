import Taro, { Component, Config } from '@tarojs/taro'

import { View, Text } from '@tarojs/components';

import Chart from '../../components/chart';

import BacktestInfo from '../../components/backtest-info';

export default class Info extends Component {

  state = {
    backtestInfo: {}
  }

  componentWillMount () {
    console.log('将要挂载时')
    let id = this.$router.params.id
    this.handleGetBacktestInfo(id)
  }

  componentDidMount () {
    console.log('挂载完成后')
  }

  config: Config = {
    navigationBarTitleText: '策略详情'
  }

  /**
   * 获得回测详情信息
   */
  handleGetBacktestInfo (id) {

    // 请求参数
    let req = {
      id: id
    }

    // 响应参数
    let res = {"status":true,"data":{"id":1,"tags":["家造次型","集完权类","运平提书"],"title":"区动连原而空反打对","node":"流角合确局清石经用入叫火。","returns":[{"time":0,"value":78.18},{"time":1,"value":96.33},{"time":2,"value":95.35},{"time":3,"value":95.72},{"time":4,"value":30.92}],"totalReturnRate":158.62,"yearReturnRate":-36.71,"maxDrawDownRate":8.07}}

    if (res.status) {
      this.setState({
        backtestInfo: res.data
      })
    }
  }

  render () {
    return (
    <View>
      <BacktestInfo info={this.state.backtestInfo} ></BacktestInfo>
    </View>
    )
  }
}
