import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment'
import { Funcionario } from '../../class/Funcionario';
import { IFuncionario } from '../../interfaces/IFuncionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  updateFuncionario(funcionarioId: string, updatedFuncionario: Funcionario) {
    return this.http.put<IFuncionario>(`${environment.ipPublico}${environment.endpoint.update}${funcionarioId}`, updatedFuncionario);
  }

  deleteFuncionario(funcionarioId: string) {
    return this.http.delete<IFuncionario>(`${environment.ipPublico}${environment.endpoint.delete}${funcionarioId}`);
  }

  getFuncionarios() {
    return this.http.get<Array<IFuncionario>>(`${environment.ipPublico}${environment.endpoint.funcionarios}`);
  }

  createFuncionario(funcionario: Funcionario) {
    return this.http.post(`${environment.ipPublico}${environment.endpoint.create}`, funcionario);
  }

  getFuncionario(funcionarioId: string) {
    return this.http.get<IFuncionario>(`${environment.ipPublico}${environment.endpoint.funcionario}${funcionarioId}`);
  }

}
