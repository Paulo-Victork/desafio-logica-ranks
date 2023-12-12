function ranks(victories,defeats){
    let total = (victories-defeats)
    
    return total
}

let wins=(ranks(28,14))
if(wins>=101){
    console.log("O Herói tem de saldo de "  + (wins) + " vitória(s) e está no nível imortal" )
}
else if(wins>=91){
    console.log("O Herói tem de saldo de "  + (wins) + " vitória(s) e está no nível lendário" )
}
else if(wins>=81){
    console.log("O Herói tem de saldo de "  + (wins) + " vitória(s) e está no nível Diamante" )
}
else if(wins>=51){
    console.log("O Herói tem de saldo de "  + (wins) + " vitória(s) e está no nível Ouro" )
}
else if(wins>=21){
    console.log("O Herói tem de saldo de "  + (wins) + " vitória(s) e está no nível prata" )
}
else if(wins>=11){
    console.log("O Herói tem de saldo de "  + (wins) + " vitória(s) e está no nível bronze" )
}
else if(wins<=10){
    console.log("O Herói tem de saldo de "  + (wins) + " vitória(s) e está no nível ferro" )
}