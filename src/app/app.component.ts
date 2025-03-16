import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Servicio1Service } from './services/servicio1.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


export interface InfoElement {
  idNation: string,
  idYear: number,
  nation: string,
  year: string,
  population: number
}

const ELEMENT_DATA: InfoElement[] = [];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, MatTableModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prueba';
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['list-idNation', 'list-idYear', 'list-nation', 'list-year', 'list-population'];

  constructor(private servicio1: Servicio1Service) { }

  async ngOnInit() {
    const result = await this.servicio1.request1();
    this.dataSource = result.data.map((item: any, index: any) => {
      return {
        idNation: item["ID Nation"],
        idYear: item["ID Year"],
        nation: item.Nation,
        year: item.Year,
        population: item.Population
      }
    });
    console.log("result", result, this.dataSource);
  }
}
