import { Component } from '@angular/core';

@Component({
  selector: '<%= widget_name %>',
  templateUrl: '../templates/widget.component.html',
  styleUrls: ['../styles/widget.component.css']
})
export class <%= widget_component_name %> {
  title = '<%= widget_title %>';
}
