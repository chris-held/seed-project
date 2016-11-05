
export class User {
    id: string;
    email: string;
    fromJson(dict: any): User {
        this.id = dict.id;
        this.email = dict.email;
        return this;
    }

}