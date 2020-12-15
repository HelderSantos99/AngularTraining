import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsapiComponent } from './dogsapi.component';

describe('DogsapiComponent', () => {
  let component: DogsapiComponent;
  let fixture: ComponentFixture<DogsapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
