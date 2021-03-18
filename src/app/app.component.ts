import { Component, OnInit } from '@angular/core';
import { FileImportService } from '../services/file-import.service';

// const generateFileName = () => Math.random().toString(36).substring(7)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private fileImportService: FileImportService,
  ) { }

}
