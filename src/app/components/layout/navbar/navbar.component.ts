import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private ApiServiceService:ApiServiceService) {
   }

  ngOnInit(): void {
    this.getBranchesType()

  }
  BranchesType:any
  getBranchesType(){
    this.ApiServiceService.getBranchTypes().subscribe((res)=>{
     this.BranchesType=res.data;
     console.log("this.BranchesType = ",this.BranchesType)
    })
  }

}
