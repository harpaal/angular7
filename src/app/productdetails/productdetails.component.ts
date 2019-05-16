import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent implements OnInit {
  productID: string;
  productCategory: string;
  sellerId=5678;

  constructor(route :ActivatedRoute) {
    //this.productID=route.snapshot.paramMap.get('id');

    route.paramMap.subscribe(
      params => this.productID = params.get('id')
    );
    route.queryParamMap.subscribe(
      params => this.productID = params.get('category')
    );
  }

  ngOnInit() {
  }

}
