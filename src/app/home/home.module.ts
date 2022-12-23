import { NgModule } from "@angular/core";
import { FxRackModule } from "../fx-rack/fx-rack.module";
import { MediaManagerModule } from "../media-manager/media-manager.module";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [HomeComponent],
    imports: [MediaManagerModule, FxRackModule],
    exports: [HomeComponent],
})
export class HomeModule { }