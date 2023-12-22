import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlockPostComponent } from './admin-block-post.component';

describe('AdminBlockPostComponent', () => {
  let component: AdminBlockPostComponent;
  let fixture: ComponentFixture<AdminBlockPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBlockPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBlockPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
