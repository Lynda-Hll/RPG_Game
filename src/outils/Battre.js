import chalk from "chalk"

function Battre(stateUser, stateMonstre) {
  console.log("Vos statiques ")
  console.log("Votre force : " + stateUser.force)
  console.log("Vos points de vie  : " + stateUser.pointDeVie)
  console.log("Les statiques de votre adversaire : ")
  console.log("La force du monstre : " + stateMonstre.force)
  console.log("Ses points de vie : " + stateMonstre.pointDeVie)
  console.log("Son type  : " + stateMonstre.typeDeMonstre)

  let i = 1

  while (stateUser.force > 0 && stateMonstre.force > 0) {
    let attackMonstre = Math.floor(Math.random() * 10 + 1)

    let attackUser = Math.floor(Math.random() * 10 + 1)

    console.log(chalk.yellow(` ${" ".repeat(19)} ` + `+ ${"-".repeat(16)} +`))
    console.log(
      chalk.yellow(
        `${"_".repeat(20)}` +
          "|      Tour : " +
          i +
          "     |" +
          `${"_".repeat(20)}`
      )
    )
    console.log(chalk.yellow(` ${" ".repeat(19)} ` + `+ ${"-".repeat(16)} +`))

    stateUser.force = stateUser.force - attackMonstre

    stateMonstre.force = stateMonstre.force - attackUser

    console.log(
      "Vous avez perdu : " +
        attackMonstre +
        " PH 😭  " +
        "( il vous reste : " +
        (stateUser.force > 0 ? stateUser.force : 0) +
        " PH  🩸  )"
    )

    console.log(
      "monstre a perdu : " +
        attackUser +
        " PH 👻   " +
        "(Le monstre est à : " +
        (stateMonstre.force > 0 ? stateMonstre.force : 0) +
        " PH 💧  )"
    )

    i = i + 1
  }
  if (stateUser.force <= 0) {
    console.log(chalk.red("Aie aie aie vous avez perdu la pertie 💀"))
  } else {
    console.log(chalk.green("Bravooo! Vous avez réussi à battre le monstre 👏"))
  }
}

export default Battre
