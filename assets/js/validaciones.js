document.addEventListener("DOMContentLoaded", () => {
    const regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const regexNumeros = /^[0-9]+$/;
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
    const regexRut9 = /^[0-9]{8}[0-9K]$/;
    const formRegistro = document.getElementById('formRegistro');
    
    // ==========================================
    // 1. VALIDACIÓN FORMULARIO DE REGISTRO
    // ==========================================

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

        //Nombre
        inputNombre.addEventListener('input', () => {
            const valor = inputNombre.value;
            if (valor.trim() === '') {
                mostrarError(inputNombre, errNombre, 'El nombre es obligatorio.');
            } else if (!regexLetras.test(valor)) {
                mostrarError(inputNombre, errNombre, 'Usa solo letras (sin números).');
            } else {
                mostrarExito(inputNombre, errNombre);
            }
        });

        //Apellido
        inputApellido.addEventListener('input', () => {
            const valor = inputApellido.value;
            if (valor.trim() === '') {
                mostrarError(inputApellido, errApellido, 'El apellido es obligatorio.');
            } else if (!regexLetras.test(valor)) {
                mostrarError(inputApellido, errApellido, 'Usa solo letras (sin números).');
            } else {
                mostrarExito(inputApellido, errApellido);
            }
        });

        //Teléfono
        inputTelefono.addEventListener('input', () => {
            const valor = inputTelefono.value.trim();
            if (valor === '') {
                mostrarError(inputTelefono, errTelefono, 'El número es obligatorio.');
            } else if (!regexNumeros.test(valor)) {
                mostrarError(inputTelefono, errTelefono, 'Ingresa exclusivamente números.');
            } else if (valor.length > 8) {
                inputTelefono.value = valor.slice(0, 8); 
                mostrarExito(inputTelefono, errTelefono);
            } else if (valor.length < 8) {
                mostrarError(inputTelefono, errTelefono, `Llevas ${valor.length} dígitos. Deben ser 8.`);
            } else {
                mostrarExito(inputTelefono, errTelefono);
            }
        });

        //Correo
        inputCorreoReg.addEventListener('input', () => {
            const valor = inputCorreoReg.value.trim();
            if (valor === '') {
                mostrarError(inputCorreoReg, errCorreoReg, 'El correo es obligatorio.');
            } else if (!regexCorreo.test(valor)) {
                mostrarError(inputCorreoReg, errCorreoReg, '@gmail.com');
            } else {
                mostrarExito(inputCorreoReg, errCorreoReg);
            }
        });

        //RUT
        inputRut.addEventListener('input', () => {
            let valor = inputRut.value.trim().toUpperCase();
            inputRut.value = valor;
            
            if (valor === '') {
                mostrarError(inputRut, errRut, 'El RUT es obligatorio.');
            } else if (valor.length < 9) {
                mostrarError(inputRut, errRut, `Llevas ${valor.length} caracteres. Deben ser exactamente 9.`);
            } else if (valor.length > 9) {
                inputRut.value = valor.slice(0, 9);
                valor = inputRut.value;
            }
            
            // Solo valida el formato cuando alcanza los 9 caracteres
            if (valor.length === 9) {
                if (!regexRut9.test(valor)) {
                    mostrarError(inputRut, errRut, 'Formato inválido. (Ej: 123456789 o 12345678K)');
                } else {
                    mostrarExito(inputRut, errRut, '¡RUT válido!');
                }
            }
        });

        //Contraseña
        inputClaveReg.addEventListener('input', () => {
            const valor = inputClaveReg.value;
            if (valor === '') {
                mostrarError(inputClaveReg, errClaveReg, 'La contraseña es obligatoria.');
            } else if (valor.length < 4 || valor.length > 10) {
                mostrarError(inputClaveReg, errClaveReg, `Tiene ${valor.length} caracteres. Debe tener entre 4 y 10.`);
            } else {
                mostrarExito(inputClaveReg, errClaveReg, '¡Longitud válida!');
            }
            if(inputRepetirClave.value !== '') validarRepetirClave(); 
        });

        //Repetir Contraseña
        const validarRepetirClave = () => {
            const valor = inputRepetirClave.value;
            const claveOriginal = inputClaveReg.value;
            
            if (valor === '') {
                mostrarError(inputRepetirClave, errRepetir, 'Debe repetir la contraseña.');
            } else if (valor !== claveOriginal) {
                mostrarError(inputRepetirClave, errRepetir, 'Las contraseñas no coinciden.');
            } else {
                mostrarExito(inputRepetirClave, errRepetir, '¡Las contraseñas coinciden!');
            }
        };
        inputRepetirClave.addEventListener('input', validarRepetirClave);
        
        //Control de envío
        formRegistro.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = formRegistro.querySelectorAll('input:not([type="checkbox"])');
            let hayErrores = false;
            inputs.forEach(input => {
                if (input.style.borderColor === "rgb(211, 47, 47)" || input.value.trim() === "") {
                    hayErrores = true;
                }
            });

            if (hayErrores) {
                alert("Por favor, corrige los errores marcados en rojo antes de registrarte.");
            } else {
                alert("Registro completado con éxito. ¡Todos los datos son válidos!");
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

        inputCorreoLogin.addEventListener('input', () => {
            const valor = inputCorreoLogin.value.trim();
            if (valor === '') {
                mostrarError(inputCorreoLogin, errCorreoLogin, 'Ingrese su correo para iniciar sesión.');
            } else if (!regexCorreo.test(valor)) {
                mostrarError(inputCorreoLogin, errCorreoLogin, 'Formato inválido. Use dominios permitidos (@gmail.com, etc).');
            } else {
                mostrarExito(inputCorreoLogin, errCorreoLogin);
            }
        });

        inputClaveLogin.addEventListener('input', () => {
            const valor = inputClaveLogin.value;
            if (valor === '') {
                mostrarError(inputClaveLogin, errClaveLogin, 'La contraseña es requerida.');
            } else if (valor.length < 4 || valor.length > 10) {
                mostrarError(inputClaveLogin, errClaveLogin, 'La contraseña debe tener entre 4 y 10 caracteres.');
            } else {
                mostrarExito(inputClaveLogin, errClaveLogin);
            }
        });

        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Iniciando sesión... Validaciones completadas.");
        });
    }

    // ==========================================
    // 3. VALIDACIÓN FORMULARIO DE AGENDA
    // ==========================================
    const formAgenda = document.getElementById('formAgenda');

    if (formAgenda) {
        const btnSiguientePaso = document.getElementById('btnSiguientePaso');
        const selectEspecialidad = document.getElementById('selectEspecialidad');
        
        
        // Simular selección en los widgets personalizados de fecha/hora
        // En una app real, estos valores se actualizarían al hacer clic en el calendario
        let fechaSeleccionada = "Feb19, 2026"; // Valor inicial simulado
        let horaSeleccionada = "9:41 AM";      // Valor inicial simulado

        // Función para verificar si todo está seleccionado
        const verificarAgendaCompleta = () => {
            // Verificar si hay un doctor seleccionado
            const doctorSeleccionado = document.querySelector('input[name="doctor"]:checked');
            
            // Verificar si hay una modalidad seleccionada
            const modalidadSeleccionada = document.querySelector('input[name="modalidad"]:checked');
            
            // Verificar si la especialidad está seleccionada (no debe ser el valor vacío por defecto)
            const especialidadSeleccionada = selectEspecialidad.value !== "";

            // Verificar que existan fecha y hora (simulado)
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

        // Inicializar botón bloqueado
        verificarAgendaCompleta();

        // Escuchar cambios en los radio buttons del doctor
        const radiosDoctor = document.querySelectorAll('input[name="doctor"]');
        radiosDoctor.forEach(radio => {
            radio.addEventListener('change', verificarAgendaCompleta);
        });

        // Escuchar cambios en los radio buttons de modalidad
        const radiosModalidad = document.querySelectorAll('input[name="modalidad"]');
        radiosModalidad.forEach(radio => {
            radio.addEventListener('change', verificarAgendaCompleta);
        });

        // Escuchar cambios en el select de especialidad
        selectEspecialidad.addEventListener('change', () => {
            if (selectEspecialidad.value === "") {
                selectEspecialidad.style.borderColor = "#d32f2f";
            } else {
                selectEspecialidad.style.borderColor = "#388e3c";
            }
            verificarAgendaCompleta();
        });

        // Manejar el clic en "Siguiente"
        btnSiguientePaso.addEventListener('click', () => {
            if (verificarAgendaCompleta()) {
                const doctor = document.querySelector('input[name="doctor"]:checked').value;
                const modalidad = document.querySelector('input[name="modalidad"]:checked').value;
                const especialidad = selectEspecialidad.value;
                
                // Guardar en localStorage
                const datosReserva = {
                    doctor: doctor,
                    modalidad: modalidad,
                    especialidad: especialidad,
                    fecha: fechaSeleccionada,
                    hora: horaSeleccionada
                };
                
                localStorage.setItem('reservaNutriVida', JSON.stringify(datosReserva));
                
                alert("Datos validados correctamente. Reserva guardada en localStorage. Pasando al Checkout...");
                // Aquí redirigirías a la siguiente vista: window.location.href = 'checkout.html';
            } else {
                alert("Por favor, completa todos los campos (Doctor, Modalidad y Especialidad) antes de continuar.");
            }
        });
        
        // Simulación básica de interactividad en los widgets para que no sean estáticos
        const diasCalendario = document.querySelectorAll('.cal-matriz-numeros span:not(.dia-apagado)');
        diasCalendario.forEach(dia => {
            dia.addEventListener('click', function() {
                // Quitar la clase marcada de todos
                diasCalendario.forEach(d => d.classList.remove('dia-marcado'));
                // Agregarsela al clickeado
                this.classList.add('dia-marcado');
                fechaSeleccionada = `Feb ${this.textContent}, 2026`;
                
                // Actualizar píldora visual
                const pildoraFecha = document.querySelectorAll('.resumen-pildoras .pildora-tag')[0];
                if(pildoraFecha) pildoraFecha.textContent = fechaSeleccionada;
                
                verificarAgendaCompleta();
            });
        });
    }



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