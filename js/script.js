//ENTORNO

//VARIABLES DE CRONOMETRO
let milisegundos = 0;

let segundos = 0;

let minutos = 0;

let horas = 0;

let milisegundosCrono = document.getElementById("milisegundos-crono");

let segundosCrono = document.getElementById("segundos-crono");

let minutosCrono = document.getElementById("minutos-crono");

let horasCrono = document.getElementById("horas-crono");

//VARIABLES DE TEMPORIZADOR
let segundosT = 0;

let minutosT = 0;

let horasT = 0;

let milisegundosTempo = document.getElementById("milisegundos-tempo");

let segundosTempo = document.getElementById("segundos-tempo");

let minutosTempo = document.getElementById("minutos-tempo");

let horasTempo = document.getElementById("horas-tempo");

let editTemporizador = document.getElementById("edit-temporizador");

//VARIABLES PARA CONTROL DE VISTAS
let chrono = document.getElementById("crono");

let tempo = document.getElementById("tempo");

let botonCronometro = document.getElementById("boton-cronometro");

let botonTemporizador = document.getElementById("boton-temporizador");

//VARIABLES PARA CONTROLAR EL EDIT DEL TEMPORIZADOR
let horasEdit = document.getElementById("horasEdit");

let minutosEdit = document.getElementById("minutosEdit");

let segundosEdit = document.getElementById("segundosEdit");

let hour = parseInt(horasEdit.value);

let minute = parseInt(minutosEdit.value);

let second = parseInt(segundosEdit.value);

//VARIABLES PARA CONTROLAR FUNCIONES
let empezarCrono = 0;
let empezarTempo = 0;

//ALGORITMO

// EVENTOS CREADOS PARA CONTROLAR LOS SELECT DEL TEMPORIZADOR

horasEdit.addEventListener("change", ()=>{
    hour = parseInt(horasEdit.value);
});

minutosEdit.addEventListener("change", ()=>{
    minute = parseInt(minutosEdit.value);
});

segundosEdit.addEventListener("change", ()=>{
    second = parseInt(segundosEdit.value);
});

//CONTROL DE CRONOMETRO
class crono{
    // INICIA EL CRONOMETRO
    static start(){
        empezarCrono = setInterval(() => {
            (milisegundos < 10) ? milisegundosCrono.innerHTML = "0" + milisegundos : milisegundosCrono.innerHTML = milisegundos;
            milisegundos++;
            if (milisegundos == 100) {
                milisegundosCrono.innerHTML = "0" + 0;
                milisegundos = 0;
                segundos++;
                (segundos < 10) ? segundosCrono.innerHTML = "0" + segundos : segundosCrono.innerHTML = segundos;
            }
            if (segundos == 60) {
                segundosCrono.innerHTML = "0" + 0;
                segundos = 0;
                minutos++;
                (minutos < 10) ? minutosCrono.innerHTML = "0" + minutos : minutosCrono.innerHTML = minutos;
            }
            if (minutos == 60) {
                minutosCrono.innerHTML = "0" + 0;
                minutos = 0;
                horas++;
                horasCrono.innerHTML = "0" + horas;
            }
        }, 10);
    }
    // PAUSA EL CRONOMETRO
    static pause(){
        clearInterval(empezarCrono);
    }
    // PONE A CERO EL CRONOMETROº
    static reset(){
        clearInterval(empezarCrono);
        milisegundos = 0;
        segundos = 0;
        minutos = 0;
        horas = 0;
        milisegundosCrono.innerHTML = "0" + 0;
        segundosCrono.innerHTML = "0" + 0;
        minutosCrono.innerHTML = "0" + 0;
        horasCrono.innerHTML = "0" + 0;
    }

};

