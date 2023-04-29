export interface IUser {
    username: string;
    email: string;
}

export class RegisterPayload{
    userName: string;
    email: string;
    password: string;
    constructor(_userName: string, _email: string, _password: string){
        this.userName = _userName;
        this.email = _email;
        this.password = _password;
    }
}

export class LoginPayload{
    userName: string;
    password: string;
    constructor(_userName: string, _password: string){
        this.userName = _userName;
        this.password = _password;
    }
}