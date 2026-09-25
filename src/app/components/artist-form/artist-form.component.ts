import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArtistService } from '../../services/artist.service';
import { Artist } from '../../types/artist.interface';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-artist-form',
  styleUrl: './artist-form.component.css',
  templateUrl: './artist-form.component.html',
})
export class ArtistFormComponent {
  artistService = inject(ArtistService);

  form = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(''),
    image: new FormControl(''),
    description: new FormControl('',[Validators.maxLength(300)])
  });

  onSubmit(){
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const editingId = this.artistService.artistIdBeingEdited();
    const value = this.form.value;

    if (editingId !== null) {
      const data: Partial<Omit<Artist, 'id'>> = {};
      if (value.name) data.name = value.name;
      if (value.category) data.category = value.category;
      if (value.image) data.image = value.image;
      if (value.description) data.description = value.description;

      this.artistService.updateArtist(editingId, data);
      this.artistService.artistIdBeingEdited.set(null);
    } else {
      this.artistService.addArtist(value as Artist);
    }

    this.form.reset();
  }
}