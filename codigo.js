



// creacion SUJETO del C.V.





const url = 'https://randomuser.me/api/';
fetch(url)
.then(response => response.json())
.then(json => {

    //console.log(json);

    let sujeto = json.results[0];
   
   // console.log(sujeto)

    let celular = sujeto.cell;
    let age = sujeto.dob.age;
    let email = sujeto.email;
    let pais = sujeto.location.country;
    let ciudad = sujeto.location.city;
    let estado = sujeto.location.state;
    let direccion = sujeto.location.street.name;
    let altura = sujeto.location.street.number;
    let nombre = sujeto.name.first;
    let apellido = sujeto.name.last;
    let telefono = sujeto.phone;
    let foto = sujeto.picture.large;
    let genero = sujeto.gender;

    console.log(genero);

       
    let imagen = document.getElementById('header-left');
    imagen.innerHTML = `<img src= ${foto} alt= ${nombre}>` ; 

    let cellpersona = document.getElementById('celular');
    cellpersona.innerHTML = `<p> ${celular} </p>` ;

    let titulo = document.getElementById('header-right');
    titulo.innerHTML = `<h1 id="h1"> ${nombre} ${apellido}</h1>` ;

    let mailpersona = document.getElementById('mail');
    mailpersona.innerHTML = `<p> ${email} </p>` ;

    let dirpersona = document.getElementById('dir');
    dirpersona.innerHTML = `<p> ${direccion} ${altura} <br> ${ciudad} ${pais}</p>` ;
    // console.log(genero == "male")
    
    generocv(genero);
    function generocv (gen){
    if (genero == "male") {
      let intro = document.getElementById("h1");
      intro.style.setProperty("text-shadow", "4px 4px #3525af");
      let intro2 = document.getElementById("h2");
      intro2.style.setProperty("color", "#3525af");
      let intro3 = document.getElementById("h3");
      intro3.style.setProperty("color", "#3525af");
      console.log(genero);
    } else {
      let intro = document.getElementById("h1");
      intro.style.setProperty("text-shadow", "4px 4px pink");
      let intro2 = document.getElementById("h2");
      intro2.style.setProperty("color", "pink");
      let intro3 = document.getElementById("h3");
      intro3.style.setProperty("color", "pink");
      console.log(genero);
      }
    }


})



const clickHobbies = document.querySelector('.hobbies');

const abrirHobbies = document.querySelector('.abrir-hobbies');

const cerrarHobbies = document.querySelector('.cerrar-hobbies')


clickHobbies.addEventListener('click', (e)=>{
  e.preventDefault();
abrirHobbies.classList.add('hobbies--mostrar');
abrirHobbies.classList.remove('abrir-hobbies');
});

cerrarHobbies.addEventListener('click', (e)=>{
  e.preventDefault();
  abrirHobbies.classList.remove('hobbies--mostrar');
  abrirHobbies.classList.add('abrir-hobbies');
  });

