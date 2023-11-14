import React, { useState,useEffect } from 'react'

const Effect = () => {

    let a = (value)=>{
        return new Promise((resolve,reject)=>{
            if(value==3)
            {
                resolve("it is true")
            }
            else{
                reject("it is false")
            }
        })
    }

    let b = (res)=>{
        return new Promise((resolve,reject)=>{
            resolve(`in b ${res}`)
        })
    }



    let calling =async () =>{
        try{
            let res =await a(3)
            console.log(res);
        }
        catch(err){
            console.log(err);
        }
    }

    calling()

    // a(3).then((resp)=>{
    //     console.log(resp);
    //     return b(resp)
    // }).then((bres)=>{
    //     console.log(bres);
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })

    const [datanew,setdatas]=useState([])


    useEffect(()=>{
        async function sample()
        {
            const res =await fetch("https://jsonplaceholder.typicode.com/todos");
            const datas = res.json();
            console.log("fetched data",datas);
            console.log("fetched data fil",datas.data);
            setdatas(datas)
        }
        sample()
    },[])
    

   
  return (
    <div>
        
    </div>
  )
}

export default Effect


















// const [data,setdata]=useState(0)
   
    // useEffect(()=>{
    //     {console.log("side effects")}
    // },[data])
