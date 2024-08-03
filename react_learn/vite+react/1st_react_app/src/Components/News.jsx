import React, {useEffect, useState} from 'react'
import "./News.css"
import LoadingSpinner from './LoadingSpinner';


export default function News() {

    const [newsItemsArr, setNewsItemsArr] = useState([]);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        setFetching(true);                                            
        fetch('https://newsapi.org/v2/everything?q=cricket&apiKey=0b97b94c4af24e9caf3b6f9e05f6d3e1')
        .then(res => res.json())
        .then(data => {
            setNewsItemsArr(data.articles);
            console.log(data.articles); 
            setFetching(false);                          
        })
    }, []);




  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"></link>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
    

        <div id='nid1'>
            <h1>Get news for free!!!</h1>

            
            {fetching === true ? <LoadingSpinner/> : newsItemsArr.length ===0 ? <h2>No news to display.</h2> : null }

            {newsItemsArr.map((items) => (
                <div className="row row-cols-2 row-cols-md-1 g-4" key={items.url} id='nid2'>
                        <div className="card h-100" id='nid2'>
                            <img src={items.urlToImage} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{items.title}</h5>
                                    <p className="card-text">{items.description}</p>
                                    <p className="card-text">Source: {items.source.name}</p>
                                    <p className="card-text">Author: {items.author}</p>
                                    <p className="card-text">Timing: {items.publishedAt}</p>
                                    <a href={items.url} className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                </div>
            ))}

            


{/* {importedTaskArrContext.taskArrMain.map((item) => (
                    <div key={`${item.data}-${item.cdate}`}>

                        <span className='c3' id='id1'>{item.todo}</span>
                        <span className='c3' id='id2'>{item.cdate}</span>
                        <span className='c3' id='id4' onClick={(event) => handleClickDelete(item,event)}>Delete</span>          onClick={(event) => handleClickDelete(item,event)}
                    </div>        
                ))} */}

             

              
              
          </div>
          
    </>
  )
}
