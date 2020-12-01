import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureConfigComponent } from './secure-config.component';

describe('SecureConfigComponent', () => {
  let component: SecureConfigComponent;
  let fixture: ComponentFixture<SecureConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecureConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
