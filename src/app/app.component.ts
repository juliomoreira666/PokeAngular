import { Component } from '@angular/core';
import { PokedexService } from './pokedex.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  pokemon: Pokemon[] = [];
  isLoading = false;
  error = false;
  constructor(private pokedexService: PokedexService) { }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.loadMore();
  }
  loadMore() {
    this.isLoading = true;
    this.pokedexService.getPokemon(this.pokemon.length, 12)
      .then(pokemon => {
        pokemon = pokemon.map(p => {
          p.imageLoaded = false;
          return p;
        });
        this.pokemon = this.pokemon.concat(pokemon);
        this.isLoading = false;
        this.error = false;
      })
      .catch(() => {
        this.error = true;
        this.isLoading = false;
      });
  }
}
