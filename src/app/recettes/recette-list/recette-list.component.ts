import { Component, OnInit } from '@angular/core';
import { Recette } from '../recette.model';

@Component({
  selector: 'app-recette-list',
  templateUrl: './recette-list.component.html',
  styleUrl: './recette-list.component.css'
})
export class RecetteListComponent  implements OnInit {
  recettes: Recette[] = [
    new Recette('A Test Recette', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recette('A Test Recette', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}