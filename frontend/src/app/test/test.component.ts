import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  message: string = '';
  loading: boolean = false;
  error: string | null = null;

  constructor(private apiService: ApiService) { }

  fetchData(): void {
    this.loading = true;
    this.error = null;
    
    this.apiService.getTestData().subscribe({
      next: (response) => {
        this.message = response.message;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch data: ' + (err.message || 'Unknown error');
        this.loading = false;
      }
    });
  }
}