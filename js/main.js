const URL = "https://pokeapi.co/api/v2/pokemon/"
const PokeCard = document.getElementById("contenedor");
const dataApend = new Array();


async function searchData(id,calidad){
    try{
        const responseData = await fetch( URL + id );
        const data = await responseData.json();
        let img;
        if (calidad==="Baja"){img=data.sprites.front_default;}
        else if (calidad==="Media"){img=data.sprites.other.dream_world.front_default;}
        else{ img=data.sprites.other.home.front_default;}
        PokeCard.insertAdjacentHTML("beforeend",
        `
        <div class="card" id="card">
            <div class="face front">
                <img src=${ img } alt="bulbasaur">
                <h3>${ data.name.toUpperCase() }</h3>
            </div>
            <div class="face back">
                <h3>${ data.name.toUpperCase() }</h3>
                <p>Numero:${ data.id } </p>
                <p>Base Experience:${ data.base_experience } </p>
                <p>Altura:${ data.height/10 } </p>
                <p>Peso:${ data.weight/10 } </p>
                <div class="link">
                    <a href="${ img }" target="_blank">Abrir Imagen </a>
                </div>
            </div> 
        <div>
        `);
    }catch(error){
    }
}
document.querySelector('input[type="radio"]').addEventListener('click',cambiaCalidad)

function inicio(){
    let calidad = document.querySelector('input[name="calidad"]:checked');
    for (let index = 1; index <= 150; index++) {
        searchData(index,calidad.value);
    }
}

function cambiaCalidad(){
    inicio();
    PokeCard.innerHTML="";
}
