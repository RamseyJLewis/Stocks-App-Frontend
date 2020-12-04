import React, { Component } from 'react';
import StockRow from '../StockRow/StockRow'
import './LandingPage.css';


class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state = {
           data:{}
        }
    }
    render(){
        return (
            <div>
                <table className='table mt-5'>
                    <thead>
                        <tr>
                            <th>symbol</th>
                            <th>low</th>
                            <th>high</th>
                            <th>latestTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        <StockRow symbol='aapl' />
                        <StockRow symbol='tsla'/>
                        <StockRow symbol='dia' />
                        <StockRow symbol='qqq' />
                    </tbody>
                </table>
            </div>
        )
    }
}
export default LandingPage



// TOKEN = sk_42dd3ac312574d569cb08b524734d798



// URL = GET /stock/{QQQ}/intraday-prices
