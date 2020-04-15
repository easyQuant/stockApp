import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text } from '@tarojs/components';
import moment from 'moment'

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
    endDate: moment().add(-1, 'days').format('YYYY-MM-DD'),
    isStartDateLayoutOpened: false,
    isEndDateLayoutOpened: false,
    minDate: '2017-01-01',
    maxDate: moment().add(-1, 'days').format('YYYY-MM-DD')
  }

  handleToggleOpened (isStart, event) {

    if (typeof isStart !== 'object') {
      this.setState({
        isStartDateLayoutOpened: true
      })
    } else {
      this.setState({
        isEndDateLayoutOpened: true
      })
    }
  }

  handleClose () {
    this.setState({
      isStartDateLayoutOpened: false,
      isEndDateLayoutOpened: false
    })
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
    this.setState({
      tradeTextValue: value
    })
    return value
  }

  /**
   * 监听回测开始日期的改变
   * @param value 回测开始日期
   */
  onStartDateChange (event) {
    console.log('onDateChange')
    console.log('event', event)
    this.setState({
      startDate: event.value
    })
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

    // 请求数据
    let req = {
      filterTextValue: this.state.filterTextValue,
      tradeTextValue: this.state.tradeTextValue,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    }

    // 响应数据
    let res = {
      status: true,
      data: {}
    }

    if (res.status) {
      Taro.navigateTo({
        url: '/pages/info/info?id=3'
      })
    }

    console.log('请求数据 ', req)
    console.log('响应数据 ', res)
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
          onClose={this.handleClose.bind(this)}
        >
          <AtCalendar
            minDate={this.state.minDate}
            maxDate={this.state.maxDate}
            currentDate={this.state.startDate}
            onDayClick={this.onStartDateChange.bind(this)}
          />
        </AtFloatLayout>

        <AtFloatLayout
          isOpened={this.state.isEndDateLayoutOpened}
          title='选择结束日期'
          onClose={this.handleClose.bind(this)}
        >
          <AtCalendar
            minDate={this.state.minDate}
            maxDate={this.state.maxDate}
            currentDate={this.state.endDate}
            onDayClick={this.onEndDateChange.bind(this)}
          />
        </AtFloatLayout>
      </View>
    )
  }
}
