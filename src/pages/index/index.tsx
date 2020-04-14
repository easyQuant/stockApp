import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtFab } from 'taro-ui'
// import { AtFab, AtTag } from 'taro-ui'
// import Card from '../../components/card'
// import Chart from '../../components/chart'
import BacktestInfo from '../../components/backtest-info'

// import { API_GET_BACKTEST_LIST } from '../../constants/api'

// import BacktestInfoXHR from '../../types/backtest.d'

export default class Index extends Component {

  constructor (props) {
    super(props)
    console.log('index constructor')
    console.log(this.props)
  }

  state = {
    // list: [],
    item: {}
  }

  componentWillMount () {
    console.log('index componentWillMount')
  }

  componentDidMount () {
    console.log('index componentDidMount')
    this.handleGetBacktestList()
  }

  componentWillUnmount () {}

  componentDidShow () { }

  componentDidHide () { }

  handleGetBacktestList () {
    // fetch(API_GET_BACKTEST_LIST)
    // .then(res => res.json())
    // .then((res: BacktestInfo) => {

    //   if (res.status) {
    //     this.setState({
    //       list: res.data
    //     })
    //   }
    // })
    const res: any = {"status":true,"data":[{"id":1,"tags":["天其","省示维","每与识从"],"title":"部示中原着需须","node":"争度物造段值压动等层直变议。","returns":[{"time":0,"value":67.35},{"time":1,"value":56.87},{"time":2,"value":57.47},{"time":3,"value":66.48},{"time":4,"value":100.12}],"totalReturnRate":-58.65,"yearReturnRate":107.92,"maxDrawDownRate":22.77}]}

    if (res.status) {
      this.setState({
        item: res.data[0]
      })
      console.log('setState')
    }
  }

  handleCardClick (id, e) {
    console.log(id)
    Taro.navigateTo({
      url: `/pages/info/info?id=${id}`
    })
  }

  handleToEdit (e) {
    Taro.navigateTo({
      url: `/pages/edit/edit`
    })
  }

  render () {
    console.log('index render')
    // const cards = this.state.list.map((item: any) => {
    //   return (
    //     <BacktestInfo key={item.id} info={item} ></BacktestInfo>
    //   )
    // })

    console.log('index render')

    return (
      <View className='index'>
        Hello World
        <View className='at-row' >
          <View className='at-col' >
            <Text>策略列表</Text>
          </View>
        </View>
        <View>
          {/* {cards} */}
          <BacktestInfo info={this.state.item} ></BacktestInfo>
        </View>

        <View className='float-window' >
          <AtFab size='normal' onClick={this.handleToEdit.bind(this)}>
            <Text className='at-fab__icon at-icon at-icon-add' ></Text>
          </AtFab>
        </View>
      </View>
    )
  }
}
