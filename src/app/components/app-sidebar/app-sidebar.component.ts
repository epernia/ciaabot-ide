import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../providers/project.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent implements OnInit {

  constructor(
    public projectService: ProjectService
  ) { }

  ngOnInit() {
  }

}
