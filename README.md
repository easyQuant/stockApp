# stockApp

# 获取所有回测的列表
/api/getBacktestlist

# 根据条件创建回测
# 1. 接收到语句
# 2. 调用同花顺接口分词获得选股和则时条件
# 3. 根据选股和则时条件 生成python 的回测代码
# 4. 调用回测平台接口创建回测
/api/buildBacktest

# 获取回测详情信息
/api/getBacktestInfo
