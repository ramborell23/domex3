
let repeat = window.prompt('Whats your Number')

if(parseInt(repeat)){
    if ( repeat  %2===0){

        window.alert("Your number is even")
    }else 
    window.alert("Your number is odd")
}else{
    window.alert("This is not a number")
}
