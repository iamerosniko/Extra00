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
var video_sample_component_1 = require("./video-sample.component");
var video_sample_routing_1 = require("./video-sample.routing");
//import { PhotoViewerComponent } from '../common-components/photo-viewer.component';
var photo_viewer_module_1 = require("../viewer/photo-viewer.module");
var VideoSampleModule = (function () {
    function VideoSampleModule() {
    }
    return VideoSampleModule;
}());
VideoSampleModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            //MyCommonModule,
            photo_viewer_module_1.PhotoViewerModule,
            video_sample_routing_1.VideoSampleRouting
        ],
        declarations: [
            //PhotoViewerComponent,
            video_sample_component_1.VideoSampleComponent
        ],
        providers: []
    })
], VideoSampleModule);
exports.VideoSampleModule = VideoSampleModule;
