import { CommonModule } from "@angular/common"
import { NavBarComponent } from "../../../shared/components/nav-bar/nav-bar.component"
import { HomeValuesComponent } from "../components/home-values/home-values.component"
import { MainComponent } from "../components/main/main.component"

export const HomeImports = [
    CommonModule,

    //COMPONENTS
    NavBarComponent,
    HomeValuesComponent,
    MainComponent
]