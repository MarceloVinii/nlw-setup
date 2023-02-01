const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

let animationRun = bodymovin.loadAnimation({
  container: document.getElementById("animation-run"),
  path: "work-from-home-treadmill.json",
  render: "svg",
  loop: true,
  autoplay: true,
})

let animationWater = bodymovin.loadAnimation({
  container: document.getElementById("animation-water"),
  path: "water.json",
  render: "svg",
  loop: true,
  autoplay: true,
})

let animationFruit = bodymovin.loadAnimation({
  container: document.getElementById("animation-fruit"),
  path: "fruits.json",
  render: "svg",
  loop: false,
  autoplay: true,
})

let animationBook = bodymovin.loadAnimation({
  container: document.getElementById("animation-book"),
  path: "book-reading.json",
  render: "svg",
  loop: true,
  autoplay: true,
})

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  // const today = "20/01"
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso 🔴")
    return // aqui vai parar o código
  } else {
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

// Salvando os dados no localStorage
function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

// Buscando as informações do localStore e convertendo em objeto
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} // {} é um objeto vazio, para não dar erro ao iniciar a aplicação, caso esteja sem dados.

nlwSetup.setData(data)
nlwSetup.load()
