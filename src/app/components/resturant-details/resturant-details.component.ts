import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-resturant-details',
  templateUrl: './resturant-details.component.html',
  styleUrls: ['./resturant-details.component.scss']
})
export class ResturantDetailsComponent implements OnInit {

  id:any
  Resturants:any

  constructor(private activatedRoute:ActivatedRoute,
    private _ApiServiceService:ApiServiceService) {}

  ngOnInit(): void {
    this.getId()
  }

  getId(){
    this.activatedRoute.paramMap.subscribe((res)=>{
     this.id=res.get('res_id')
     console.log("this.id = ",this.id)
     this.getResturantDetailsById(this.id)

    })
  }
  getResturantDetailsById(id:any){
    this._ApiServiceService.getRestaurantDetails(id).subscribe((res)=>{
      this.Resturants=res.data.menu;
      console.log("this.Resturants = ",this.Resturants)

    })
  }

}
