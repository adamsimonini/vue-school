/*  
    a stub substitutes part of an object, while keep other parts (e.g., methods) in tact for us to use. 
    This allows us to test the other parts of the object to ensure they work as intended!
*/

let Pokemon = {
    amount() {
        //call to DB
    },

    say(str) {
        console.log('Your Pokedex says: ', str)
    }
}

function howIsMyCollection() {
    const size = Pokemon.amount();
    if (size === undefined) 
        return Pokemon.say('Ooops, not sure how many you have...')
    if (size < 10)
        return Pokemon.say('That\'s a modest collection. You need more!')
    if (size < 50)
        return Pokemon.say('You have quite a collection. Keep it up!')
    return Pokemon.say('You\'re quite the master collector!') 
}

const originalAmount = Pokemon.amount // because we are mutating it, keep an original clone

function stubAmount(amount) {
    Pokemon.amount = () => amount
}

function havePokemon(amount) {
    stubAmount(amount) // so we set the Pokemon object's "amount" key to 5, instead of whatever function it is in the original Pokemon object
    howIsMyCollection() // this function will call the original, and now mutated, Pokemon object
}

havePokemon(5)
havePokemon(15)
havePokemon(55)

// console.log(have5Pokemon());