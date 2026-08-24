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

    getFestivalByName(name: string): FestivalType | undefined {
        return this.festivals().find(f => f.name === name);
    }

    updateFestival(originName: string, updatedFestival: FestivalType): void {
        this.festivals.update(festivals =>
            festivals.map(f =>
                f.name === originName ? updatedFestival : f
            )
        );
    }
}

