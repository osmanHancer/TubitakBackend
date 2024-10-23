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
exports.SahaAdımlarıController = void 0;
const common_1 = require("@nestjs/common");
const saha_adimlari_service_1 = require("./saha-adimlari.service");
const create_saha_adimlari_dto_1 = require("./create-saha-adimlari.dto");
let SahaAdımlarıController = class SahaAdımlarıController {
    constructor(sahaAdımlarıService) {
        this.sahaAdımlarıService = sahaAdımlarıService;
    }
    create(createSahaAdımlarıDto) {
        return this.sahaAdımlarıService.create(createSahaAdımlarıDto);
    }
    delete(deleteSahaAdımlarıDto) {
        console.log(deleteSahaAdımlarıDto);
        return this.sahaAdımlarıService.remove(deleteSahaAdımlarıDto);
    }
    async findAllSaha() {
        const data = await this.sahaAdımlarıService.findAllSaha();
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Users fetched successfully',
            data
        };
    }
    async findAll(saha_ismi) {
        const data = await this.sahaAdımlarıService.findAll(saha_ismi);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Users fetched successfully',
            data
        };
    }
    update(id, updateSahaAdımlarıDto) {
        return this.sahaAdımlarıService.update(+id, updateSahaAdımlarıDto);
    }
};
exports.SahaAdımlarıController = SahaAdımlarıController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_saha_adimlari_dto_1.SahaAdımlarıDto]),
    __metadata("design:returntype", void 0)
], SahaAdımlarıController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("delete"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_saha_adimlari_dto_1.SahaAdımlarıDto]),
    __metadata("design:returntype", void 0)
], SahaAdımlarıController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SahaAdımlarıController.prototype, "findAllSaha", null);
__decorate([
    (0, common_1.Get)(':saha_ismi'),
    __param(0, (0, common_1.Param)('saha_ismi')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SahaAdımlarıController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_saha_adimlari_dto_1.SahaAdımlarıDto]),
    __metadata("design:returntype", void 0)
], SahaAdımlarıController.prototype, "update", null);
exports.SahaAdımlarıController = SahaAdımlarıController = __decorate([
    (0, common_1.Controller)('saha-adimlari'),
    __metadata("design:paramtypes", [saha_adimlari_service_1.SahaAdımlarıService])
], SahaAdımlarıController);
//# sourceMappingURL=saha-adimlari.controller.js.map