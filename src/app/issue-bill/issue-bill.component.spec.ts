import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueBillComponent } from './issue-bill.component';

describe('IssueBillComponent', () => {
  let component: IssueBillComponent;
  let fixture: ComponentFixture<IssueBillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssueBillComponent]
    });
    fixture = TestBed.createComponent(IssueBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
