import { state } from "@angular/animations";
import { Card } from "./Card";

export const CARDS: Card[] = [
{
    id: 1,
    text: 'All tasks',
    state: 'Answer'
},
{   
    id: 2,
    text: 'Locked',
    state: 'Ansered'
},
{
    id: 3,
    text: 'Pending',
    state: 'Ask'
},
{
    id:4,
    text: 'completed',
    state: 'Locked'
},
];
