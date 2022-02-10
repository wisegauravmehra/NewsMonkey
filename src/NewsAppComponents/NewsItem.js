import React, { Component } from "react";

export class NewsItem extends Component {
  constructor() {
    super();
  }

  render() {
    let { title, desc, imageUrl, detailNewsURL, source, date } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{desc}...</p>
            <a href={detailNewsURL} target="_blank" className="btn btn-primary btn-sm">Read More</a>
            <div className="card-footer text-muted my-2">Published at {new Date(date).toGMTString()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
