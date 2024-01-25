export class Patient {
    
    public last_name: string;
    public first_name: string;
    public date_of_birth: string;
    public gender: boolean;
    public adress: string;
    public phone: string;

    constructor() {
        this.last_name = 'peneloppe';
        this.first_name = 'FILLON';
        this.date_of_birth = '';
        this.gender = false;
        this.adress = '';
        this.phone = '';
    }
}