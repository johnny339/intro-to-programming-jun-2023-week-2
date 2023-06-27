import { createReducer } from '@ngrx/store';
export interface CounterComponentState {
  current: number;
}

const initialState: CounterComponentState = {
  current: 42,
};

export const reducer = createReducer(initialState);
