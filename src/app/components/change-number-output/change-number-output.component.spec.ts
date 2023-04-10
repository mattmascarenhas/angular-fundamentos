import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNumberOutputComponent } from './change-number-output.component';

describe('ChangeNumberOutputComponent', () => {
  let component: ChangeNumberOutputComponent;
  let fixture: ComponentFixture<ChangeNumberOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeNumberOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeNumberOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
