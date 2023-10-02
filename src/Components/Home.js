import React, { useState } from 'react'
import { quizdata } from './Data'
import List from './List';

function Home() {
const[data,setData]=useState(quizdata)


  return (

      
    <>
      <main>
        <section className='container'>
            <h3> Sample Datas : {data.length}</h3>
            <List data={data}></List>
            <button onClick={()=>setData([])}>Clearall</button>

        </section>
      </main>
    
   
    
    </>
  )
}

export default Home
