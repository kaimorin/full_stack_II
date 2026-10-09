import { Link } from 'react-router'
import bannerPago from '../assets/banner-pago.jpg'
import webpay from '../assets/webpay.png'
import mercadopago from '../assets/mercadopago.png'
import balanza from '../assets/resumen-balanza.jpg'

function Pago() {
  return (
    <main>
      <section className="banner-pago">
        <img src={bannerPago} alt="Metodo de pago" />
      </section>

      <section className="pasos-agenda">
        <div className="paso">1. Datos Personales</div>
        <div className="paso">2. Doctor y Especialidad</div>
        <div className="paso paso-activo">3. Pago y Facturacion</div>
      </section>

      <section className="contenedor-pago">
        <div className="columna-metodos-pago">
          <h2 className="titulo-seccion-pago">Metodo de Pago</h2>

          <label className="tarjeta-metodo">
            <input type="radio" name="metodo_pago" value="webpay" defaultChecked />
            <div className="circulo-check"></div>
            <div className="info-metodo">
              <strong>Webpay</strong>
              <p>Webpay es la plataforma de pago en línea de TransBank que permite a los comercios aceptar pagos con tarjetas de crédito, débito y prepago de forma segura a través de internet.</p>
            </div>
            <img src={webpay} alt="Webpay" className="logo-pasarela" />
          </label>

          <label className="tarjeta-metodo">
            <input type="radio" name="metodo_pago" value="mercadopago" />
            <div className="circulo-check"></div>
            <div className="info-metodo">
              <p><strong>Mercado Pago</strong> es la billetera digital de Mercado Libre que permite a personas y empresas administrar dinero, pagar y cobrar de manera 100% online.</p>
            </div>
            <img src={mercadopago} alt="Mercado Pago" className="logo-pasarela-mp" />
          </label>

          <div className="fila-botones-pago">
            <Link to="/reserva/confirmacion" className="btn-pagar">Pagar</Link>
            <Link to="/reserva/agenda" className="btn-volver-pago">Volver</Link>
          </div>
        </div>

        <aside className="columna-resumen-pago">
          <h2 className="titulo-seccion-pago">Resumen:</h2>

          <div className="item-servicio-resumen">
            <img src={balanza} alt="Pesaje" className="img-mini-resumen" />
            <div className="info-servicio-resumen">
              <strong>CITA PARA BAJAR GRASA CORPORAL ADULTO</strong>
              <span className="nombre-doc-resumen">DRA MARIA D.J</span>
              <span className="precio-item-resumen">$35,000</span>
            </div>
          </div>

          <div className="divisor-resumen"></div>

          <details className="bloque-cupon">
            <summary>TIENES UN CUPÓN?</summary>
            <div className="input-cupon-box">
              <input type="text" placeholder="Ingresa cupón" />
              <button type="button">Aplicar</button>
            </div>
          </details>

          <div className="divisor-resumen"></div>

          <div className="fila-total-linea">
            <span>SUBTOTAL</span>
            <span>$35,000</span>
          </div>
          <div className="fila-total-linea">
            <span>I.V.A</span>
            <span>$6,650</span>
          </div>

          <div className="divisor-resumen"></div>

          <div className="fila-total-final">
            <strong>TOTAL</strong>
            <strong>$41,650</strong>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default Pago