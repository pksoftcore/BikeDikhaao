import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnbodyComponent } from './mnbody.component';

describe('MnbodyComponent', () => {
  let component: MnbodyComponent;
  let fixture: ComponentFixture<MnbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MnbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
