import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitterOutputComponent } from './emitter-output.component';

describe('EmitterOutputComponent', () => {
  let component: EmitterOutputComponent;
  let fixture: ComponentFixture<EmitterOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmitterOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmitterOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
