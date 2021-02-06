import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { FormGroup } from "@angular/forms";

export class User {

    username: string;
    password: string;

    constructor(loginForm : FormGroup) {
        this.username = loginForm.value.username;
        this.password = loginForm.value.password;
    }

}
