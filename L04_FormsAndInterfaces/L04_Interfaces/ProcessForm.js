var L04_Interfaces;
(function (L04_Interfaces) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let name = inputs[0].value;
        let firstname = inputs[1].value;
        let matrikel = inputs[2].value;
        let age = parseInt(inputs[3].value);
        let genderButton = document.getElementById("male");
        let gender = genderButton.checked;
        console.log(name, firstname, matrikel, age, gender);
    }
    function refresh(_event) {
        console.log(_event);
    }
})(L04_Interfaces || (L04_Interfaces = {}));
//# sourceMappingURL=ProcessForm.js.map