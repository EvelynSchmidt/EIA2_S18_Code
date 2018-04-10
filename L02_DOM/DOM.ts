namespace L02 {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Hallo");
        let h: HTMLHeadingElement = document.createElement("h1");
        h.innerText = "Dies ist eine generierte Überschrift";
        console.log(document);
        document.body.appendChild(h);

        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < fieldsets.length; i++) {
            console.log(fieldsets[i]);
            console.log(fieldsets[i].textContent);
        }
    }
}