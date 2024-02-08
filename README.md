# Full Stack Next.js application

---

## Description

In the application, Google authentication is implemented, and middleware controls access 
to certain pages. The main page displays users' posts. It includes various features such 
as adding to favorites, saving, sharing, adding comments, and removing posts and comments. 
Intercepting routes and Server Actions have been implemented to app. The profile page 
displays the main user's information, followers, following lists, bio, tabs for categories 
of content, and edit profile options. The create post page includes a full validation 
form for uploading pictures to an external server, with visual progress indicators. The 
application is fully responsive and includes a switcher for a dark mode theme.
In a nutshell, this is application likes Instagram.

### Stack technologies:
- Next.js Framework (v.14) with TypeScript
- Shadcn/UI
- Tailwind CSS
- react-hook-form
- Zod validator
- Next-auth
- Prisma ORM
- PostgreSQL
- uploadthing/react
- react-timeago

---

## Getting Started

Create **.env** file based on **.env.example** file!

Launch Docker on computer. In root folder for creation database container in terminal accomplish command:
```bash
$ docker compose up -d
```

## Installation

In root folder:

```bash
$ yarn install
# or
$ npm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

#### Prisma studio for visualization and control data through browser interface:

```bash
# Prisma Studio is up on http://localhost:5555
$ npx prisma studio
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
