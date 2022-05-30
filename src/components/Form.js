import React from "react";

function Form() {

  const [formData, setFormData] = React.useState(
    {
        id:null,
        plantname: null, 
        ligth: null, 
        spot: null, 
        watersum: null, 
        waterwin: null, 
        lastwater: null,
        feedsum: null,
        feedwin: null,
        lastfeed: null, 
        poting: null, 
        lastpot: null, 
        warm: null, 
        lastwarm: null,
        clean: null,
        lastclean: null,
        spark: null,
        lastspark: null,
        soil: null, 
        add: null, 
        status: null, 
        pot: null, 
        hard: null
    }
)

const [postimage, setPostImage] = React.useState(null);


function handleChange(event) {
  const {name, value} = event.target
  if (name=="image") {
    setPostImage({
      image: event.target.files})
    }
  else{ setFormData(prevFormData => {
    return {
        ...prevFormData,
        [name]: value}
    })
}
}


function handleSubmit(event) {
  event.preventDefault()

  var postData = {
  plantname : formData.plantname,
  ligth : formData.ligth,
  spot:formData.spot,
  watersum: formData.watersum,
  waterwin: formData.waterwin,
  lastwater: formData.lastwater,
  feedsum: formData.feedsum,
  feedwin: formData.feedwin,
  lastfeed: formData.lasfeed,
  poting: formData.poting,
  lastpot: formData.lastpot,
  warm: formData.warm,
  lastwarm: formData.lastwarm,
  clean: formData.clean,
  lastclean: formData.lastclean,
  spark: formData.spark,
  lastspark: formData.lastspark,
  soil: formData.soil,
  add: formData.add,
  status:formData.status,
  pot: formData.pot,
  image: postimage.image[0],
  hard: formData.hard}
  alert("Расстение внесено!");
  fetch('http://127.0.0.1:8000/api/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(postData)
  }).then(function(response) {
    console.log(response)
    return response.json();
  });
  }

  return (
          <section>
            <h1 className="headerforpage">
            🏡  Форма внесения растения
            </h1>
            <div className="formdiv">
              <form onSubmit={handleSubmit}>

              <div class="row justify-content-around my-2 py-2 mx-1">
                <div class="col">
                  <label for="plantname" class="col-form-label"> Название: </label>
                </div>
              <div class="col">
                <input 
                type="text" 
                id="plantname" 
                class="form-control"
                onChange={handleChange}
                name="plantname"
                value={formData.plantname}/>
              </div >
              <div class="col">
                  <label for="spot" class="col-form-label">Занимаемое место: </label>
                </div>
              <div class="col">
                <input type="text" 
                id="spot" 
                class="form-control"
                onChange={handleChange}
                name="spot"
                value={formData.spot}
                />
              </div >
              </div>

              <div class="row justify-content-around my-2 py-2 mx-1">
                <div class="col">
                  <label for="ligth" class="col-form-label"> Уровень света: </label>
                </div>
              <div class="col">
                <input 
                type="text" 
                id="ligth" 
                class="form-control"
                onChange={handleChange}
                name="ligth"
                value={formData.ligth}/>
              </div >
              <div class="col">
                  <label for="pot" class="col-form-label">Радиус горшка: </label>
                </div>
              <div class="col">
                <input 
                type="text" 
                id="pot" 
                class="form-control"
                onChange={handleChange}
                name="pot"
                value={formData.pot}
                />
              </div >
              </div>

              <div class="row justify-content-around my-2 py-2 mx-1">
                <div class="col">
                  <label for="watersum" class="col-form-label">Полив ЛВ: </label>
                </div>
              <div class="col">
                <input 
                type="text" 
                id="watersum" 
                class="form-control"
                onChange={handleChange}
                name="watersum"
                value={formData.watersum}
                />
              </div >
              <div class="col">
                  <label for="feedsum" class="col-form-label">Удобрение ЛВ: </label>
                </div>
              <div class="col">
                <input 
                type="text" 
                id="feedsum" 
                class="form-control"
                onChange={handleChange}
                name="feedsum"
                value={formData.feedsum}
                />
              </div >
              </div>

              <div class="row justify-content-around my-2 py-2 mx-1">
                <div class="col">
                  <label for="waterwin" class="col-form-label">Полив ЗВ: </label>
                </div>
              <div class="col">
                <input 
                type="text" 
                id="waterwin" 
                class="form-control"
                onChange={handleChange}
                name="waterwin"
                value={formData.waterwin}
                />
              </div >
              <div class="col">
                  <label for="feedwin" class="col-form-label">Удобрение ЗВ: </label>
                </div>
              <div class="col">
                <input 
                type="text" 
                id="feedwin" 
                class="form-control"
                onChange={handleChange}
                name="feedwin"
                value={formData.feedwin}
                />
              </div >
              </div>

              <div class="row justify-content-around my-2 py-2 mx-1">
                <div class="col">
                  <label for="lastwater" class="col-form-label">Последний полив: </label>
                </div>
              <div class="col">
                <input 
                type="text" 
                id="lastwater" 
                class="form-control" 
                placeholder="YYYY-MM-DD"
                onChange={handleChange}
                name="lastwater"
                value={formData.lastwater}
                />
              </div >
              <div class="col">
                  <label for="lastfeed" class="col-form-label">Последнее удобрение: </label>
                </div>
              <div class="col">
                <input 
                type="text" 
                id="lastfeed" 
                class="form-control" 
                placeholder="YYYY-MM-DD"
                onChange={handleChange}
                name="lastfeed"
                value={formData.lastfeed}
                />
              </div >
              </div>

              <div class="row justify-content-around my-2 py-2 mx-1">
                <div class="col">
                  <label for="poting" class="col-form-label">Пересадка: </label>
                </div>
              <div class="col">
                <input 
                type="text" 
                id="poting" 
                class="form-control"
                onChange={handleChange}
                name="poting"
                value={formData.poting}
                />
              </div >
              <div class="col">
                  <label for="lastpot" class="col-form-label">Последняя пересадка: </label>
                </div>
              <div class="col">
                <input 
                type="text" 
                id="lastpot" 
                class="form-control" 
                placeholder="YYYY-MM-DD"
                onChange={handleChange}
                name="lastpot"
                value={formData.lastpot}
                />
              </div >
              </div>

              <div class="row justify-content-around my-2 py-2 mx-1">
                <div class="col">
                  <label for="spark" class="col-form-label">Опрыскивание </label>
                </div>
              <div class="col">
                <input 
                type="text" 
                id="spark" 
                class="form-control"
                onChange={handleChange}
                name="spark"
                value={formData.spark}
                />
              </div >
              <div class="col">
                  <label for="lastspark" class="col-form-label">Последнее опрыскивание: </label>
                </div>
              <div class="col">
                <input 
                type="text" 
                id="lastspark" 
                class="form-control" 
                placeholder="YYYY-MM-DD"
                onChange={handleChange}
                name="lastspark"
                value={formData.lastspark}
                />
              </div >
              </div>

              <div class="row justify-content-around my-2 py-2 mx-1">
                <div class="col">
                  <label for="warm" class="col-form-label">Теплый душ: </label>
                </div>
              <div class="col">
                <input 
                type="text" 
                id="warm" 
                class="form-control"
                onChange={handleChange}
                name="warm"
                value={formData.warm}
                />
              </div >
              <div class="col">
                  <label for="lastwarm" class="col-form-label">Последний теплый душ: </label>
                </div>
              <div class="col">
                <input 
                type="text" 
                id="lastwarm" 
                class="form-control" 
                placeholder="YYYY-MM-DD"
                onChange={handleChange}
                name="lastwarm"
                value={formData.lastwarm}
                />
              </div >
              </div>

              <div class="row justify-content-around my-2 py-2 mx-1">
                <div class="col">
                  <label for="clean" class="col-form-label">Протирка листьев: </label>
                </div>
              <div class="col">
                <input 
                type="text" 
                id="clean" 
                class="form-control"
                onChange={handleChange}
                name="clean"
                value={formData.clean}
                />
              </div >
              <div class="col">
                  <label for="lastclean" class="col-form-label">Последняя протирка: </label>
                </div>
              <div class="col">
                <input 
                type="text" 
                id="lastclean" 
                class="form-control" 
                placeholder="YYYY-MM-DD"
                onChange={handleChange}
                name="lastclean"
                value={formData.lastclean}
                />
              </div >
              </div>

              <div class="row my-2 py-2 mx-1">
                <div class="col-1 me-5">
                  <label for="soil" class="col-form-label">Почва: </label>
                </div>
              <div class="col-10">
                <input 
                type="text" 
                id="soil" 
                class="form-control"
                onChange={handleChange}
                name="soil"
                value={formData.soil}
                />
              </div >
              </div>

              <div class="row my-2 py-2 mx-1">
                <div class="col-1 me-5">
                  <label for="add" class="col-form-label">Примечание: </label>
                </div>
              <div class="col-10">
                <input 
                type="text" 
                id="add" 
                class="form-control"
                onChange={handleChange}
                name="add"
                value={formData.add}
                />
              </div >
              </div>

              <div class="my-2 py-2 mx-3" >
              <label for="image" class="form-label">Выберите фото растения:</label>
              <input 
              class="form-control" 
              type="file" 
              id="image"
              onChange={handleChange}
              accept="image/*"
              name="image"
              />
              </div>

              <div class="row my-2 py-2 mx-1">
                <div class="col-2 me-5">
                  <div class="form-check">
                    <input 
                    class="form-check-input" 
                    type="radio" 
                    name="status" 
                    value="list" 
                    id="list" 
                    onChange={handleChange}
                    checked={formData.status === "list"}/>
              <label class="form-check-label" for="list">
                Список
              </label>
            </div>
            <div class="form-check">
              <input 
              class="form-check-input" 
              type="radio" 
              name="status" 
              value="wishlist" 
              id="wishlist" 
              onChange={handleChange}
              checked={formData.status === "wishlist"}/>
              <label class="form-check-label" for="wishlist">
                Вишлист
              </label>
            </div>
            </div>

            <div class="col-5 me-5">
            <select class="form-select" aria-label="hard" id="hard" value={formData.hard} onChange={handleChange} name='hard'>
            <option >Выберите уровень сложности растения</option>
            <option value="1">Легкий</option>
            <option value="2">Средний</option>
            <option value="3">Сложный</option>
            </select>
            </div>
            </div>
            <button>Добавить</button>
              </form>
            </div>
            </section>
  );
}

export default Form;