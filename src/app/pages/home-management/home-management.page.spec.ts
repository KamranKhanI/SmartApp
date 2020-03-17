import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeManagementPage } from './home-management.page';

describe('HomeManagementPage', () => {
  let component: HomeManagementPage;
  let fixture: ComponentFixture<HomeManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeManagementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
