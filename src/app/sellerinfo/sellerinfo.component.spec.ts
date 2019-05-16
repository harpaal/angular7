import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerinfoComponent } from './sellerinfo.component';

describe('SellerinfoComponent', () => {
  let component: SellerinfoComponent;
  let fixture: ComponentFixture<SellerinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
