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
exports.MakaleController = void 0;
const common_1 = require("@nestjs/common");
const makale_service_1 = require("./makale.service");
const create_makale_dto_1 = require("./create-makale.dto");
let MakaleController = class MakaleController {
    constructor(makaleService) {
        this.makaleService = makaleService;
    }
    create(createmakaleDto) {
        return this.makaleService.create(createmakaleDto);
    }
    async findAll() {
        const makale = await this.makaleService.findAll();
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'lokasyon fetched successfully',
            makale
        };
    }
    async findOne(kodu) {
        const makale = await this.makaleService.findOne(kodu);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'lokasyon fetched successfully',
            makale
        };
    }
    remove(id) {
        return this.makaleService.remove(id);
    }
};
exports.MakaleController = MakaleController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_makale_dto_1.MakaleDTO]),
    __metadata("design:returntype", void 0)
], MakaleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MakaleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MakaleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MakaleController.prototype, "remove", null);
exports.MakaleController = MakaleController = __decorate([
    (0, common_1.Controller)('makale'),
    __metadata("design:paramtypes", [makale_service_1.MakaleService])
], MakaleController);
//# sourceMappingURL=makale.controller.js.map