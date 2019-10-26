import React from 'react';
import { tsConstructorType } from '@babel/types';

class Fruit extends React.Component {

    constructor(props, refs) {
    // constructor() {
        super(props); // 추상클래스를 상속 받을때 super() 를 실행해야 this 사용 가능
        // super();
        this.state = {
            date: new Date(),
            name: 'fruit',
            num: 0,
        };
        console.log('this', this);
        // 인자로도 받을수 있고 this 로도 호출 가능한듯 하다.
        console.log('props', props);
        console.log('refs', refs);
        console.log('state', this.state);
    }
    // lifecycle
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    // this 사용하려면 아무래도 람다함수로 사용하자
    changeState = () => {
        console.log('hihi');
        console.log('this', this);
        // this.state.name = 'test'; // 이런식으로 사용하면 lifecycle 에 위배
        this.setState({name: 'test'});
        // 아래와 같은 사용도 가능하다.
        this.setState((state, props) => {
            // console.log('state', state);
            return {
                num: ++state.num,
            }
        });
    }
    testBindData = (e, data) => {
        console.log('data', data);
    }
    sendData = (data) => {
        console.log('data', data);
        console.log('props', this.props);
        this.props.getData(data);
    }

    render() {
        // 여기에 보통 변수 선언해서 사용
        return (
            <div>
                Fruit page
                <div>
                    {this.state.name}
                </div>
                <div>
                    {this.state.num}
                </div>
                {/* && / || / ?: / ()=>{if,else,switch return} / */}
                {
                    this.state.num > 0 &&
                    <div>
                        num is not 0
                    </div>
                }
                <button onClick={this.changeState}>set state button</button>
                <button onClick={(e)=>this.testBindData(e, '123123')}>data binding button</button>
                <button onClick={()=>this.sendData('123123')}>send to props button</button>
            </div>
        );
    }
}

export default Fruit;