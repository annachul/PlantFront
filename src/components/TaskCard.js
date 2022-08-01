import React from "react"

export default function TaskCard(props) {
    var today = new Date()
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    const [taskDone, setTaskDone] = React.useState({
        id:props.task.id,
        done:"True",
        actualdate:date
    })

    const [resp, setResp] = React.useState([])

    var dueday=new Date(props.task.duedate)

    let dayprint = ""
    if (dueday.getDate()==today.getDate() && dueday.getMonth()==today.getMonth()) {
        dayprint="today"
    } else if (dueday.getDate()-today.getDate()==1 && dueday.getMonth()==today.getMonth()){
        dayprint="tomarrow"
    }else if (dueday.getDate()-today.getDate()==-1 && dueday.getMonth()==today.getMonth()){
        dayprint="yeaterday"
    }else if (dueday.getDate()>today.getDate() && dueday.getMonth()==today.getMonth()){
        dayprint="in " + (dueday.getDate()-today.getDate()) +" days"
    } else if (dueday.getDate()<today.getDate() && dueday.getMonth()==today.getMonth()){
        dayprint=(today.getDate()-dueday.getDate()) + " days ago"
    }else if (dueday.getMonth()-today.getMonth()==1){
        dayprint="in the next month"
    }
    else if (dueday.getMonth()-today.getMonth()==-1){
        dayprint="last month"
    }else {
        dayprint="anytime"
    }


    var pot = props.task.pot+2

    function handleDeleteTask(event){
        alert("You have deleted a plant!!");
        fetch('http://127.0.0.1:8000/api/tasks/'+props.task.id, {
            method: 'DELETE'
            }).then(function(response) {
                console.log(response)
            return response.json()})}

    
    function handleChange(event){
        event.preventDefault()
        fetch('http://127.0.0.1:8000/api/tasks/'+props.task.id+'/done', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
            body: JSON.stringify(taskDone)
            }).then (response => console.log(response.json()))
            .then(() => {
                window.location.reload();
            })
      }

return(

 <div className="onetask">
     <div class="d-flex justify-content-between">
<h1 className="dayprint">{dayprint}</h1>
<div className="dayprint" onClick={handleDeleteTask} style={{cursor:'pointer'}}>Delete</div>
</div>
<input 
type="checkbox"
class="form-check-input" 
id="task"
onChange={handleChange}
name="task"
/>
<span classname="taskname">  {props.task.type}  {props.task.plantname} {props.task.type=="Repot" ? "in "+ pot +" sm pot. Soil:  "+ props.task.soil:""}</span>
<hr></hr>
</div> 
)}