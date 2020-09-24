import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelProdutoComponent } from './del-produto.component';

describe('DelProdutoComponent', () => {
  let component: DelProdutoComponent;
  let fixture: ComponentFixture<DelProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
