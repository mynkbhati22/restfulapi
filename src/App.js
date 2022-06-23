import React from 'react'
import img from "./images/favicon.ico"



// const = [] //array
// const = [
//     {
//         // objects
//     }
// ]

export default function App() {
  const firstArray = [
    {
      img: [img],
      title: "Card title",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      subdesc: "Go somewhere",
    },
    {
      img: [img],
      title: "Card title",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      subdesc: "Go somewhere",
    },
    {
      img: [img],
      title: "Card tite",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      subdesc: "Go somewhere",
    },
    
  ]
  const renderArray = (firstArray, index) => {
    return (
      <div className='col-lg-4 col-md-6' key={index}>
        <div className="card" style={{ width: "18rem" }}>
          <img src={firstArray.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{firstArray.title}</h5>
            <p className="card-text">{firstArray.desc}</p>
            <a href="/" className="btn btn-primary">{firstArray.subdesc}</a>
          </div>
        </div>
      </div>
    );

  };
  return (
    <div>
      <div className='row'>{console.log(firstArray)}
        {firstArray.map(renderArray)}</div>
    </div>
  )
}
