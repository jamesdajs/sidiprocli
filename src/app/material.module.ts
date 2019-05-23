import {NgModule} from '@angular/core'
import { 
    MatButtonModule, 
    MatToolbarModule, 
    MatCardModule,
    MatGridListModule,
    MatSidenavModule
} from '@angular/material';

@NgModule({
    imports:[
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule,MatSidenavModule
    ],
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule,
        MatSidenavModule
    ]
})

export class MaterialModule{}