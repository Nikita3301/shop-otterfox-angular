import {Component, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  public products: any = [];

  // public grandTotal !: number;

  constructor(private api: ApiService, private cartService: CartService) {

  }

  ngOnInit(): void{
    this.cartService.loadCart();
    this.products = this.cartService.getItems();
    // this.cartService.getItems()
    //   .subscribe((res:any)=>{
    //     this.products = res;
    //     this.grandTotal=this.cartService.getTotalPrice();
    //   });
  }

  // emptycart(){
  //   this.cartService.removeAllCart();
  // }

  //----- calculate total
  get total() {
    return this.products.reduce(
      (sum: any, current: any) => sum + current.price
      , 0);
  }

  removeFromCart(item:any) {
    this.cartService.removeItem(item);
    this.products = this.cartService.getItems();
  }

  //----- clear cart item
  clearCart(products:any) {
    // this.items.forEach((item, index) => this.cartService.removeItem(index));
    this.cartService.clearCart(products);
    this.products = [...this.cartService.getItems()];
  }

  //----- add item to cart
  addToCart(item:any) {
      this.cartService.addToCart(item); //add items in cart
      this.products = [...this.cartService.getItems()];
  }



  // removeItemf(item:any){
  //   this.cartService.removeCartItem(item);
  //   console.log("item: ", item);
  // }



}
