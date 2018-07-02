/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 28.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Alena Hurst und Franziska Hei� erarbeitet */
var L11_SeaworldInheritance;
(function (L11_SeaworldInheritance) {
    window.addEventListener("load", init);
    let imgData;
    L11_SeaworldInheritance.movingObjects = [];
    function init(_event) {
        L11_SeaworldInheritance.canvas = document.getElementsByTagName("canvas")[0];
        L11_SeaworldInheritance.crc2 = L11_SeaworldInheritance.canvas.getContext("2d");
        console.log(L11_SeaworldInheritance.crc2);
        L11_SeaworldInheritance.canvas.addEventListener("click", insertFood);
        L11_SeaworldInheritance.drawBackground();
        imgData = L11_SeaworldInheritance.crc2.getImageData(0, 0, L11_SeaworldInheritance.canvas.width, L11_SeaworldInheritance.canvas.height);
        //Moving Objekte zum ersten mal Erzeugen
        //Fische
        for (let i = 0; i < 8; i++) {
            let oneFish = new L11_SeaworldInheritance.Fish();
            L11_SeaworldInheritance.movingObjects.push(oneFish);
        }
        //Bubbles rechts
        for (let i = 0; i < 25; i++) {
            let oneBubble = new L11_SeaworldInheritance.Bubble();
            L11_SeaworldInheritance.movingObjects.push(oneBubble);
        }
        //Bubbles links
        for (let i = 0; i < 18; i++) {
            let oneBubble = new L11_SeaworldInheritance.BubblesLeft();
            L11_SeaworldInheritance.movingObjects.push(oneBubble);
        }
        //Anker
        let anchor = new L11_SeaworldInheritance.Anchor();
        L11_SeaworldInheritance.movingObjects.push(anchor);
        animate();
    } //init zu
    function insertFood(_event) {
        //Abfrage f�r x und y des MouseEvents
        let spawnX = _event.clientX;
        let spawnY = _event.clientY;
        for (let i = 0; i < 4; i++) {
            let food = new L11_SeaworldInheritance.Food(spawnX, spawnY);
            L11_SeaworldInheritance.movingObjects.push(food);
            spawnX += Math.random() * 70;
            spawnX -= Math.random() * 70;
            spawnY += Math.random() * 10;
            // Fish finden, der Flocke fressen soll
            for (let j = 0; j < 8; j++) {
                let fish = L11_SeaworldInheritance.movingObjects[j];
                if (fish.food == null) {
                    fish.hunt(food);
                    break;
                }
            }
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        L11_SeaworldInheritance.crc2.clearRect(0, 0, L11_SeaworldInheritance.crc2.canvas.width, L11_SeaworldInheritance.crc2.canvas.height);
        L11_SeaworldInheritance.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    } //animate zu
    function moveObjects() {
        //alle movingObjects bewegen
        for (let i = 0; i < L11_SeaworldInheritance.movingObjects.length; i++) {
            L11_SeaworldInheritance.movingObjects[i].checkPosition();
            L11_SeaworldInheritance.movingObjects[i].move();
        }
    } //moveObjects zu
    function drawObjects() {
        //alle movingObjects malen
        for (let i = 0; i < L11_SeaworldInheritance.movingObjects.length; i++)
            L11_SeaworldInheritance.movingObjects[i].draw();
    } //drawObjects zu
})(L11_SeaworldInheritance || (L11_SeaworldInheritance = {})); //namespace zu
//# sourceMappingURL=Canvas.js.map