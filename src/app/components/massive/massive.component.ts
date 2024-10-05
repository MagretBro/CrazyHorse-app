import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MassiveService} from "../../service/massive.service";
import {Massive} from "../../model/model";

@Component({
  selector: 'app-massive',
  templateUrl: './massive.component.html',
  styleUrl: './massive.component.scss'
})
export class MassiveComponent implements OnInit {

  massiveId!: string;
  massiveData: Massive | null = null;
  constructor(
    private massiveService: MassiveService,
    private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.massiveId = this.route.snapshot.paramMap.get('id')!;
    await this.getMassiveData();
  }

  async getMassiveData() {
    // Запрос к API через сервис
    this.massiveService.GetMassiveById(this.massiveId).subscribe(
      (data: Massive) => {
        this.massiveData = data; // Сохраняем данные в переменную
        console.log('this.massiveData');
        console.log(this.massiveData);
      },
      (error) => {
        console.error('Error fetching massive data:', error);
      }
    );
  }

}
