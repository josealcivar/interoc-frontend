import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateOrEditComponent } from "./create-or-edit.component";

describe("CreateOrEditComponent", () => {
  let component: CreateOrEditComponent;
  let fixture: ComponentFixture<CreateOrEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOrEditComponent],
    }).compileComponents();

    component: new CreateOrEditComponent();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("valida rango de fecha de viaticos", () => {
    let rango: boolean = component.validador_rango_fecha_viaticos();
    expect(rango).toBeTruthy();
  });
});
