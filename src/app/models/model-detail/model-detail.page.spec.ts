import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModelDetailPage } from './model-detail.page';

describe('ModelDetailPage', () => {
  let component: ModelDetailPage;
  let fixture: ComponentFixture<ModelDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModelDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
