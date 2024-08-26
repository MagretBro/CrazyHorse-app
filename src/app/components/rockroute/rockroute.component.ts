import { Component, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-rockroute',
  templateUrl: './rockroute.component.html',
  styleUrls: ['./rockroute.component.scss']
})

export class RockrouteComponent {
  fontStyleControl = new FormControl('');

  isZoomed: boolean = false;
  isMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkIfMobile();
  }

  ngOnInit() {
    this.checkIfMobile();
  }

  checkIfMobile() {
    this.isMobile = window.innerWidth <= 768;
    if (this.isMobile) {
      this.isZoomed = true; // На мобильном устройстве картинка сразу увеличена
    } else {
      this.isZoomed = false; // На ПК картинка в исходном размере
    }
  }

  toggleZoom() {
    if (!this.isMobile) {
      this.isZoomed = !this.isZoomed;
    }
  }
}
