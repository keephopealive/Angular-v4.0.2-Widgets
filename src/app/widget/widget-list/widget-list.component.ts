import { Component, OnInit } from '@angular/core';
import { Widget } from './../widget';
import { WidgetService } from './../widget.service';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  widgets: Array<Widget>;

  constructor(private _widgetService: WidgetService ) {
    this.widgets = this._widgetService.index();
  }

  ngOnInit() { }

}