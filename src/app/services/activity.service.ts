import { Injectable } from '@angular/core';

export interface Activity {
  date: string;
  location: string;
  instructor: string;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private activities: Activity[] = [
    { date: '10/08/2014 00:00', location: 'Aula02', instructor: 'Miguel Goyena', type: 'BodyPump' },
    { date: '12/09/2022 00:00', location: 'Aula01', instructor: 'Miguel Goyena', type: 'Pilates' },
  ];

  getActivities(): Activity[] {
    return this.activities;
  }
}
