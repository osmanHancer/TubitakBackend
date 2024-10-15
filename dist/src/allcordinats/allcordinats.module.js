"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllcordinatsModule = void 0;
const common_1 = require("@nestjs/common");
const allcordinats_service_1 = require("./allcordinats.service");
const allcordinats_controller_1 = require("./allcordinats.controller");
let AllcordinatsModule = class AllcordinatsModule {
};
exports.AllcordinatsModule = AllcordinatsModule;
exports.AllcordinatsModule = AllcordinatsModule = __decorate([
    (0, common_1.Module)({
        controllers: [allcordinats_controller_1.AllcordinatsController],
        providers: [allcordinats_service_1.AllcordinatsService],
    })
], AllcordinatsModule);
//# sourceMappingURL=allcordinats.module.js.map