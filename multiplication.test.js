// etape 1 : importer le fichier a tester
// etape 2 : redaction du test
// etape 3 : assertion


const multiplication = require ( './multiplication');

test('10 multiplié par 9 = 90', () => {
    expect(multiplication(9,10)).toBe(90)
})