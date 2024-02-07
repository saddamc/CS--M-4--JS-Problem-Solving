function PandaCost (singara, samucha, jilapi) {

    if(
        typeof singara !== "number" || 
        typeof samucha !== "number" || 
        typeof jilapi !== "number"
        ) {
            return "please provide valid integer numebr";
        } else if (singara < 0 || samucha < 0 || jilapi < 0){
            return "all parameters should be positive numbers";
        } else {
            const singaraPrice = 7;
            const samuchaPrice = 10;
            const jilapiPrice = 15;

            const total = (singara * singaraPrice) + (samucha * samuchaPrice) + (jilapi * jilapiPrice);
            return total;

        }
    
}

console.log(PandaCost(1, 2, 5));

