import React from 'react'

function List({data}) {
  return (
    <>
    {data.map((i)=> {
        return (
            <article className="data" key={i.id}>
                <img src={i.img}  alt=""/>
                <div>
                  <h3>{i.name}</h3> 
                   <p>{i.place}</p>
                </div>
            </article>
        )
    }
    )}

      
    </>
  )
}

export default List
