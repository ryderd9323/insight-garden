import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableBannerComponent } from './clickable-banner.component';

describe('ClickableBannerComponent', () => {
  let component: ClickableBannerComponent;
  let fixture: ComponentFixture<ClickableBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickableBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickableBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
