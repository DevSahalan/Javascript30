const colors = document.querySelectorAll('.colorItem')
console.log(colors)

function changeColor() {
  console.log(this.dataset)
  console.log(this.dataset.bgcolor)
  const nextColor = this.nextElementSibling || this.previousElementSibling
  console.log(nextColor.dataset.bgcolor)
  document.documentElement.style.setProperty(
    '--primaryColor',
    this.dataset.bgcolor
  )
  document.documentElement.style.setProperty(
    '--secondaryColor',
    nextColor.dataset.bgcolor === 'green' ? 'black' : nextColor.dataset.bgcolor
  )
}
colors.forEach((color) => color.addEventListener('click', changeColor))
