import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MassiveService} from "../../service/massive.service";
import {Massive} from "../../model/model";

@Component({
  selector: 'app-massive',
  templateUrl: './massive.component.html',
  styleUrl: './massive.component.scss'
})
export class MassiveComponent {

  massiveId!: string;
  massiveData: Massive | null = null;
  constructor(
    private massiveService: MassiveService,
    private  route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.massiveId = this.route.snapshot.paramMap.get('id')!;
    console.log( this.massiveId);
  }

}
