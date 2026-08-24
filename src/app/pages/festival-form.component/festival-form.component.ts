import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FestivalServiceService } from '../../services/festival-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FestivalType } from '../../types/festival.type';

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

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  originName !: string;
  festivalForm!: FormGroup;

  ngOnInit(): void {
    this.festivalForm = this.formBuilder.group({
      infos: this.formBuilder.group({
        name: ['', Validators.required],
        mainLocation: ['', Validators.required],
        description: ['', Validators.required],
        poster: ['', Validators.required],
      }),
      dates: this.formBuilder.group({
        startDate: ['', Validators.required],
        endDate: ['', Validators.required]
      })
    });

    this.originName = this.route.snapshot.paramMap.get('name') || '';

    const fest = this.festivalService.getFestivalByName(this.originName);

    if (fest) {
      const date = fest.dates[0];

      this.festivalForm.patchValue({
        infos: {
          name: fest.name,
          mainLocation: fest.mainLocation,
          description: fest.description,
          poster: fest.poster
        },
        dates: {
          startDate: date ? this.formatDate(date.startDate) : '',
          endDate: date ? this.formatDate(date.endDate) : ''
        }
      });
    }
  }

  onSubmit(): void {
    if (this.festivalForm.invalid) {
      this.festivalForm.markAllAsTouched();
      return;
    }

    const formValue = this.festivalForm.value;

    const updatedFestival: FestivalType = {
      ...formValue.infos,

      dates: [
        {
          startDate: new Date(formValue.dates.startDate),
          endDate: new Date(formValue.dates.endDate)
        }
      ]
    };

    this.festivalService.updateFestival(
      this.originName,
      updatedFestival
    );

    this.router.navigate(['/festival']);
  }

}