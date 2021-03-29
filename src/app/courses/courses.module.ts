import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { CommonModule } from "@angular/common";
import { StarModule } from "../shared/components/star/star.module";
import { AppPipeModule } from "../shared/pipes/app-pipe.module";

import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";


@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
    ],
    imports: [
        AppPipeModule,
        StarModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'courses',
                component: CourseListComponent,
              },
              {
                path: 'course/info/:id',
                component: CourseInfoComponent
              },
        ])
    ]
})

export class CoursesModule {}