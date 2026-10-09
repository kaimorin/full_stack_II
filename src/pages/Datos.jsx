import { Link, useNavigate } from 'react-router'
import banner from '../assets/banner-paso1.jpg'

function Datos() {
    const navigate = useNavigate()

    function siguiente(e) {
        e.preventDefault()
        const datos = Object.fromEntries(new FormData(e.currentTarget))
        sessionStorage.setItem('datosPaciente', JSON.stringify(datos))
        navigate('/reserva/agenda')
    }
        return(  
    <main>
        
        <section className="banner-paso1">
            <img src={banner} alt="Datos Personales"/>
        </section>

        
        <section className="pasos-agenda">
            <div className="paso paso-activo">1. Datos Personales</div>
            <div className="paso">2. Doctor y Especialidad</div>
            <div className="paso">3. Pago y facturacion</div>
        </section>

        
        <section className="contenedor-formulario-paso1">
            <h2 className="titulo-datos-paciente">Datos del Paciente:</h2>

            <form onSubmit={siguiente} className="form-paso1" id="formPaso1">
                <div className="fila-inputs-paso1">
                    <input type="text" name="nombre" placeholder="Nombre*" required className="input-paso1" />
                    <input type="text" name="apellido" placeholder="Apellido*" required className="input-paso1" />
                </div>

                <div className="fila-inputs-paso1">
                    <input type="text" name="rut" placeholder="RUT" required className="input-paso1" />
                    <input type="tel" name="telefono" defaultValue="+56 9" className="input-paso1" />
                </div>

                <div className="fila-inputs-paso1">
                    <div className="select-wrapper-paso1">
                        <select name="comuna" defaultValue="" className="input-paso1 select-paso1" required>
                            <option value="" disabled>Comuna*</option>
                            <option value="santiago">Santiago</option>
                            <option value="providencia">Providencia</option>
                            <option value="las-condes">Las Condes</option>
                            <option value="otra">Otra</option>
                        </select>
                    </div>
                    <input type="text" name="ciudad" placeholder="Ciudad*" required className="input-paso1" />
                </div>

                <div className="fila-inputs-paso1 fila-completa">
                    <input type="text" name="patologias" placeholder="Patologias" className="input-paso1" />
                </div>

                <div className="divisor-formulario-paso1"></div>

                <div className="fila-opciones-destinatario">
                    <label className="tarjeta-opcion-paso1">
                        <input type="radio" name="destinatario" value="para-mi" defaultChecked />
                        <div className="circulo-check"></div>
                        <span>Para mí</span>
                    </label>

                    <label className="tarjeta-opcion-paso1">
                        <input type="radio" name="destinatario" value="familiar" />
                        <div className="circulo-check"></div>
                        <span>Para conocido o familiar</span>
                    </label>
                </div>

                <div className="divisor-formulario-paso1"></div>

                <div className="fila-botones-accion-paso1">
                    <button type="submit" className="btn-siguiente-paso1">Siguiente</button>
                    <Link to="/" className="btn-volver-paso1">Volver</Link>
                </div>
            </form>
        </section>
   </main>)
}
export default Datos;