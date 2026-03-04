function contactar(){
    //let nombre = document.getElementById('nombre').value
    //let correo = document.getElementById('correo').value
    //let mensaje = document.getElementById('mensaje').value


    //if(!nombre || !correo || !mensaje ){
       // alert('📍Error faltan datos')
   // }
    //else{
      //  alert(nombre + "🖍️ Su mensaje ha sido enviado, gracias por contactarnos")
   // }



    let bolsa = document.querySelectorAll('.form-control');
    nombre= bolsa[0].value
    for (let i = 0; i < bolsa.length; i++) {
      const elemento = bolsa[i].value; //el array se llama bolsa

    if(!nombre || !correo || !mensaje ){
        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "FALTAN DATOS!!!",
});
        return; //Encuentra un campo vacio y de una sale
    }
    else{
        Swal.fire({
  title: "Excelente!",
  text: "Hemos recibido tus datos!",
  icon: "success"
});
        return;
    }
      
    }


}