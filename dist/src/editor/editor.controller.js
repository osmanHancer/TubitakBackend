"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editorController = void 0;
const common_1 = require("@nestjs/common");
const editor_service_1 = require("./editor.service");
const editor_dto_1 = require("./editor.dto");
let editorController = class editorController {
    constructor(lokasyonService) {
        this.lokasyonService = lokasyonService;
    }
    async createUser(data) {
        const editor = await this.lokasyonService.create(data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'lokasyon created successfully',
            editor
        };
    }
    async readData() {
        const editor = await this.lokasyonService.getAll();
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'lokasyon created successfully',
            editor
        };
    }
};
exports.editorController = editorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [editor_dto_1.EditornDTO]),
    __metadata("design:returntype", Promise)
], editorController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], editorController.prototype, "readData", null);
exports.editorController = editorController = __decorate([
    (0, common_1.Controller)('editor'),
    __metadata("design:paramtypes", [editor_service_1.editorsService])
], editorController);
//# sourceMappingURL=editor.controller.js.map