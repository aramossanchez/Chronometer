//ENTORNO
let milisegundos = 0;

let segundos = 0;

let minutos = 0;

let horas = 0;

let miliSegundosPagina = document.getElementById("milisegundos");

let segundosPagina = document.getElementById("segundos");

let minutosPagina = document.getElementById("minutos");

let horasPagina = document.getElementById("horas");

let empezarCrono = 0;

//ALGORITMO

class crono{

    static start(){
        empezarCrono = setInterval(() => {
            (milisegundos < 10) ? miliSegundosPagina.innerHTML = "0" + milisegundos : miliSegundosPagina.innerHTML = milisegundos;
            milisegundos++;
            if (milisegundos == 100) {
                miliSegundosPagina.innerHTML = "0" + 0;
                milisegundos = 0;
                segundos++;
                (segundos < 10) ? segundosPagina.innerHTML = "0" + segundos : segundosPagina.innerHTML = segundos;
            }
            if (segundos == 60) {
                segundosPagina.innerHTML = "0" + 0;
                segundos = 0;
                minutos++;
                (minutos < 10) ? minutosPagina.innerHTML = "0" + minutos : minutosPagina.innerHTML = minutos;
            }
            if (minutos == 60) {
                minutosPagina.innerHTML = "0" + 0;
                minutos = 0;
                horas++;
                horasPagina.innerHTML = "0" + horas;
            }
        }, 10);
    }

    static pause(){
        clearInterval(empezarCrono);
    }

    static reset(){
        clearInterval(empezarCrono);
        milisegundos = 0;
        segundos = 0;
        minutos = 0;
        horas = 0;
        miliSegundosPagina.innerHTML = "0" + 0;
        segundosPagina.innerHTML = "0" + 0;
        minutosPagina.innerHTML = "0" + 0;
        horasPagina.innerHTML = "0" + 0;
    }

};
