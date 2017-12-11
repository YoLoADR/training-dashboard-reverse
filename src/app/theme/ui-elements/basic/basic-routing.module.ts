import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Basic Components',
      status: false
    },
    children: [
      {
        path: 'alert',
        loadChildren: './alert/alert.module#AlertModule'
      },
      {
        path: 'breadcrumb',
        loadChildren: './breadcrumb/breadcrumb.module#BreadcrumbModule'
      },
      {
        path: 'button',
        loadChildren: './button/button.module#ButtonModule'
      },
      {
        path: 'box-shadow',
        loadChildren: './box-shadow/box-shadow.module#BoxShadowModule'
      },
      {
        path: 'accordion',
        loadChildren: './accordion/accordion.module#AccordionModule'
      },
      {
        path: 'generic-class',
        loadChildren: './generic-class/generic-class.module#GenericClassModule'
      },
      {
        path: 'tabs',
        loadChildren: './tabs/tabs.module#TabsModule'
      },
      {
        path: 'label-badge',
        loadChildren: './label-badge/label-badge.module#LabelBadgeModule'
      },
      {
        path: 'typography',
        loadChildren: './typography/typography.module#TypographyModule'
      },
      {
        path: 'other',
        loadChildren: './basic-other/basic-other.module#BasicOtherModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
