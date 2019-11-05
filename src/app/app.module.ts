import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExercisesPageComponent } from './exercises-page/exercises-page.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExerciseComponent,
    ExercisesPageComponent,
  ],
  entryComponents: [
    ExercisesPageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
