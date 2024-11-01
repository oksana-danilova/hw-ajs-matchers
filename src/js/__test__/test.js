import getRating from '../rating';

getRating('sort array and obj heroes', () => {
    const heroes = [
        {
            name: 'мечник', health: 10
        },
        {
            name: 'маг', health: 100
        },
        {
            name: 'лучник', health: 80
        },
    ];
    const sortHeroes = sort(heroes);
    const expectedSortedHeroes = [
        {
            name: 'маг', health: 100
        },
        {
            name: 'лучник', health: 80
        },
        {
            name: 'мечник', health: 10
        },
    ];
    expect(sortHeroes).toEqual(expectedSortedHeroes);
});

getRating('does not sort original array', () => {
    const heroes = [
        {
            name: 'мечник', health: 10
        },
        {
            name: 'маг', health: 100
        },
        {
            name: 'лучник', health: 80
        },
    ];
    const sortHeroes = sort(heroes);
    expect(sortHeroes).not.toBe(heroes);
});
getRating('zero array heroes', () => {
    const heroes = [];
    const sortHeroes = sort(heroes);
    expect(sortHeroes).toEqual([]);
});