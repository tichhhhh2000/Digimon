function obtenerDigimonPromesas(){

    return new Promise(function(resolve,reject){
        fetch('https://digimon-api.vercel.app/api/digimon')
        .then(function(response){
            if(!response.ok){
                throw new error("error");
            }
            return response.json();
        })
        .then(function(data){
            resolve(data);
        })
        .catch(function(error){
            reject(error)
        })

    });
}




    obtenerDigimonPromesas()
    .then(function(digimones){
        digimones.map((digimon)=> {
            console.log(digimon);
        })
    }).catch(function(error){
        console.log(`El error es: ${error}`);
    })