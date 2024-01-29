import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoading = false;
  constructor() { }

  showLoading(): void {
    this.isLoading = true;
  }
  hideLoading(): void {
    this.isLoading = false;
  }

  isLoad(): boolean {
    return this.isLoading;
  }
}
