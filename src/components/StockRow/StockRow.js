import React, { Component } from 'react';
import { iex } from '../config/iex';
    class StockRow extends Component {

        constructor(props){
            super(props)
            this.state = {
               data:{}
            }
        }

        componentDidMount(){
            //query the API
            const url = `${iex.base_url}/stock/${this.props.symbol}/batch?types=quote,news,chart&range=1m&last=10&token=${iex.api_token}`
            console.log(this.state.data)
//https://cloud.iexapis.com/stable/stock/vwi/interday-prices?chartLast=1&token=sk_27ea4b46c1f34a109885839483ce5969
//https://cloud.iexapis.com/stable/
//https://cloud.iexapis.com/stable/stock/aapl/batch?types=quote,news,chart&range=1m&last=10&token=sk_27ea4b46c1f34a109885839483ce5969
            fetch(url)
            .then((response) => response.json())
            .then((info) => {
                // console.log(info)
                this.setState({
                    info: info
                })
            })
        }
        componentDidUpdate (){
            console.log(this.state.info.chart[0])
        }
        render() {
            return (
            <tr>
                
                {/* <td>{this.props.symbol}</td>
                <td>{this.state.info?.chart[0].low}</td>
                <td>{this.state.info?.chart.high}</td>
                <td>{this.state.info?.quote.latestTime}</td> */}
            </tr>
        )
    }
}

export default StockRow;

//PF5IS1XCSM83DWA6