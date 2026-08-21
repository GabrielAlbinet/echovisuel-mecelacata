import { Injectable, signal } from '@angular/core';
import { FestivalType } from '../types/festival.type';
import { FESTIVAL_DATA } from '../data/festival.data';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class FestivalServiceService {
    private readonly festivals = signal<FestivalType[]>(FESTIVAL_DATA);
    readonly festivalsList = this.festivals.asReadonly();

}
