To start the project, a .env file should be created by following the structure in .env.example and the steps below.

### BACKEND CONFIGURATION

This project uses an internal API with Prisma ORM to handle CRUD actions, and a Cloudflare R2 bucket to store images. A fully functional .env file will be provided. However, if a new configuration is desired, follow the steps below:

### CLOUDFLARE R2 Setup (In case of don't use the provided .env)

1. Create a Cloudflare Account by signing up at https://dash.cloudflare.com/
2. Create an R2 Bucket:
   - Go to R2 Object Storage > Create Bucket
   - Choose a globally unique name for the bucket, for example: `portfolio-framna`
3. Generate Access Keys:
   - Go to R2 Object Storage > Overview > API > Access Keys
   - Set the permissions to "Admin Read and Write"
   - Click "Create Access Key" to generate your `R2_ACCESS_KEY` and `R2_SECRET_KEY`
4. Copy Your API Endpoint in Settings:
   - Format: `https://<account_id>.r2.cloudflarestorage.com` and paste it into `R2_API_URL`
5. Create a Public Development URL:
   - In Settings navigate to "Public Development URL"
   - Generate and paste the public domain into `R2_PUBLIC_DOMAIN`

### Prisma Setup

A database is provided in the .env file sent by email. It is recommended to use that database considering that it is populated with some of my personal projects and also contains an admin to log in.

If you aim to create a new database with Prisma integrated, follow the steps provided in https://www.prisma.io/docs/accelerate/getting-started

### FRONTEND CONFIGURATION (In case of don't use the provided .env)

1. Generate a Next Auth secret `openssl rand -base64 32`
2. Copy the string and paste it in `NEXTAUTH_SECRET`
3. Run `npm install` to install all the dependencies
4. Run `npm run dev` to start the application locally

### LOGIN AS ADMIN

In the provided database there's already an admin that can be logged with the credentials:
Username: test
Password: test

### DOCUMENTATION

The documentation related to the project can be found in: https://pub-3eeb9c20c85d47c180ad36b8be441e05.r2.dev/portfolio_framna_documentation.pdf
