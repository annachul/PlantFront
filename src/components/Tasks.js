import React, { useEffect } from "react"
import TaskCard from ".//TaskCard"

function Tasks() {
  const [tasks, setTasks] = React.useState([])

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate());


  const[getData, setGetData] = React.useState(
    {
      plantname: "",
      type: "",
      duedate: date,
    }
  )

  function handleChangeFilter(event) {
    const {name, value} = event.target
    setGetData(prevFormData => {
      return {
          ...prevFormData,
          [name]: value}
      })
  }
  var typefilter = ""
  var plantnamefilter= ""

  function handleSubmitFilter(event) {
    event.preventDefault()
    if (getData.type){
      typefilter="&type="+getData.type
    } 
    if (getData.plantname){
      plantnamefilter="&plantname="+getData.plantname
    } 
    fetch('http://127.0.0.1:8000/api/tasks?duedate='+getData.duedate+typefilter+plantnamefilter)
    .then (response => response.json())
    .then (response => setTasks(response))
  }

  const [plants, setPlants] = React.useState([])


  useEffect(
    () => {fetch('http://127.0.0.1:8000/api/plants')
    .then (response => response.json())
    .then (response => setPlants(response))
  }, 
    []
  );

  useEffect(
    () => {fetch('http://127.0.0.1:8000/api/tasks?duedate='+getData.duedate+typefilter+plantnamefilter)
    .then (response => response.json())
    .then (response => setTasks(response))
  }, 
    []
  );

  const[formData, setFormData] = React.useState(
    {
      description: null,
      type: null,
      duedate: null,
      plantname: null
    }
)



function handleChangeRandom(event) {
  const {name, value} = event.target
  setFormData(prevFormData => {
    return {
        ...prevFormData,
        [name]: value}
    })
}





  function handleSubmit(event) {
    event.preventDefault()
    fetch('http://127.0.0.1:8000/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
    body: JSON.stringify(formData)
  }).then(function(response) {
    console.log(response)
    return response.json();
  }).then(() => {
    window.location.reload();
})
  }




  const oneTask=tasks.sort((a,b) => (a.duedate > b.duedate ? 1 : -1)).map((task) => 
  <TaskCard
          key={task.id}
          task={task}
        />
 
  )

  const oneplant=plants.map((plant) => <option >{plant.plantname}</option>)


  return (
    <section>
    <h1 className="headerforpage">
    ✅  Tasks
    </h1>
    <form onSubmit={handleSubmitFilter}>
    <div class="row justify-content-around my-2 py-2 mx-1">
    <div class="col">
    <input 
                type="date" 
                id="duedate" 
                class="form-control" 
                placeholder="YYYY-MM-DD"
                onChange={handleChangeFilter}
                name="duedate"
                value={getData.duedate}
                />
    </div>
    <div class="col">
              <select class="form-select" aria-label="type" id="type" value={getData.type} onChange={handleChangeFilter} name='type'>
              <option value="">Choose task type</option>
              <option value="Water">Water</option>
              <option value="Feed">Feed</option>
              <option value="Repot">Repot</option>
              <option value="Warm bath">Warm bath</option>
              <option value="Clean">Clean</option>
              <option value="Spray">Spray</option>
              <option value="Other">Other</option>
              </select>
      </div>
      <div class="col">
              <select class="form-select" aria-label="plantname" id="plantname" value={getData.plantname} onChange={handleChangeFilter} name='plantname'>
              <option value="">Choose a plant</option>
              {oneplant}
              </select>
      </div>
    <div class="col">
    <button>Filter</button>
    </div>
    </div>

    </form>

    {oneTask}
    <div>
      <h1 className="randomtaskheader">Add task</h1>
      <div className="randomtask">
              <form onSubmit={handleSubmit}>
              <div class="row justify-content-around my-2 py-2 mx-1">
              <div class="col">
                  <label for="description" class="col-form-label">Description: </label>
                </div>
               <div class="col-10">
              <input 
                type="text" 
                id="description" 
                class="form-control"
                onChange={handleChangeRandom}
                name="description"
                value={formData.description}/>
                </div>
                </div>


                <div class="row justify-content-around my-2 py-2 mx-1">
                <div class="col">
                  <label for="type" class="col-form-label">Type: </label>
                </div>
                <div class="col">
              <select class="form-select" aria-label="type" id="type" value={formData.type} onChange={handleChangeRandom} name='type'>
              <option >Choose task type </option>
              <option value="Water">Water</option>
              <option value="Feed">Feed</option>
              <option value="Repot">Repot</option>
              <option value="Warm bath">Waem bath</option>
              <option value="Clean">Clean</option>
              <option value="Spray">Spray</option>
              <option value="Other">Other</option>
              </select>
              </div>
              <div class="col">
                  <label for="duedate" class="col-form-label">Deadline: </label>
                </div>
                <div class="col">
                <input 
                type="date" 
                id="duedate" 
                class="form-control" 
                placeholder="YYYY-MM-DD"
                onChange={handleChangeRandom}
                name="duedate"
                value={formData.duedate}
                />
              </div >

              <div class="row justify-content-around my-2 py-2 mx-1">
              <div class="col">
                  <label for="plantname" class="col-form-label">Plant name: </label>
                </div>
                <div class="col">
              <select class="form-select" aria-label="plantname" id="plantname" value={formData.plantname} onChange={handleChangeRandom} name='plantname'>
              <option>Choose a plant</option>
              {oneplant}
              </select>
      </div>
                </div>

                </div>

              <button>Add task</button>
              </form>        
      </div> 
    </div>
    </section>
  );
}

export default Tasks;