import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

/**
 * @description componente principal del modulo de Viaticos.
 *              donde se muestra un listado de todos
 *              los viativos emitidos por los empleados.
 * @author anthony Acosta
 * @components se llama al componente create-or-edit para la creacion de un nuevo viatico
 *
 */

export interface PeriodicElement {
  name: string;
  position: number;
  country: string;
  city: string;
  salary: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: "Dakota Rice",
    country: "Niger",
    city: "Oud-Turnhout",
    salary: "$36,738",
  },
  {
    position: 2,
    name: "Pakota Rice",
    country: "Niger",
    city: "Oud-Turnhout",
    salary: "$36,738",
  },
  {
    position: 3,
    name: "Aakota Rice",
    country: "Niger",
    city: "Oud-Turnhout",
    salary: "$36,738",
  },
  {
    position: 4,
    name: "Dakota Rice",
    country: "Niger",
    city: "Oud-Turnhout",
    salary: "$36,738",
  },
  {
    position: 5,
    name: "Rakota Rice",
    country: "Niger",
    city: "Oud-Turnhout",
    salary: "$36,738",
  },
  {
    position: 6,
    name: "Sakota Rice",
    country: "Niger",
    city: "Oud-Turnhout",
    salary: "$36,738",
  },
  {
    position: 7,
    name: "Dakota Rice",
    country: "Niger",
    city: "Oud-Turnhout",
    salary: "$36,738",
  },
  {
    position: 8,
    name: "nakota Rice",
    country: "Niger",
    city: "Oud-Turnhout",
    salary: "$36,738",
  },
  {
    position: 9,
    name: "xakota Rice",
    country: "Niger",
    city: "Oud-Turnhout",
    salary: "$36,738",
  },
  {
    position: 10,
    name: "wakota Rice",
    country: "Niger",
    city: "Oud-Turnhout",
    salary: "$36,738",
  },
];

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  // cabecera principal de la tabla de datos
  displayedColumns: string[] = [
    "position",
    "name",
    "country",
    "city",
    "salary",
    "actions",
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ListaViaticos: any[] = []; // Lista de viaticos

  ngOnInit(): void {
    this.dataSource.sort = this.sort; //* funcion de @angular para ordenar la tabla
    this.dataSource.paginator = this.paginator; //* funcion interna de angular para paginar

    this.ObtenerListaViaticos(); // se caga la funcion al iniciar el componente
  }

  /**
   * Listado de viaticos.
   * * Funcion obtener lista de viaticos
   * TODO: se obtiene la informacion del API backend
   *
   */
  ObtenerListaViaticos(): void {
    //* servicio de api para obtener datos
    // this._viaticosService.getDataviaticos().subscribe((response) => {
    //   this.ListaViaticos = response;
    // });
  }
}
