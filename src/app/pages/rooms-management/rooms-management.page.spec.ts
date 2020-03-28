import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoomsManagementPage } from './rooms-management.page';

describe('RoomsManagementPage', () => {
  let component: RoomsManagementPage;
  let fixture: ComponentFixture<RoomsManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsManagementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoomsManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
