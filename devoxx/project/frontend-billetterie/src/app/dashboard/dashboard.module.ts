import { NgModule } from '@angular/core';


import { DashboardComponent } from './dashboard.component';

/**
 * The about module
 *
 * Just embedding <about> component and it's routing definition in {@link AboutRoutingModule}
 */
@NgModule({
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    // imports: [RouterModule.forChild(ABOUT_ROUTES)]
})
export class DashboardModule {}
