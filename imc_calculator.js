const personName = document.getElementById('Name_zur');
const calculate  = document.getElementById('submit')

function reciveName(){

    if(reciveName === undefined || reciveName === null){
        console.log('Digite um valor valido')
    }else{
        console.log(personName)
    }

    
}

calculate.addEventListener('click', reciveName)