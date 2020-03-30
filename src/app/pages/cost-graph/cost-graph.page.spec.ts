import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CostGraphPage } from './cost-graph.page';

describe('CostGraphPage', () => {
  let component: CostGraphPage;
  let fixture: ComponentFixture<CostGraphPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostGraphPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CostGraphPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
