namespace L10_Animation {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let stars: DavidStar[] = [];
    let n: number = 100;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        crc2.fillStyle = "rgba(255,0,0,0.5)";
        crc2.fillRect(50, 50, 100, 50);

        for (let i: number = 0; i < n; i++) {
            let star: DavidStar = new DavidStar();
            star.x = Math.random() * crc2.canvas.width;
            star.y = Math.random() * crc2.canvas.height;
            stars.push(star);
        }

        animate();
    }

    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < stars.length; i++)
            stars[i].draw();
    }


}