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
            const url = `${iex.base_url}/stock/${this.props.ticker}/batch?types=quote,news,chart&range=1m&last=10&token=${iex.api_token}`
//https://cloud.iexapis.com/stable/stock/vwi/interday-prices?chartLast=1&token=sk_27ea4b46c1f34a109885839483ce5969
//https://cloud.iexapis.com/stable/
//https://cloud.iexapis.com/stable/stock/aapl/batch?types=quote,news,chart&range=1m&last=10&token=sk_27ea4b46c1f34a109885839483ce5969
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    data: data
                })
            })
        }

        render() {
            return (
            <tr>
                <td>{this.props.ticker}</td>
                <td>{this.state.data.price}</td>
                <td>{this.state.data.date}</td>
                <td>{this.state.data.time}</td>
            </tr>
        )
    }
}

export default StockRow;
