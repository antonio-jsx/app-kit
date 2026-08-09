# APP KIT

Generar espacios de trabajo

``` bash
pnpm dlx turbo gen workspace --name <name> --type package
```

## `database`
Generar el archivo `.env.local` y agregar la variable de entorno `DATABASE_URL="postgresql://postgres:password@localhost:5432/db"` 

| Comando                              | Descripción                                                                       |
| ------------------------------------ | --------------------------------------------------------------------------------- |
| `pnpm --filter database db:generate` | Genera los archivos de migración a partir del esquema de Drizzle.                 |
| `pnpm --filter database db:migrate`  | Aplica las migraciones pendientes a la base de datos.                             |
| `pnpm --filter database db:push`     | Sincroniza directamente el esquema con la base de datos, sin generar migraciones. |

## `auth`

Generar el esquema de la configuración
`pnpm dlx auth@latest generate --config packages/auth/src/auth.ts --output packages/database/src/schemas/users.ts`