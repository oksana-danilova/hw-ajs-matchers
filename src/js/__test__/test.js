import getRating from '../rating';

test('testing rating function', () => {
    const dataList = [
        { name: 'мечник', health: 10 },
        { name: 'странник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];

    const expected = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
        { name: 'странник', health: 10 },
    ];

    const result = getRating(dataList);
    expected(result).toEqual(expected);
});