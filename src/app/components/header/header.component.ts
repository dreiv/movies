import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  search = new FormGroup({
    searchInput: new FormControl()
  });

  constructor(private router: Router) {}

  submit(): void {
    const query = this.search.get('searchInput')?.value;
    if (!query) {
      return;
    }

    this.router.navigate(['search'], { queryParams: { q: query } });
  }
}
