import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleColumnPageComponent } from './single-column-page.component';

describe('SingleColumnPageComponent', () => {
  let component: SingleColumnPageComponent;
  let fixture: ComponentFixture<SingleColumnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleColumnPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleColumnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
