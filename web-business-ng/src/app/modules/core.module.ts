import { NgModule } from '@angular/core';
import { AuthService } from '../shared/authService/auth.service';
import { ConstantService } from '../shared/global/constant.service';
import { ProgressService } from '../shared/load/progress.service'

@NgModule({
  providers: [
    ProgressService,
    AuthService,
    ConstantService
  ]
})
export class CoreModule {
  constructor() {
  }
}