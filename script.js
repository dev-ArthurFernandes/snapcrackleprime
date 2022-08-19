function snapCracklePrime(maxValue){
    
    let string = ""

    for(let i = 1; i <= maxValue; i++){
        if(i % 2 == 1 && i % 5 == 0 && PrimoOuNao(i)){
            if(i == maxValue){
                string += "SnapCracklePrime"
            }else{
                string += "SnapCracklePrime, "
            }
        }else if(i % 2 == 1 && PrimoOuNao(i) && i != 1){
            if(i == maxValue){
                string += "SnapPrime"
            }else{
                string += "SnapPrime, "
            }
        }else if(PrimoOuNao(i) && i != 1){
            if(i == maxValue){
                string += "Prime"
            }else{
                string += "Prime, "
            }
        }else if(i % 2 == 1 && i % 5 == 0){
            if(i == maxValue){
                string += "SnapCrackle"
            }else{
                string += "SnapCrackle, "
            }
        }else if(i % 2 == 1){
            if(i == maxValue){
                string += "Snap"
            }else{
                string += "Snap, "
            }
        }else if(i % 5 == 0){
            if(i == maxValue){
                string += "Crackle"
            }else{
                string += "Crackle, "
            }
        }else{
            if(i == maxValue){
                string += `${i}`
            }else{
                string += `${i}, `
            }
        }
    }
    return string
}

function PrimoOuNao(num) {
    
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }

    return num
}

let a = snapCracklePrime(15)

console.log(`Entrega avançada: ${a}`)