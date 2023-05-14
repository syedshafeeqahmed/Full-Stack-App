import React from 'react'
import './Team-cards.css'

function TeamCards(props) {
  return (
    <div className="card mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img src={props.img} className="img-fluid " alt={props.title}/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Name : {props.title}</h5>
          <p className="card-text">Dept : {props.text}</p>
          <p className="card-text">Role : {props.text2}</p>
          <p className="card-title">Id no : {props.idnum}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TeamCards
