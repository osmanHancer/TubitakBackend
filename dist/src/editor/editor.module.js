"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const editor_entity_1 = require("./editor.entity");
const editor_controller_1 = require("./editor.controller");
const editor_service_1 = require("./editor.service");
let EditorModule = class EditorModule {
};
exports.EditorModule = EditorModule;
exports.EditorModule = EditorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([editor_entity_1.EditorEntity])],
        controllers: [editor_controller_1.editorController],
        providers: [editor_service_1.editorsService],
    }),
    (0, common_1.Module)({})
], EditorModule);
//# sourceMappingURL=editor.module.js.map