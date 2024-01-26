import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteItemsComponent } from './recette-items.component';

describe('RecetteItemsComponent', () => {
  let component: RecetteItemsComponent;
  let fixture: ComponentFixture<RecetteItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecetteItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecetteItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
