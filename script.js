let main = document.createElement('main')
main.className = 'main'

document.body.prepend(main)

let con1 = document.createElement('div')
con1.className = 'con1'

main.append(con1)

let h1 = document.createElement('h1')
h1.className = 'h1'
h1.innerHTML = 'Key Features '

con1.append(h1)

let p = document.createElement('h6')
p.className = 'h6'
p.innerHTML = 'Sample text. Click to select the text box. Click again ar double<br>click to start editing the text'

con1.append(p)

let freePik = document.createElement('h5')
freePik.className = 'freePik'
freePik.innerHTML = 'image from Freepik'

con1.append(freePik)


let con2 = document.createElement('div')
con2.className = 'con2'

main.append(con2)




// КАРТОЧКИ


let card1 = document.createElement('div')

card1.className = 'card'


let card2 = document.createElement('div')
card2.className = 'card'


let card3 = document.createElement('div')
card3.className = 'card'


let card4 = document.createElement('div')
card4.className = 'card'


let card5 = document.createElement('div')
card5.className = 'card'


let card6 = document.createElement('div')
card6.className = 'card'


let card7 = document.createElement('div')
card7.className = 'card'


let card8 = document.createElement('div')
card8.className = 'card'




// ИКОНКИ


let icons = document.createElement('div')
icons.className = "icons"
card1.append(icons)

let img = document.createElement('div')
img.className = 'img'
icons.append(img)

// 2
let icons2 = document.createElement('div')
icons2.className = "icons"
card2.append(icons2)

let img2 = document.createElement('div')
img2.className = 'img2'
icons2.append(img2)

// 3
let icons3 = document.createElement('div')
icons3.className = "icons"
card3.append(icons3)

let img3 = document.createElement('div')
img3.className = 'img3'
icons3.append(img3)

// 4
let icons4 = document.createElement('div')
icons4.className = "icons"
card4.append(icons4)

let img4 = document.createElement('div')
img4.className = 'img4'
icons4.append(img4)

// 5
let icons5 = document.createElement('div')
icons5.className = "icons"
card5.append(icons5)

let img5 = document.createElement('div')
img5.className = 'img5'
icons5.append(img5)

// 6
let icons6 = document.createElement('div')
icons6.className = "icons"
card6.append(icons6)

let img6 = document.createElement('div')
img6.className = 'img6'
icons6.append(img6)

// 7
let icons7 = document.createElement('div')
icons7.className = "icons"
card7.append(icons7)

let img7 = document.createElement('div')
img7.className = 'img7'
icons7.append(img7)

// 8
let icons8 = document.createElement('div')
icons8.className = "icons"
card8.append(icons8)

let img8 = document.createElement('div')
img8.className = 'img8'
icons8.append(img8)




// НАЗВАНИЯ
let nameCard = document.createElement('h2')
nameCard.innerHTML = 'PRICING'
nameCard.className = 'nameCard'

let nameCard2 = document.createElement('h2')
nameCard2.innerHTML = 'ABOUT US'
nameCard2.className = 'nameCard'

let nameCard3 = document.createElement('h2')
nameCard3.innerHTML = 'EFFECTIVE'
nameCard3.className = 'nameCard'

let nameCard4 = document.createElement('h2')
nameCard4.innerHTML = 'STRATEGY'
nameCard4.className = 'nameCard'

let nameCard5 = document.createElement('h2')
nameCard5.innerHTML = 'AWARDS'
nameCard5.className = 'nameCard'

let nameCard6 = document.createElement('h2')
nameCard6.innerHTML = 'TECHNOLOGY'
nameCard6.className = 'nameCard'

let nameCard7 = document.createElement('h2')
nameCard7.innerHTML = 'MARKETING'
nameCard7.className = 'nameCard'

let nameCard8 = document.createElement('h2')
nameCard8.innerHTML = 'SUPPORT'
nameCard8.className = 'nameCard'

card1.append(nameCard)
card2.append(nameCard2)
card3.append(nameCard3)
card4.append(nameCard4)
card5.append(nameCard5)
card6.append(nameCard6)
card7.append(nameCard7)
card8.append(nameCard8)




card1.classList.add('one')
card2.classList.add('twoo')
card3.classList.add('three')
card4.classList.add('foure')
card5.classList.add('five')
card6.classList.add('six')
card7.classList.add('seven')
card8.classList.add('acht')


con2.append(card1)
con2.append(card2)
con2.append(card3)
con2.append(card4)
con2.append(card5)
con2.append(card6)
con2.append(card7)
con2.append(card8)


let title = document.createElement('p')
title.className = 'title'
title.innerHTML = 'Sample text. Click to select<br> the text box. Click again ar<br> double click to start editing<br> the text'
card1.append(title) 

let aTag = document.createElement('h4')
aTag.className = 'aTag'
aTag.innerHTML = 'learn more'
card1.append(aTag)

let title2 = document.createElement('p')
title2.className = 'title2'
title2.innerHTML = 'Sample text. Click to select<br> the text box. Click again ar<br> double click to start editing<br> the text'
card2.append(title2) 

let aTag2 = document.createElement('h4')
aTag2.className = 'aTag2'
aTag2.innerHTML = 'learn more'
card2.append(aTag2)

let title3 = document.createElement('p')
title3.className = 'title3'
title3.innerHTML = 'Sample text. Click to select<br> the text box. Click again ar<br> double click to start editing<br> the text'
card3.append(title3) 

let aTag3 = document.createElement('h4')
aTag3.className = 'aTag3'
aTag3.innerHTML = 'learn more'
card3.append(aTag3)

let title4 = document.createElement('p')
title4.className = 'title4'
title4.innerHTML = 'Sample text. Click to select<br> the text box. Click again ar<br> double click to start editing<br> the text'
card4.append(title4) 

let aTag4 = document.createElement('h4')
aTag4.className = 'aTag4'
aTag4.innerHTML = 'learn more'
card4.append(aTag4)

let title5 = document.createElement('p')
title5.className = 'title5'
title5.innerHTML = 'Sample text. Click to select<br> the text box. Click again ar<br> double click to start editing<br> the text'
card5.append(title5) 

let aTag5 = document.createElement('h4')
aTag5.className = 'aTag5'
aTag5.innerHTML = 'learn more'
card5.append(aTag5)

let title6 = document.createElement('p')
title6.className = 'title6'
title6.innerHTML = 'Sample text. Click to select<br> the text box. Click again ar<br> double click to start editing<br> the text'
card6.append(title6) 

let aTag6 = document.createElement('h4')
aTag6.className = 'aTag6'
aTag6.innerHTML = 'learn more'
card6.append(aTag6)

let title7 = document.createElement('p')
title7.className = 'title7'
title7.innerHTML = 'Sample text. Click to select<br> the text box. Click again ar<br> double click to start editing<br> the text'
card7.append(title7) 

let aTag7 = document.createElement('h4')
aTag7.className = 'aTag7'
aTag7.innerHTML = 'learn more'
card7.append(aTag7)

let title8 = document.createElement('p')
title8.className = 'title8'
title8.innerHTML = 'Sample text. Click to select<br> the text box. Click again ar<br> double click to start editing<br> the text'
card8.append(title8) 

let aTag8 = document.createElement('h4')
aTag8.className = 'aTag8'
aTag8.innerHTML = 'learn more'
card8.append(aTag8)








