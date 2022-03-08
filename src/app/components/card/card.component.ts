import { Component, OnInit,Input } from '@angular/core';
import { Card } from '../../Card';
import { CARDS } from '../../mock-cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards: Card[] = CARDS;
  @Input() card!: Card;

  constructor() { }

  ngOnInit(): void {
  }

}
