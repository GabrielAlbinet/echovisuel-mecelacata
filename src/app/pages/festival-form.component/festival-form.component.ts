import { Component, OnInit, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FestivalServiceService } from '../../services/festival-service.service';
import { FestivalPayload } from '../../types/festival.type';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-festival-form.component',
  styleUrl: './festival-form.component.css',
  templateUrl: './festival-form.component.html',
})
export class FestivalFormComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private festivalService = inject(FestivalServiceService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  festivalId: number | null = null;
  apiErrorMessage = signal<string | null>(null);

  festivalForm = this.formBuilder.group({
    infos: this.formBuilder.group({
      name: ['', Validators.required],
      mainLocation: ['', Validators.required],
      description: ['', Validators.required],
      poster: ['', Validators.required],
    }),
    dates: this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    }),
  });

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.festivalId = idParam ? Number(idParam) : null;

    if (this.festivalId) {
      this.festivalService.getFestivalById(this.festivalId).subscribe({
        next: (festival) => {
          this.festivalForm.patchValue({
            infos: {
              name: festival.name,
              mainLocation: festival.mainLocation,
              description: festival.description,
              poster: festival.poster,
            },
            dates: {
              startDate: festival.startDate,
              endDate: festival.endDate,
            },
          });
        },
        error: () => this.router.navigate(['/festival']),
      });
    }
  }

  onSubmit(): void {
    if (this.festivalForm.invalid) {
      this.festivalForm.markAllAsTouched();
      return;
    }

    this.apiErrorMessage.set(null);

    const { infos, dates } = this.festivalForm.getRawValue();
    const payload: FestivalPayload = {
      name: infos.name!,
      mainLocation: infos.mainLocation!,
      description: infos.description!,
      poster: infos.poster!,
      startDate: dates.startDate!,
      endDate: dates.endDate!,
    };

    const request$ = this.festivalId
      ? this.festivalService.updateFestival(this.festivalId, payload)
      : this.festivalService.createFestival(payload);

    request$.subscribe({
      next: () => this.router.navigate(['/festival']),
      error: (error: HttpErrorResponse) => {
        this.apiErrorMessage.set(error.error?.message ?? "L'enregistrement a échoué, réessayez.");
      },
    });
  }
}