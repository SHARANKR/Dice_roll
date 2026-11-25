function dicefunction(){

    const numofdice = document.getElementById("numofdice").value;
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimage");
    const values = [];
    const images = [];

    for(i=0; i<numofdice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src = "dice_images/${value}.png" alt = "Dice ${value}">`);
    }

    diceresult.textContent = `dice: ${values}`;
    diceimages.innerHTML = images.join('');
}