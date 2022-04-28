const wrapper = document.querySelector(".wrapper");
const generateBtn = wrapper.querySelector(".form button");
const qrInput = wrapper.querySelector(".form input");
const qrImg = wrapper.querySelector(".qr-code img");
generateBtn.addEventListener("click", ()=>{
    let qrValue = qrInput.value;
    if(!qrValue) return; //Si el input esta vacio
    generateBtn.innerText= "Generando Codigo QR..."
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${qrValue}`;
    qrImg.addEventListener("load", ()=>{
        wrapper.classList.add("active");
        generateBtn.innerText= "Generar QR"
    })
    
})

qrInput.addEventListener("keyup", ()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }

})