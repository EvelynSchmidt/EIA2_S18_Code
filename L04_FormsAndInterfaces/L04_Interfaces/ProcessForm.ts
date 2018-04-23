namespace L04_Interfaces {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
    }

    function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let name: string = inputs[0].value;
        let firstname: string = inputs[1].value;
        let matrikel: string = inputs[2].value;
        let age: number = parseInt(inputs[3].value);
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
        let gender: boolean = genderButton.checked;
        console.log(name, firstname, matrikel, age, gender);
    }

    function refresh(_event: Event): void {
        console.log(_event);
    }

}