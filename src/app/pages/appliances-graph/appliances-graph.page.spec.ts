import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppliancesGraphPage } from './appliances-graph.page';

describe('AppliancesGraphPage', () => {
  let component: AppliancesGraphPage;
  let fixture: ComponentFixture<AppliancesGraphPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliancesGraphPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppliancesGraphPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
