import { CommonComponent } from '.';

/**
 * 使用F2封装的曲线图组件
 */
export interface ChartProps extends CommonComponent {

  /**
   * 曲线图表数据
   */
  returns: Array<{time: number, value: number}>
}
