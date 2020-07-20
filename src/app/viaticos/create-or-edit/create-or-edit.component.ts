import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import * as moment from "moment";
import { Router } from "@angular/router";
declare var $: any;
// import { Moment } from "Moment";
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

  fecha_socititud: any;
  viaticos_component = {
    fecha_liquidacion: null,
    status: null,
    reliquidada: false,
    fecha_desde: moment().format("DD/MMM/YYYY"),
    fecha_hasta: moment().format("DD/MMM/YYYY"),
    obserbacion: "",
    Detalle: [],
  };

  myControl = new FormControl();
  options: string[] = ["One", "Two", "Three", "Four"];
  filteredOptions: Observable<string[]>;

  selectedValue: string;

  viaticos: Viatico[] = [
    { value: "0", viewValue: "NACIONAL" },
    { value: "1", viewValue: "INTERNACIONAL" },
  ];

  constructor(private router: Router) {}
  title = "Crear viatico";
  ngOnInit() {
    this.fecha_socititud = moment().format("DD/MMM/YYYY");
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

  //* funcion que valida que el rango de fecha tenga unicio y fin.
  validador_rango_fecha_viaticos(): boolean {
    //  Momentsjs fecha inicio - fecha fin
    let fecha_inicio;
    return true;
  }

  guardar_viatico(): void {
    this.showNotification("top", "right", 2);
    this.router.navigate(["/viaticos/"]);
    setTimeout(function () {}, 2000);
  }

  showNotification(from, align, color) {
    const type = ["", "info", "success", "warning", "danger"];

    // const color = Math.floor(Math.random() * 4 + 1);

    $.notify(
      {
        icon: "notifications",
        message: "Se guardo exitosamente.",
      },
      {
        type: type[color],
        timer: 2000,
        placement: {
          from: from,
          align: align,
        },
        template:
          '<div data-notify="container" class="col-xl-4 col-lg-3 col-11 col-sm-4 col-md-3 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          "</div>" +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          "</div>",
      }
    );
  }
}
