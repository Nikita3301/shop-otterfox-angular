import {Component, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  public totalItem: number = 0;
  public searchTerm !: string;
  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    console.log(this.cartService.getItems())
    this.cartService.loadCart();
      this.cartService.getProducts().subscribe((res:any)=>{
        this.totalItem=(res || []).length;
      })
    console.log("res:", this.totalItem)


  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchTerm);
  }

}
