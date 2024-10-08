import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
@Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
constructor(){}
ngOnInit() {}

toggleSideBar() {
  this.toggleSideBarForMe.emit();
}


}
