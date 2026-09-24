import { Component, OnInit, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FestivalServiceService } from '../../services/festival-service.service';
import { AuthService } from '../../services/auth.service';
import { FestivalDatesComponent } from '../../components/festival-dates.component/festival-dates.component';
import { FestivalInfoComponent } from '../../components/festival-info.component/festival-info.component';
import { FestivalType } from '../../types/festival.type';

@Component({
  imports: [FestivalDatesComponent, FestivalInfoComponent, RouterLink],
  selector: 'app-festival-page.component',
  styleUrl: './festival-page.component.css',
  templateUrl: './festival-page.component.html',
})
export class FestivalPageComponent implements OnInit {
  private festivalService = inject(FestivalServiceService);
  private authService = inject(AuthService);
  private router = inject(Router);

  readonly currentUser = this.authService.currentUser;

  festivals = this.festivalService.festivalsList;
  isLoading = signal(true);
  loadError = signal(false);
  festivalToDelete = signal<FestivalType | null>(null);

  ngOnInit() {
    this.festivalService.loadFestivals().subscribe({
      next: () => this.isLoading.set(false),
      error: () => {
        this.isLoading.set(false);
        this.loadError.set(true);
      },
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onRemoveRequested(festival: FestivalType) {
    this.festivalToDelete.set(festival);
  }

  cancelRemove() {
    this.festivalToDelete.set(null);
  }

  confirmRemove() {
    const festival = this.festivalToDelete();
    if (!festival) return;

    this.festivalService.deleteFestival(festival.id).subscribe({
      next: () => this.festivalToDelete.set(null),
      error: () => this.festivalToDelete.set(null),
    });
  }
}