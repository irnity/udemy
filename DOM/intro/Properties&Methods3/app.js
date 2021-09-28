const firstBold = document.querySelector("b")
firstBold.parentElement
const paragraph = firstBold.parentElement
paragraph.children
paragraph.children[0]
paragraph.children[0].parentElement
const squereImg = document.querySelector("img")
squereImg.nextSibling
squereImg.nextElementSibling

const newImg = document.createElement("img")
document.body.appendChild(newImg)

const p = document.querySelector("p")
p.append("hello") //after
p.prepend("hello") //before

const h2 = document.querySelector("h2")
h2.append(" are adorable")
const h1 = document.querySelector("h1")
h1.insertAdjacentElement("afterend", h2)
