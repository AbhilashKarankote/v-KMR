import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';

const materialComponents: any[] | Type<any> | ModuleWithProviders<{}> = [
MatSliderModule,
MatButtonModule,
MatToolbarModule,
MatIconModule,
MatInputModule,
MatCardModule,
MatSidenavModule,
MatListModule,
MatCheckboxModule,
MatFileUploadModule,
MatProgressBarModule,
MatTabsModule
]

@NgModule({

  imports: [
   materialComponents
  ],
  exports: [materialComponents]
})
export class MaterialModule { }
