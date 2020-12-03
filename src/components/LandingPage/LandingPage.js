import React from 'react';
import StockRow from '../StockRow/StockRow'
import './LandingPage.css';


function LandingPage() {
    return (
        <div>
            <table className='table mt-5'>
                <thead>
                    <tr>
                        <th>Ticker</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <StockRow ticker='aapl' />
                    <StockRow ticker='tsla'/>
                    <StockRow ticker='dia' />
                    <StockRow ticker='qqq' />
                </tbody>
            </table>
        </div>
    )
}
export default LandingPage



// TOKEN = sk_42dd3ac312574d569cb08b524734d798



// URL = GET /stock/{QQQ}/intraday-prices
