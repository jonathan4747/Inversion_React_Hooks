import './App.css';
import {useState} from 'react';
import PersonCard from './componentes/PersonCard/PersonCard';
function App() {
  const TodosUsuarios=[{
      nombre: 'Jane',
      apellido: 'Doe',
      edad:45,
      colorCabello: 'Black'
    },
    {
      nombre: 'John',
      apellido: 'Smith',
      edad:88,
      colorCabello: 'Brown'
    },
    {
      nombre: 'Millard',
      apellido: 'Fillmore',
      edad:50,
      colorCabello: 'Brown'
    },
    {
      nombre: 'Maria',
      apellido: 'Smith',
      edad:62,
      colorCabello: 'Brown'
    }];

  const [usuarios,setUsuarios]= useState(TodosUsuarios);
  return (
    <div className='usuario'>
      {
        usuarios.map((usuario,indice)=>{
          return(
            <PersonCard usuario={usuario}  key={'usuario_' + indice}/>
          )
        })
      }
    </div>

  );
}

export default App;
