import { Component, OnInit } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cocina: boolean = false;
  bano: boolean = false;
  sala: boolean = false;
  garaje: boolean = false;
  patio: boolean = false;
  dormitorio: boolean = false;

  constructor(private database: Database) {}

  ngOnInit(): void {
    this.subscribeToDatabaseChanges();
  }

  private subscribeToDatabaseChanges(): void {

    const dormitorioRoute = ref(this.database, "/casa/dormitorio");
    object(dormitorioRoute).subscribe(value => {
      this.dormitorio = value.snapshot.val();
    });
    const banoRoute = ref(this.database, "/casa/bano");
    object(banoRoute).subscribe(value => {
      this.bano = value.snapshot.val();
    });
    const salaRoute = ref(this.database, "/casa/sala");
    object(salaRoute).subscribe(value => {
      this.sala = value.snapshot.val();
    });
    const garajeRoute = ref(this.database, "/casa/garaje");
    object(garajeRoute).subscribe(value => {
      this.garaje = value.snapshot.val();
    });
    const patioRoute = ref(this.database, "/casa/patio");
    object(patioRoute).subscribe(value => {
      this.patio = value.snapshot.val();
    });
    const cocinaRoute = ref(this.database, "/casa/cocina");
    object(cocinaRoute).subscribe(value => {
      this.cocina = value.snapshot.val();
    });
  }
}
