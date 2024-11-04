import {Component, OnInit, Input} from '@angular/core';
import {Massive} from "../../model/model";
import {MassiveService} from "../../service/massive.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Sector} from "../../model/model";

@Component({
  selector: 'app-listmassives',
  templateUrl: './listmassives.component.html',
  styleUrl: './listmassives.component.scss'
})
export class ListmassivesComponent implements OnInit {
  @Input() massiveId!: string;
  massiveData: Massive | null = null;
  constructor(
    private massiveService: MassiveService,
    private router: Router,
    private route: ActivatedRoute) {}

  // async ngOnInit() {
  //   this.massiveId = this.route.snapshot.paramMap.get('id')!;
  //   await this.getMassiveData();
  // }

  async ngOnInit() {
    console.log("massiveId");
    console.log(this.massiveId);
    if (this.massiveId) {
      console.log("No massiveId");
      console.log(this.massiveId);
      this.getMassiveData();
    }
  }

  async getMassiveData() {
    console.log('Fetching massive data...');
    this.massiveService.GetMassiveById(this.massiveId).subscribe(
      (data: Massive) => {
        // console.log('data');
        // console.log(data);

        if(data.sectors)
        {
          data.sectors = data.sectors?.sort((a,b)=>(a.numSector || '').localeCompare(b.numSector || ''))
          this.massiveData = data;
        }
        this.massiveData = data;
      },
      (error) => {
        console.error('Error fetching massive data:', error);
      }
    );
  }

  async onSectorPage(sectorId: string | undefined) {
    if(sectorId === undefined) {
      return;
    }
    await this.router.navigate(['/sector', sectorId]);
  }


}
