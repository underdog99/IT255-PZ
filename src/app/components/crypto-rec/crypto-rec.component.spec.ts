import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoRecComponent } from './crypto-rec.component';

describe('CryptoRecComponent', () => {
  let component: CryptoRecComponent;
  let fixture: ComponentFixture<CryptoRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoRecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
