import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin-tinacms",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        label: "Blog",
        name: "blog",
        path: "content/blog",
        match: {
          include: "**/*",
        },
        ui: {
          filename: {
            readonly: false,
            slugify: values => {
              const date = new Date();
              const day = date.getDate();
              const month = date.getMonth() + 1;
              const year = date.getFullYear();
              let currentDate = `${year.toString().padStart(2, "0")}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
              return `${currentDate}-${values?.slug?.toLowerCase().replace(/ /g, '-')}`
            },
          },
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
            ui: {
              dateFormat: "YYYY-MM-DD",
              timeFormat: "HH:mm"
            }
          },
          {
            type: "string",
            name: "tags",
            label: "タグ",
            list: true,
            required: true,
          },
          {
            type: "object",
            name: "thumbnail",
            label: "サムネイル",
            fields: [
              {
                type: "image",
                name: "url",
                label: "画像",
              },
              {
                type: "string",
                name: "author",
                label: "撮影者",
              },
              {
                type: "string",
                name: "authorURL",
                label: "撮影者の URL",
              },
              {
                type: "string",
                name: "origin",
                label: "出典",
              },
              {
                type: "string",
                name: "originURL",
                label: "出典の URL",
              },
            ]
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
            type: "string",
            name: "series",
            label: "連載名",
          },
          {
            type: "string",
            name: "series_title",
            label: "連載内でのタイトル",
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
          include: "about.*",
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
        path: "content/work",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "work.*",
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
