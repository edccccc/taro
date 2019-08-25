import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton, AtInput } from 'taro-ui'
import { add, minus, asyncAdd } from '../../actions/counter'
// eslint-disable-next-line import/first
import { connect } from '@tarojs/redux'
import Child from './children'

@connect(({ counter }) => ({
    counter
}), (dispatch) => ({
    add() {
        dispatch(add())
    },
    dec() {
        dispatch(minus())
    },
    asyncAdd() {
        dispatch(asyncAdd())
    }
}))


class Test extends Component {
    config = {
        navigationBarTitleText: '首页'
    }
    constructor() {
        this.state = {
            name: '张三',
            value: 'test'
        }
    }
    componentWillMount() {

    }
    // eslint-disable-next-line react/sort-comp
    render() {
        return <View>
            <Child name={this.state.name}></Child>
            <AtButton type='primary' size='small' onClick={this.handleClick.bind(this)}>修改</AtButton>
        </View>
    }

    handleClick() {
        
        this.setState({
            name:'李四'
        })
    }
    handleChange(e) {
        this.setState({
            value: e
        })
    }
}
export default Test