import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-resturants',
  templateUrl: './resturants.component.html',
  styleUrls: ['./resturants.component.scss']
})
export class ResturantsComponent implements OnInit {
  id:any
  Resturants:any

  constructor(private activatedRoute:ActivatedRoute,
    private _ApiServiceService:ApiServiceService) {}

  ngOnInit(): void {
    this.getId()
  }

  getId(){
    this.activatedRoute.paramMap.subscribe((res)=>{
     this.id=res.get('id')
     this.getResturantById(this.id)

    })
  }
  getResturantById(id:any){
    this._ApiServiceService.getResturantsById(id).subscribe((res)=>{
      this.Resturants=res.data;
    })
  }

}
