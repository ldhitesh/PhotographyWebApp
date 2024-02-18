import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainlayoutComponent } from './mainlayout/mainlayout/mainlayout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LinkhoverDirective } from './directives/linkhover.directive';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuoteGridComponent } from './components/quote-grid/quote-grid.component';
import { DisplayareaComponent } from './components/displayarea/displayarea.component';
import { WelcomeIntroComponent } from './components/welcome-intro/welcome-intro.component';
import { ImageGridComponent } from './components/image-grid/image-grid.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainlayoutComponent,
    NavbarComponent,
    ProfileComponent,
    LinkhoverDirective,
    LogoComponent,
    FooterComponent,
    QuoteGridComponent,
    DisplayareaComponent,
    WelcomeIntroComponent,
    ImageGridComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HammerModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
