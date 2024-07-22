function añadir(callback) {
    setTimeout(function () {
        console.log("añadir amigo")
        callback()
    }, 1000)
}

function llegaSolicitud(callback2) {
    setTimeout(function () {
        console.log("llega la solcitud")
        callback2()
    }, 2000);
}

function aceptaSolicitud(callback3) {
    setTimeout(function () {
        console.log("acepta solicitud")
        callback3()
    }, 3000);
}

function llegaNotificacion(callback4) {
    setTimeout(function () {
        console.log("llega la notificacion de aceptacion")
        callback4()
    }, 4000);
}

function chatean(callback5) {
    setTimeout(function () {
        console.log("Chatean")
        callback5()
    }, 5000);
}

function publicaFoto(callback6) {
    setTimeout(function () {
        console.log("Se publica una foto")
        callback6()
    }, 6000);
}

function fotocomentada(callback7) {
    setTimeout(function () {
        console.log("La foto  es comentada ")
        callback7()
    }, 7000);
}

function cierrarcesion(callback8) {
    setTimeout(function () {
        console.log("Se cierra la cesion")
        callback8()
    }, 8000);
}
añadir(function(){
    llegaSolicitud(function(){
        aceptaSolicitud(function(){
            llegaNotificacion(function(){
                chatean(function(){
                    publicaFoto(function(){
                        fotocomentada(function(){
                            cierrarcesion(function(){})
                        })
                    })
                })
            })
        })
    })
})

// añadir(llegaSolicitud(aceptaSolicitud(llegaNotificacion(chatean(publicaFoto(fotocomentada(cierrarcesion())))))))