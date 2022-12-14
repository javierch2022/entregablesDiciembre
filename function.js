const api = 'https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees';


function cargarTabla(data){

    let cant = document.getElementById('cantEmpleados');
    cant.innerHTML = `
    <h3> ${data.length} </h3>`;
    
    for (let index = 0; index < data.length; index++) {
        let element = data[index];
        
       


        // creo los elementos dentro del tbody
        let tr = document.createElement('tr');
        let tdId = document.createElement('td');
        let tdName = document.createElement('td');
        let tdCity = document.createElement('td');
        let tdBday = document.createElement('td');
        let tdMail = document.createElement('td');
        let tdEditar = document.createElement('td');
        let tdEliminar = document.createElement('td');
        // le inserto los valores al tr y td
        tdId.innerText = element.id;
        tdName.innerText = element.name;
        tdCity.innerText = element.city;
        tdBday.innerText = element.birthday;
        tdMail.innerText = element.email;
        tdEditar.innerHTML = `<button type="button" id="${element.id}" onclick="editar('${element.id}','${element.name}','${element.city}', '${element.birthday}','${element.email}')" class="btn btn-light">Editar</button>`;
        tdEliminar.innerHTML = `<button type="button" id="${element.id}" onclick="eliminar('${element.id}')" class="btn btn-danger">Eliminar</button>`;
        // agarro el tbody y voy insertando en el html 
        let tbody = document.getElementById('tab');

        tr.id = 'row'+element.id;

        tbody.appendChild(tr);
        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdCity);
        tr.appendChild(tdBday);
        tr.appendChild(tdMail);
        tr.appendChild(tdEditar);
        tr.appendChild(tdEliminar);
    }
}

function editar(id,name, city, birthday, email) {

    let idForm = document.getElementById('idForm');
    idForm.value = id;
    
    // aqui leo las id del formulario
    let nameForm = document.getElementById('nameForm');
    nameForm.value = name;

    let cityForm = document.getElementById('cityForm');
    cityForm.value = city;

    let birthdayForm = document.getElementById('birthdayForm');
    birthdayForm.value = birthday;

    let emailForm = document.getElementById('emailForm');
    emailForm.value = email;
}

function eliminar(id){
   
    let test = document.getElementById('row'+id).remove();
    alert(`Registro: ${id } borrado con exito`);

    let cant = document.getElementById('cantEmpleados');
    let cant2 = parseInt(cant.innerText)-1;
    console.log(cant.innerText);
    cant.innerHTML = `
    <h3>${cant2} </h3>`;

}

function guardar(){

     let idF = document.getElementById('idForm');   
     //tdId.innerText = idF.value;

     let nameF = document.getElementById('nameForm');
     //tdName.innerText = nameF.value;
 
     let cityF = document.getElementById('cityForm');
    // tdCity.innerText = cityF.value;
 
     let birthdayF = document.getElementById('birthdayForm');
    // tdBday.innerText = birthdayF.value;
 
     let emailF = document.getElementById('emailForm');
     //tdMail.innerText = emailF.value;


     // le inserto los valores al tr y td
     let tr = document.getElementById('row'+ idF.value);

     let id =  tr.firstElementChild;
     id.nextElementSibling.innerText = nameF.value;

     let name= id.nextElementSibling;
     name.nextElementSibling.innerText = cityF.value;

     let city = name.nextElementSibling;
     city.nextElementSibling.innerText = birthdayF.value;
     
     let birthday = city.nextElementSibling;
     birthday.nextElementSibling.innerText = emailF.value;

    
     
        

     //let newId = parseInt(tr.lastChild.firstChild.innerText)+ 1;

    
    



}

function agregar(){

    // creo los elementos dentro del tbody
    let tr = document.createElement('tr');
    let tdId = document.createElement('td');
    let tdName = document.createElement('td');
    let tdCity = document.createElement('td');
    let tdBday = document.createElement('td');
    let tdMail = document.createElement('td');
    let tdEditar = document.createElement('td');
    let tdEliminar = document.createElement('td');

    // le inserto los valores al tr y td
    let tabla = document.getElementById('tab');
    let newId = parseInt(tabla.lastChild.firstChild.innerText)+ 1;
    //
    tdId.innerText = newId;

    //
    let nameF = document.getElementById('nameForm');
    tdName.innerText = nameF.value;

    let cityF = document.getElementById('cityForm');
    tdCity.innerText = cityF.value;

    let birthdayF = document.getElementById('birthdayForm');
    tdBday.innerText = birthdayF.value;

    let emailF = document.getElementById('emailForm');
    tdMail.innerText = emailF.value;


    tdEditar.innerHTML = `<button type="button" id="${newId}" onclick="editar('${newId}' ,'${nameF.value}','${cityF.value}', '${birthdayF.value}','${emailF.value}')" class="btn btn-light">Editar</button>`;
    tdEliminar.innerHTML = `<button type="button" id="${newId}" onclick="eliminar('${newId}')" class="btn btn-danger">Eliminar</button>`;
    // agarro el tbody y voy insertando en el html 
    let tbody = document.getElementById('tab');

    tr.id = 'row'+newId;

    tbody.appendChild(tr);
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdCity);
    tr.appendChild(tdBday);
    tr.appendChild(tdMail);
    tr.appendChild(tdEditar);
    tr.appendChild(tdEliminar);

    let cant = document.getElementById('cantEmpleados');
    let cant2 = parseInt(cant.innerText)+1;
    console.log(cant.innerText);
    cant.innerHTML = `
    <h3>${cant2} </h3>`;

}


fetch(api)
    .then(response => response.json())
    .then(data => {
        cargarTabla(data);   
    })
  
    .catch(error => console.error(error))







