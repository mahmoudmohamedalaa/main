import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopicsComponent } from './topics/topics.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './shared/card.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,TopicsComponent,NewsComponent,FooterComponent,CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
