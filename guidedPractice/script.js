const root = document.getElementById ("root")
const h1 = document.createElement ("h1")
h1.innerHTML = "Mona Lisa"
root.appendChild (h1)

const monaImg = document.createElement ("img")
monaImg.setAttribute("src", "img/mona_lisa.jpg")
root.appendChild (monaImg)
monaImg.setAttribute("width", "304")
monaImg.setAttribute("height", "auto")
root.style.textAlign = "center"

const pTag = document.createElement ("p")
pTag.innerHTML = "The Mona Lisa is a famous painting."
root.appendChild (pTag)