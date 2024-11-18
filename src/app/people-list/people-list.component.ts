import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
})
export class PeopleListComponent implements OnInit {
  people: any[] = [];
  loading = true;

  constructor(private swapiService: SwapiService, private router: Router) {}

  ngOnInit(): void {
    this.swapiService.getPeople().subscribe((data: any) => {
      this.people = data.results;
      this.loading = false;
    });
  }

  viewDetails(url: string): void {
    const id = url.split('/').filter(Boolean).pop(); // Extract ID from URL
    this.router.navigate(['/people', id]);
  }
}
