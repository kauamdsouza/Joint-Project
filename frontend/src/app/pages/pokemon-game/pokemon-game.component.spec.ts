import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonGameComponent } from './pokemon-game.component';

describe('PokemonGameComponent', () => {
  let component: PokemonGameComponent;
  let fixture: ComponentFixture<PokemonGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
