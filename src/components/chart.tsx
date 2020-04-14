import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

import F2 from '../components/f2-canvas/lib/f2';

function initChart(canvas, width, height) {
  console.log('initChart')
  console.log('canvas', canvas)
  console.log('width', width)
  console.log('height', height)
  const data = [
    { year: '1951 年', sales: 38 },
    { year: '1952 年', sales: 52 },
    { year: '1956 年', sales: 61 },
    { year: '1957 年', sales: 145 },
    { year: '1958 年', sales: 48 },
    { year: '1959 年', sales: 38 },
    { year: '1960 年', sales: 38 },
    { year: '1962 年', sales: 38 },
  ];
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

  chart.area().position('year*sales')
  chart.line().position('year*sales')
  chart.render();
  return chart;
}

export default class Chart extends Component {

  state = {
    opts: {
      onInit: initChart
    }
  }

  componentWillMount() {
    console.log(this)
  }

  static options = {
    addGlobalClass: true
  }

  config: Config = {
    usingComponents: {
      'ff-canvas': '../components/f2-canvas/f2-canvas'
    }
  }

  render () {
    return (
      <View className='hello' >
        <ff-canvas
          id="column-dom"
          canvas-id="column"
          opts={this.state.opts}
        ></ff-canvas>
      </View>
    )
  }
}
