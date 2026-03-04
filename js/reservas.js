function reservas() {

    let bolsa = document.querySelectorAll(".form-control, .form-select");

    let nombre = bolsa[0].value;
    let correo = bolsa[1].value;
    let fecha = bolsa[2].value;
    let hora = bolsa[3].value;
    let personas = bolsa[4].value;

    if (!nombre || !correo || !fecha || !hora || !personas) {

        Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Hacen falta datos!"
});
        return;

    } else {

        Swal.fire({
  title: "Muy bien!",
  text: "Hemos reservado tu mesa!",
  icon: "success"
});

    }
}