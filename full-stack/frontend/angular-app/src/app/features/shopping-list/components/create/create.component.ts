import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { ListEvents } from '../../state/list.actions';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  constructor(private store: Store) {}

  form = new FormGroup({
    description: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ],
    }),
  });

  get description() {
    return this.form.controls.description;
  }

  addItem() {
    if (this.form.valid) {
      const payload = {
        description: this.form.controls.description.value,
      };
      this.store.dispatch(
        ListEvents.itemAdded({
          payload,
        }),
      );
    }
  }
}
