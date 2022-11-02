import { useState,useEffect } from 'react';
function Home (){
    
    const [data,setData] = useState()
    useEffect(()=>{
        fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=323b1f0b1b2e452ba7e749913f5a52f3").then((res)=>res.json()
    
    
    ).then(res=> setData(res))
    console.log(data);
    },[])

return (
    <div className="user">
        {
           
          data?  data.articles?.splice(0,12).map((user)=>{
            
            return (
                <div  key={Math.random()}>
                    <img src={user.urlToImage}/>
                     <p> Author: {user.author} </p>
                   

                </div>
            )
          })     :null
        }
    </div>
)
}

export default Home