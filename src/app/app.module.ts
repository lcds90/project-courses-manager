import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoursesModule } from './courses/courses.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/app-core.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoursesModule, HttpClientModule, RouterModule.forRoot([
    {
      path: '',
      redirectTo: 'courses',
      pathMatch: 'full'
    },

  ]), CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
