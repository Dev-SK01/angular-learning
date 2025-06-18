import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClient } from './http-client';

describe('HttpClient', () => {
  let component: HttpClient;
  let fixture: ComponentFixture<HttpClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
