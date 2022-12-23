import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportBarComponent } from './transport-bar.component';

describe('TransportBarComponent', () => {
  let component: TransportBarComponent;
  let fixture: ComponentFixture<TransportBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
