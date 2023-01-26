import Exit from "./outils/Exit.js"
import Start from "./outils/Start.js"
import chalk from "chalk"
import * as read from "node:readline"
const readline = read.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function Main() {
  const stateUser = {
    force: Math.floor(Math.random() * 100 + 1),
    pointDeVie: Math.floor(Math.random() * 100 + 1),
  }

  const monstres = ["magicien", "Zombie", "Vampir", "Hyde"]

  const stateMonstre = {
    force: Math.floor(Math.random() * 100 + 1),
    pointDeVie: Math.floor(Math.random() * 100 + 1),
    typeDeMonstre: monstres[Math.floor(Math.random() * monstres.length)],
  }

  console.log(chalk.blue(` ${" ".repeat(17)} ` + `+ ${"-".repeat(18)} +`))
  console.log(
    chalk.blue(
      `${"_".repeat(19)}` + "|      Bienvenue     |" + `${"_".repeat(20)}`
    )
  )
  console.log(chalk.blue(` ${" ".repeat(17)} ` + `+ ${"-".repeat(18)} +`))

  console.log(chalk.green("1). Commencer  ✅"))
  console.log(chalk.green("2). Quitter ❌ "))

  readline.question("Veuillez choisir un chiffre :", (name) => {
    if (name == 1) {
      Start(stateUser, monstres, stateMonstre)
    } else {
      if (name == 2) {
        Exit()
      } else {
        console.log("ça n'existe pas 🙄 ! Ressayez avec 1 ou 2")
        Main()
      }
    }
  })
}

export default Main
