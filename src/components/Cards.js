import React from "react"

export default function Card(props) {
    const [statusstate, setStatusState] = React.useState({
        id:props.plant.id,
        status:"dead"})

        function handledelete(event){
            alert("Расстение удалено!!");
            fetch('http://127.0.0.1:8000/delete/', {
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
                status: "dead"})
    
            )
            alert("Здоровья погибшим!");
            console.log(statusstate)
            fetch('http://127.0.0.1:8000/poststatus/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
            body: JSON.stringify(statusstate)
            }).then(function(response) {
                console.log(response)
            return response.json();
      })}
    if (props.plant.status=="list"){
    return (
        <div className="oneplant">
            <div>
            <span className="plantname">{props.plant.plantname}</span>
            <span className="icon">
            <span className="oneicon">🖌️</span>
            <span className="oneicon" onClick={handleStatus} style={{cursor:'pointer'}}>💀</span>
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
                <span>Уровень света: </span>
                <span>{props.plant.ligth}</span>
            </div>   
            </div>
            <div class="row">
            <div class="col-5">
                <span>Полив в летнее время: </span>
                <span>{props.plant.watersum}</span>
            </div>   

            <div class="col-6">
                <span>Удобрение в летнее время: </span>
                <span>{props.plant.feedsum}</span>
            </div>   
            </div>

            <div class="row">
            <div class="col-5">
                <span>Полив в зимнее время: </span>
                <span>{props.plant.waterwin}</span>
            </div>   

            <div class="col-6">
                <span>Удобрение в зимнее время: </span>
                <span>{props.plant.feedwin}</span>
            </div>   
            </div>

            <div class="row">
            {props.plant.warm && <span>✅ Теплый душ</span>}
            {props.plant.clean && <span>✅ Протирка листьев</span>}
            {props.plant.spark && <span>✅ Опрыскивание</span>}
            </div>    
            </div>
            </div>
            <div>
            <span>Почва: </span> 
            <span>{props.plant.soil} </span> 
            </div>
            
            <div>
            {props.plant.add && <span>Примечание: {props.plant.add}</span>}
            </div>

        </div>
    )
}}