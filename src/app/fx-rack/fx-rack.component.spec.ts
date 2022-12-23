import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxRackComponent } from './fx-rack.component';

describe('FxRackComponent', () => {
  let component: FxRackComponent;
  let fixture: ComponentFixture<FxRackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxRackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxRackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
