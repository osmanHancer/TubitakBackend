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
exports.CiktilarController = void 0;
const common_1 = require("@nestjs/common");
const cikti_service_1 = require("./cikti.service");
let CiktilarController = class CiktilarController {
    constructor(YapimonografisiService) {
        this.YapimonografisiService = YapimonografisiService;
    }
    async readAll() {
        const data = await this.YapimonografisiService.readAll();
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Users fetched successfully',
            data
        };
    }
    async createUser(data) {
        console.log(data);
        await this.YapimonografisiService.create(data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User create successfully',
        };
    }
};
exports.CiktilarController = CiktilarController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CiktilarController.prototype, "readAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CiktilarController.prototype, "createUser", null);
exports.CiktilarController = CiktilarController = __decorate([
    (0, common_1.Controller)('ciktilar'),
    __metadata("design:paramtypes", [cikti_service_1.CiktilarService])
], CiktilarController);
//# sourceMappingURL=cikti.controller.js.map