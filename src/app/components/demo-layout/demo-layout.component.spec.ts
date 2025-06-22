import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLayoutComponent } from './demo-layout.component';

describe('DemoLayoutComponent', () => {
  let component: DemoLayoutComponent;
  let fixture: ComponentFixture<DemoLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
