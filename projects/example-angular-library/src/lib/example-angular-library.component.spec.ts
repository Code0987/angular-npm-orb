import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAngularLibraryComponent } from './example-angular-library.component';

describe('ExampleAngularLibraryComponent', () => {
  let component: ExampleAngularLibraryComponent;
  let fixture: ComponentFixture<ExampleAngularLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleAngularLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleAngularLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
