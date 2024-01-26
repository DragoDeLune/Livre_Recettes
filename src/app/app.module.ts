import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecettesComponent } from './recettes/recettes.component';
import { RecetteListComponent } from './recettes/recette-list/recette-list.component';
import { RecetteItemsComponent } from './recettes/recette-list/recette-items/recette-items.component';
import { RecetteDetailComponent } from './recettes/recette-detail/recette-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecettesComponent,
    RecetteListComponent,
    RecetteItemsComponent,
    RecetteDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
