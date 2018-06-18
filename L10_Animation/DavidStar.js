var L10_Animation;
(function (L10_Animation) {
    class DavidStar {
        // declare method without keyword function
        move() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }
        draw() {
            L10_Animation.crc2.beginPath();
            L10_Animation.crc2.moveTo(this.x, this.y - 20);
            L10_Animation.crc2.lineTo(this.x + 20, this.y + 10);
            L10_Animation.crc2.lineTo(this.x - 20, this.y + 10);
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.moveTo(this.x, this.y + 20);
            L10_Animation.crc2.lineTo(this.x + 20, this.y - 10);
            L10_Animation.crc2.lineTo(this.x - 20, this.y - 10);
            L10_Animation.crc2.closePath();
            L10_Animation.crc2.stroke();
            L10_Animation.crc2.fill();
        }
    }
    L10_Animation.DavidStar = DavidStar;
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=DavidStar.js.map