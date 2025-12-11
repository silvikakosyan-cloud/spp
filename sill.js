document.getElementById("p1").style = "display: none;"
document.getElementById("p2").style = "display: none;"
document.getElementById("d0").style = "color: #fff;"
document.getElementById("d1").style = "color: #ccc;"
document.getElementById("d2").style = "color: #ccc;"

document.getElementById("d1").addEventListener("click", () => {
    document.getElementById("d1").style = "color: #fff;"
    document.getElementById("d0").style = "color: #ccc;"
    document.getElementById("d2").style = "color: #ccc;"
    document.getElementById("p1").style = "display: block;"
    document.getElementById("p0").style = "display:none;"
    document.getElementById("p2").style = "display:none;"
})

document.getElementById("d0").addEventListener("click", () => {
    document.getElementById("d0").style = "color: #fff;"
    document.getElementById("d1").style = "color: #ccc;"
    document.getElementById("d2").style = "color: #ccc;"
    document.getElementById("p0").style = "display: block;"
    document.getElementById("p1").style = "display:none;"
    document.getElementById("p2").style = "display:none;"
})

document.getElementById("d2").addEventListener("click", () => {
    document.getElementById("d2").style = "color: #fff;"
    document.getElementById("d0").style = "color: #ccc;"
    document.getElementById("d1").style = "color: #ccc;"
    document.getElementById("p2").style = "display: block;"
    document.getElementById("p0").style = "display:none;"
    document.getElementById("p1").style = "display:none;"
})