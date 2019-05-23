import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcartsComponent } from './listcarts.component';

describe('ListcartsComponent', () => {
  let component: ListcartsComponent;
  let fixture: ComponentFixture<ListcartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
