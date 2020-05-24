import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'bacon',
      'its good',
      'https://thebakermama.com/wp-content/uploads/2018/08/fullsizeoutput_15a7c.jpg'
    ),
    new Recipe(
      'recipe',
      'recipe menu',
      'https://images-na.ssl-images-amazon.com/images/I/718ebRhi9AL.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
