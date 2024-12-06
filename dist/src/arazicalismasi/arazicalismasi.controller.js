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
exports.ArazicalismasiController = void 0;
const common_1 = require("@nestjs/common");
const arazicalismasi_service_1 = require("./arazicalismasi.service");
const create_arazicalismasi_dto_1 = require("./create-arazicalismasi.dto");
let ArazicalismasiController = class ArazicalismasiController {
    constructor(arazicalismasiService) {
        this.arazicalismasiService = arazicalismasiService;
    }
    create(createArazicalismasiDto) {
        return this.arazicalismasiService.create(createArazicalismasiDto);
    }
    findAll() {
        return this.arazicalismasiService.findAll();
    }
    findOne(id) {
        return this.arazicalismasiService.findOne(id);
    }
    remove(envanter_kodu) {
        return this.arazicalismasiService.remove(envanter_kodu);
    }
};
exports.ArazicalismasiController = ArazicalismasiController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_arazicalismasi_dto_1.CreateArazicalismasiDto]),
    __metadata("design:returntype", void 0)
], ArazicalismasiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArazicalismasiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArazicalismasiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('delete/:envanter_kodu'),
    __param(0, (0, common_1.Param)('envanter_kodu')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArazicalismasiController.prototype, "remove", null);
exports.ArazicalismasiController = ArazicalismasiController = __decorate([
    (0, common_1.Controller)('arazicalismasi'),
    __metadata("design:paramtypes", [arazicalismasi_service_1.ArazicalismasiService])
], ArazicalismasiController);
//# sourceMappingURL=arazicalismasi.controller.js.map