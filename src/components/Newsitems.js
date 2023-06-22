import React from 'react'

const Newsitems = (props) => {
  // constructor(){
  //   super();
  //   console.log("Hello I am a construncture in the this class using the super function in the Newsitems")
  // }

  let { title, description, imageurl, NewsUrl, author, date, source } = props;
  return (
    <div>
      this is new items comes under daily news 2
      <div className="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>{source}
        </span>
        <img src={!imageurl ? "https://images.news18.com/ibnlive/uploads/2023/05/jupiter-168499347916x9.png" : imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary"> by {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>

          <a href={NewsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}


export default Newsitems
