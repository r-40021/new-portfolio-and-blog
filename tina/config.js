import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin-tinacms",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "assets",
    },
  },
  schema: {
    collections: [
      {
        label: "Blog",
        name: "blog",
        path: "content/blog",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "本文",
            description: "記事の本文",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "タイトル",
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "スラグ",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "説明",
          },
          {
            type: "datetime",
            name: "date",
            label: "日付",
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "タグ",
            list: true,
            required: true,
          },
          {
            type: "image",
            name: "thumbnail",
            label: "サムネイル",
          },
          {
            type: "string",
            name: "photoCredits",
            label: "画像のクレジット",
            ui: {
              parse: (val) => val && val.split(',').length === 3 ? `<a href="https://unsplash.com/@${val.split(',')[0]}">${val.split(',')[1]}</a>` : val,
            }
          },
          {
            type: "string",
            name: "photoSource",
            label: "画像の出典",
            ui: {
              parse: (val) => val && val.split(',').length === 2 ? `<a href="${val.split(',')[0]}">Unsplash</a>` : val,
            }
          },
          {
            type: "string",
            name: "author",
            label: "筆者",
            required: true,
            ui: {
              parse: (val) => !val ? 'FrogApp' : val,
            }
          },
          {
            name: 'draft',
            label: '下書き',
            type: 'boolean',
          },
        ],
      },
      {
        label: "About",
        name: "about",
        path: "content",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "about",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        label: "Works",
        name: "works",
        path: "content",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "works",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
