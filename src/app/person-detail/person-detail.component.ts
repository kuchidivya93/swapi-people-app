import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
})
export class PersonDetailComponent implements OnInit {
  person: any = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private swapiService: SwapiService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.swapiService.getPerson(id).subscribe((data) => {
      this.person = data;
      this.loading = false;
    });
  }
}
