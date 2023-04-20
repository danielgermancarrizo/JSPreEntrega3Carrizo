let courses = [
    {
        "id": "pnl-01",
        "curso": "PNL 1",
        "imagen": "../img/1.jpg",
        "categoria": "pnl",
        "precio": 2000
    },
    {
        "id": "pnl-02",
        "curso": "PNL 2",
        "imagen": "../img/2.jpg",
        "categoria": "pnl",
        "precio": 2000
    },
    {
        "id": "pnl-03",
        "curso": "PNL 3",
        "imagen": "../img/3.jpg",
        "categoria": "pnl",
        "precio": 4000
    },
    {
        "id": "coaching-01",
        "curso": "Coaching de vida",
        "imagen": "../img/04.jpg",
        "categoria": "coaching",
        "precio": 1000
    },{
        "id": "coaching-02",
        "curso": "Coaching organizacional",
        "imagen": "../img/05.jpg",
        "categoria": "coaching",
        "precio": 5000
    },
    {
        "id": "coaching-03",
        "curso": "Coaching deportivo",
        "imagen": "../img/06.jpg",
        "categoria": "coaching",
        "precio": 11000
    },
    {
        "id": "teatro-01",
        "curso": "Teatro para la vida",
        "imagen": "../img/07.jpg",
        "categoria": "teatro",
        "precio": 10000
    },
    {
        "id": "meditacion-03",
        "curso": "Mindfulness",
        "imagen": "../img/08.jpg",
        "categoria": "meditacion",
        "precio": 10200
    },
    {
        "id": "teatro-02",
        "curso": "El teatro para liderar",
        "imagen": "../img/09.jpg",
        "categoria": "teatro",
        "precio": 11000
    }
]

const btnSearch = document.getElementById("btn-search")
const btnSort = document.getElementById("btn-sort")

const inputSearch = document.getElementById("input-search")
const contenedorCursos = document.getElementById("contenedor-cursos")
const form = document.getElementById("form-cursos")


function cargarCursos(arr){
    
    contenedorCursos.innerHTML="";

    arr.forEach(curso => {
        const div = document.createElement("div");
        div.innerHTML = `<div>
                                <img src="${curso.imagen}" alt="" height="200">
                                <h3 class="producto-titulo">${curso.curso}</h3>
                                <p class="producto-precio">$${curso.precio}</p>
                                <p class="producto-precio">$${curso.categoria}</p>
                         </div>`;
        contenedorCursos.append(div);

    })
}

function buscarCurso(filter, arr){
    const coursesFilterByName=arr.filter((el)=>{
        return el.curso.toLowerCase().includes(filter.toLowerCase())
    })
    return coursesFilterByName;
}

function ordernarCurso(arr){
    arr.sort((a,b)=>{
        if(a.curso<b.curso){
            return -1;
        }else   return 1;
    })
}

btnSearch.addEventListener("click", (e)=>{
    e.preventDefault()
    const encontrados = buscarCurso(inputSearch.value, courses);
    cargarCursos(encontrados);    
    return false;
});


btnSort.addEventListener("click", (e)=>{
    e.preventDefault();
    ordernarCurso(courses);
    cargarCursos(courses);
    return false;
});

cargarCursos(courses)
