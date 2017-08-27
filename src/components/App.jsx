import React, { Component } from 'react'
import { Checkbox, Button, Affix, Icon, Row, Col } from 'antd';
import '../style/App.css'

const ButtonGroup = Button.Group;


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            checkedList: this.props.items,
            indeterminate: true,
            checkAll: false,
        }
    }

    increase = () => {
        const count = this.state.count + 1;
        this.setState({ count });
    }

    decline = () => {
        let count = this.state.count - 1;
        if (count <= 0) {
            count = 1;
        }
        this.setState({ count });
    }

    onChange = (checkedList) => {
        this.setState({checked: !this.state.checked});
    }

    isChecked = (e) => {
        
    }

	render () {
		return (
			<div>
                <Affix>
                    <div className="cart_head">
                        <div>
                            <Checkbox
                                onChange={this.onChange}
                                checked={this.state.checked}
                            >
                                全选
                            </Checkbox>
                        </div>
                        <div>
                            <p>编辑</p>
                        </div>
                    </div>
                </Affix>

                {
                    this.props.items.map((item, index) => {
                        return         <div key={index}>
                            <Row className="cart_list_row">
                                <Col className="cart_list_input" span={3}>
                                    <Checkbox></Checkbox>
                                </Col>
                                <Col span={7}>
                                    <img className="cart_list_img" src={item.src} alt=""/>
                                </Col>
                                <Col className="cart_list_content" span={14}>
                                    <p className="cart_list_name">正品和田白玉生肖羊吊坠 三阳开泰玉石</p>
                                    <p className="cart_list_size">规格：红色 100g </p>
                                    <p className="cart_list_money">￥{this.state.count * item.money}</p>
                                    <div className="ant001">
                                        <div className="cart_list_numf">
                                            <ButtonGroup>
                                                <Button className="cart_list_minus" onClick={this.decline}>
                                                    <Icon type="minus"/>
                                                </Button>
                                                <span className="cart_list_num">{this.state.count}</span>
                                                <Button className="cart_list_minus" onClick={this.increase}>
                                                    <Icon type="plus"/>
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                     })
                }

                <Affix className="cart_list_bottom" offsetBottom={0}>
                    <p className="cart_bottom_p">合计：<span>￥0.00</span></p>
                    <Button className="cart_bottom_button" type="primary">下单</Button>
                </Affix>
			</div>
		)
	}
}

export default App
