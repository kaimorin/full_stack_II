function Agenda() {
    return(<main>
    
    <section className="banner-agenda">
      <img src="assets/imagenes/banner-agenda.jpg" alt="Calendario" className="img-banner-agenda"/>
    </section>

    
    <section className="pasos-agenda">
      <div className="paso">1. Datos Personales</div>
      <div className="paso paso-activo">2. Doctor y Especialidad</div>
      <div className="paso">3. Pago y facturacion</div>
    </section>

   
    <section className="contenedor-agenda">
      
      
      <form id="formAgenda" className="columna-doctores">
        
        
        <label className="tarjeta-radio-doc">
          <input type="radio" name="doctor" value="Maria de Judas" checked/>
          <div className="circulo-check"></div>
          <div className="info-doc">
            <strong>Maria de Judas</strong>
            <p>Experta en el manejo de enfermedades metabólicas. Crea dietas terapéuticas para controlar condiciones como diabetes, resistencia a la insulina e hipertensión.</p>
          </div>
        </label>

       
        <label className="tarjeta-radio-doc">
          <input type="radio" name="doctor" value="Maximo Tul Onazzo"/>
          <div className="circulo-check"></div>
          <div className="info-doc">
            <strong>Maximo Tul ´Onazzo</strong>
            <p>Enfocado en la recomposición corporal y el rendimiento físico. Diseña planes para aumentar masa muscular, mejorar la recuperación y optimizar la energía.</p>
          </div>
        </label>

       
        <label className="tarjeta-radio-doc">
          <input type="radio" name="doctor" value="Mario Di West"/>
          <div className="circulo-check"></div>
          <div className="info-doc">
            <strong>Mario Di ´West</strong>
            <p>Centrado en la pérdida de grasa sostenible y la educación alimentaria. Trabaja en modificar hábitos a largo plazo sin utilizar dietas extremas o restrictivas.</p>
          </div>
        </label>

       
        <label className="tarjeta-radio-doc">
          <input type="radio" name="doctor" value="Shaqueal Oneal"/>
          <div className="circulo-check"></div>
          <div className="info-doc">
            <strong>Shaqueal O ´neal</strong>
            <p>Experto en el microbioma intestinal. Su enfoque está en tratar inflamaciones, síndrome de intestino irritable y alergias alimentarias para mejorar la digestión.</p>
          </div>
        </label>

      
        <div className="fila-modalidad">
          <label className="tarjeta-radio-modalidad">
            <input type="radio" name="modalidad" value="Presencial" checked/>
            <div className="circulo-check"></div>
            <span>Presencial</span>
          </label>

          <label className="tarjeta-radio-modalidad">
            <input type="radio" name="modalidad" value="Online"/>
            <div className="circulo-check"></div>
            <span>Online</span>
          </label>
        </div>

       
        <div className="campo-select-esp">
          <select id="selectEspecialidad" required>
            <option value="" disabled selected>Especialidad...</option>
            <option value="nutricion-clinica">Nutrición Clínica</option>
            <option value="nutricion-deportiva">Nutrición Deportiva</option>
            <option value="salud-digestiva">Salud Digestiva</option>
            <option value="control-peso">Control de Peso</option>
          </select>
        </div>

        
        <div className="fila-botones-paso">
          <button type="button" className="btn-siguiente-paso" id="btnSiguientePaso">Siguiente</button>
          <a href="registro.html" className="btn-volver-paso">Volver</a>
        </div>
      </form>

      
      <aside className="columna-picker">
        
      
        <div className="resumen-pildoras">
          <span>Fecha</span>
          <span className="pildora-tag">Feb19, 2026</span>
          <span className="pildora-tag">9:41 AM</span>
        </div>

        
        <div className="widget-calendario">
          <div className="cal-barra-dia">Sabado</div>
          <div className="cal-cabecera-mes">
            <div className="cal-mes">FEB</div>
            <div className="cal-dia-numero">19</div>
            <div className="cal-anio">2026</div>
          </div>

          <div className="cal-cuerpo">
            <div className="cal-dias-semana">
              <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
            </div>
            <div className="cal-matriz-numeros">
              <span className="dia-apagado">31</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span>
              <span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span>
              <span>14</span><span>15</span><span>16</span><span>17</span><span>18</span><span className="dia-marcado">19</span><span>20</span>
              <span>21</span><span>22</span><span>23</span><span>24</span><span>25</span><span>26</span><span>27</span>
              <span>28</span><span>29</span><span className="dia-apagado">1</span><span className="dia-apagado">2</span><span className="dia-apagado">3</span><span className="dia-apagado">4</span><span className="dia-apagado">5</span>
            </div>
          </div>

          <div className="cal-acciones">
            <button type="button" className="btn-cal-cancel">CANCEL</button>
            <button type="button" className="btn-cal-ok">OK</button>
          </div>
        </div>

       
        <div className="widget-hora">
          <div className="hora-header">
            <span>Hora</span>
            <span className="hora-valor">9:41 AM</span>
          </div>

          <div className="hora-selector-rueda">
            <div className="col-rueda">
              <span className="op-rueda apagado">6</span>
              <span className="op-rueda apagado">7</span>
              <span className="op-rueda apagado">8</span>
              <span className="op-rueda activa">9</span>
              <span className="op-rueda apagado">10</span>
              <span className="op-rueda apagado">11</span>
              <span className="op-rueda apagado">12</span>
            </div>
            <div className="col-rueda">
              <span className="op-rueda apagado">38</span>
              <span className="op-rueda apagado">39</span>
              <span className="op-rueda apagado">40</span>
              <span className="op-rueda activa">41</span>
              <span className="op-rueda apagado">42</span>
              <span className="op-rueda apagado">43</span>
              <span className="op-rueda apagado">44</span>
            </div>
            <div className="col-rueda col-meridiano">
              <span className="op-rueda activa">AM</span>
              <span className="op-rueda apagado">PM</span>
            </div>
          </div>
        </div>

      </aside>

    </section>
  </main>)
}

export default Agenda;