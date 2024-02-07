/**
 * upto 100: ---> 5000;
 * more than 101-200: ---> 4000;
 * more than 200: ---> 3000;
 */

function picnicBudget(participants){
    if (
        typeof participants !== "number" ||
        typeof participants !== "number" ||
        typeof participants !== "number"
        ) {
        return "participants should be a valid positive number";
    } else {
        let first100Cost = 0;
        let second101To200Cost = 0;
        let remainingCost = 0;
        let totalCost = 0;

        if (participants <= 100) {
            first100Cost = participants * 5000;
            return first100Cost;
        } else if (participants <= 200) {
            first100Cost = 5000 * 100;
            second101To200Cost = (participants - 100) * 4000;
            total = first100Cost + second101To200Cost;
            return total;
        } else {
            first100Cost = 5000 * 100;
            second101To200Cost = 4000 * 100;
            remainingCost = (participants - 200) * 3000;
            total = first100Cost + second101To200Cost + remainingCost;
            return total;
        }
    }    
}

console.log(picnicBudget(300));