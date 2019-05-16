import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sellerinfo',
  templateUrl: './sellerinfo.component.html',
  styleUrls: ['./sellerinfo.component.css']
})
export class SellerinfoComponent implements OnInit {
  sellerID: string;

  ngOnInit(){}
  
  
  constructor(route: ActivatedRoute){                        
     this.sellerID = route.snapshot.paramMap.get('id');      
   }
  }