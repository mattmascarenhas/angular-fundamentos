import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { HeaderGeradocComponent } from './components/header-geradoc/header-geradoc.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterOutputComponent } from './components/emitter-output/emitter-output.component';
import { ChangeNumberOutputComponent } from './components/change-number-output/change-number-output.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBidingComponent } from './components/two-way-biding/two-way-biding.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    HeaderGeradocComponent,
    ParentDataComponent,
    DiretivasComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterOutputComponent,
    ChangeNumberOutputComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBidingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
