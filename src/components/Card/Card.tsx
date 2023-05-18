//Card.tsx
import React from 'react';
import logo from './../../logo.svg';
import './Card.css'
type CardProps = {
    imageUrl?: string;
    name?: string;
    species?: string;
    status?:string;
    gender?:string;
}

export const Card = (props: CardProps) => {
    const {imageUrl = logo, name = 'John Doe', species = 'Human',status = 'Vivo', gender='Male'} = props;
    return (<div className="card">
    <div className="image">
      <img src={imageUrl} alt={name} />
    </div>
    <div className="content">
      <h2>{name}</h2>
      <p>{status}-{species}-{gender}</p>
     
    </div>
  </div>)
}

export const CardLoader = () => {
    
    return (<div className="card is-loading">
    <div className="image"></div>
    <div className="content">
     
    </div>
  </div>)
}