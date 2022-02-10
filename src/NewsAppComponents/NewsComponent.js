import { element } from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsComponent extends Component {
  constructor() {
    super();
    //console.log("constructor");
    this.state = {
      articles: [],
      loading: false,
      pageNumber: 1,
      disabledPrev: 0,
      disabledNxt: 1,
      totalResults: 1,
    };
  }

  async componentDidMount() {
    var url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.newsCategory}&apiKey=01d8d0db1aae46afad4dad48a3a23fb0&pagesize=${this.props.pageSize}&page=${this.state.pageNumber}}`;

    var promiseResponse = await fetch(url);
    var parsedDataFromPromise = await promiseResponse.json();
    this.setState({ articles: parsedDataFromPromise.articles });
    this.setState({
      pageNumber: this.state.pageNumber + 1,
    });
    this.setState({ totalResults: parsedDataFromPromise.totalResults });
  }

  fetchMoreData = async () => {
    var url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.newsCategory}&apiKey=01d8d0db1aae46afad4dad48a3a23fb0&pagesize=${this.props.pageSize}&page=${this.state.pageNumber}`;
    console.log(url);

    var promiseResponse = await fetch(url);
    var parsedDataFromPromise = await promiseResponse.json();

    console.log(parsedDataFromPromise);
    this.setState({
      articles: this.state.articles.concat(parsedDataFromPromise.articles),
    });
    this.setState({
      pageNumber: this.state.pageNumber + 1,
    });
  };

  componentDidUpdate() {}

  componentWillUnmount() {}

  handlePreviousButton = async () => {
    var url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.newsCategory
    }&apiKey=01d8d0db1aae46afad4dad48a3a23fb0&pagesize=${
      this.props.pageSize
    }&page=${this.state.pageNumber - 1}`;

    var promiseResponse = await fetch(url);
    var parsedDataFromPromise = await promiseResponse.json();

    if (this.state.pageNumber - 1 === 1) {
      this.setState({
        disabledPrev: 0,
      });
    }

    this.setState({ disabledNxt: 1 });
    this.setState({ articles: parsedDataFromPromise.articles });
    this.setState({
      pageNumber: this.state.pageNumber - 1,
    });
  };

  handleNextButton = async () => {
    var url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.newsCategory
    }&apiKey=01d8d0db1aae46afad4dad48a3a23fb0&pagesize=${
      this.props.pageSize
    }&page=${this.state.pageNumber + 1}`;

    var promiseResponse = await fetch(url);
    var parsedDataFromPromise = await promiseResponse.json();

    if (
      parsedDataFromPromise.totalResults <
      (this.state.pageNumber + 1) * this.props.pageSize
    ) {
      this.setState({
        disabledNxt: 0,
      });
    }

    if (this.state.pageNumber + 1 > 1) {
      this.setState({
        disabledPrev: 1,
      });
    }

    this.setState({ articles: parsedDataFromPromise.articles });
    this.setState({
      pageNumber: this.state.pageNumber + 1,
    });
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <p>
            News Monkey - Top Headlines of{" "}
            <b>
              {this.props.newsCategory.charAt(0).toUpperCase() +
                this.props.newsCategory.slice(1)}
            </b>{" "}
            category
          </p>

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={
              this.state.totalResults >=
              (this.state.pageNumber + 1) * this.props.pageSize
            }
            loader={<h4>Loading...</h4>}
          >
            <div className="container my-3">
              <div className="row">
                {this.state.articles.map((e) => {
                  return (
                    <div className="col-md-4" key={e.url}>
                      <NewsItem
                        title={e.title}
                        desc={e.description}
                        imageUrl={e.urlToImage}
                        detailNewsURL={e.url}
                        source={e.source.name}
                        date={e.publishedAt}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}

export default NewsComponent;
