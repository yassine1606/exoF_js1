// exo 1

function additionner(param1, param2) {
    return param1 + param2;
}

console.log(additionner(3, 6));



// exo 2
function soustraire(para1, para2) {
    return para2 - para1;
}
console.log(soustraire(4, 15));


//exo3

function multiplication(m1, m2) {
    return m1 * m2;
}
console.log(multiplication(10, 6));

//exo 4

function division(d1, d2) {
    return d2 / d1;
}
console.log(division(5, 250));

// exo 5

function modulo(mod1, mod2) {
    return mod1 % mod2;
}
console.log(modulo(20, 3));

//exo 6

function carre(car) {
    return car * car;
}
console.log(carre(5));

// exo 7

function exposant(e1, e2) {
    return Math.pow(e1, e2)
}
console.log(exposant(2, 4));

//exo 8

function capitalize(mot) {
    return mot.charAt(0).toUpperCase() + mot.substring(1).toLowerCase();
}
console.log(capitalize("salut"));

// exo 9

function calcul(nbr1, operator, nbr2) {
    switch (operator) {
        case "+":
            return nbr1 + nbr2;
            break;

        case "-":
            return nbr1 - nbr2;
            break;
        case "*":
            return nbr1 * nbr2;
            break;
        case "/":
            return nbr1 / nbr2;
            break;

        default:
            break;
    }

}
console.log(calcul(5, '+', 8));