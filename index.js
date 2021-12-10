const section1 = document.getElementById('presentacionContainer')
const section2 = document.getElementById('sobreMiContainer')
const section3 = document.getElementById('tecnologiasContainer')
const section4 = document.querySelector('.proyecto')
const section5 = document.querySelector('.p2')
const section6 = document.querySelector('.p3')
const section7 = document.querySelector('.p4')
const section8 = document.getElementById('contactameContainer')

const cargarImagen=(entradas , observador) =>{

    entradas.forEach(entradas=> {
        console.log(entradas)
        if(entradas.isIntersecting){
            entradas.target.classList.add('visible');
        }
    });

}

const observador = new IntersectionObserver(cargarImagen,{
    root: null,
    rootMargin:'100px 0px 0px 0px' ,
    threshold: 0.3
})

observador.observe(section1);
observador.observe(section2);
observador.observe(section3);
observador.observe(section4);
observador.observe(section5);
observador.observe(section6);
observador.observe(section7);
observador.observe(section8);

const form = document.querySelector(".contactame__formulario");
form.addEventListener("submit", envio);

async function envio(evento) {
  evento.preventDefault();
  const form1 = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form1,
    headers: {
      Accept: "apllication/json",
    },
  });
  if (response.ok) {
    this.reset();
    alert("¡Gracias por contactarme ! Te contestare a la brevedad.");
  }
}
