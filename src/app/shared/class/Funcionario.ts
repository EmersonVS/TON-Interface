import { FormGroup } from "@angular/forms";

export class Funcionario {
    nome: string;
    cargo: string;
    idade: number;

    constructor(funcionarioForm: FormGroup) {
        this.nome = funcionarioForm.value.nome;
        this.cargo = funcionarioForm.value.cargo;
        this.idade = funcionarioForm.value.idade;
    }
}
