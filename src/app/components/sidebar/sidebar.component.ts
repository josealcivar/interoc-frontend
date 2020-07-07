import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "dashboard", class: "" },
  { path: "/user-profile", title: "Viaticos", icon: "person", class: "" },
  {
    path: "/table-list",
    title: "crear viaticos",
    icon: "content_paste",
    class: "",
  },
  {
    path: "/typography",
    title: "Reliquidacion",
    icon: "library_books",
    class: "",
  },
  { path: "/icons", title: "Aprobacion", icon: "bubble_chart", class: "" },
  { path: "/maps", title: "Administracion", icon: "location_on", class: "" },
  {
    path: "/notifications",
    title: "usuarios",
    icon: "notifications",
    class: "",
  },
  {
    path: "/viaticos",
    title: "Viaticos",
    icon: "commute",
    class: "",
  },
  // {
  //   path: "/viaticos",
  //   title: "Viaticos",
  //   icon: "unarchive",
  //   class: "active-pro",
  // },
  // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
