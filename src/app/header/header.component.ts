import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() onFeatureSelected = new EventEmitter<string>();

  setFeature(feature: string) {
    this.onFeatureSelected.emit(feature);
  }

}
