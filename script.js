let ButtonEfect = document.querySelector('button');

ButtonEfect.addEventListener('mouseover', (event) => {
    const x = event.pageX - ButtonEfect.offsetLeft
    const y = event.pageY - ButtonEfect.offsetTop
    console.log(x)
    console.log(y)
    ButtonEfect.style.setProperty("--xPage", x + "px")
    ButtonEfect.style.setProperty("--yPage", y + "px")
})
