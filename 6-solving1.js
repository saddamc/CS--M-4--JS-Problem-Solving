function AnaToVori(Ana){

    if(typeof Ana !== "number" || Ana < 0){
        return "Please provide a valid integer number";  /** don't do console.log */
    } else {
        const Vori = Ana * 0.0625;
        return Vori;  /** don't do console.log */
    }

   
}

console.log(AnaToVori(18));