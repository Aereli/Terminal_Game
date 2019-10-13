const readlineSync = require('readline-sync')

console.log("************************************" )
console.log( "      WELCOME TO THE KITCHEN!" )
console.log("************************************" )
console.log( "Let's go check out what we have inside!" )

const fridge = ['eggs ', 'milk' , 'onion ', 'tomato ', 'chicken ', 'fish ', 'steak ', 'celery ', 'carrot ']
const pantry = ['cereal ', 'rice ', 'beans ', 'pasta ', 'cookies ']
const spices = ['salt ', 'pepper ', 'adobe ', 'rosemary ', 'cayenne ', 'cumin ']
const drawer = ['knife ', 'spoon ', 'ladle ', 'fork ', 'spatula ']
const cabinet = ['pot ', 'pan ', 'toaster ', 'blender ', 'fryer']

const shuffledFridge = fridge.sort(() => 0.5 - Math.random()).slice(0,2)
const shuffledPantry = pantry.sort(() => 0.5 - Math.random()).slice(0,2)
const shuffledSpices = spices.sort(() => 0.5 - Math.random()).slice(0,2)
const shuffledDrawer = drawer.sort(() => 0.5 - Math.random()).slice(0,1)
const shuffledCabinet = cabinet.sort(() => 0.5 - Math.random()).slice(0,3)

let option = readlineSync.question( "Options: check the fridge, check the pantry, check the spices? " );
// let option = readlineSync.question([`check the fridge`, `check the pantry` ,`check the spices? ` ])

switch(option) {
  case "check the fridge":
      console.log("************************************" )
      console.log(`You found some ... ${shuffledFridge}!`)
      console.log("************************************" )
      let lvlTwoOption1 = readlineSync.question(`Would you like to .. `+ [`check the pantry ` ,`check the spices `])
        switch(lvlTwoOption1) {
          case "check the pantry":
              console.log("************************************" )
              console.log(`You found some .... ${shuffledPantry}!`)
              console.log("************************************" )
            break        
          case "check the spices":
              console.log("************************************" )
              console.log(`You found some .... ${shuffledSpices}!`)
              console.log("************************************" )
            break
          default:
              console.log( "Look again, you walked right by it!" );
              lvlTwoOption1 = readlineSync.question(`Would you like to .. `+ [`check the pantry ` ,`check the spices `])
        }
        
    break
  case "check the pantry":
      console.log("************************************" )
      console.log(`You found: ${shuffledPantry}!`)
      console.log("************************************" )
      let lvlTwoOption2 = readlineSync.question(`Would you like to .. `+[`check the fridge` ,` check the spices? `])
        switch(lvlTwoOption2) {
          case "check the fridge":
              console.log("************************************" )
              console.log(`You found some .... ${shuffledFridge}!`)
              console.log("************************************" )
            break
          case "check the spices":
              console.log("************************************" )
              console.log(`You found some .... ${shuffledSpices}!`)
              console.log("************************************" )
            break
          default:
              console.log( "Look again, you walked right by it!" );
              lvlTwoOption2 = readlineSync.question(`Would you like to .. `+ [`check the fridge` ,`check the spices `])
        }
    break
  case "check the spices":
      console.log("************************************" )
      console.log(`You found: ${shuffledSpices}!` )
      console.log("************************************" )
      let lvlTwoOption3 = readlineSync.question(`Would you like to .. `+[`check the fridge` ,` check the pantry? `])
          switch(lvlTwoOption3) {
            case "check the fridge":
                console.log("************************************" )
                console.log(`You found some .... ${shuffledFridge}!`)
                console.log("************************************" )
              break
            case "check the pantry":
                console.log("************************************" )
                console.log(`You found some .... ${shuffledPantry}!`)
                console.log("************************************" )
              break
            default:
                console.log( "Look again, you walked right by it!" );
                lvlTwoOption3 = readlineSync.question(`Would you like to .. `+[`check the fridge` ,` check the pantry? `])
            }
    break
  default: 
      console.log( "NO COOKING FOR YOU!" );
}

console.log(`Let's look for the perfect tools in order to cook our food!`)

let toolCheck = readlineSync.question( `Should we check the: cabinet, OR drawer ? `);

if (toolCheck === "drawer"){
  console.log(`You found a .... ${shuffledCabinet}!`)
  console.log(`Then after you looked in the Drawer and found a .... ${shuffledDrawer}!`)
}else if (toolCheck === "cabinet"){ 
  console.log(`You found a .... ${shuffledDrawer}!`)
  console.log(`Then after you looked in the Cabinet and found a .... ${shuffledCabinet}!`)
}else
  toolCheck = readlineSync.question( `Check again, Should we check the: cabinet, OR drawer ? `);

console.log("************************************" )
// const totalTools = [shuffledDrawer, shuffledCabinet]
const totalIngredients = [shuffledFridge, shuffledPantry]
console.log(`Your total ingridients are: ${totalIngredients} and your cooking tool is a:  ${shuffledCabinet}!`)
console.log("************************************" )


toolIndex = readlineSync.keyInSelect([...shuffledCabinet], 'which tool would you like to use?');
console.log(shuffledCabinet[toolIndex] + ' is enabled.');

switch (shuffledCabinet[toolIndex]) {
  case ("pot"):
          console.log("nice you chose to the pot.")
          lvl2Pot = readlineSync.question(`would you like to STEW or BOIL ?`)
          
      switch (lvl2Pot) {
        case ("stew"):
            potIndex = readlineSync.keyInSelect([...shuffledFridge], 'which food would you like stew with?');
            console.log(shuffledFridge[potIndex]+ ` has been stewed!`) 
            break;
      
        default:
          break;
      }
  default:
      console.log("nvm") 
  
  }

// const totalIngredients = [`The Ingredients you've gathered are: ${shuffledFridge}, ${shuffledPantry}`]
// console.log(totalIngredients)