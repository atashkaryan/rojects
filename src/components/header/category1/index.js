import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
function Category1(){
    const params = useParams()
    const [data,setData] = useState()
    
    useEffect(()=>{
        (async() => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=323b1f0b1b2e452ba7e749913f5a52f3`;
            const request = await fetch(url)
            const response = await request.json();
            
            setData(response);
            
        })();
        
       
    },[params.category1]);

   



    return (
        <div className="user">
            {
            
              data &&  data.articles
              .map((el)=>{
                    return (
                        <div  key={Math.random()}>
                    <img src={el.urlToImage}/>
                     <p> Author: {el.author} </p>
                   

                </div>
                    )
                })
            }
        </div>
    )
    }
    
    export default Category1