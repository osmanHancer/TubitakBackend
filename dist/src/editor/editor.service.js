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
exports.editorsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const editor_entity_1 = require("./editor.entity");
let editorsService = class editorsService {
    constructor(editorRepository) {
        this.editorRepository = editorRepository;
    }
    async create(data) {
        const user = this.editorRepository.create(data);
        await this.editorRepository.save(user);
        return user;
    }
    async getAll() {
        const user = this.editorRepository.find();
        return user;
    }
};
exports.editorsService = editorsService;
exports.editorsService = editorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(editor_entity_1.EditorEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], editorsService);
//# sourceMappingURL=editor.service.js.map