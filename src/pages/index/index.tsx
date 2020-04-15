import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import { AtFab } from 'taro-ui'

// import { API_GET_BACKTEST_LIST } from '../../constants/api'

// import BacktestInfoXHR from '../../types/backtest.d'
import BacktestInfo from '../../components/backtest-info';

export default class Index extends Component {

  state = {
    list: []
  }

  componentDidMount () {
    let result = {"status":true,"data":[{"id":1,"tags":["场我规","委技","划圆应"],"title":"条选样万广成走会","node":"热队思理张质技论半已天步集结。","returns":[{"time":0,"value":85.58},{"time":1,"value":46.58},{"time":2,"value":-7.57},{"time":3,"value":88.17},{"time":4,"value":12.22}],"totalReturnRate":15.71,"yearReturnRate":127.82,"maxDrawDownRate":24.76},{"id":1,"tags":["万报点思","育从持派","研断般"],"title":"也改除入单本重位里社","node":"积高东话特场她无选集很金高正名清合。","returns":[{"time":0,"value":31.74},{"time":1,"value":92.05},{"time":2,"value":77.55},{"time":3,"value":28.23},{"time":4,"value":66.48}],"totalReturnRate":115.73,"yearReturnRate":53.26,"maxDrawDownRate":7.37},{"id":1,"tags":["表受名者","达色为论","变先道"],"title":"把见速对持数定将","node":"儿花斗组回计石革品只目电面候要。","returns":[{"time":0,"value":35.48},{"time":1,"value":87.34},{"time":2,"value":45.27},{"time":3,"value":82.28},{"time":4,"value":25.37}],"totalReturnRate":-7.65,"yearReturnRate":192.14,"maxDrawDownRate":8.24},{"id":1,"tags":["程识米","算外转那","该细者"],"title":"五话列入素","node":"术样明般产查少千看这看须采把体何下斯。","returns":[{"time":0,"value":18.35},{"time":1,"value":96.45},{"time":2,"value":68.65},{"time":3,"value":21.87},{"time":4,"value":-9.08}],"totalReturnRate":158.33,"yearReturnRate":6.85,"maxDrawDownRate":19.56},{"id":1,"tags":["己社走","消易","约干向这"],"title":"适压非者处记","node":"装天场联民京据改每三务如保个期白内及。","returns":[{"time":0,"value":60.68},{"time":1,"value":47.72},{"time":2,"value":-7.62},{"time":3,"value":7.97},{"time":4,"value":49.42}],"totalReturnRate":46.78,"yearReturnRate":-29.03,"maxDrawDownRate":29.13}]}
    this.setState({
      list: result.data
    })
  }

  handleToEdit () {
    Taro.navigateTo({
      url: `/pages/edit/edit`
    })
  }

  render () {
    // console.log('index render')
    const cards = this.state.list.map((item: any) => {
      return (
        <BacktestInfo key={item.id} info={item} ></BacktestInfo>
      )
    })

    return (
      <View className='index'>
        Hello World
        {cards}
        <View className='float-window' >
          <AtFab size='normal' onClick={this.handleToEdit.bind(this)}>
            <Text className='at-fab__icon at-icon at-icon-add' ></Text>
          </AtFab>
        </View>
      </View>
    )
  }
}
