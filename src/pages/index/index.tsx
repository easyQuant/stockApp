import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtFab } from 'taro-ui'
import Card from '../../components/card'

export default class Index extends Component {

  state = {
    list: [
      {
        id: 1,
        title: '测试标题-01',
        note: '简介',
        totalReturnRate: 123.23,
        yearReturnRate: 83.23,
        maxDrawDownRate: 23.23
      },

      {
        id: 2,
        title: '测试标题-02',
        note: '简介',
        totalReturnRate: 123.23,
        yearReturnRate: 83.23,
        maxDrawDownRate: 23.23
      },

      {
        id: 3,
        title: '测试标题-03',
        note: '简介',
        totalReturnRate: 123.23,
        yearReturnRate: 83.23,
        maxDrawDownRate: 23.23
      }
    ]
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

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
    const cards = this.state.list.map(item => {
      return (
        <View
          key={item.id}
          onClick={this.handleCardClick.bind(this, item.id)}
        >
          <Card
            title={item.title}
          >
            <View>
              <Text>{item.note}</Text>
            </View>
            <View className='at-row' >
              <View className='at-col' >
                <Text>累计收益</Text>
                <Text>{item.totalReturnRate}%</Text>
              </View>

              <View className='at-col' >
                <Text>年化收益</Text>
                <Text>{item.yearReturnRate}%</Text>
              </View>

              <View className='at-col' >
                <Text>最大回撤</Text>
                <Text>{item.maxDrawDownRate}%</Text>
              </View>
            </View>
          </Card>
        </View>
      )
    })

    return (
      <View className='index'>
        <View className='at-row' >
          <View className='at-col' >
            <Text>策略列表</Text>
          </View>
        </View>
        <View>
          {cards}
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
