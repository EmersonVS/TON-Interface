import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FuncionarioService } from 'src/app/shared/services/funcionario/funcionario.service';
import * as $ from 'jquery';
import { IFuncionario } from 'src/app/shared/interfaces/IFuncionario';
import { Funcionario } from 'src/app/shared/class/Funcionario';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  funcionarioForm = new FormGroup({
    id: new FormControl('', [Validators.required],),
    nome: new FormControl('', [Validators.required]),
    cargo: new FormControl('', [Validators.required]),
    idade: new FormControl('', [Validators.required])
  })
  funcionarios: Array<IFuncionario> = [];
  selectedFuncionario: number = -1;

  constructor(private funcionarioService: FuncionarioService) {
    this.updateList();
  }

  ngOnInit() {
    this.funcionarioForm.disable();
    this.enableFuncionarioCreation();
  }

  updateList() {
    this.funcionarios = [];
    this.funcionarioService.getFuncionarios().subscribe(funcionariosResponse => {
      this.funcionarios.push(...funcionariosResponse)
    })
  }

  enableFuncionarioCreation() {
    this.clearForm();
    this.changeButtonState('disabled');
    this.customFormState(true);
  }

  clearForm() {
    this.funcionarioForm.setValue(
      {
        id: '',
        nome: '',
        cargo: '',
        idade: '',
      }
    );
  }

  selectFuncionario(funcionarioId: number) {
    this.changeButtonState('');
    this.customFormState(true);
    this.selectedFuncionario = funcionarioId;
    this.updateForm();
  }

  updateForm() {
    this.funcionarioForm.setValue(
      {
        id: this.funcionarios[this.selectedFuncionario].id,
        nome: this.funcionarios[this.selectedFuncionario].nome,
        cargo: this.funcionarios[this.selectedFuncionario].cargo,
        idade: this.funcionarios[this.selectedFuncionario].idade,
      }
    );
  }

  changeButtonState(state: string) {
    $('#deleteFuncionario').prop('disabled', state);
    $('#updateFuncionario').prop('disabled', state);
    $('#createFuncionario').prop('disabled', !state);
  }

  createFuncionario() {
    const newFucionario = new Funcionario(this.funcionarioForm);
    this.funcionarioService.createFuncionario(newFucionario).subscribe(funcionarioResponse => {
      this.updateList();
      this.enableFuncionarioCreation();
    })
  }

  deleteFuncionario() {
    const funcionarioId = this.getFuncionarioId();
    this.funcionarioService.deleteFuncionario(funcionarioId).subscribe(funcionarioResponse => {
      this.updateList();
      this.enableFuncionarioCreation();
    });
  }

  updateFuncionario() {
    const updatedFucionario = new Funcionario(this.funcionarioForm);
    const funcionarioId = this.getFuncionarioId();
    this.funcionarioService.updateFuncionario(funcionarioId, updatedFucionario).subscribe(funcionarioResponse => {
      this.updateList();
      this.enableFuncionarioCreation();
    });
  }

  customFormState(shouldEnable: boolean) {
    const controls = ['nome', 'cargo', 'idade']
    controls.forEach(control => {
      shouldEnable ? this.funcionarioForm.controls[control].enable() : this.funcionarioForm.controls[control].disable();
    })
  }

  getFuncionarioId() {
    return this.funcionarioForm.controls['id'].value;
  }

}
