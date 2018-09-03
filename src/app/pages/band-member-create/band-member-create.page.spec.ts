import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandMemberCreatePage } from './band-member-create.page';

describe('BandMemberCreatePage', () => {
  let component: BandMemberCreatePage;
  let fixture: ComponentFixture<BandMemberCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandMemberCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandMemberCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
