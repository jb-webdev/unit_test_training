import {afficherMessageCalculAir, calculAir, calculAirCarre, isAdmin} from './calculHelper'

// 1: création d'une suite de test
// 2: test 1 => tester un libellé avec des valeurs correcte pour calculAir
// 3: test 2 => tester le libellé avec des valeurs incorrecte pour calculAir


// afficherMessageCalculAir(10,50) --> OK
// afficherMessageCalculAir(10) --> KO

describe('test de la fonctionnalité afficherMessageCalculAir', ()=>{
    test('tester un libellé avec des valeurs correcte pour calculAir', ()=>{
        expect(afficherMessageCalculAir(10,10)).toContain(100);
    });
    test('tester le libellé avec des valeurs incorrecte pour calculAir', ()=>{
        expect(afficherMessageCalculAir(10,"toto")).toContain(`l'air ne peut pas etre calculé`);
    });
    test('tester le libellé avec des valeurs vide pour calculAir', ()=>{
        expect(afficherMessageCalculAir()).toContain(`l'air ne peut pas etre calculé`);
    });
    test('tester le libellé avec des valeurs tableau pour calculAir', ()=>{
        expect(afficherMessageCalculAir([],[])).toContain(`l'air ne peut pas etre calculé`);
    });
    test('tester le libellé avec des valeurs objet pour calculAir', ()=>{
        expect(afficherMessageCalculAir({},{})).toContain(`l'air ne peut pas etre calculé`);
    });
    test('tester le libellé avec des valeurs objet pour calculAir', ()=>{
        expect(afficherMessageCalculAir(new Date(),new Date())).toContain(`l'air ne peut pas etre calculé`);
    });
    test('tester le libellé avec des valeurs string pour calculAir', ()=>{
        expect(afficherMessageCalculAir("10","10")).toContain(`l'air ne peut pas etre calculé`);
    });
})
// test de calculAir
describe('test de la fonctionnalité calculAir', ()=>{
    test('tester des valeurs correcte pour calculAir', ()=>{
        expect(calculAir(10,10)).toBe(100);
    });
    test('tester des valeurs correcte pour calculAir', ()=>{
        expect(calculAir(10,10)).toBeGreaterThan(99);
    });
    test('tester des valeurs correcte pour calculAir', ()=>{
        expect(calculAir("toto",10)).toBeNaN();
    });
    test('tester des valeurs correcte pour calculAir', ()=>{
        expect(calculAir(10,10)).not.toBeNaN();
    });
})
// test de calculAirCarre
describe('test de la fonctionnalité calculAirCarre', ()=>{
    test('tester des valeurs correcte pour calculAirCarre', ()=>{
        expect(calculAirCarre(10)).toBe(100);
    });
    test('tester des valeurs correcte pour calculAirCarre', ()=>{
        expect(calculAirCarre(10)).toBeGreaterThan(0);
    });
})

// ERROR

describe('test de la fonctionnalité isAdmin', ()=>{
    let userSimple = {role : 'guest'}
    let userAdmin = {role : 'admin'}

    test('test de isAdmin avec un user simple', () =>{
        function callIsAdmin(){
            isAdmin(userSimple);
        }
        expect(callIsAdmin).toThrowError('interdit')
    })
    test('test de isAdmin avec un admin', () =>{
        expect(userAdmin).toBeTruthy()
    })
})

// Match object ==> toMatchObject

const advancedPermission = {
    domain : "toto.com",
    level : 4,
    perms : {
        roles : ['guest', 'reader', 'reviewer'],
        delegated : true,
        method : 'oauth2'
    }
}

describe('test object avancé permission', ()=>{
    const advancedUser = {
        domain : "toto.com",
        perms : {
            roles : ['guest', 'reader', 'reviewer'],
            delegated : true,
            method : expect.stringMatching('saml|oaut|oaut2')
        }
    }
    test('test de permission', () =>{
        expect(advancedPermission).toMatchObject(advancedUser)
    })
    
})

// test d'instance ==> toBeInstanceOf

class User {
    constructeur(nom){
        this.nom = nom;
    }
}

function Auth(name) {
    if (typeof name === "undefined") {
        throw new Error ('le name doit être defini')
    }
    return new User(name)
}

describe('test d\'instance de classe', ()=>{ 
    test('test d\'instance de User', () =>{
        expect(new User()).toBeInstanceOf(User)
    })
    test('test d\'instance de User', () =>{
        expect(Auth("toto")).toBeInstanceOf(User)
    })
    test('test d\'instance de User', () =>{
        function callAuth(){
            Auth();
        }
        expect(callAuth).toThrowError('le name doit être defini')
    })
})

//arrayContaining 

function getRoleA(){
    return ["admin", "guest"]
}
function getRoleB(){
    return ["admin", "user"]
}

// on verifie que les roles match ou ne match pas avec certaine valeurs

describe('test de array de roles', ()=>{
    const attendu = ["admin", "guest"];
    test('test le role A contient les valeurs de attendu', () =>{
        expect(getRoleA()).toEqual(expect.arrayContaining(attendu))
    })
    test('test le role B ne contient pas les valeurs de attendu', () =>{
        expect(getRoleB()).not.toEqual(expect.arrayContaining(attendu))
    })
    
})


















