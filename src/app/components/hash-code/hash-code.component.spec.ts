import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashCodeComponent } from './hash-code.component';

describe('HashCodeComponent', () => {
  let component: HashCodeComponent;
  let fixture: ComponentFixture<HashCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
