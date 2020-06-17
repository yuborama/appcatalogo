import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewModelPage } from './new-model.page';

describe('NewModelPage', () => {
  let component: NewModelPage;
  let fixture: ComponentFixture<NewModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
