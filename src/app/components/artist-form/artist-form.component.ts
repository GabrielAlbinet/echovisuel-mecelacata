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
private artistService = inject(ArtistService);

  form = new FormGroup({

    name: new FormControl('',[Validators.required]),
    category: new FormControl('',[Validators.required]),
    image: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required, Validators.maxLength(300)])

  });
  onSubmit(){
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const artist = this.form.value as Artist;
    this.artistService.addArtist(artist);
    
  }

  

}
