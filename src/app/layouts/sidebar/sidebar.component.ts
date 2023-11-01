import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

/**
 * Sidebar component
 */
export class SidebarComponent implements OnInit {

  @Input() isCondensed = false;

  menuItems = [];

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(event) {
    event.currentTarget.nextElementSibling.classList.toggle('mm-show');
  }

  Employee(event) {
    let node = event.target.closest('.has-child');
    let element = node.nextElementSibling;
    if (element.style.display === "none") {
      element.style.display = "block";
    }
    else {
      element.style.display = "none"
    }

  }


}
