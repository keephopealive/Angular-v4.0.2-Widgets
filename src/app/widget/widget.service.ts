import { Widget } from './widget';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {Observer} from "rxjs/Observer";
import "rxjs/add/operator/share";

@Injectable()
export class WidgetService {
 
  widgets: Array<Widget> = [new Widget("First", "First description", 1000, 100)];

  index(){
    return this.widgets;
  }

  create(widget: Widget){
    this.widgets.push(widget)
  }

  destroy(widget: Widget){
    console.log("Widget > Service > destroy(widget) ", widget);
    const idx = this.widgets.indexOf(widget);
    this.widgets.splice(idx, 1);
  }

  update(widget: Widget, editedWidget:Widget, done){
    const i = this.widgets.indexOf(widget);
    this.widgets[i] = editedWidget;
    done();
  }

}