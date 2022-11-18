let jugadora1 = {
    nombre : "Ana",
    apaellidos : "Caro",
    nivel : 1,
    puntuacion : 1,
    puntosConseguidos : 0,
    puntosPerdidos: 9
}

let jugadora2 = {
    nombre : "Clara",
    apaellidos : "Díaz",
    nivel : 1,
    puntuacion : 1,
    puntosConseguidos : 0,
    puntosPerdidos : 0
}

/**Al no comprender al principio bien, decidií crear funciones y luego
 * meterlas como métodos del objeto. Pero no me ha dado tiempo.
 */


function matarZombie(jugadora) {
    sumarPuntuacion(jugadora)
}

function sumarPuntuacion(jugadora) {
    jugadora.puntosConseguidos ++
    jugadora.puntuacion ++
    if (jugadora.puntosConseguidos >= 10) {
        jugadora.puntuacion += 10
        jugadora.puntosConseguidos = 0  
    }   
}

function ataqueZombie(jugadora) {
    restarPuntuacion(jugadora)
}


function restarPuntuacion(jugadora) {
    jugadora.puntosPerdidos ++
    jugadora.puntuacion --
    if (jugadora.puntosPerdidos >= 10) {
        jugadora.puntuacion -= 10
        jugadora.puntosPerdidos = 0  
    }  

    if (jugadora.puntuacion <= 0) {
        jugadora.puntuacion = 1
        jugadora.puntosConseguidos = 0
        jugadora.puntosPerdidos = 0
        jugadora.nivel --
        if (nivel < 1) {
            morir(jugadora)
        }
    }
}


function morir(jugadora) {
        jugadora.puntuacion = 1
        jugadora.puntosConseguidos = 0
        jugadora.puntosPerdidos = 0
        jugadora.nivel = 1

}

console.log(jugadora1)
sumarPuntuacion(jugadora1)
console.log(jugadora1)
ataqueZombie(jugadora1)
console.log(jugadora1)
