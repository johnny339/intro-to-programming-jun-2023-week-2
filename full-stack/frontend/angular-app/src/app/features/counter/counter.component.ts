import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCounterCurrent } from 'src/app/features/counter/state';
import { CounterAction } from 'src/app/features/counter/state/counter.actions';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  //current = signal(0);
  current = this.store.selectSignal(selectCounterCurrent);
  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(CounterAction.incremented());
  }

  decrement() {
    this.store.dispatch(CounterAction.decremented());
  }
}
