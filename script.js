const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

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
