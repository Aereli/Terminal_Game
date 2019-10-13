const readlineSync = require('readline-sync')

console.log("************************************" )
console.log( "      WELCOME TO THE KITCHEN!" )
console.log("************************************" )
console.log( "Let's go check out what we have inside!" )

const fridge = ['eggs ', 'milk' , 'onion ', 'tomato ', 'chicken ', 'fish ', 'steak ', 'celery ', 'carrot ']
const pantry = ['cereal ', 'rice ', 'beans ', 'pasta ', 'cookies ']
const spices = ['salt ', 'pepper ', 'adobe ', 'rosemary ', 'cayenne ', 'cumin ']
const drawer = ['knife ', 'spoon ', 'ladle ', 'fork ', 'spatula ']
const cabinet = ['pot ', 'pan ', 'toaster ', 'blender ', 'fryer ']
const catastrophe = ['explosion ', 'nothing ', ' fire! ', 'earthquake ', 'waterspill ', 'nothing ']

const shuffledFridge = fridge.sort(() => 0.5 - Math.random()).slice(0,2)
const shuffledPantry = pantry.sort(() => 0.5 - Math.random()).slice(0,2)
const shuffledSpices = spices.sort(() => 0.5 - Math.random()).slice(0,2)
const shuffledDrawer = drawer.sort(() => 0.5 - Math.random()).slice(0,1)
const shuffledCabinet = cabinet.sort(() => 0.5 - Math.random()).slice(0,3)
const shuffledcatastrophe = catastrophe.sort(() => 0.5 - Math.random()).slice(0,1)


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
  console.log(`You found a .... ${shuffledDrawer}!`)
  console.log(`Then after you looked in the Cabinet and found a .... ${shuffledCabinet}!`)
}else if (toolCheck === "cabinet"){ 
  console.log(`You found a .... ${shuffledCabinet}!`)
  console.log(`Then after you looked in the Drawer and found a .... ${shuffledDrawer}!`)
}else
  toolCheck = readlineSync.question( `Check again, Should we check the: cabinet, OR drawer ? `);

console.log("************************************" )
// const totalTools = [shuffledDrawer, shuffledCabinet]
// const totalIngredients = [shuffledFridge, shuffledPantry]
console.log(`Your total ingridients are: ${shuffledFridge}, ${shuffledPantry} and your cooking tool is a:  ${shuffledCabinet}!`)
console.log("************************************" )


toolIndex = readlineSync.keyInSelect([...shuffledCabinet], 'which tool would you like to use?');
console.log(shuffledCabinet[toolIndex] + 'has been chosen, Dont screw it up!');
fridgeIndex = readlineSync.keyInSelect([...shuffledFridge], `which ingredient should we use the ${shuffledCabinet[toolIndex]} with?`)
console.log(shuffledFridge[fridgeIndex] + 'has been chosen, HA! Good Luck!');

console.log("************************************" )
console.log(`ALRIGHTY LETS GET COOKIN' but hold on... I am having a slight malfunction... beep boop.. beep boop`)
console.log("************************************" )
console.log(`What was your tool of cooking that you have chosen?`)
let lvlThreeOption = readlineSync.question( `pot, pan, toaster, blender, or the fryer?` );

switch (lvlThreeOption) {
  case ("pot"):
    console.log("nice you chose to the pot.") 
    lvl2Pot = readlineSync.question( `you want to BOIL or STEW ?`)
        switch (lvl2Pot) {
          case ("stew"):
              console.log(shuffledFridge[fridgeIndex]+ ` has been stewed!`) 

              break;
          case ("boil"):
              console.log(shuffledFridge[fridgeIndex]+ ` has been boiled!`)
              break;
            default: console.log("You started a fire and caused an explosion. You are dead.")
        }
  case("pan"):
      console.log("nice you chose the pan.") 
      console.log(`Alrighty you have suateed ${shuffledFridge[fridgeIndex]}`)
      break
  case("toaster"):
      console.log(`Alrighty you have some nice toasty ${shuffledFridge[fridgeIndex]}`)
      break
  case ("blender"):
      console.log(`Delicous! you have a well blended mixture of ${shuffledFridge[fridgeIndex]}`)
      break
  case ("fryer"):
      console.log(`Careful! The fryer burned your hand but at least your ${shuffledFridge[fridgeIndex]} is fried to a golden crisp`)
      break
    default: console.log("You started a fire and caused an explosion. You are dead.")
    }
    console.log("************************************" )
    console.log(`let go to grab our tool that we found in the drawer. *GRABS*${shuffledDrawer}`)
    console.log("************************************" )
    console.log(`WAIT DO YOU HEAR THAT?!`)
    console.log("************************************" )


    console.log(`A GIANT ${shuffledcatastrophe}!!!`)

    