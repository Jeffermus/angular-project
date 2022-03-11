import { Component, OnInit, Input } from '@angular/core';
import {Card} from '../../Card';
import { CARDS } from '../../mock-cards';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() card!: Card;
  cards: Card[] = CARDS;
  
  


  constructor() { }

  ngOnInit(): void {
  }

}
