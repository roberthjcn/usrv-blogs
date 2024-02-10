"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const routes_1 = require("./routes");
const momgo_1 = require("./database/momgo");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        (0, momgo_1.connectDb)().catch((error) => console.error(error));
        this.middlewares();
        this.configuration();
        this.routes();
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use('/api/blogs', routes_1.routes.PostRoute);
    }
    configuration() {
        this.app.set('port', config_1.PORT);
    }
    listen() {
        this.app.listen(this.app.get('port'), () => {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            console.log(`Server running on port ${this.app.get('port')}`);
        });
    }
}
exports.Server = Server;
