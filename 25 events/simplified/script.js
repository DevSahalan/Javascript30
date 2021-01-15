// const grandparent = document.querySelector('.grandparent')
// const parent = document.querySelector('.parent')
// const child = document.querySelector('.child')

// // grandparent.addEventListener(
// //   'click',
// //   (e) => {
// //     console.log(`Grandparent 1 capture`)
// //   },
// //   {
// //     capture: true,
// //   }
// // )
// grandparent.addEventListener('click', (e) => {
//   console.log(`Grandparent 1 bubble`)
// })
// // parent.addEventListener(
// //   'click',
// //   (e) => {
// //     e.stopPropagation()
// //     console.log(`parent 1 capture`)
// //   },
// //   {
// //     capture: true,
// //   }
// // )
// const printHi = () => {
//   console.log(`Hi`)
//   parent.removeEventListener('click', printHi)
// }
// parent.addEventListener('click', printHi)

// // setTimeout(() => {
// //   parent.removeEventListener('click', printHi)
// // }, 2000)
// // child.addEventListener(
// //   'click',
// //   (e) => {
// //     console.log(`child 1 capture`)
// //   },
// //   {
// //     capture: true,
// //   }
// // )
// child.addEventListener('click', (e) => {
//   console.log(`child 1 bubble`)
// })

// // document.addEventListener(
// //   'click',
// //   (e) => {
// //     console.log(`document 1 capture`)
// //   },
// //   {
// //     capture: true,
// //   }
// // )
// // document.addEventListener('click', (e) => {
// //   console.log(`document 1 bubble`)
// // })

const divs = document.querySelectorAll('div')

const globalAddEventListener = (type, selector, callback) => {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      callback(e)
    } else if (e.target.classList.contains(selector)) {
      callback(e)
    }
  })
}

// globalAddEventListener('click', 'div', (e) => {
//   console.log(`Hi`)
// })

globalAddEventListener('click', 'child', (e) => {
  e.target.style.backgroundColor = 'red'
})
globalAddEventListener('click', 'parent', (e) => {
  e.target.style.backgroundColor = 'yellow'
})
const newDiv = document.createElement('div')
newDiv.style.width = '150px'
newDiv.style.height = '150px'
newDiv.style.backgroundColor = 'yellow'
document.body.append(newDiv)
