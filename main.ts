function dizOi () {
    game.splash("Oi!")
    game.showLongText("Oi, oi!!", DialogLayout.Bottom)
}
function dizOiPara (alguem: string) {
    game.splash("Oi, " + alguem)
}
let nomes = [
"Kako",
"Aristides",
"Testão",
"Milito",
"Bobão",
"ABC",
"123"
]
game.splash("inicio")
for (let index = 0; index <= nomes.length - 1; index++) {
    dizOiPara(nomes[index])
}
game.splash("fim")
