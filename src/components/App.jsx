import React, { Component } from 'react'
import { Checkbox } from 'antd';
import '../style/App.css'
import Cartlist from './Cartlist'

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

class App extends Component {
	render () {
		return (
			<div>
				<div className="cart_head">
					<div>
                        <Checkbox onChange={onChange}>全选</Checkbox>

					</div>
					<div>
						<p>编辑</p>
					</div>
				</div>
				<Cartlist/>

			</div>
		)
	}
}

export default App
