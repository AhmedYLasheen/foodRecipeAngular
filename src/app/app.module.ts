import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule  } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    FormsModule,
  ],
  exports: [
   
    HttpClientModule,
    MatPaginatorModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjM2LCJyb2xlcyI6WyJBZG1pbiIsImNhbkFkZFVzZXIiLCJjYW5VcGRhdGVVc2VyIiwiY2FuRGVsZXRlVXNlciIsImNhbkdldFVzZXJCeUlkIiwiY2FuR2V0Q3VycmVudFVzZXIiLCJjYW5HZXRBbGxVc2VycyIsImNhbkNoYW5nZVBhc3N3b3JkIl0sInVzZXJOYW1lIjoibGFzaGVlbjMiLCJ1c2VyRW1haWwiOiJhaG1lZGxhc2hlZW42OTk3QGdtYWlsLmNvbSIsInVzZXJHcm91cCI6IlN1cGVyQWRtaW4iLCJpYXQiOjE3MjIwMDQ1MTUsImV4cCI6MTcyNTYwNDUxNX0.V6bTLVeBMtlaHFYV54a6Zbld3ISvbsnq1PtunIjVfZg6WWBLKoIBa44-D_zVuljJh1P6L7ALgGPlVKy1GnvXfFaIZJkylzwLYdlVVc0z_U7r8zNV3rjroaoT7KjnxYPpETmNO3_kawKadi2fi6EwZz_yHGmu4ONYC4EOYHvMlE8b3OaFUAPj6PtCGI5MxwfVsGIdksWc4OJ59rHyGnOQ8hexyyCWvpxMjj5fX4W3m4340bk0GnUpRX1dRrK3hSjGrF1kNKWtij0hIZ-5vfQEy6NaPZvU8fGz-beKHSgCXRU5S7B9JHtC5lOcphny8d4Rtlq_A-A_IW1Elg3d2LmDUg