import React, { Component } from 'react'
import {  } from 'antd';
import '../style/App.css'

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Orange'];
const defaultCheckedList = ['Apple', ];

class Apple extends React.Component {
    state = {

    };
    render() {
        return (
            <div>
                <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                    <Checkbox
                        indeterminate={this.state.indeterminate}
                        onChange={this.onCheckAllChange}
                        checked={this.state.checkAll}
                    >
                        Check all
                    </Checkbox>
                </div>
                <br />
                <CheckboxGroup options={plainOptions}  />
            </div>
        );
    }

}


