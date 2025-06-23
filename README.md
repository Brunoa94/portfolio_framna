To start the project a .env file should be created following the .env.example structure and the next steps

### BACKEND CONFIGURATION

This project uses an internal API with Prisma ORM to handle CRUD actions, and a Cloudflare R2 bucket to store images. Both require configuration, as explained in the following steps:

### CLOUDFLARE R2 Setup

1. Create a Cloudflare Account by signing up at https://dash.cloudflare.com/
2. Create an R2 Bucket:
   - Go to R2 Object Storage > Create Bucket
   - Choose a globally unique name for the bucket, for example: `portfolio-framna`
3. Generate Access Keys:
   - Go to R2 Object Storage > Overview > API > Access Keys\*\*
   - Set the permissions to "Admin Read and Write"
   - Click "Create Access Key" to generate your `R2_ACCESS_KEY` and `R2_SECRET_KEY`
4. Copy Your API Endpoint in Settings:
   - Format: `https://<account_id>.r2.cloudflarestorage.com` and paste it into `R2_API_URL`
5. Create a Public Development URL:
   - In Settings navigate to "Public Development URL"
   - Generate and paste the public domain into `R2_PUBLIC_DOMAIN`

### Prisma Setup

1. Generate a new acceleration project: `npx prisma db push --accelerate`
2. Deploy the project `npx prisma deploy`
3. Copy the returned string similar to `prisma+postgres://accelerate.prisma-data.net/...`
4. Paste this string in `DATABASE_URL`
5. Generate the Prisma client `npx prisma generate`
6. Run the migrations to populate the database `npx prisma migrate dev`

### FRONTEND CONFIGURATION

1. Generate a Next Auth secret `openssl rand -base64 32`
2. Copy the string and paste it in `NEXTAUTH_SECRET`
3. Run `npm install` to install all the dependencies
4. Run `npm run dev` to start the application locally

### DOCUMENTATION

The documentation related to the project can be found in:
