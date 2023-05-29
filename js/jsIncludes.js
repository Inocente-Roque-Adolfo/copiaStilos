//AGREGANDO EL HEADER AL INDEX
fetch('../includes/header.html')
    .then(response => response.text())
    .then(data => {
        //Se agrega los datos dentro de la captura de un Id
        document.getElementById('headerS1').innerHTML = data;
    });


//AGREGANDO LA SECTION 1
fetch('../includes/section01.html')
    .then(response => response.text())
    .then(data => {
        
        document.getElementById('Section01').innerHTML = data;
         
    });


//AGREGANDO LA SECTION 6
fetch('../includes/section06.html')
    .then(response => response.text())
    .then(data => {
        
        document.getElementById('Section06').innerHTML = data;
         
    });

