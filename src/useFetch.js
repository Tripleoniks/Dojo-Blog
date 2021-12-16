import { useState, useEffect } from "react";
const useFetch = (url) => {
   
    const [data, setData] = useState(null);
    const [Isloading, setIsloading] = useState(true);
    const [error, setError] = useState(null);

      useEffect(()=>{
        const abortCont = new AbortController();

        fetch(url, {signal : abortCont.signal} )
            .then(res =>{
                if (!res.ok){
                    throw Error('Failed to fetch data');
                }
                return res.json();
            })
            .then(data => {
            setData(data)
            setIsloading(false)
            setError(null);
            })
            .catch(err => {
                if (err.name === "AbortError"){
                    console.log("Fetch Aborted")
                }else{
                    setError(err.message);
                    setIsloading(false)
                    
                }
            })

            return ()=> abortCont.abort(); 
      }, [url]);
     return{data, Isloading, error}
}
 
export default useFetch;