import { Component, OnInit } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Willkommen in der RecipeBox';

  constructor() {
    // /called first time before the ngOnInit()
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    /*
    const dd = { content: 'your pdf data' };
    pdfMake.createPdf(dd).download();
    */
  }

}
