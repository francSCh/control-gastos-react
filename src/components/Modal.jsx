import { useState } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {
    const [mensaje, setMensaje] = useState('');

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');

    //Ocultamos el modal
    const ocultarModal = () => {
        setAnimarModal(false);

        setTimeout(() => {
            setModal(false);
        }, 500);
    }

    //Se dispara cuando le damos al submit
    const handleSubmit = e => {
        e.preventDefault();

        if([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los Campos son obligatorios');

            setTimeout(() => {
                setMensaje('');
            }, 3000);
            return;
        }

        guardarGasto({nombre, cantidad: Number(cantidad), categoria});
    }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal}/>
      </div>

      <form onSubmit={handleSubmit} className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        <div className='campo'>
        <label htmlFor="nombre">Nombre del Gasto</label>
            <input id='nombre' type="text" placeholder='Pizza' value={nombre} onChange={e => setNombre(e.target.value)}/>
        </div>

        <div className='campo'>
            <label htmlFor="cantidad">Cantidad</label>
            <input id='cantidad' type='number' placeholder='200.00' value={cantidad} onChange={e => setCantidad(e.target.value)}/>
        </div>

        <div className='campo'>
            <label htmlFor="categoria">Categoría</label>
            <select id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
                <option value="">-- Seleccione --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="gastos">Gastos varios</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>
            </select>
        </div>

        <input type="submit" value='Añadir Gasto'/>
      </form>
    </div>
  )
}

export default Modal
