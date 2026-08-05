import bcrypt from "bcrypt";

const password = "myPassword123";

// Hash the password + salt

const hashPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

console.log("Hashed Password:", hashPassword);

// compare
const isMatch = await bcrypt.compare(password, hashPassword);

console.log("Password Match:", isMatch);

// *                    salt rounds: 10     
// Hashed Password: $2b$10$3mxszzWLz4Y9c9NucYPgF.gBB7xvsVF6FF/Y04fn270VYr1AuMRyu