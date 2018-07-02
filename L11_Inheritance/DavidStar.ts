namespace L11_Inheritance {
    export class DavidStar {
        protected x: number;
        protected y: number;
        protected color: string;

        public constructor(_color: string) {
            this.setRandomPosition();
            this.color = _color;
        }

        private setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height;
        }

        // declare method without keyword function
        public move(): void {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }

        public draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 20);
            crc2.lineTo(this.x + 20, this.y + 10);
            crc2.lineTo(this.x - 20, this.y + 10);
            crc2.closePath();

            crc2.moveTo(this.x, this.y + 20);
            crc2.lineTo(this.x + 20, this.y - 10);
            crc2.lineTo(this.x - 20, this.y - 10);
            crc2.closePath();

            crc2.fillStyle = this.color;

            crc2.stroke();
            crc2.fill();
        }
    }
}