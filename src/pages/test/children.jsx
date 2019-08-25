import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

function Child(props){
    return <View>{props.name}</View>
}
export default Child