import * as fs from 'fs';
import * as path from 'path';

const migrationsDir = path.resolve(__dirname, 'migrations');
const migrationName = process.argv[2];

if (!migrationName) {
    console.error('Please provide a name for the migration.');
    process.exit(1);
}

const timestamp = Date.now();
const filename = `${timestamp}-${migrationName}.ts`;
const filepath = path.join(migrationsDir, filename);

const template = `import { Kysely, PostgresDialect } from 'kysely';

export async function up(db: Kysely<PostgresDialect>): Promise<void> {
  // Write your migration code here
}

export async function down(db: Kysely<PostgresDialect>): Promise<void> {
  // Write your rollback code here
}
`;

fs.writeFileSync(filepath, template);
console.log(`Migration created at: ${filepath}`);
