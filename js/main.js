//#region REGISTER
const formRegister = document.querySelector("#form-register"),
  user = document.querySelector("#usuario"),
  email = document.querySelector("#mail"),
  password = document.querySelector("#pass"),
  btnRegister = document.querySelector("#btn-register")
  
  //Si hay algo en el local entonces asigno, sino es vacío.

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

class Usuario {
  constructor(nombre, mail, pass){
    this.nombre = nombre;
    this.mail = mail;
    this. password = pass;
  }
}

function guardarUsuario(usuario){
  return usuarios.push(usuario);
}

function guardarEnStorage(elemento){
  return localStorage.setItem('usuarios',JSON.stringify(elemento));
}

guardarEnStorage(usuarios);

formRegister.addEventListener('submit',(e)=>{
  e.preventDefault();
  const newUser = new Usuario(user.value,email.value,password.value);
  guardarUsuario(newUser);
  guardarEnStorage(usuarios);
  formRegister.reset();
  formRegister.style.display = "none";
  loginForm.style.display = "block";
  return false;
})
//#endregion REGISTER

//#region login
const loginForm = document.querySelector("#form-login"), 
  loginMail = document.querySelector("#loginMail"),
  loginPass = document.querySelector("#loginPass")

function inicioSesion(usuarios){
  
  let userFound = usuarios.find((usuario)=>{
    return usuario.mail == loginMail.value && usuario.password == loginPass.value;
  });

  if (userFound){
    window.location.href = "./adminCourse.html";
  }else{
    formRegister.innerHTML += "<strong>Usuario no encontrado, por favor regístrese</strong>"
    formRegister.style.display="block";
    loginForm.style.display = "none";    
  }
}

function recuperarLS(){
  return JSON.parse(localStorage.getItem("usuarios"));
}

const usuariosSL = recuperarLS();

loginForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  inicioSesion(usuarios);
})

//#endregion LOGIN

//#region cursos

const titulo = document.querySelector("#titulo"),
  autor = document.querySelector("#autor"),
  isbn = document.querySelector("#isbn"),
  categoria = document.querySelector("#categoria"),
  precio = document.querySelector("#precio"),
  img = document.querySelector("#img"),
  search = document.querySelector("#search"),
  tbody = document.querySelector("#table-body"),
  formInventario = document.querySelector("#formInventario");
const radios = document.querySelectorAll('input[type="radio"]');
