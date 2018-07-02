/*  Aufgabe: Aufgabe 11 : Inheritance: Seaworld
    Name: Anna Lotz
    Matrikel: 257449
    Datum: 28.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Alena Hurst und Franziska Hei� erarbeitet */
var L11_SeaworldInheritance;
(function (L11_SeaworldInheritance) {
    class Fish extends L11_SeaworldInheritance.MovingObject {
        constructor() {
            super();
            this.huntspeed = 0.1;
            this.distanceToEat = 5;
            this.setRandomPosition();
            this.setRandomSpeed();
            this.setRandomColor();
        }
        hunt(_food) {
            this.food = _food;
        }
        checkPosition() {
            if (this.x < -200) {
                this.setNewRandomSpawnPoint();
                this.setRandomSpeed();
                this.setRandomColor();
            }
        }
        setRandomPosition() {
            this.x = Math.random() * L11_SeaworldInheritance.crc2.canvas.width;
            this.y = Math.random() * L11_SeaworldInheritance.crc2.canvas.height - 300;
        }
        setNewRandomSpawnPoint() {
            this.x = L11_SeaworldInheritance.canvas.width + 50;
            this.y = Math.random() * ((L11_SeaworldInheritance.crc2.canvas.height - 200) - 50) + 50; // Math.random() * (max - min) + min
        }
        setRandomSpeed() {
            this.speed = (Math.random() + 1) * 0.5;
        }
        setRandomColor() {
            let c = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "#A1356B";
                    break;
                case 1:
                    this.color = "#67D431";
                    break;
                case 2:
                    this.color = "#D44831";
                    break;
            }
        }
        draw() {
            L11_SeaworldInheritance.crc2.beginPath();
            L11_SeaworldInheritance.crc2.strokeStyle = "rgb( 0, 0, 0)";
            L11_SeaworldInheritance.crc2.lineWidth = 2;
            L11_SeaworldInheritance.crc2.fillStyle = this.color;
            L11_SeaworldInheritance.crc2.moveTo(this.x, this.y);
            L11_SeaworldInheritance.crc2.quadraticCurveTo(this.x + 60, this.y - 60, this.x + 120, this.y + 0);
            L11_SeaworldInheritance.crc2.lineTo(this.x + 150, this.y - 25);
            L11_SeaworldInheritance.crc2.lineTo(this.x + 150, this.y + 25);
            L11_SeaworldInheritance.crc2.lineTo(this.x + 120, this.y);
            L11_SeaworldInheritance.crc2.quadraticCurveTo(this.x + 60, this.y + 60, this.x + 0, this.y + 0);
            L11_SeaworldInheritance.crc2.closePath();
            L11_SeaworldInheritance.crc2.stroke();
            L11_SeaworldInheritance.crc2.fill();
        }
        move() {
            if (this.food == null)
                // idle
                this.x += this.speed * (-3);
            else {
                // hunt
                this.x += this.huntspeed * (this.food.x - this.x);
                this.y += this.huntspeed * (this.food.y - this.y);
                let distance = this.getDistanceToFood();
                if (distance < this.distanceToEat)
                    this.eat();
            }
        }
        eat() {
            let index = L11_SeaworldInheritance.movingObjects.indexOf(this.food);
            //console.log(index);
            L11_SeaworldInheritance.movingObjects.splice(index, 1);
            this.food = null;
        }
        getDistanceToFood() {
            let dx = this.food.x - this.x;
            let dy = this.food.y - this.y;
            return Math.sqrt(dx * dx + dy * dy);
        }
    }
    L11_SeaworldInheritance.Fish = Fish; //class fish zu
})(L11_SeaworldInheritance || (L11_SeaworldInheritance = {})); //namespace zu
//# sourceMappingURL=Fish.js.map