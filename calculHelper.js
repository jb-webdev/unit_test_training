function calculAir (longeur, largeur) {
    return multiplication (longeur, largeur);
}

function calculAirCarre (longeur) {
    return calculAir(longeur, longeur);
}
function multiplication(a, b) {
    return a*b;
}
function afficherMessageCalculAir(a, b) {
    const air = calculAir(a,b);
    let libelle = `l'air de la surface est de ${air}`
    if (isNaN(air) || typeof a !== "number" || typeof b !== "number" ){
        libelle = `l'air ne peut pas etre calculé`
    }
    return libelle
} 

function isAdmin(user) {
    if (user.role === "admin") {
        return true;
    } else {
        throw new Error('interdit')
    }
}



export {
    calculAir,
    calculAirCarre,
    multiplication,
    afficherMessageCalculAir,
    isAdmin
}