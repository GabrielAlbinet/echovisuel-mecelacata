import { Component, inject, input, signal } from '@angular/core';
import { FestivalServiceService } from '../../services/festival-service.service';
import { FestivalDatesComponent } from '../../components/festival-dates.component/festival-dates.component';
import { FestivalInfoComponent } from '../../components/festival-info.component/festival-info.component';
import { FestivalType } from '../../types/festival.type';
import { RouterLink } from '@angular/router';


@Component({
  imports: [FestivalDatesComponent, FestivalInfoComponent, RouterLink],
  selector: 'app-festival-page.component',
  styleUrl: './festival-page.component.css',
  templateUrl: './festival-page.component.html',
})
export class FestivalPageComponent {
  private festivalservice = inject(FestivalServiceService);

  festivals = this.festivalservice.festivalsList;
}
