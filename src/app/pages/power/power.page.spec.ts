import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PowerPage } from './power.page';

describe('PowerPage', () => {
  let component: PowerPage;
  let fixture: ComponentFixture<PowerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PowerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
