var L10_Animation;
(function (L10_Animation) {
    window.addEventListener("load", init);
    let stars = [];
    let n = 100;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        L10_Animation.crc2 = canvas.getContext("2d");
        console.log(L10_Animation.crc2);
        L10_Animation.crc2.fillStyle = "rgba(255,0,0,0.5)";
        L10_Animation.crc2.fillRect(50, 50, 100, 50);
        for (let i = 0; i < n; i++) {
            let star = new L10_Animation.DavidStar();
            star.x = Math.random() * L10_Animation.crc2.canvas.width;
            star.y = Math.random() * L10_Animation.crc2.canvas.height;
            stars.push(star);
        }
        animate();
    }
    function animate() {
        window.setTimeout(animate, 10);
        L10_Animation.crc2.clearRect(0, 0, L10_Animation.crc2.canvas.width, L10_Animation.crc2.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < stars.length; i++)
            stars[i].draw();
    }
})(L10_Animation || (L10_Animation = {}));
//# sourceMappingURL=Animation.js.map