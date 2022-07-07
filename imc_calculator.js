
function armazenaVariavel(){
    
    const personName = document.getElementById('Name').value 
    
    const personHeight = document.getElementById('Height').value

    const personWeight = document.getElementById('Weight').value

    const result = personWeight / (personHeight * personHeight)


    document.getElementById('name_visor').innerHTML = "Name: " + personName

    document.getElementById('height_visor').innerHTML = "Height: " + personHeight

    document.getElementById('weight_visor').innerHTML = "Weight: " + personWeight
    
    document.getElementById('result_visor').innerHTML = "IMC: " + result.toFixed(2)

}

