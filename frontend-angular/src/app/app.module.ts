import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ProfilesPageComponent } from './components/profiles-page/profiles-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    ProfileListComponent,
    ProfileCardComponent,
    ProfilesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
