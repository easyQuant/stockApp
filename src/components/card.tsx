import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

// 引入taro-ui 组件
import { AtCard } from 'taro-ui'

// 引入props类型规范
import { CardProps } from '../types/card.d'

export default class Card extends Component<CardProps> {

  static options = {
    addGlobalClass: true
  }

  render () {
    return (
      <View>
        <AtCard
          className='not-broder'
          title={this.props.title}
        >
          {this.props.children}
        </AtCard>
      </View>
    )
  }
}
