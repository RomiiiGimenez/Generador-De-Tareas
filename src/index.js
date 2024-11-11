import './styles.css'
import {Tarea,TareaLista} from './clases'
import { crearTareaHtml } from './js/funciones'


export const listaTarea = new TareaLista()

listaTarea.tareas.forEach(crearTareaHtml);
mostrarPendientes(listaTarea.tareas);
// const tarea = new Tarea("Practicar webpack")

// listaTarea.nuevaTarea(tarea);

// crearTareaHtml(tarea);
//console.log(listaTarea);

// localStorage.setItem('mi-key','ABC1234');
//sessionStorage.setItem('nombre','Romi');

//setTimeout(()=>{
    //localStorage.removeItem('mi-key')
   //sessionStorage.removeItem('nombre')
//},1500)

