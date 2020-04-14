/**
 * 回测详情接口模型
 */
export default interface BacktestInfoXHR {

  /**
   * 回测id
   */
  id: number

  /**
   * 回测名称
   */
  title: string

  /**
   * 策略简介
   */
  node: string

  /**
   * 收益曲线
   */
  returns: Array<{time: number, value: number}>

  /**
   * 累计收益率
   */
  totalReturns: number

  /**
   * 年化收益率
   */
  yearReturns: number

  /**
   * 最大回撤比例
   */
  maxDrawDown: number
}
