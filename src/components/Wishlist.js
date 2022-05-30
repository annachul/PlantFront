import React from "react";
import Wishcard from ".//Wishcards"

function Wishlist(props) {
  const onePlant =  props.plants.map((plant) => 
    <Wishcard
          key={plant.id}
          plant={plant}
        />
    )     
  
  return (
    <section>
      <h1 className="headerforpage">🎉  Вишлист растений</h1>
      <div>
      {onePlant}
      </div>
    </section>
  )}
  


export default Wishlist;