const names = [
    "Jesus",
    "Juan",
    "Andrea",
    "Oscar",
    "Luis",
    "Carolina",
];

const RadomMessages = () => {
    const message = names[Math.floor(Math.random()*names.length)];
    console.log(message);
}

module.exports = { RadomMessages };