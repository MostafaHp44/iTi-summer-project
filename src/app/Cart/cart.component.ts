import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];
  product = {
    id: 1,
    name: 'Phone XL',
    price: 800,
    description: 'A large phone with one of the best screens',
    image: 'https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_960_720.jpg'
}
addToCart() {
    this.cartItems.push(this.product); // Replace with your actual product data
  }

  calculateTotal() {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  checkout() {
    // Implement your checkout logic here
  }
}
