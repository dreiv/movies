import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  search = new FormGroup({
    searchInput: new FormControl()
  });

  constructor(private readonly router: Router) {}

  submit(): void {
    const query = this.search.get('searchInput')?.value.trim();
    if (!query) {
      return;
    }

    this.router.navigate(['search'], { queryParams: { q: query } });
  }
}
