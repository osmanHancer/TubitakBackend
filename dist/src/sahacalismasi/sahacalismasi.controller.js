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
exports.SahacalısmasıController = void 0;
const common_1 = require("@nestjs/common");
const sahacalismasi_service_1 = require("./sahacalismasi.service");
const create_sahacalismasi_dto_1 = require("./create-sahacalismasi.dto");
let SahacalısmasıController = class SahacalısmasıController {
    constructor(sahacalısmasıService) {
        this.sahacalısmasıService = sahacalısmasıService;
    }
    create(createSahacalısmasıDto) {
        return this.sahacalısmasıService.create(createSahacalısmasıDto);
    }
    findAll() {
        return this.sahacalısmasıService.findAll();
    }
    findOne(sahaismi) {
        return this.sahacalısmasıService.findOne(sahaismi);
    }
    update(id, updateSahacalısmasıDto) {
        return this.sahacalısmasıService.update(+id, updateSahacalısmasıDto);
    }
    remove(sahaismi) {
        console.log(sahaismi);
        return this.sahacalısmasıService.remove(sahaismi);
    }
};
exports.SahacalısmasıController = SahacalısmasıController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sahacalismasi_dto_1.CreateSahacalısmasıDto]),
    __metadata("design:returntype", void 0)
], SahacalısmasıController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SahacalısmasıController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':sahaismi'),
    __param(0, (0, common_1.Param)('sahaismi')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SahacalısmasıController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_sahacalismasi_dto_1.CreateSahacalısmasıDto]),
    __metadata("design:returntype", void 0)
], SahacalısmasıController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('/delete/:sahaismi'),
    __param(0, (0, common_1.Param)('sahaismi')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SahacalısmasıController.prototype, "remove", null);
exports.SahacalısmasıController = SahacalısmasıController = __decorate([
    (0, common_1.Controller)('sahacalismasi'),
    __metadata("design:paramtypes", [sahacalismasi_service_1.SahacalısmasıService])
], SahacalısmasıController);
//# sourceMappingURL=sahacalismasi.controller.js.map