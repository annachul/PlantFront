import React from "react"
import { saveAs } from "file-saver";

export default function Card(props) {
    const [statusstate, setStatusState] = React.useState({
        id:props.plant.id,
        status:"dead"})

        //const [formData, setFormData] = React.useState()

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

            function handleChangeImage(event) {
                    event.preventDefault()
                    var value = event.target.files[0]
                    var formData = new FormData();
                    formData.append("image", value)
                    fetch('http://127.0.0.1:8000/api/plants/'+props.plant.id+'/image',{
                        method: 'POST',
                        body: formData}).then(function(response) {
                            console.log(formData)
                        return response.json()})}
            

        var image=props.plant.image==""? require('../images/image.png'):"http://127.0.0.1:8000"+props.plant.image

        function handlePDF(event){
            fetch('http://127.0.0.1:8000/api/plants/'+props.plant.id+'/pdf', {
            method: 'GET'
            })
      }                 

      const saveFile = () => {
        saveAs(
            'http://127.0.0.1:8000/api/plants/'+props.plant.id+'/pdf',
            props.plant.plantname+".pdf"
        );
      };

        function handleStatus(event){
            
            setStatusState(prevStatus=> ({
                ...prevStatus,
                status: "dead"})
    
            )
            alert("RIP!");
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
      })}
    if (props.plant.status=="list"){
    return (
        <div className="oneplant">
            <div>
            <span className="plantname">{props.plant.plantname}</span>
            <span className="icon">
            <span className="oneicon" onClick={handleStatus} style={{cursor:'pointer'}}>💀</span>
            <span className="oneicon" onClick={handledelete} style={{cursor:'pointer'}}>❌</span>
            <span className="oneicon" onClick={saveFile} style={{cursor:'pointer'}}>📊</span>
            </span>
            </div>
            <div class="row">
            <div class="col-3">
                <img src={image} className="image"/>
            </div>  
            <div class="col-7">
            <div class="row">
            <div class="col-5">
                <span>Light level: </span>
                <span>{props.plant.ligth}</span>
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
            <span>Change image: </span> 
            <input type="file" id="image" name="image" onChange={handleChangeImage}></input>
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