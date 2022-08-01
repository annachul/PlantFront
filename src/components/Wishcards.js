import React from "react"

export default function Wishcard(props) {
    const [statusstate, setStatusState] = React.useState({
    id:props.plant.id,
    status:"list"})

    function handledelete(event){
        alert("You have deleted a plant!!");
        fetch('http://127.0.0.1:8000/api/plants/'+props.plant.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
            body: JSON.stringify(statusstate)
            }).then(function(response) {
                console.log(response)
            return response.json()})}

    function handleStatus(event){
        
        setStatusState(prevStatus=> ({
            ...prevStatus,
            status: "list"})

        )
        alert("Congrats!!");
        fetch('http://127.0.0.1:8000/api/plants/'+props.plant.id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
        body: JSON.stringify(statusstate)
        }).then(function(response) {
            console.log(response)
        return response.json();
  })
    }
    if (props.plant.status=="wishlist"){
    return (
        <div className="oneplant">
            <div>
            <span className="plantname">{props.plant.plantname}</span>
            <span className="icon">
            <span className="oneicon">🖌️</span>
            <span className="oneicon" onClick={handleStatus} style={{cursor:'pointer'}}>🎁</span>
            <span className="oneicon" onClick={handledelete} style={{cursor:'pointer'}}>❌</span>
            </span>
            </div>
            <div class="row">
            <div class="col-3">
                <img src={require('../images/image.png')} className="image"/>
            </div>  
            <div class="col-7">
            <div class="row">
            <div class="col-5">
                <span>Light level:  </span>
                <span>{props.plant.ligth}</span>
            </div>
            <div class="col-5">
                <span>Difficulty level: </span>
                <span>{props.plant.hard}</span>
            </div> 
            </div>
            <div class="row">
            <div class="col-5">
                <span>Watering in summer time: </span>
                <span>{props.plant.watersum}</span>
            </div>   

            <div class="col-6">
                <span>Food in summer time: </span>
                <span>{props.plant.feedsum}</span>
            </div>   
            </div>

            <div class="row">
            <div class="col-5">
                <span>Watering in winter time: </span>
                <span>{props.plant.waterwin}</span>
            </div>   

            <div class="col-6">
                <span>Food in winter time: </span>
                <span>{props.plant.feedwin}</span>
            </div>   
            </div>

            <div class="row">
            {props.plant.warm && <span>✅ Warm bath</span>}
            {props.plant.clean && <span>✅ Cleaning</span>}
            {props.plant.spark && <span>✅ Spraying</span>}
            </div>    
            </div>
            </div>
            <div>
            <span>Soil: </span> 
            <span>{props.plant.soil} </span> 
            </div>
            
            <div>
            {props.plant.add && <span>Comment: {props.plant.add}</span>}
            </div>

        </div>
    )
}}