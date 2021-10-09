//ENTORNO
let segundos = 0;

let minutos = 0;

let horas = 0;

let segundosPagina = document.getElementById("segundos");

let minutosPagina = document.getElementById("minutos");

let horasPagina = document.getElementById("horas");

let empezarCrono = 0;

//ALGORITMO

class crono{

    static start(){
        empezarCrono = setInterval(() => {
            segundos++
            (segundos < 10) ? segundosPagina.innerHTML = "0" + segundos : segundosPagina.innerHTML = segundos;
            console.log(segundos);
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
                horasPagina.innerHTML = horas;
            }
        }, 1000);
    }

    static pause(){
        clearInterval(empezarCrono);
    }

};
