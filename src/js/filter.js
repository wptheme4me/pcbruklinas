var shops = document.getElementsByClassName('shop')
var sortShops = Array.prototype.filter.call(shops, function (el, i, aa) {
  if (i % 2 === 0) {
    el.style = 'background:green'
    // el.className += ' bla'
  }
  console.log(i + ': ' + el)
})

var plan = document.getElementById('svg')
// Zoom
// plan.addEventListener('mousewheel', function (e) {
//   var bbox = this.getBBox()
//   console.log('Bbox: ' + bbox.x + ' ' + bbox.y + ' ' + bbox.width + ' ' + bbox.height)
//   var zoomStep = parseInt(e.deltaY)
//   var current = this.getAttribute('viewBox').split(' ')
//   var x = parseInt(current[0]) + zoomStep
//   var y = parseInt(current[1]) + zoomStep
//   var width = parseInt(current[2]) - zoomStep
//   var height = parseInt(current[3]) - zoomStep
//   this.setAttribute('viewBox', x + ' ' + y + ' ' + width + ' ' + height)
//   console.log(this.getAttribute('viewBox'))
// })

// Show SVG coordinates for tooltip
// Create an SVGPoint for future math
var pt = plan.createSVGPoint()

// Get point in global SVG space
function cursorPoint (evt) {
  pt.x = evt.clientX; pt.y = evt.clientY
  return pt.matrixTransform(plan.getScreenCTM().inverse())
}

plan.addEventListener('click', function (e) {
  var loc = cursorPoint(e)
  // tooltip apacios koordinates x:54, y:85
  console.log('x: ' + (loc.x - 54) + ' y: ' + (loc.y - 85))
})

