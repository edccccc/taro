import Taro, { Component } from '@tarojs/taro'
// 引入 map 组件
import { Map ,Button} from '@tarojs/components'
import { AtMessage } from 'taro-ui'

class Index extends Component {
  onTap() { }
  componentDidShow(){
    console.log('componentDidShow')
  }
  handleBtnClick(e){
    // 阻止合成事件间的冒泡
    e.stopPropagation();
    Taro.atMessage({
      message: '签到成功！',
      icon: 'success',
      duration: 2000
    })
    
  }
  render() {
    return (
      <Map onClick={this.onTap}>
        <Button type='primary' size='small' circle className='checkIn' onClick={(e)=>this.handleBtnClick(e)} hover-class='test'>施工签到</Button>
        <AtMessage />
      </Map>
    )
  }
}
export default Index