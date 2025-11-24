import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // Text Interpolation
  message = 'Data-Binding Demo';
  title = 'My First App!';
  description = 'This is my new Angular Application';

  // Property Binding
  imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp6f54NYnJ0XwkbblftVk-xeWR-rBpONFMVA&s';
  w = 500;
  h = 500;
  altText = 'Amphoreus'

  // Style Binding
  textColor = 'blue';

  // Class Binding
  isHighlighted = true;

  // Two-Way Data Binding
  yourName = '';

  // Event Binding
  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

}
