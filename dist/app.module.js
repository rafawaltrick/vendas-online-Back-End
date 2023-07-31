"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const state_module_1 = require("./state/state.module");
const city_module_1 = require("./city/city.module");
const address_module_1 = require("./address/address.module");
const cache_module_1 = require("./cache/cache.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: ['.env.development.local'],
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                database: process.env.DB_DATABASE,
                host: process.env.DB_HOST,
                password: process.env.DB_PASSWORD,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                entities: [`${__dirname}/**/*.entity{.js,.ts}`],
                migrations: [`${__dirname}/migration/{.ts,*.js}`],
                migrationsRun: true,
            }),
            user_module_1.UserModule,
            state_module_1.StateModule,
            city_module_1.CityModule,
            address_module_1.AddressModule,
            cache_module_1.CacheModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map