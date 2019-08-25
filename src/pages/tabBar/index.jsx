import Taro from '@tarojs/taro'
import { AtTabBar }  from 'taro-ui'

export default class Tabbar extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  render () {
    return (
      <AtTabBar
        tabList={[
          { title: '待办事项', text: 8 },
          { title: '拍照' },
          { title: '通讯录', dot: true }
        ]}
        onClick={this.handleClick.bind(this)}
        current={this.state.current}
      />
    )
  }
}