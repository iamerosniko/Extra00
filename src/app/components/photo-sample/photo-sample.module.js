"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var photo_sample_component_1 = require("./photo-sample.component");
var photo_sample_routing_1 = require("./photo-sample.routing");
var photo_viewer_module_1 = require("../photo-viewer/photo-viewer.module");
//import { PhotoViewerComponent } from '../photo-viewer/photo-viewer.component';
var PhotoSampleModule = (function () {
    function PhotoSampleModule() {
    }
    return PhotoSampleModule;
}());
PhotoSampleModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            photo_viewer_module_1.PhotoViewerModule,
            //MyCommonModule,
            photo_sample_routing_1.PhotoSampleRouting
        ],
        declarations: [
            //PhotoViewerComponent,
            photo_sample_component_1.PhotoSampleComponent
        ],
        providers: []
    })
], PhotoSampleModule);
exports.PhotoSampleModule = PhotoSampleModule;
