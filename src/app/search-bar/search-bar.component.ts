import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() submitted = new EventEmitter<string>();
  term = '';

  constructor() { }

  onSubmit(e: any) {
    e.preventDefault();
    this.submitted.emit(this.term);
  }

  ngOnInit(): void {
  }

}
