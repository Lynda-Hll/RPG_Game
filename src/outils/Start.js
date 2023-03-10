import Battre from "./Battre.js"
import Exit from "./Exit.js"
import chalk from "chalk"
import * as read from "node:readline"
const readline = read.createInterface({
  input: process.stdin,
  output: process.stdout,
})
function Start(stateUser, monstres, stateMonstre) {
  console.log(chalk.blue(`+ ${" ".repeat(18)} ` + `+ ${"-".repeat(18)} +`))
  console.log(
    chalk.blue(
      `${"_".repeat(20)}` + "|    Let's goo!     |" + `${"_".repeat(20)}`
    )
  )
  console.log(chalk.blue(`+ ${" ".repeat(18)} ` + `+ ${"-".repeat(18)} +`))
  console.log(chalk.blue("Vos statiques : ๐"))
  console.log("Votre force : " + stateUser.force)
  console.log("Vos points de vie : " + stateUser.pointDeVie)
  console.log(chalk.green("1).  Battre ๐"))
  console.log(chalk.green("2).  Fuir โ"))

  readline.question("Veuillez choisir un chiffre:", (name) => {
    if (name == 1) {
      Battre(stateUser, stateMonstre)
    } else {
      if (name == 2) {
        Exit()
      } else {
        console.log("รงa n'existe pas ๐ ! Ressayez avec 1 ou 2")
        Start(stateUser, monstres, stateMonstre)
      }
    }
  })
}

export default Start
