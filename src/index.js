const messages = [
    'Juan',
    'Marcos',
    'Jose',
    'Julieta',
    'Rocio',
    'Manuela',
    'Cecilia',
    'Ana',
    'Nocolay',
    'Diego',
    'Laura',
    'Guido'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };
