import db from "#db/client";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  await createEmployee({name: "Sam", birthday: "1990-01-01", salary: 20});
  await createEmployee({name: "Jim", birthday: "1990-01-01", salary: 20});
  await createEmployee({name: "Sarah", birthday: "1990-01-01", salary: 20});
  await createEmployee({name: "Kate", birthday: "1990-01-01", salary: 20});
  await createEmployee({name: "Marge", birthday: "1990-01-01", salary: 20});
  await createEmployee({name: "Homer", birthday: "1990-01-01", salary: 20});
  await createEmployee({name: "Helen", birthday: "1990-01-01", salary: 20});
  await createEmployee({name: "Achilles", birthday: "1990-01-01", salary: 20});
  await createEmployee({name: "Posiedon", birthday: "1990-01-01", salary: 20});
  await createEmployee({name: "Charybdis", birthday: "1000-01-01", salary: 2});
  await createEmployee({name: "Sam", birthday: "1990-01-01", salary: 20});
  await createEmployee({name: "Sam", birthday: "1990-01-01", salary: 20});
}
