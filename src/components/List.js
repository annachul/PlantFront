import React from "react";
import Card from ".//Cards"

function List(props) {
  const onePlant =  props.plants.map((plant) => 
    <Card
          key={plant.id}
          plant={plant}
        />
    )     
  
  return (
    <section>
      <h1 className="headerforpage">🪴  Plant list</h1>
      <div>
      {onePlant}
      </div>
    </section>
  )}
  


export default List;