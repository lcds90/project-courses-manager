import { NgModule } from "@angular/core";
import { MoneyPipe } from "./money.pipe";
import { ReplacePipe } from "./replace.pipe";

@NgModule({
    declarations: [
        MoneyPipe,
        ReplacePipe
    ], exports: [
        MoneyPipe,
        ReplacePipe
    ]
})

export class AppPipeModule{}