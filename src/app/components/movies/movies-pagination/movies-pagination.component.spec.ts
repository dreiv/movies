import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPaginationComponent } from './movies-pagination.component';

describe('MoviesPaginationComponent', () => {
  let component: MoviesPaginationComponent;
  let fixture: ComponentFixture<MoviesPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesPaginationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
