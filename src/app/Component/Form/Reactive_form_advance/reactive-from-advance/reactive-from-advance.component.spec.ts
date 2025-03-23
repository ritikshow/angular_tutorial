import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFromAdvanceComponent } from './reactive-from-advance.component';

describe('ReactiveFromAdvanceComponent', () => {
  let component: ReactiveFromAdvanceComponent;
  let fixture: ComponentFixture<ReactiveFromAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFromAdvanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFromAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
