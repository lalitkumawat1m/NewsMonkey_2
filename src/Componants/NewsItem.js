import React, { Component } from 'react'
import PropTypes from 'prop-types'
import noimg from './noimg.jpg'

export class NewsItem extends Component {
  static propTypes = {

  }

  render() {
   let title,description,imgUrl,newsUrl,author,date=this.props;
 
    return (
      <div className='my-3'>
        
        <div className="card" style={{width:"18rem"}}>
  <img src={!this.props.imgUrl?"https://askleo.askleomedia.com/wp-content/uploads/2004/06/no_image-300x245.jpg":this.props.imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title}</h5>
    <p className="card-text">{this.props.description}</p>
    <p className="card-text"><small className="text-muted">By {!this.props.author?'unknown':this.props.author} on {new Date(this.props.date).toGMTString()}</small></p>

    <a href={this.props.newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
  </div>
  </div>
 </div>
  
  

  
    )
  }
}

export default NewsItem
