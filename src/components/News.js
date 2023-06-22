import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar'

const News =(props)=> {
const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(true);
const [page, setPage] = useState(1);
const [totalResults, setTotalResults] = useState(0);
const [Progress, setProgress] = useState(10);
// document.title = `${capitalizeFirstLetter(props.category)}-News Api`;
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


 
  // setProgress(progress)
  // {
  //   setProgress({progress:progress})
  // }
 
  const Update=async()=> {
   
   
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true })
    setLoading(true)
    setProgress(10)
    let data = await fetch(url);
    setProgress(50)
    // props.setProgress(30)
    let parsedData = await data.json();
    // props.setProgress(50)

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    setProgress(100)
 
 
  }
  useEffect(() => {
  Update();
  },[] );

//  const handlePrevious = async () => {
//     setPage(page-1)
    
//     Update();

//   }
//  const handleNext = async () => {
//     setPage(page+1)

//     Update();
//   }

  const fetchMoreData = async() => {
    // a fake async api call like which sends
  // setState({pagepage+1})
  setPage(page+1)
   
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true })
    // setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    // setArticles(articles.concat(parsedData.articles)),
    setTotalResults(parsedData.totalResults)
    // setLoading(false)

    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles), 
    //   totalResults: parsedData.totalResults,
    //   loading: false,
      

    // })
    
  };



  
    return (
      <>
      {/* Note: this logic is written by me only */}
      <LoadingBar
        color='#f11946'
        progress={Progress}
        // onLoaderFinished={() => setProgress(0)}
      />
     <h1 className="text-center">Top Headline from News Api on - {capitalizeFirstLetter(props.category)}</h1>
     {loading&&<Spinner/>}
     

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading&&<Spinner/>}
          
        >

          <div className="row  container">

            {/* {this.state.loading&& <Spinner/>} */}
            {/* <h2>Welcome our newapp in the world</h2> */}
            {articles.map((element) => {

              return <div className="col-md-4" key={element.url}>
                <Newsitems title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 90) : ""} imageurl={element.urlToImage} NewsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>

            })}



            {/* <div className="col-md-3">
        <Newsitems title="My Title" description="MY Description"/>
        </div> */}
            {/* <div className="col-md-3">
        <Newsitems title="My Title" description="MY Description"/>
        </div> */}


          </div>

        </InfiniteScroll>


        {/* <div className="container d-flex justify-content-between">
          <button disabled=page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevious}> &larr; Previous</button>
          <button disabled=page + 1 > Math.ceil(this.state.totalResults) / props.pageSize} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div> */}


      
      </>
    )
  
}
News.defaultProps = {
  country: 'in',
  pageSize: 10,
  category: 'General',
  // setProgress:10
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News