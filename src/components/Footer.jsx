function Footer() {
    return (<footer className="footer-rosado">
    <div className="footer-rosado-contenido">
      <div className="footer-izq">
        <h3 className="titulo-cambio">Estas Listo para el Cambio?</h3>
        <p>Estamos preparados para empezar!!!</p>
        <a href="registro.html" className="btn-agenda-oscuro">Agenda Ahora</a>
      </div>

      <div className="footer-der">
        <div className="redes-con-texto">
            <div className="redes-iconos">
  <a href="https://wa.me/56912345678" target="_blank" className="icono-rd">
    <img src="assets/imagenes/ws.png" alt="WhatsApp"/>
  </a>
  <a href="https://facebook.com" target="_blank" className="icono-rd">
    <img src="assets/imagenes/fb.png" alt="Facebook"/>
  </a>
  <a href="https://instagram.com" target="_blank" className="icono-rd">
    <img src="assets/imagenes/ig.png" alt="Instagram"/>
  </a>
</div>

  <span className="txt-contactanos">Contactanos...</span>
</div>
      </div>
    </div>

    <div className="footer-rosado-legal">
      <small>Todos los derechos reservados.</small>
      <small>Todos los dias de Lunes a Sabado de 10:30 am hasta las 5:30 pm</small>
    </div>
  </footer>
)}

export default Footer;