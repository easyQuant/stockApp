import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

// 引入taro-ui 组件
import { AtTag } from 'taro-ui'
import Card from '../components/card'
import Chart from '../components/chart'

export default class BacktestInfo extends Component<any> {

  constructor (props) {
    super(props)
    // console.log('backtestInfo constructor')
    // console.log(this.props)
  }

  state = {
    id: 0,
    title: '',
    tags: [],
    note: '',
    returns: [],
    totalReturnRate: 0,
    yearReturnRate: 0,
    maxDrawDownRate: 0
  }

  componentWillMount () {
    // console.log('backtest-info componentWillMount', this.props.info)
    this.setState(this.props.info)
    // console.log(this.props)
    // this.setState(this.props.info)
    // console.log(this.props)
  }

  componentDidMount () {
    // console.log('backtest-info componentDidMount')
  }

  handleCardClick (id, e) {
    console.log(id)
    Taro.navigateTo({
      url: `/pages/info/info?id=${id}`
    })
  }

  static options = {
    addGlobalClass: true
  }

  render () {
    // console.log('backtest-info render')
    return (
      <View>
        <Card
          title={this.state.title}
        >
          <View>
            {
              this.state.tags.map(tag => (<AtTag size='small' >{tag}</AtTag>))
            }

            <Text>{this.state.note}</Text>
            <Chart returns={this.state.returns} ></Chart>
          </View>
          <View className='at-row' >
            <View className='at-col' >
              <Text>累计收益</Text>
              <Text>{this.state.totalReturnRate}%</Text>
            </View>

            <View className='at-col' >
              <Text>年化收益</Text>
              <Text>{this.state.yearReturnRate}%</Text>
            </View>

            <View className='at-col' >
              <Text>最大回撤</Text>
              <Text>{this.state.maxDrawDownRate}%</Text>
            </View>
          </View>
        </Card>
      </View>
    )
  }
}
