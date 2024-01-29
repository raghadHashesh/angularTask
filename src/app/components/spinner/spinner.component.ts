import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  load: boolean = false;

  constructor(private loading: LoadingService) { }

  ngOnInit(): void {
    this.load = this.loading.isLoad();
    setTimeout(() => {
      this.loading.hideLoading();
      this.load = false;
    }, 1000)
  }
}
