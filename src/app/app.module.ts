import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { httpFactory } from './services/http/http.factory';
import { HttpService } from './services/http/http.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RoutesModule } from './services/routes/routes.module';
import { FormComponent } from './shared/forms/form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesModule
  ],
  providers: [
  {
    provide: Http,
    useFactory: httpFactory,
    deps:[XHRBackend, RequestOptions]
  }, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }