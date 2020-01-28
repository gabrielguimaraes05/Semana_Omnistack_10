const parseStringAsArray = require('../../../controller/utils/parseStringAsArray');

test('expect string comma separed return a array', () => {
    expect(parseStringAsArray('john,mariah')).toStrictEqual(['john','mariah']);
});

test('expect string with final comma ignore last commma', () => {
    expect(parseStringAsArray('john,')).toStrictEqual(['john']);
});

test('expect string with initial comma ignore first commma', () => {
    expect(parseStringAsArray(',mariah')).toStrictEqual(['mariah']);
});

test('expect undefined string', () => {
    expect(parseStringAsArray()).toBe('Error');
});