// Tooltip creation
var shopList = [
  { id: 'vynoteka', name: 'Vynoteka', day: '10:00-22:00', week: '11:00-18:00', x: 935, y: 338 },
  { id: 'elektromarkt', name: 'Elektromarkt', day: '10:00-22:00', week: '11:00-18:00', x: 543, y: 10 },
  { id: 'norfa', name: 'Hyper Norfa', day: '10:00-22:00', week: '11:00-18:00', x: 900, y: 37 },
  { id: 'thomas-philipps', name: 'Thomas Philipps', day: '10:00-22:00', week: '11:00-18:00', x: 484, y: 137 },
  { id: 'neaisku-kas', name: 'Neaišku kas', day: '10:00-22:00', week: '11:00-18:00', x: 819, y: 238 },
  { id: 'neaisku-kas-1', name: 'Neaišku kas 1', day: '10:00-22:00', week: '11:00-18:00', x: 793, y: 219 },
  { id: 'neaisku-kas-2', name: 'Neaišku kas 2', day: '10:00-22:00', week: '11:00-18:00', x: 779, y: 213 },
  { id: 'neaisku-kas-3', name: 'Neaišku kas 3', day: '10:00-22:00', week: '11:00-18:00', x: 759, y: 192 },
  { id: 'neaisku-kas-4', name: 'Neaišku kas 4', day: '10:00-22:00', week: '11:00-18:00', x: 690, y: 252 },
  { id: 'fis-sviezios-zuvies-namai', name: 'Fiš šviežios žuvies namai', day: '10:00-22:00', week: '11:00-18:00', x: 794, y: 189 },
  { id: 'skruzdelynas', name: 'Skruzdelynas', day: '10:00-22:00', week: '11:00-18:00', x: 729, y: 216 },
  { id: 'miego-imperija', name: 'Miego imperija', day: '10:00-22:00', week: '11:00-18:00', x: 609, y: 286 },
  { id: 'toys-plius', name: 'Toys plius', day: '10:00-22:00', week: '11:00-18:00', x: 647, y: 265 },
  { id: 'gyduolis', name: 'Gyduolis', day: '10:00-22:00', week: '11:00-18:00', x: 805, y: 229 },
  { id: 'mls-outlet', name: 'MLS Outlet', day: '10:00-22:00', week: '11:00-18:00', x: 727, y: 273 },
  { id: 'bruklino-turgus-1', name: 'Bruklino turgus', day: '10:00-22:00', week: '11:00-18:00', x: 876, y: 239 },
  { id: 'bruklino-turgus-2', name: 'Bruklino turgus', day: '10:00-22:00', week: '11:00-18:00', x: 834, y: 215 },
  { id: 'la-bel', name: 'Grožio salonas La Bel', day: '10:00-22:00', week: '11:00-18:00', x: 781, y: 247 },
  { id: 'vovieriskiai', name: 'Vovieriškiai', day: '10:00-22:00', week: '11:00-18:00', x: 829, y: 243 },
  { id: 'bags-city', name: 'Bags city', day: '10:00-22:00', week: '11:00-18:00', x: 741, y: 296 },
  { id: 'arvinas', name: 'Arvinas langai ir durys', day: '10:00-22:00', week: '11:00-18:00', x: 327, y: 649 },
  { id: 'poilsiui-miegui', name: 'Miegui poilsiui', day: '10:00-22:00', week: '11:00-18:00', x: 806, y: 263 },
  { id: 'midi-dilema', name: 'Midi dilema', day: '10:00-22:00', week: '11:00-18:00', x: 788, y: 308 },
  { id: 'odvilna', name: 'Odvilna', day: '10:00-22:00', week: '11:00-18:00', x: 865, y: 253 },
  { id: 'optikos-pasaulis', name: 'Optikos pasaulis', day: '10:00-22:00', week: '11:00-18:00', x: 826, y: 329 },
  { id: 'galerija-novus-art', name: 'Galerija Norvus Art', day: '10:00-22:00', week: '11:00-18:00', x: 812, y: 320 },
  { id: 'stivaliss', name: 'Stivaliss', day: '10:00-22:00', week: '11:00-18:00', x: 833, y: 276 },
  { id: 'grafitas', name: 'Grafitas', day: '10:00-22:00', week: '11:00-18:00', x: 934, y: 212 },
  { id: 'jiesa-keramikos-dirbiniai', name: 'Jiesa keramika', day: '10:00-22:00', week: '11:00-18:00', x: 576, y: 517 },
  { id: 'senukai', name: 'Senukai', day: '10:00-22:00', week: '11:00-18:00', x: 200, y: 300 },
  { id: 'mobi-style', name: 'Mobi style', day: '10:00-22:00', week: '11:00-18:00', x: 609, y: 500 },
  { id: 'puma', name: 'PUMA', day: '10:00-22:00', week: '11:00-18:00', x: 694, y: 337 },
  { id: 'sport-outlet', name: 'Sport Outlet', day: '10:00-22:00', week: '11:00-18:00', x: 750, y: 355 },
  { id: 'active-friend', name: 'Active friend', day: '10:00-22:00', week: '11:00-18:00', x: 789, y: 332 },
  { id: 'wallets', name: 'Wallets', day: '10:00-22:00', week: '11:00-18:00', x: 749, y: 417 },
  { id: 'eurokos', name: 'Eurokos', day: '10:00-22:00', week: '11:00-18:00', x: 960, y: 227 },
  { id: 'galdini', name: 'Galdini', day: '10:00-22:00', week: '11:00-18:00', x: 860, y: 293 },
  { id: 'brodvejaus-pica', name: 'Brodvėjaus pica', day: '10:00-22:00', week: '11:00-18:00', x: 403, y: 647 },
  { id: 'hesburger', name: 'Hesburger', day: '10:00-22:00', week: '11:00-18:00', x: 461, y: 612 },
  { id: 'prezo-kepyklele', name: 'Prezo kepyklėlė', day: '10:00-22:00', week: '11:00-18:00', x: 908, y: 278 },
  { id: 'gardenijos-ziedai', name: 'Gardenijos žiedai', day: '10:00-22:00', week: '11:00-18:00', x: 966, y: 264 },
  { id: 'gjensidige', name: 'Gjensidige', day: '10:00-22:00', week: '11:00-18:00', x: 939, y: 296 },
  { id: 'kika', name: 'Kika', day: '10:00-22:00', week: '11:00-18:00', x: 500, y: 591 },
  { id: 'automobiliu-aksesuarai', name: 'Automobilių eksesuarai', day: '10:00-22:00', week: '11:00-18:00', x: 566, y: 552 },
  { id: 'oksalis', name: 'Oksalis', day: '10:00-22:00', week: '11:00-18:00', x: 605, y: 530 },
  { id: 'zana', name: 'Žana', day: '10:00-22:00', week: '11:00-18:00', x: 675, y: 490 },
  { id: 'domus-lumina', name: 'Domus lumina', day: '10:00-22:00', week: '11:00-18:00', x: 675, y: 489 },
  { id: 'get-smart', name: 'Get smart', day: '10:00-22:00', week: '11:00-18:00', x: 825, y: 403 },
  { id: 'pigu-lt', name: 'Pigu.LT', day: '10:00-22:00', week: '11:00-18:00', x: 709, y: 469 },
  { id: 'cafetta', name: 'Cafetta', day: '10:00-22:00', week: '11:00-18:00', x: 746, y: 448 },
  { id: 'norfos-vaistine', name: 'Norfos vaistinė', day: '10:00-22:00', week: '11:00-18:00', x: 776, y: 430 },
  { id: 'laisva-0', name: 'Laisva', day: '10:00-22:00', week: '11:00-18:00', x: 1023, y: 225 },
  { id: 'siauliu-bankas', name: 'Šiaulių bankas', day: '10:00-22:00', week: '11:00-18:00', x: 850, y: 417 },
  { id: 'losimu-automatu-salonas', name: 'Lošimų automatų salonas', day: '10:00-22:00', week: '11:00-18:00', x: 863, y: 380 },
  { id: 'rasvilte', name: 'Rasviltė', day: '10:00-22:00', week: '11:00-18:00', x: 992, y: 327 },
  { id: 'laisva-1', name: 'Tarnybinės patalpos', day: '10:00-22:00', week: '11:00-18:00', x: 1092, y: 249 }
]

for (var i in shopList) {
  // error handler
  console.log(shopList[i])
  var shopName = shopList[i]
  var ee = document.getElementById(shopName.id)
  var namespace = 'http://www.w3.org/2000/svg'

  var info = document.createElementNS(namespace, 'g')
  info.setAttribute('class', 'info')

  var infoUse = document.createElementNS(namespace, 'use')
  infoUse.setAttribute('x', shopName.x)
  infoUse.setAttribute('y', shopName.y)
  infoUse.setAttribute('href', '#Port')

  var infoText = document.createElementNS(namespace, 'text')
  infoText.setAttribute('x', shopName.x + 10)
  infoText.setAttribute('y', shopName.y + 20)
  infoText.textContent = shopName.name

  var infoTime = document.createElementNS(namespace, 'tspan')
  infoTime.setAttribute('x', shopName.x + 10)
  infoTime.setAttribute('dy', '1.2em')
  infoTime.textContent = 'I-VI ' + shopName.day

  info.appendChild(infoUse)
  info.appendChild(infoText)
  infoText.appendChild(infoTime)
  insertAfter(info, ee)
}

// insertAfter() helper function to insert shop information after element with ID
function insertAfter (el, referenceNode) {
  console.log(referenceNode)
  referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling)
}
