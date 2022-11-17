var imgCount = 0
var cloudUrl = 'https://djjjk9bjm164h.cloudfront.net/'
var  data = [
  {img: `${cloudUrl}tender01.jpg`},
  {img: `${cloudUrl}tender02.jpg`},
  {img: `${cloudUrl}tender03.jpg`},
  {img: `${cloudUrl}tender04.jpg`}
]
var frame = document.body.querySelector('.frame')
data.forEach(_data => appendCard(_data))

var current = frame.querySelector('.card:last-child')
var likeText = current.children[0]
var startX = 0, startY = 0, moveX = 0, moveY = 0
initCard(current)


function appendCard(data) {
  const firstCard = frame.children[0]
  const newCard = document.createElement('div')
  newCard.className = 'card'
  newCard.style.backgroundImage = `url(${data.img})`
  newCard.innerHTML = `
          <div class="isLike"></div>
          <div class="bottom">
            <div class="title">
              <span></span>
              <span></span>
            </div>
            <div class="info">
            </div>
          </div>
        `
  if (firstCard) frame.insertBefore(newCard, firstCard)
  else frame.appendChild(newCard)
  imgCount++
}

function initCard(card) {
  card.addEventListener('pointerdown', onPointerDown)
}

function setTransform(x, y, deg, duration) {
  current.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${deg}deg)`

  if (duration) current.style.transition = `transform ${duration}ms`
}

function onPointerDown({ clientX, clientY }) {
  startX = clientX
  startY = clientY
  current.addEventListener('pointermove', onPointerMove)
  current.addEventListener('pointerup', onPointerUp)
  current.addEventListener('pointerleave', onPointerUp)
}

function onPointerMove({ clientX, clientY }) {
  moveX = clientX - startX
  moveY = clientY - startY
  setTransform(moveX, moveY, moveX / innerWidth * 50)
}

function onPointerUp() {
  current.removeEventListener('pointermove', onPointerMove)
  current.removeEventListener('pointerup', onPointerUp)
  current.removeEventListener('pointerleave', onPointerUp)
  if (Math.abs(moveX) > frame.clientWidth / 2) {
    current.removeEventListener('pointerdown', onPointerDown)
    complete()
  } else cancel()
}

function complete() {
  const flyX = (Math.abs(moveX) / moveX) * innerWidth * 1.3
  const flyY = (moveY / moveX) * flyX
  setTransform(flyX, flyY, flyX / innerWidth * 50, innerWidth)

  const prev = current
  const next = current.previousElementSibling
  if (next) initCard(next)
  current = next
  likeText = current.children[0]
  appendCard(data[imgCount % 4])
  setTimeout(() => frame.removeChild(prev), innerWidth)
}

function cancel() {
  setTransform(0, 0, 0, 100)
  setTimeout(() => current.style.transition = '', 100)
}