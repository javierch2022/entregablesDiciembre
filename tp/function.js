"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
    let url="http://rickandmortyapi.com/api/character";
    async function mostrarData(){
        let res= await fetch(url);
        let data= await res.json();
        console.log(data.results);
        data.results.forEach(e => {
            console.log(e);
            document.querySelector("#table").innerHTML+=
            `<tr>
                <td> ${e.name } </td> <td> ${e.species} </td> <td> ${e.id } </td>`
        });

    })

    