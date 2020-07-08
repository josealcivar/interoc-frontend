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
  { path: "/user-profile", title: "Usuario", icon: "person", class: "" },
  {
    path: "/viaticos",
    title: "Viaticos",
    icon: "content_paste",
    class: "",
  },
  {
    path: "/viaticos-create-or-edit",
    title: "crear viaticos",
    icon: "commute",
    class: "",
  },
  // {
  //   path: "/viaticos",
  //   title: "Reliquidación",
  //   icon: "library_books",
  //   class: "",
  // },
  // { path: "/icons", title: "Aprobación", icon: "bubble_chart", class: "" },
  // { path: "/maps", title: "Administración", icon: "location_on", class: "" },
  // {
  //   path: "/notifications",
  //   title: "usuarios",
  //   icon: "notifications",
  //   class: "",
  // },

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
