export default function getRating(heroes) {
    return [ ...heroes ].sort((a, b) => b.health - a.health);
};