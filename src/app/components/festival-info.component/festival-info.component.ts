import { Component, input } from '@angular/core';
import { FestivalType } from '../../types/festival.type';


@Component({
  imports: [],
  selector: 'app-festival-infocomponent',
  styleUrl: './festival-info.component.css',
  templateUrl: './festival-info.component.html',
})
export class FestivalInfoComponent {
  infos = input<FestivalType>();
}
