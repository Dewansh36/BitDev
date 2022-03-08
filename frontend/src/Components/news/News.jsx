import axios from 'axios';
import React, { Fragment } from 'react';
import Loading from '../loading';
import { useState, useEffect } from 'react';
import '../news/news.css'

const News = () => {
    const[error,setError]= useState(true);
    const[items, setItems]= useState([]);
    const[loading,setLoading]= useState(true);

    const month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    useEffect(async  ()=>{
     await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=6c4e28dad016417ba647efd4634c8e2d")
    .then((response)=>{
        console.log(response.data.articles);
        var sdate=response.data.articles[0].publishedAt;
        var date= new Date(sdate);

        console.log(date.getDate());

        setItems(response.data.articles);
        
        setLoading(false);
        setError(false);
    })
    .catch((error)=>{
        console.log(error)
        setError(true);
        setLoading(false);
    })
    },[])
   
    var datetime = (e)=>{
        var sdate=e;
        var date=new Date(sdate);
        var mon= month[date.getMonth()];
        var dt= date.getDate();
        var time= date.getHours()+":"+date.getMinutes();
        return dt+" "+mon+" "+time;
    }
  return (
      <Fragment>
          {loading?(<Fragment><Loading></Loading></Fragment>):(<Fragment>
        <div className='news_body'>
            
            <section className="news_light">
                <div className="container py-2">
                    <div className="news_h1 text-center text-dark" id="pageHeaderTitle" style={{color: "black"}}>Headlines</div>
                    {items.
            filter(item=> item.description!=null).
            filter(item=> item.urlToImage!=null).
            map((item)=>(
                
                <article className="news_postcard news_light news_blue">
                    <a className="news_postcard__img_link" href={item.urlToImage}>
                        <img className="news_postcard__img" src={item.urlToImage} alt="" />
                    </a>
                    <div className="news_postcard__text news_t-dark">
                        <h1 className="news_postcard__title news_blue"><a href={item.url}>{item.title}</a></h1>
                        <div className="news_postcard__subtitle news_small">
                            <time datetime="2020-05-25 12:00:00">
                                <i className="fas fa-calendar-alt mr-2"></i>{datetime(item.publishedAt)}
                            </time>
                        </div>
                        <div className="news_postcard__bar"></div>
                        <div className="news_postcard__preview-txt">{item.description}</div>
                        <br />
                        <div className="news_postcard__preview-txt">Source: {item.source.name}</div>
                        
                    </div>
                    </article>
            ))}
                    
                </div>
            </section>
        </div>
        </Fragment>
          )
}
    </Fragment>
  )
}

export default News