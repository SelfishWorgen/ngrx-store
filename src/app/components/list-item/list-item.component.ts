import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Film } from "../../interfaces/film.interface";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() film: Film;
  @Output() rated = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  rate(event): void {
    this.rated.emit(event.target.value);
  }
}
