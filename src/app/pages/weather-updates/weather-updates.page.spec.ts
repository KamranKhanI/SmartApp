import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeatherUpdatesPage } from './weather-updates.page';

describe('WeatherUpdatesPage', () => {
  let component: WeatherUpdatesPage;
  let fixture: ComponentFixture<WeatherUpdatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherUpdatesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherUpdatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
