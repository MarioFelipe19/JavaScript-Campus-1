function saludar(nombre, callback){
    setTimeout(function(){
        console.log("Hola "+nombre)
        callback(nombre)
    },1000)
}

function hablar(callback){
    setTimeout(function(){
        console.log("Bla bla bla")
        callback()
    },2000)
}

function despedir(nombre){
    setTimeout(function(){
        console.log("Adios "+nombre)
    },1000)
}


saludar("Luis Nicolas", function(nombre){
    hablar(function(){
        hablar(function(){
            hablar(function(){
                despedir(nombre)
            })
        })
    })
})