import React from 'react';
import { useEffect,useState } from 'react';

const Apis = () => {

    const [data,setdata]=useState([]);
    const getapi = ()=>
    {
       fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(post => setdata(post.slice(0,5)))
    }
  return (
    <div>
      <button onClick={getapi}>get api</button>
      {data.map((data)=>
        <>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        </>
      )}
    </div>
  )
}

export default Apis
