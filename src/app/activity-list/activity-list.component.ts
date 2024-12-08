import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Activity, ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ActivityListComponent {
  activities = [
    { date: '10/08/2014 00:00', location: 'Aula02', monitor: 'Miguel Goyena', type: 'BodyPump' },
    { date: '12/09/2022 00:00', location: 'Aula01', monitor: 'Miguel Goyena', type: 'Pilates' }
  ];
}
