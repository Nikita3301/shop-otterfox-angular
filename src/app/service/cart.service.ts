import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([])
  public search = new BehaviorSubject<string>("");

  constructor() { }

  addToCart(addedItem:any) {
    this.cartItemList = this.cartItemList || []
    this.cartItemList.push(addedItem);
    this.productList.next(this.cartItemList)

    //-----check if there are items already added in cart
    /* let existingItems = [];
    if ( localStorage.getItem('cart_items')){//----- update by adding new items
      existingItems = JSON.parse(localStorage.getItem('cart_items'));
      existingItems = [addedItem, ...existingItems];
      console.log( 'Items exists');
    } */
    //-----if no items, add new items
    /* else{
      console.log( 'NO items exists');
      existingItems = [addedItem]
    } */

    this.saveCart();
  }


  getItems() {
    console.log(this.cartItemList)
    return this.cartItemList;
  }

  loadCart(): void {
    this.cartItemList = JSON.parse(localStorage.getItem("cart_items")!);
    this.productList.next(this.cartItemList)
  }

  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.cartItemList));
  }

  clearCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList)
    localStorage.removeItem("cart_items")
  }

  removeItem(item:any) {
    const index = this.cartItemList.findIndex((o:any) => o.id === item.id);

    console.log(item);

    if (index > -1) {
      this.cartItemList.splice(index, 1);
      this.saveCart();
      this.productList.next(this.cartItemList)
    }
  }


  getProducts(){
    return this.productList.asObservable();
  }

  // getTotalPrice():number{
  //   let grandTotal = 0;
  //   this.cartItemList.map((a: any) =>{
  //     grandTotal += a.total;
  //   })
  //   return grandTotal;
  // }












  // setProduct(product: any){
  //   this.cartItemList.push(...product);
  //   this.productList.next(product);
  // }
  //
  // // addtoCart(product: any){
  // //   this.cartItemList.push(product);
  // //   this.productList.next(this.cartItemList);
  // //   this.getTotalPrice();
  // //   console.log(this.cartItemList)
  // // }

  //
  //
  // removeCartItem(product: any){
  //   this.cartItemList.map((a: any, index: any) =>{
  //     console.log("a: ", a, "index: ", index);
  //     console.log("cartitemList:", this.cartItemList);
  //     console.log("prod", product.id)
  //     if(product.id === a.id){
  //       this.cartItemList.splice(index,1);
  //       console.log("index: ",index);
  //     }
  //   })
  //   this.productList.next(this.cartItemList);
  // }
  //
  // removeAllCart(){
  //   this.cartItemList = []
  //   this.productList.next(this.cartItemList);
  // }












}
