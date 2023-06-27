import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { CounterComponent } from './counter.component';
import { FEATURE_NAME, reducers } from './state';

export const COUNTER_ROUTES: Routes = [
  {
    path: '',
    component: CounterComponent,
    providers: [provideState(FEATURE_NAME, reducers)],
  },
];
