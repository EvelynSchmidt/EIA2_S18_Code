namespace L04_Interfaces {
    interface Studi {
        name: string;
        firstname: string;
        age: number;
        gender: boolean;
    }
    
    interface StudiDatabase {
        [matrikel: string]: Studi;
    }
}