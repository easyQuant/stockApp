import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

import F2 from '../components/f2-canvas/lib/f2';

import { ChartProps } from '../types/chart.d'

function initChart(canvas, width, height) {
  const data = this.state.returns

  const chart = new F2.Chart({
    el: canvas,
    width,
    height
  });

  chart.source(data, {
    sales: {
      tickCount: 5
    }
  });
  chart.tooltip({
    showItemMarker: false,
    onShow(ev) {
      const { items } = ev;
      items[0].name = null;
      items[0].name = items[0].title;
      items[0].value = '¥ ' + items[0].value;
    }
  });

  chart.area().position('time*value')
  chart.line().position('time*value')
  chart.render();
  return chart;
}

export default class Chart extends Component<ChartProps> {

  constructor (props) {
    super(props)
    // console.log('chart constructor', this.props)
    // console.log(this.props)
  }

  state = {
    opts: {
      onInit: initChart.bind(this)
    }
  }

  componentDidMount() {
    // console.log('chart componentDidMount')
    this.setState({
      returns: this.props.returns
    })
  }

  // componentDidUpdate () {

  // }

  static options = {
    addGlobalClass: true
  }

  config: Config = {
    usingComponents: {
      'ff-canvas': '../components/f2-canvas/f2-canvas'
    }
  }

  render () {
    // console.log('chart render')
    return (
      <View className='chart' >
        <ff-canvas
          id='column-dom'
          canvas-id='column'
          opts={this.state.opts}
        ></ff-canvas>
      </View>
    )
  }
}
