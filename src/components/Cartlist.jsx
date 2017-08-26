import React, { Component } from 'react'
import { Modal, Checkbox, Button, Badge, Icon, Switch, Row, Col } from 'antd';
import '../style/App.css'
import img001 from '../img/001.jpg'


function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const ButtonGroup = Button.Group;

class Demo extends React.Component {
    state = {
        count: 5,
        show: true,
    }

    increase = () => {
        const count = this.state.count + 1;
        this.setState({ count });
    }

    decline = () => {
        let count = this.state.count - 1;
        if (count < 0) {
            count = 0;
        }
        this.setState({ count });
    }

    onChange = (show) => {
        this.setState({ show });
    }

    render() {
        return (
            <div>
                <div>
                    <ButtonGroup>
                        <Button className="cart_list_minus" onClick={this.decline}>
                            <Icon type="minus" />
                        </Button>
                        <span className="cart_list_num">{this.state.count}</span>
                        <Button className="cart_list_minus" onClick={this.increase}>
                            <Icon type="plus" />
                        </Button>
                    </ButtonGroup>
                </div>

            </div>
        );
    }
}

class Cartlist extends Component {
	render () {
		return (
			<div>
                <Row className="cart_list_row">
                    <Col className="cart_list_input" span={3}>
                        <Checkbox onChange={onChange}></Checkbox>
                    </Col>
                    <Col span={7}>
                        <img className="cart_list_img" src={img001} alt=""/>
                    </Col>
                    <Col span={14}>
                        <p className="cart_list_name">正品和田白玉生肖羊吊坠 三阳开泰玉石</p>
                        <p className="cart_list_size">规格：红色 100g </p>
                        <div className="ant001">
                        <Demo/>
                        </div>
                    </Col>
                </Row>

			</div>
		)
	}
}



export default Cartlist
