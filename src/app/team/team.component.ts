import { Component, Input } from '@angular/core';
import { Team } from '../models/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  @Input() team: Team;
  displayedColumns: string[] = [
    'id',
    'abbreviation',
    'city',
    'conference',
    'division',
    'full_name',
    'name',
  ];
}