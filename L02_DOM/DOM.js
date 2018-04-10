var L02;
(function (L02) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Hallo");
        let h = document.createElement("h1");
        h.innerText = "Dies ist eine generierte Überschrift";
        console.log(document);
        document.body.appendChild(h);
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            console.log(fieldsets[i]);
            console.log(fieldsets[i].textContent);
        }
    }
})(L02 || (L02 = {}));
//# sourceMappingURL=DOM.js.map