import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Dream {
  description: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class DreamsService {
  private dreamsSubject = new BehaviorSubject<Dream[]>([]);
  dreams$ = this.dreamsSubject.asObservable();

  addDream(dream: Dream): void {
    const date = new Date();
    dream.date = date.toISOString();
    const currentDreams = this.dreamsSubject.value;
    this.dreamsSubject.next([...currentDreams, dream]);
  }

  getDreams(): Dream[] {
    return this.dreamsSubject.value;
  }
}
