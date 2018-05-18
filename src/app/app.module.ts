import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PokedexService } from './pokedex.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CapitalizePipe } from './capitalize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PokedexService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
