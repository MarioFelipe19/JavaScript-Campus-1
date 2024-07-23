const promesa  = new Promise ((resolve,reject)=> {
    var edad = 15;
    if (edad > 18){
        resolve("Puede entrar");
    }else{
        reject("No puede entrar")
    }
})