import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
interface Viatico {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-create-or-edit",
  templateUrl: "./create-or-edit.component.html",
  styleUrls: ["./create-or-edit.component.css"],
})
export class CreateOrEditComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  myControl = new FormControl();
  options: string[] = ["One", "Two", "Three", "Four"];
  filteredOptions: Observable<string[]>;

  selectedValue: string;

  viaticos: Viatico[] = [
    { value: "0", viewValue: "NACIONAL" },
    { value: "1", viewValue: "INTERNACIONAL" },
  ];

  constructor() {}
  title = "Crear viatico";
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value))
    );
  }

  /**
   *
   * @param value //* lista de catalogo de viaticos para busqueda de autocompletar
   */
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    //* retorna las coincidencias que fueron digitadas por el ususario
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  //* funcion que valida que el rango tenga unicio y fin.
  validador_rango_fecha_viaticos(): boolean {
    return true;
  }
}
