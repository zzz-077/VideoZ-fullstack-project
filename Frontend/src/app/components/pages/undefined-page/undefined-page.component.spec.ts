import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndefinedPageComponent } from './undefined-page.component';

describe('UndefinedPageComponent', () => {
  let component: UndefinedPageComponent;
  let fixture: ComponentFixture<UndefinedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndefinedPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UndefinedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
