import {afficherMessageCalculAir} from './calculHelper'

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


