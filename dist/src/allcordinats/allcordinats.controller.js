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
exports.AllcordinatsController = void 0;
const common_1 = require("@nestjs/common");
const allcordinats_service_1 = require("./allcordinats.service");
const create_allcordinat_dto_1 = require("./create-allcordinat.dto");
let AllcordinatsController = class AllcordinatsController {
    constructor(allcordinatsService) {
        this.allcordinatsService = allcordinatsService;
    }
    create(createAllcordinatDto) {
        return this.allcordinatsService.create(createAllcordinatDto);
    }
    findAll() {
        return this.allcordinatsService.findAll();
    }
    findOne(id) {
        return this.allcordinatsService.findOne(id);
    }
    update(id, updateAllcordinatDto) {
        return this.allcordinatsService.update(+id, updateAllcordinatDto);
    }
    remove(id) {
        return this.allcordinatsService.remove(+id);
    }
};
exports.AllcordinatsController = AllcordinatsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_allcordinat_dto_1.AllcordinatDto]),
    __metadata("design:returntype", void 0)
], AllcordinatsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AllcordinatsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AllcordinatsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_allcordinat_dto_1.AllcordinatDto]),
    __metadata("design:returntype", void 0)
], AllcordinatsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AllcordinatsController.prototype, "remove", null);
exports.AllcordinatsController = AllcordinatsController = __decorate([
    (0, common_1.Controller)('allcordinats'),
    __metadata("design:paramtypes", [allcordinats_service_1.AllcordinatsService])
], AllcordinatsController);
//# sourceMappingURL=allcordinats.controller.js.map