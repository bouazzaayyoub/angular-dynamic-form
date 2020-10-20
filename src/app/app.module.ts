import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DynamicFormQuestionComponent } from "./dynamic-form-question-component/dynamic-form-question-component.component";
import { DynamicFormComponent } from "./dynamic-form-component/dynamic-form-component.component";
import { QuestionControlService } from "./question-control.service";
import { QuestionService } from "./question.service";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent
  ],
  bootstrap: [AppComponent],
  providers: [QuestionControlService, QuestionService]
})
export class AppModule {}
