import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {PokeGenerationPipe} from './pipes/poke-generation.pipe';
import {PositionPipe} from './pipes/position.pipe';
import {ResourceIdPipe} from './pipes/resource-id.pipe';
import {PokeTypeColorPipe} from './pipes/poke-type-color.pipe';
import {NgVarDirective} from './directives/ng-var.directive';
import {ExpandableResourcesPipe} from './pipes/expandable-resources.pipe';
import {PokeTranslatePipe} from './pipes/poke-translate.pipe';
import {PokeVersionPipe} from './pipes/poke-version.pipe';
import {FirstPipe} from './pipes/first.pipe';
import {ReplacePipe} from './pipes/replace.pipe';
import {RomanPipe} from './pipes/roman.pipe';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PokeGenerationPipe,
    PositionPipe,
    ResourceIdPipe,
    PokeTypeColorPipe,
    NgVarDirective,
    ExpandableResourcesPipe,
    PokeTranslatePipe,
    PokeVersionPipe,
    FirstPipe,
    ReplacePipe,
    PokeVersionPipe,
    RomanPipe,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    PokeGenerationPipe,
    PositionPipe,
    ResourceIdPipe,
    PokeTypeColorPipe,
    NgVarDirective,
    ExpandableResourcesPipe,
    PokeTranslatePipe,
    FirstPipe,
    PokeVersionPipe,
    ReplacePipe,
    RomanPipe
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule
  ]
})
export class SharedModule {
}
