import type { Schema, Attribute } from "@strapi/strapi";

export interface AdminPermission extends Schema.CollectionType {
  collectionName: "admin_permissions";
  info: {
    name: "Permission";
    description: "";
    singularName: "permission";
    pluralName: "permissions";
    displayName: "Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<"admin::permission", "manyToOne", "admin::role">;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "admin::permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "admin::permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: "admin_users";
  info: {
    name: "User";
    description: "";
    singularName: "user";
    pluralName: "users";
    displayName: "User";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<"admin::user", "manyToMany", "admin::role"> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"admin::user", "oneToOne", "admin::user"> &
      Attribute.Private;
    updatedBy: Attribute.Relation<"admin::user", "oneToOne", "admin::user"> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: "admin_roles";
  info: {
    name: "Role";
    description: "";
    singularName: "role";
    pluralName: "roles";
    displayName: "Role";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<"admin::role", "manyToMany", "admin::user">;
    permissions: Attribute.Relation<
      "admin::role",
      "oneToMany",
      "admin::permission"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"admin::role", "oneToOne", "admin::user"> &
      Attribute.Private;
    updatedBy: Attribute.Relation<"admin::role", "oneToOne", "admin::user"> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: "strapi_api_tokens";
  info: {
    name: "Api Token";
    singularName: "api-token";
    pluralName: "api-tokens";
    displayName: "Api Token";
    description: "";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<"">;
    type: Attribute.Enumeration<["read-only", "full-access", "custom"]> &
      Attribute.Required &
      Attribute.DefaultTo<"read-only">;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      "admin::api-token",
      "oneToMany",
      "admin::api-token-permission"
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "admin::api-token",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "admin::api-token",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: "strapi_api_token_permissions";
  info: {
    name: "API Token Permission";
    description: "";
    singularName: "api-token-permission";
    pluralName: "api-token-permissions";
    displayName: "API Token Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      "admin::api-token-permission",
      "manyToOne",
      "admin::api-token"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "admin::api-token-permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "admin::api-token-permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: "strapi_transfer_tokens";
  info: {
    name: "Transfer Token";
    singularName: "transfer-token";
    pluralName: "transfer-tokens";
    displayName: "Transfer Token";
    description: "";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<"">;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      "admin::transfer-token",
      "oneToMany",
      "admin::transfer-token-permission"
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "admin::transfer-token",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "admin::transfer-token",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: "strapi_transfer_token_permissions";
  info: {
    name: "Transfer Token Permission";
    description: "";
    singularName: "transfer-token-permission";
    pluralName: "transfer-token-permissions";
    displayName: "Transfer Token Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      "admin::transfer-token-permission",
      "manyToOne",
      "admin::transfer-token"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "admin::transfer-token-permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "admin::transfer-token-permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: "files";
  info: {
    singularName: "file";
    pluralName: "files";
    displayName: "File";
    description: "";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<"plugin::upload.file", "morphToMany">;
    folder: Attribute.Relation<
      "plugin::upload.file",
      "manyToOne",
      "plugin::upload.folder"
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::upload.file",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::upload.file",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: "upload_folders";
  info: {
    singularName: "folder";
    pluralName: "folders";
    displayName: "Folder";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      "plugin::upload.folder",
      "manyToOne",
      "plugin::upload.folder"
    >;
    children: Attribute.Relation<
      "plugin::upload.folder",
      "oneToMany",
      "plugin::upload.folder"
    >;
    files: Attribute.Relation<
      "plugin::upload.folder",
      "oneToMany",
      "plugin::upload.file"
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::upload.folder",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::upload.folder",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: "i18n_locale";
  info: {
    singularName: "locale";
    pluralName: "locales";
    collectionName: "locales";
    displayName: "Locale";
    description: "";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::i18n.locale",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::i18n.locale",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: "up_permissions";
  info: {
    name: "permission";
    description: "";
    singularName: "permission";
    pluralName: "permissions";
    displayName: "Permission";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      "plugin::users-permissions.permission",
      "manyToOne",
      "plugin::users-permissions.role"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::users-permissions.permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::users-permissions.permission",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: "up_roles";
  info: {
    name: "role";
    description: "";
    singularName: "role";
    pluralName: "roles";
    displayName: "Role";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      "plugin::users-permissions.role",
      "oneToMany",
      "plugin::users-permissions.permission"
    >;
    users: Attribute.Relation<
      "plugin::users-permissions.role",
      "oneToMany",
      "plugin::users-permissions.user"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::users-permissions.role",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::users-permissions.role",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: "up_users";
  info: {
    name: "user";
    description: "";
    singularName: "user";
    pluralName: "users";
    displayName: "User";
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      "plugin::users-permissions.user",
      "manyToOne",
      "plugin::users-permissions.role"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "plugin::users-permissions.user",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "plugin::users-permissions.user",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
  };
}

export interface ApiArticleArticle extends Schema.CollectionType {
  collectionName: "articles";
  info: {
    singularName: "article";
    pluralName: "articles";
    displayName: "Article";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subheadline: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    date: Attribute.Date &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    asset: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    article_category: Attribute.Relation<
      "api::article.article",
      "oneToOne",
      "api::article-category.article-category"
    >;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::article.article",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::article.article",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::article.article",
      "oneToMany",
      "api::article.article"
    >;
    locale: Attribute.String;
  };
}

export interface ApiArticleCategoryArticleCategory
  extends Schema.CollectionType {
  collectionName: "article_categories";
  info: {
    singularName: "article-category";
    pluralName: "article-categories";
    displayName: "Article category";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    article: Attribute.Relation<
      "api::article-category.article-category",
      "oneToOne",
      "api::article.article"
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::article-category.article-category",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::article-category.article-category",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::article-category.article-category",
      "oneToMany",
      "api::article-category.article-category"
    >;
    locale: Attribute.String;
  };
}

export interface ApiBenefitBarBenefitBar extends Schema.SingleType {
  collectionName: "benefit_bars";
  info: {
    singularName: "benefit-bar";
    pluralName: "benefit-bars";
    displayName: "Benefit bar";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    headline_left: Attribute.Component<"text.cta-optional"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    headline_centre: Attribute.Component<"text.cta-optional"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    headline_right: Attribute.Component<"text.cta-optional"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    enabled: Attribute.Boolean &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::benefit-bar.benefit-bar",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::benefit-bar.benefit-bar",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::benefit-bar.benefit-bar",
      "oneToMany",
      "api::benefit-bar.benefit-bar"
    >;
    locale: Attribute.String;
  };
}

export interface ApiContactContact extends Schema.CollectionType {
  collectionName: "contacts";
  info: {
    singularName: "contact";
    pluralName: "contacts";
    displayName: "Contact";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    first_name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    last_name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    phone_number: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    email: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    role: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    media: Attribute.Component<"media.media"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::contact.contact",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::contact.contact",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::contact.contact",
      "oneToMany",
      "api::contact.contact"
    >;
    locale: Attribute.String;
  };
}

export interface ApiEventEvent extends Schema.CollectionType {
  collectionName: "events";
  info: {
    singularName: "event";
    pluralName: "events";
    displayName: "Event";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    start_date: Attribute.Date &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    end_date: Attribute.Date &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    location: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    cta: Attribute.Component<"text.cta"> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    links: Attribute.Component<"text.cta", true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    meta_description: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    media: Attribute.Component<"media.media"> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::event.event",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::event.event",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::event.event",
      "oneToMany",
      "api::event.event"
    >;
    locale: Attribute.String;
  };
}

export interface ApiEventsOverviewEventsOverview extends Schema.SingleType {
  collectionName: "events_overviews";
  info: {
    singularName: "events-overview";
    pluralName: "events-overviews";
    displayName: "Events overview";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    hero: Attribute.Component<"media-text.hero"> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::events-overview.events-overview",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::events-overview.events-overview",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::events-overview.events-overview",
      "oneToMany",
      "api::events-overview.events-overview"
    >;
    locale: Attribute.String;
  };
}

export interface ApiFooterFooter extends Schema.SingleType {
  collectionName: "footers";
  info: {
    singularName: "footer";
    pluralName: "footers";
    displayName: "Footer";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    image: Attribute.Media &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    instagram: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    facebook: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tiktok: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    columns: Attribute.Component<"text.column", true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMax<{
        min: 3;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::footer.footer",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::footer.footer",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::footer.footer",
      "oneToMany",
      "api::footer.footer"
    >;
    locale: Attribute.String;
  };
}

export interface ApiMicrocopyMicrocopy extends Schema.CollectionType {
  collectionName: "microcopies";
  info: {
    singularName: "microcopy";
    pluralName: "microcopies";
    displayName: "Microcopy";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    key: Attribute.UID &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    value: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Attribute.String &
      Attribute.Private &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::microcopy.microcopy",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::microcopy.microcopy",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::microcopy.microcopy",
      "oneToMany",
      "api::microcopy.microcopy"
    >;
    locale: Attribute.String;
  };
}

export interface ApiNavigationNavigation extends Schema.SingleType {
  collectionName: "navigations";
  info: {
    singularName: "navigation";
    pluralName: "navigations";
    displayName: "Navigation";
    description: "";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    shop_promotion: Attribute.Component<"media-text.promotion-card"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    about_promotion: Attribute.Component<"media-text.promotion-card"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    shop_columns: Attribute.Component<"text.column", true> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMax<{
        min: 3;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::navigation.navigation",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::navigation.navigation",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::navigation.navigation",
      "oneToMany",
      "api::navigation.navigation"
    >;
    locale: Attribute.String;
  };
}

export interface ApiPagePage extends Schema.CollectionType {
  collectionName: "pages";
  info: {
    singularName: "page";
    pluralName: "pages";
    displayName: "Page";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    key: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Attribute.Text &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    listing_image: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    meta_title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    meta_description: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    dynamic_content: Attribute.DynamicZone<
      [
        "media-text.hero",
        "text.cta",
        "media.media",
        "media-text.banner",
        "media-text.featured-products",
        "media-text.media-text",
        "media-text.twins",
        "media-text.page-header",
        "text.triplet-text",
        "media-text.editorial-block",
        "media-text.editorial-header",
        "media-text.contacts",
        "text.editorial-story",
        "media-text.timeline",
        "media-text.read-more-editorial",
        "text.infinite-loop",
        "text.statement",
        "media-text.us-ps",
        "media-text.employee-quote",
        "media-text.gallery",
        "text.text-and-cta",
        "media-text.team-teaser",
        "media-text.teaser",
        "media-text.employee-reviews",
        "media-text.narrow-editorial-block",
        "text.text",
        "text.quote",
        "media.side-by-side"
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<"api::page.page", "oneToOne", "admin::user"> &
      Attribute.Private;
    updatedBy: Attribute.Relation<"api::page.page", "oneToOne", "admin::user"> &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::page.page",
      "oneToMany",
      "api::page.page"
    >;
    locale: Attribute.String;
  };
}

export interface ApiShopPageShopPage extends Schema.SingleType {
  collectionName: "shop-pages";
  info: {
    singularName: "shop-page";
    pluralName: "shop-pages";
    displayName: "Shop Page";
    description: "";
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    hero: Attribute.Component<"media-text.hero"> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    twins: Attribute.Component<"media-text.twins"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    banner: Attribute.Component<"media-text.banner"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    products: Attribute.Component<"media-text.featured-products"> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      "api::shop-page.shop-page",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      "api::shop-page.shop-page",
      "oneToOne",
      "admin::user"
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      "api::shop-page.shop-page",
      "oneToMany",
      "api::shop-page.shop-page"
    >;
    locale: Attribute.String;
  };
}

declare module "@strapi/strapi" {
  export module Shared {
    export interface ContentTypes {
      "admin::permission": AdminPermission;
      "admin::user": AdminUser;
      "admin::role": AdminRole;
      "admin::api-token": AdminApiToken;
      "admin::api-token-permission": AdminApiTokenPermission;
      "admin::transfer-token": AdminTransferToken;
      "admin::transfer-token-permission": AdminTransferTokenPermission;
      "plugin::upload.file": PluginUploadFile;
      "plugin::upload.folder": PluginUploadFolder;
      "plugin::i18n.locale": PluginI18NLocale;
      "plugin::users-permissions.permission": PluginUsersPermissionsPermission;
      "plugin::users-permissions.role": PluginUsersPermissionsRole;
      "plugin::users-permissions.user": PluginUsersPermissionsUser;
      "api::article.article": ApiArticleArticle;
      "api::article-category.article-category": ApiArticleCategoryArticleCategory;
      "api::benefit-bar.benefit-bar": ApiBenefitBarBenefitBar;
      "api::contact.contact": ApiContactContact;
      "api::event.event": ApiEventEvent;
      "api::events-overview.events-overview": ApiEventsOverviewEventsOverview;
      "api::footer.footer": ApiFooterFooter;
      "api::microcopy.microcopy": ApiMicrocopyMicrocopy;
      "api::navigation.navigation": ApiNavigationNavigation;
      "api::page.page": ApiPagePage;
      "api::shop-page.shop-page": ApiShopPageShopPage;
    }
  }
}