// CONTROL DE TEMPORIZADOR
class timer{
    // SE INICIA EL TEMPORIZADOR HACIA ATRÁS
    static start(){
        empezarTempo = setInterval(() => {
            segundosT--;
            (segundosT < 10) ? segundosTempo.innerHTML = "0" + segundosT : segundosTempo.innerHTML = segundosT;
            if (segundosT == -1) {
                segundosT = 59;
                (segundosT < 10) ? segundosTempo.innerHTML = "0" + segundosT : segundosTempo.innerHTML = segundosT;
                minutosT--;
                (minutosT < 10) ? minutosTempo.innerHTML = "0" + minutosT : minutosTempo.innerHTML = minutosT;
            };
            if (minutosT == -1) {
                minutosT = 59;
                (minutosT < 10) ? minutosTempo.innerHTML = "0" + minutosT : minutosTempo.innerHTML = minutosT;
                horasT--;
                (horasT < 10) ? horasTempo.innerHTML = "0" + horasT : horasTempo.innerHTML = horasT;
            };
            if (horasT == -1){
                clearInterval(empezarTempo);
                segundosT = 0;
                minutosT = 0;
                horasT = 0;
                segundosTempo.innerHTML = "00";
                minutosTempo.innerHTML = "00";
                horasTempo.innerHTML = "00";
            };
        }, 10);
    };
    // SE PAUSA EL TEMPORIZADOR
    static pause(){
        clearInterval(empezarTempo);
    }
    // SE PONE A CERO EL TEMPORIZADOR
    static reset(){
        clearInterval(empezarTempo);
        segundosT = 0;
        minutosT = 0;
        horasT = 0;
        segundosTempo.innerHTML = "00";
        minutosTempo.innerHTML = "00";
        horasTempo.innerHTML = "00";
    }
    // SE ABRE LA VENTANA PARA CONFIGURAR INICIO DEL TEMPORIZADOR
    static edit(){
        editTemporizador.style.bottom = "30%";
        editTemporizador.style.opacity = "1";
        editTemporizador.style.pointerEvents = "initial";
        horasEdit.value = "00";
        minutosEdit.value = "00";
        segundosEdit.value = "00";
        hour = 0;
        minute = 0;
        second = 0;
    }
    // SE CIERRA LA VENTANA PARA CONFIGURAR INICIO DEL TEMPORIZADOR
    static closeEdit(){
        editTemporizador.style.bottom = "0%";
        editTemporizador.style.opacity = "0";
        editTemporizador.style.pointerEvents = "none";
    }
    // SE EDITA EN QUE HORA INICIARÁ EL TEMPORIZADOR
    static editHour(simbolo){
        if (simbolo == "+") {
            hour++;
        }else{
            hour--
        }
        (hour < 10) ? horasEdit.value = "0" + hour.toString() : horasEdit.value = hour.toString();
        if (hour > 23) {
            hour = 0;
            horasEdit.value = "00";
        }
        if (hour < 0) {
            hour = 23;
            horasEdit.value = "23";
        }
    }
    // SE EDITA EN QUE MINUTO INICIARÁ EL TEMPORIZADOR
    static editMinute(simbolo){
        if (simbolo == "+") {
            minute++;
        }else{
            minute--
        }
        (minute < 10) ? minutosEdit.value = "0" + minute.toString() : minutosEdit.value = minute.toString();
        if (minute > 59) {
            minute = 0;
            minutosEdit.value = "00";
        }
        if (minute < 0) {
            minute = 59;
            minutosEdit.value = "59";
        }
    }
    // SE EDITA EN QUE SEGUNDO INICIARÁ EL TEMPORIZADOR
    static editSecond(simbolo){
        if (simbolo == "+") {
            second++;
        }else{
            second--
        }
        (second < 10) ? segundosEdit.value = "0" + second.toString() : segundosEdit.value = second.toString();
        if (second > 59) {
            second = 0;
            segundosEdit.value = "00";
        }
        if (second < 0) {
            second = 59;
            segundosEdit.value = "59";
        }
    }
    // SE ARRANCA EL TEMPORIZADOR DESDE LA VENTANA DE EDITAR TEMPORIZADOR
    // CONTROLA TANTO LOS VALORES QUE ASIGNEMOS CON LOS BOTONES, COMO LOS QUE ASIGNAMOS SELECCIONANDO CON EL RATON
    static init(){
        horasTempo.innerHTML = horasEdit.value;
        hour = parseInt(horasEdit.value);
        minutosTempo.innerHTML = minutosEdit.value;
        minute = parseInt(minutosEdit.value);
        segundosTempo.innerHTML = segundosEdit.value;
        second = parseInt(segundosEdit.value);
        horasT = parseInt(hour);
        minutosT = parseInt(minute);
        segundosT = parseInt(second);
        this.closeEdit();
    }
}

class nav{
    static changeToTimer(){
        chrono.style.display = "none";
        tempo.style.display = "flex";
        botonTemporizador.classList.add("activo");
        botonCronometro.classList.remove("activo");
    }
    static changeToCrono(){
        tempo.style.display = "none";
        chrono.style.display = "flex";
        botonCronometro.classList.add("activo");
        botonTemporizador.classList.remove("activo");
    }
}