import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Table extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className='container my-3'>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Market cap</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{this.props.name}</td>
      <td>{this.props.price}</td>
      <td>{this.props.marcap}</td>
    </tr>
  </tbody>
</table>
      </div>
    )
  }
}

export default Table
