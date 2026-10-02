// ==========================================
// VALIDACIONES EN TIEMPO REAL - NUTRIVIDA
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    
    // --- EXPRESIONES REGULARES ---
    const regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const regexNumeros = /^[0-9]+$/;
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
    const regexRut9 = /^[0-9]{8}[0-9K]$/;
    const regexClaveSegura = /^(?=.*[A-Z])(?=.*\d).{4,10}$/; // 4 a 10 chars, 1 mayúscula, 1 número

    // ==========================================
    // 1. VALIDACIÓN FORMULARIO DE REGISTRO
    // ==========================================
    const formRegistro = document.getElementById('formRegistro');
    
    if (formRegistro) {
        const inputCorreoReg = document.getElementById('correo');
        const errCorreoReg = document.getElementById('err-correo');
        const inputNombre = document.getElementById('reg-nombre');
        const errNombre = document.getElementById('err-nombre');
        const inputApellido = document.getElementById('reg-apellido');
        const errApellido = document.getElementById('err-apellido');
        const inputTelefono = document.getElementById('reg-telefono');
        const errTelefono = document.getElementById('err-telefono');
        const inputRut = document.getElementById('reg-rut');
        const errRut = document.getElementById('err-rut');
        const inputClaveReg = document.getElementById('clave');
        const errClaveReg = document.getElementById('err-clave');
        const inputRepetirClave = document.getElementById('repetirClave');
        const errRepetir = document.getElementById('err-repetir');
        const btnSubmit = formRegistro.querySelector('.btn-submit-registro');

        const estadoCampos = {
            correo: false, nombre: false, apellido: false,
            telefono: false, rut: false, clave: false, repetir: false
        };

        const verificarFormularioCompleto = () => {
            const esValido = Object.values(estadoCampos).every(campo => campo === true);
            if (esValido) {
                btnSubmit.disabled = false;
                btnSubmit.style.opacity = "1";
                btnSubmit.style.cursor = "pointer";
            } else {
                btnSubmit.disabled = true;
                btnSubmit.style.opacity = "0.5";
                btnSubmit.style.cursor = "not-allowed";
            }
        };

        verificarFormularioCompleto();

        inputNombre.addEventListener('input', () => {
            const valor = inputNombre.value;
            if (valor.trim() === '') {
                estadoCampos.nombre = false;
                mostrarError(inputNombre, errNombre, 'El nombre es obligatorio.');
            } else if (!regexLetras.test(valor)) {
                estadoCampos.nombre = false;
                mostrarError(inputNombre, errNombre, 'Usa solo letras.');
            } else {
                estadoCampos.nombre = true;
                mostrarExito(inputNombre, errNombre);
            }
            verificarFormularioCompleto();
        });

        inputApellido.addEventListener('input', () => {
            const valor = inputApellido.value;
            if (valor.trim() === '') {
                estadoCampos.apellido = false;
                mostrarError(inputApellido, errApellido, 'El apellido es obligatorio.');
            } else if (!regexLetras.test(valor)) {
                estadoCampos.apellido = false;
                mostrarError(inputApellido, errApellido, 'Usa solo letras.');
            } else {
                estadoCampos.apellido = true;
                mostrarExito(inputApellido, errApellido);
            }
            verificarFormularioCompleto();
        });

        inputTelefono.addEventListener('input', () => {
            const valor = inputTelefono.value.trim();
            if (valor === '') {
                estadoCampos.telefono = false;
                mostrarError(inputTelefono, errTelefono, 'El número es obligatorio.');
            } else if (!regexNumeros.test(valor)) {
                estadoCampos.telefono = false;
                mostrarError(inputTelefono, errTelefono, 'Ingresa solo números.');
            } else if (valor.length > 8) {
                inputTelefono.value = valor.slice(0, 8); 
            } else if (valor.length < 8) {
                estadoCampos.telefono = false;
                mostrarError(inputTelefono, errTelefono, `Faltan ${8 - valor.length} dígitos.`);
            } else {
                estadoCampos.telefono = true;
                mostrarExito(inputTelefono, errTelefono);
            }
            verificarFormularioCompleto();
        });

        inputCorreoReg.addEventListener('input', () => {
            const valor = inputCorreoReg.value.trim();
            if (valor === '') {
                estadoCampos.correo = false;
                mostrarError(inputCorreoReg, errCorreoReg, 'El correo es obligatorio.');
            } else if (!regexCorreo.test(valor)) {
                estadoCampos.correo = false;
                mostrarError(inputCorreoReg, errCorreoReg, 'Dominio inválido.');
            } else {
                estadoCampos.correo = true;
                mostrarExito(inputCorreoReg, errCorreoReg);
            }
            verificarFormularioCompleto();
        });

        inputRut.addEventListener('input', () => {
            let valor = inputRut.value.trim().toUpperCase();
            inputRut.value = valor;
            estadoCampos.rut = false;
            
            if (valor === '') {
                mostrarError(inputRut, errRut, 'El RUT es obligatorio.');
            } else if (valor.length < 9) {
                mostrarError(inputRut, errRut, `Faltan ${9 - valor.length} caracteres.`);
            } else if (valor.length > 9) {
                inputRut.value = valor.slice(0, 9);
                valor = inputRut.value;
            }
            
            if (valor.length === 9) {
                if (!regexRut9.test(valor)) {
                    mostrarError(inputRut, errRut, 'Formato inválido (Ej: 12345678K).');
                } else {
                    estadoCampos.rut = true;
                    mostrarExito(inputRut, errRut, '¡RUT válido!');
                }
            }
            verificarFormularioCompleto();
        });

        inputClaveReg.addEventListener('input', () => {
            const valor = inputClaveReg.value;
            estadoCampos.clave = false;
            if (valor === '') {
                mostrarError(inputClaveReg, errClaveReg, 'La contraseña es obligatoria.');
            } else if (valor.length < 4 || valor.length > 10) {
                mostrarError(inputClaveReg, errClaveReg, 'Debe tener entre 4 y 10 caracteres.');
            } else if (!regexClaveSegura.test(valor)) {
                mostrarError(inputClaveReg, errClaveReg, 'Falta 1 mayúscula y 1 número.');
            } else {
                estadoCampos.clave = true;
                mostrarExito(inputClaveReg, errClaveReg, '¡Contraseña segura!');
            }
            if(inputRepetirClave.value !== '') validarRepetirClave(); 
            verificarFormularioCompleto();
        });

        const validarRepetirClave = () => {
            const valor = inputRepetirClave.value;
            const claveOriginal = inputClaveReg.value;
            if (valor === '') {
                estadoCampos.repetir = false;
                mostrarError(inputRepetirClave, errRepetir, 'Repita la contraseña.');
            } else if (valor !== claveOriginal) {
                estadoCampos.repetir = false;
                mostrarError(inputRepetirClave, errRepetir, 'No coinciden.');
            } else if (estadoCampos.clave === false) {
                estadoCampos.repetir = false;
                mostrarError(inputRepetirClave, errRepetir, 'Arregle la original primero.');
            } else {
                estadoCampos.repetir = true;
                mostrarExito(inputRepetirClave, errRepetir, '¡Coinciden!');
            }
            verificarFormularioCompleto();
        };
        inputRepetirClave.addEventListener('input', validarRepetirClave);
        
        formRegistro.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!btnSubmit.disabled) {
                alert("Registro completado con éxito. Redirigiendo al inicio de sesión...");
                window.location.href = "login.html";
            }
        });
    }

    // ==========================================
    // 2. VALIDACIÓN FORMULARIO DE LOGIN
    // ==========================================
    const formLogin = document.getElementById('formLogin');

    if (formLogin) {
        const inputCorreoLogin = document.getElementById('login-correo');
        const errCorreoLogin = document.getElementById('err-login-correo');
        const inputClaveLogin = document.getElementById('login-clave');
        const errClaveLogin = document.getElementById('err-login-clave');
        const btnSubmitLogin = formLogin.querySelector('.btn-ingresar-negro');
        
        const estadoLogin = { correo: false, clave: false };

        const verificarLogin = () => {
            if (estadoLogin.correo && estadoLogin.clave) {
                btnSubmitLogin.disabled = false;
                btnSubmitLogin.style.opacity = "1";
                btnSubmitLogin.style.cursor = "pointer";
            } else {
                btnSubmitLogin.disabled = true;
                btnSubmitLogin.style.opacity = "0.5";
                btnSubmitLogin.style.cursor = "not-allowed";
            }
        };

        verificarLogin();

        inputCorreoLogin.addEventListener('input', () => {
            const valor = inputCorreoLogin.value.trim();
            if (valor === '') {
                estadoLogin.correo = false;
                mostrarError(inputCorreoLogin, errCorreoLogin, 'Ingrese su correo.');
            } else if (!regexCorreo.test(valor)) {
                estadoLogin.correo = false;
                mostrarError(inputCorreoLogin, errCorreoLogin, 'Formato inválido.');
            } else {
                estadoLogin.correo = true;
                mostrarExito(inputCorreoLogin, errCorreoLogin);
            }
            verificarLogin();
        });

        inputClaveLogin.addEventListener('input', () => {
            const valor = inputClaveLogin.value;
            if (valor === '') {
                estadoLogin.clave = false;
                mostrarError(inputClaveLogin, errClaveLogin, 'La contraseña es requerida.');
            } else if (valor.length < 4 || valor.length > 10) {
                estadoLogin.clave = false;
                mostrarError(inputClaveLogin, errClaveLogin, 'Debe tener entre 4 y 10 caracteres.');
            } else {
                estadoLogin.clave = true;
                mostrarExito(inputClaveLogin, errClaveLogin);
            }
            verificarLogin();
        });

        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!btnSubmitLogin.disabled) {
                localStorage.setItem('sesionNutriVida', 'activa');
                alert("Inicio de sesión exitoso. Cargando tu portal de salud...");
                window.location.href = "perfil.html"; 
            }
        });
    }

    // ==========================================
    // 3. VALIDACIÓN FORMULARIO DE AGENDA
    // ==========================================
    const formAgenda = document.getElementById('formAgenda');

    if (formAgenda) {
        const btnSiguientePaso = document.getElementById('btnSiguientePaso');
        const selectEspecialidad = document.getElementById('selectEspecialidad');
        
        let fechaSeleccionada = "Feb 19, 2026"; 
        let horaSeleccionada = "9:41 AM";      

        const verificarAgendaCompleta = () => {
            const doctorSeleccionado = document.querySelector('input[name="doctor"]:checked');
            const modalidadSeleccionada = document.querySelector('input[name="modalidad"]:checked');
            const especialidadSeleccionada = selectEspecialidad.value !== "";
            const fechaHoraSeleccionada = fechaSeleccionada !== "" && horaSeleccionada !== "";

            if (doctorSeleccionado && modalidadSeleccionada && especialidadSeleccionada && fechaHoraSeleccionada) {
                btnSiguientePaso.disabled = false;
                btnSiguientePaso.style.opacity = "1";
                btnSiguientePaso.style.cursor = "pointer";
                return true;
            } else {
                btnSiguientePaso.disabled = true;
                btnSiguientePaso.style.opacity = "0.5";
                btnSiguientePaso.style.cursor = "not-allowed";
                return false;
            }
        };

        verificarAgendaCompleta();

        // Listeners básicos
        document.querySelectorAll('input[name="doctor"]').forEach(r => r.addEventListener('change', verificarAgendaCompleta));
        document.querySelectorAll('input[name="modalidad"]').forEach(r => r.addEventListener('change', verificarAgendaCompleta));
        
        selectEspecialidad.addEventListener('change', () => {
            selectEspecialidad.style.borderColor = selectEspecialidad.value === "" ? "#d32f2f" : "#388e3c";
            verificarAgendaCompleta();
        });

        // Interacción Calendario
        const diasCalendario = document.querySelectorAll('.cal-matriz-numeros span:not(.dia-apagado)');
        diasCalendario.forEach(dia => {
            dia.addEventListener('click', function() {
                diasCalendario.forEach(d => d.classList.remove('dia-marcado'));
                this.classList.add('dia-marcado');
                fechaSeleccionada = `Feb ${this.textContent}, 2026`;
                
                const pildoraFecha = document.querySelectorAll('.resumen-pildoras .pildora-tag')[0];
                if(pildoraFecha) pildoraFecha.textContent = fechaSeleccionada;
                verificarAgendaCompleta();
            });
        });

        // Interacción Hora
        const columnasRueda = document.querySelectorAll('.col-rueda');
        const displayHora = document.querySelector('.hora-valor');
        const pildoraHora = document.querySelectorAll('.resumen-pildoras .pildora-tag')[1]; 

        const actualizarHoraFinal = () => {
            const colHoras = document.querySelectorAll('.col-rueda')[0];
            const colMinutos = document.querySelectorAll('.col-rueda')[1];
            const colMeridiano = document.querySelectorAll('.col-rueda')[2];

            const horaActiva = colHoras.querySelector('.activa')?.textContent || '9';
            const minActivo = colMinutos.querySelector('.activa')?.textContent || '41';
            const merActivo = colMeridiano.querySelector('.activa')?.textContent || 'AM';

            horaSeleccionada = `${horaActiva}:${minActivo} ${merActivo}`;
            
            if(displayHora) displayHora.textContent = horaSeleccionada;
            if(pildoraHora) pildoraHora.textContent = horaSeleccionada;
            verificarAgendaCompleta();
        };

        columnasRueda.forEach(columna => {
            const opciones = columna.querySelectorAll('.op-rueda');
            opciones.forEach(opcion => {
                opcion.addEventListener('click', function() {
                    opciones.forEach(opt => {
                        opt.classList.remove('activa');
                        opt.classList.add('apagado');
                    });
                    this.classList.remove('apagado');
                    this.classList.add('activa');
                    actualizarHoraFinal();
                });
            });
        });

        // Envío de Agenda
        btnSiguientePaso.addEventListener('click', () => {
            if (verificarAgendaCompleta()) {
                const doctor = document.querySelector('input[name="doctor"]:checked').value;
                const modalidad = document.querySelector('input[name="modalidad"]:checked').value;
                const especialidad = selectEspecialidad.value;
                
                const datosReserva = { doctor, modalidad, especialidad, fecha: fechaSeleccionada, hora: horaSeleccionada };
                localStorage.setItem('reservaNutriVida', JSON.stringify(datosReserva));
                
                window.location.href = 'pago.html'; 
            }
        });
    }

    // ==========================================
    // 4. INTERACTIVIDAD DE PAGO Y PERFIL
    // ==========================================
    
    // Simulación de Pago
    const btnPagar = document.querySelector('.btn-pagar');
    if (btnPagar) {
        btnPagar.addEventListener('click', (e) => {
            e.preventDefault(); 
            const metodoPago = document.querySelector('input[name="metodo_pago"]:checked').value;
            
            btnPagar.textContent = "Procesando pago...";
            btnPagar.style.opacity = "0.7";
            btnPagar.style.pointerEvents = "none";

            setTimeout(() => {
                localStorage.removeItem('reservaNutriVida'); 
                window.location.href = "confirmaciones.html"; 
            }, 1500); 
        });
    }

    // Cerrar sesión
    const btnCerrarSesion = document.querySelector('.btn-cerrar-sesion');
    if (btnCerrarSesion) {
        btnCerrarSesion.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('sesionNutriVida'); 
            window.location.href = "login.html";
        });
    }

    // ==========================================
    // 5. FUNCIONES AUXILIARES
    // ==========================================
    function mostrarError(inputElement, spanElement, mensaje) {
        spanElement.textContent = mensaje;
        spanElement.style.color = "#d32f2f";
        inputElement.style.borderColor = "#d32f2f";
        inputElement.style.borderWidth = "2px";
        inputElement.style.borderStyle = "solid";
        inputElement.style.outline = "none";
    }

    function mostrarExito(inputElement, spanElement, mensaje = "") {
        spanElement.textContent = mensaje;
        spanElement.style.color = "#388e3c";
        inputElement.style.borderColor = "#388e3c";
        inputElement.style.borderWidth = "2px";
        inputElement.style.borderStyle = "solid";
    }
});