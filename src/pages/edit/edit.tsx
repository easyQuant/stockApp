import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text } from '@tarojs/components';

// 引入taro-ui 组件
import { AtTextarea, AtButton, AtFloatLayout, AtCalendar } from 'taro-ui'

import Card from '../../components/card';

export default class Edit extends Component {

  constructor(props) {
    super(props)
  }

  state = {
    filterTextValue: '',
    tradeTextValue: '',
    startDate: '2020-01-01',
    endDate: '2020-04-01',
    isStartDateLayoutOpened: false,
    isEndDateLayoutOpened: false,
    minDate: '2017-01-01'
  }

  handleToggleOpened (isStart, event) {

    if (isStart) {
      this.setState({
        isStartDateLayoutOpened: true
      })
    } else {
      this.setState({
        isEndDateLayoutOpened: true
      })
    }
  }

  handleClose (isStart, event) {

    if (isStart) {
      this.setState({
        isStartDateLayoutOpened: false
      })
    } else {
      this.setState({
        isEndDateLayoutOpened: false
      })
    }
  }

  /**
   * 监听选股语句改变
   * @param value 策略的选股语句
   */
  handleFilterChange (value, event) {
    console.log('handleFilterChange')
    this.setState({
      filterTextValue: value
    })
    return value
  }

   /**
   * 监听则时语句改变
   * @param value 策略的则时语句
   */
  handleTradeChange (value, event) {
    console.log('handleTradeChange')
    this.setState({
      tradeTextValue: value
    })
    return value
  }

  /**
   * 监听回测开始日期的改变
   * @param value 回测开始日期
   */
  onDateChange (isStart, event) {
    console.log('onDateChange')
    console.log('event', event)
    console.log('isStart', isStart)

    if (isStart) {
      this.setState({
        startDate: event.value
      })
    } else {
      this.setState({
        endDate: event.value
      })
    }
  }

  /**
   * 监听回测结束日期的改变
   * @param value 回测结束日期
   */
  onEndDateChange (event) {
    console.log('onEndDateChange')
    console.log(event)
    this.setState({
      endDate: event.value
    })
  }

  /**
   * 创建策略
   */
  handleBuildAlgorithm (e) {
    console.log('创建策略')
    console.log(this.state)
    Taro.navigateTo({
      url: '/pages/info/info?id=3'
    })
  }

  config: Config = {
    navigationBarTitleText: '编辑策略'
  }

  render () {
    return (
      <View>
        <Text>Page Edit</Text>

        <Card
          title='请输入您想要选股的条件语句'
        >
          <AtTextarea
            value={this.state.filterTextValue}
            onChange={this.handleFilterChange.bind(this)}
            maxLength={200}
            placeholder='前2天涨跌幅小于-2%；跳空高开；振幅小于2%；缩量；今日收盘价大于前两日最高价'
          />
        </Card>

        <Card
          title='请输入您想要买卖的条件语句'
        >
          <AtTextarea
            value={this.state.tradeTextValue}
            onChange={this.handleTradeChange.bind(this)}
            maxLength={200}
            placeholder='开盘涨停卖出'
          />
        </Card>

        <Card
          title='请选择回测的时间范围'
        >
          <View>
            <View>
              <Text
                onClick={this.handleToggleOpened.bind(this, true)}
              >开始日期: {this.state.startDate}</Text>
            </View>
          </View>

          <View>
            <View>
              <Text
                onClick={this.handleToggleOpened.bind(this)}
              >结束日期: {this.state.endDate}</Text>
            </View>
          </View>
        </Card>

        <AtButton type='primary' onClick={this.handleBuildAlgorithm.bind(this)} >下一步</AtButton>

        <AtFloatLayout
          isOpened={this.state.isStartDateLayoutOpened}
          title='选择开始日期'
          onClose={this.handleClose.bind(this, true)}
        >
          <AtCalendar
            minDate={this.state.minDate}
            currentDate={this.state.startDate}
            onDayClick={this.onDateChange.bind(this, true)}
          />
        </AtFloatLayout>

        <AtFloatLayout
          isOpened={this.state.isEndDateLayoutOpened}
          title='选择结束日期'
          onClose={this.handleClose.bind(this)}
        >
          <AtCalendar
            minDate={this.state.minDate}
            currentDate={this.state.endDate}
            onDayClick={this.onDateChange.bind(this)}
          />
        </AtFloatLayout>
      </View>
    )
  }
}
