import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GirdListPopoverPage } from './gird-list-popover.page';

describe('GirdListPopoverPage', () => {
  let component: GirdListPopoverPage;
  let fixture: ComponentFixture<GirdListPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirdListPopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GirdListPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
