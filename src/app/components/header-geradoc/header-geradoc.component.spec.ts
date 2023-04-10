import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGeradocComponent } from './header-geradoc.component';

describe('HeaderGeradocComponent', () => {
  let component: HeaderGeradocComponent;
  let fixture: ComponentFixture<HeaderGeradocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderGeradocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderGeradocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
