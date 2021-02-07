import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FuncionarioService } from 'src/app/shared/services/funcionario/funcionario.service';
import { IFuncionario } from 'src/app/shared/interfaces/IFuncionario';
import { Funcionario } from 'src/app/shared/class/Funcionario';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight, faInfoCircle, faList, faSortDown, faTrashAlt, faUserEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  funcionarioForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cargo: new FormControl('', [Validators.required]),
    idade: new FormControl('', [Validators.required])
  })
  newFuncionarioForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cargo: new FormControl('', [Validators.required]),
    idade: new FormControl('', [Validators.required])
  })
  funcionarios: IFuncionario[] = [];
  selectedFuncionario: IFuncionario | undefined;

  constructor(private funcionarioService: FuncionarioService, private library: FaIconLibrary) {
    this.library.addIcons(faArrowLeft, faArrowRight, faTrashAlt, faUserEdit, faInfoCircle, faUserPlus, faList, faSortDown);
    this.updateList();
  }

  ngOnInit() {
  }

  updateList() {
    this.funcionarioService.getFuncionarios().subscribe(funcionariosResponse => {
      this.funcionarios = [];
      this.funcionarios.push(...funcionariosResponse);
    })
  }

  selectFuncionario(funcionarioId: number) {
    this.funcionarioForm.disable();
    this.selectedFuncionario = this.funcionarios?.filter(funcionario => funcionario.id === funcionarioId)[0];
    this.updateForm();
  }

  updateForm() {
    if (this.selectedFuncionario) {
      this.funcionarioForm.setValue(
        {
          nome: this.selectedFuncionario?.nome,
          cargo: this.selectedFuncionario?.cargo,
          idade: this.selectedFuncionario?.idade,
        }
      )
    }
  }

  createFuncionario() {
    const newFucionario = new Funcionario(this.newFuncionarioForm);
    this.funcionarioService.createFuncionario(newFucionario).subscribe(funcionarioResponse => {
      this.updateList();
      this.clearNewUserForm();
    })
  }

  clearNewUserForm() {
    this.newFuncionarioForm.setValue(
      {
        nome: '',
        cargo: '',
        idade: '',
      }
    )
  }

  deleteFuncionario(funcionarioId: number) {
    this.funcionarioService.deleteFuncionario(funcionarioId).subscribe(funcionarioResponse => {
      this.updateList();
    });
  }

  updateFuncionario(funcionarioId: number) {
    this.selectFuncionario(funcionarioId);
    this.funcionarioForm.enable();
  }

  confirmUpdate(funcionarioId: number) {
    const updatedFucionario = new Funcionario(this.funcionarioForm);
    this.funcionarioService.updateFuncionario(funcionarioId, updatedFucionario).subscribe(funcionarioResponse => {
      this.updateList();
      this.selectFuncionario(-1);
    });
  }

}
