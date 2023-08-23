"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
class User {
    constructor(obj) {
        const result = User.schema.safeParse(obj);
        console.log(result);
        // if (!result.success) {
        //   const issues = fromZodError(result.error);
        //   throw new Error(issues.message);
        // }
        this.description = obj.description;
        this.password = obj.password;
        this.email = obj.email;
        this.local = obj.local;
        this.name = obj.name;
        this.profilePicture = obj.profilePicture;
    }
    getUser() {
        return {
            description: this.description,
            password: this.password,
            email: this.email,
            local: this.local,
            name: this.name,
            profilePicture: this.profilePicture,
        };
    }
}
exports.default = User;
User.schema = zod_1.z.object({
    id: zod_1.z.number().optional(),
    email: zod_1.z.string().email().min(5),
    password: zod_1.z.string().min(6),
    name: zod_1.z.string().min(6),
    description: zod_1.z.string().min(200),
    profilePicture: zod_1.z.string(),
    local: zod_1.z.string(),
});
//# sourceMappingURL=User.js.map