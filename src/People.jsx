import React from 'react'
import Gallerygrid from './Gallerygrid'
import img from './ocean.jpg';
// import img1 from './blue.jpg';
// import img2 from './blue3.jpg';

const People = () => {
    const person =[{
        name : "Varsha",
        descriptions : "Developer"
    },
{
    name : "Keerthi",
    descriptions : "Software Developer"
}]
  return (
    <div>
        {person.map((item,key)=>
        <div class="container">
            <div class="row ">
                <Gallerygrid   name={item.name} id={key} description={item.descriptions} src={img}/>   
                {/* <Gallerygrid   name="Navya" description="Software Tester" src={img1}/>  
                <Gallerygrid   name="Devika" description="Software Engineer" src={img2}/>
                <Gallerygrid   name="Hari" description="Software Engineer" src={img1}/>
                <Gallerygrid   name="Karthik" description="Software Engineer" src={img}/>
                <Gallerygrid   name="Danush" description="Software Engineer" src={img2}/>    */}
            </div>
        </div>
        )}
    </div>
  )
}

export default People
