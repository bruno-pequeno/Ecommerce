import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authenticatedCPFKey = 'authenticatedCPF';
  private authenticatedPasswordKey = 'authenticatedPassword';

  setAuthenticatedCPF(cpf: string): void {
    localStorage.setItem(this.authenticatedCPFKey, cpf);
  }

  getAuthenticatedCPF(): string {
    return localStorage.getItem(this.authenticatedCPFKey) || '';
  }

  setAuthenticatedPassword(password: string): void {
    localStorage.setItem(this.authenticatedPasswordKey, password);
  }

  getAuthenticatedPassword(): string {
    return localStorage.getItem(this.authenticatedPasswordKey) || '';
  }
}
