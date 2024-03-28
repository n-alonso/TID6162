import type { Schema, Attribute } from "@strapi/strapi";

export interface MediaTextBanner extends Schema.Component {
  collectionName: "components_image_text_banners";
  info: {
    displayName: "Banner";
    description: "";
  };
  attributes: {
    content: Attribute.Component<"media-text.media-text"> & Attribute.Required;
  };
}

export interface MediaTextContacts extends Schema.Component {
  collectionName: "components_media_text_contacts";
  info: {
    displayName: "Contacts";
    description: "";
  };
  attributes: {
    contacts: Attribute.Relation<
      "media-text.contacts",
      "oneToMany",
      "api::contact.contact"
    >;
    headline: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
  };
}

export interface MediaTextEditorialBlock extends Schema.Component {
  collectionName: "components_media_text_editorial_blocks";
  info: {
    displayName: "Editorial Block";
  };
  attributes: {
    content: Attribute.Component<"media-text.media-description"> &
      Attribute.Required;
    text_position: Attribute.Enumeration<["left", "right"]> &
      Attribute.Required;
  };
}

export interface MediaTextEditorialHeader extends Schema.Component {
  collectionName: "components_media_text_editorial_headers";
  info: {
    displayName: "Editorial Header";
    description: "";
  };
  attributes: {
    headline: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
    subheadline: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
    media: Attribute.Component<"media.media"> & Attribute.Required;
  };
}

export interface MediaTextEmployeeQuote extends Schema.Component {
  collectionName: "components_media_text_employee_quotes";
  info: {
    displayName: "Employee Quote";
    description: "";
  };
  attributes: {
    quote: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    role: Attribute.String;
    image_left: Attribute.Component<"media.media"> & Attribute.Required;
    image_right: Attribute.Component<"media.media"> & Attribute.Required;
  };
}

export interface MediaTextEmployeeReviews extends Schema.Component {
  collectionName: "components_media_text_employee_reviews";
  info: {
    displayName: "Employee Reviews";
    description: "";
  };
  attributes: {
    badges: Attribute.Component<"media.badge", true> & Attribute.Required;
    employee_reviews_cta: Attribute.Component<"text.cta">;
  };
}

export interface MediaTextFeaturedProducts extends Schema.Component {
  collectionName: "components_media_text_featured_products";
  info: {
    displayName: "Featured products";
    description: "";
  };
  attributes: {
    products: Attribute.JSON &
      Attribute.CustomField<
        "plugin::shopify-fields.multiple-products",
        {
          fields: ["handle", "image", "title", "images", "published_at", "id"];
        }
      >;
    cta: Attribute.Component<"text.cta"> & Attribute.Required;
    headline: Attribute.String & Attribute.Required;
  };
}

export interface MediaTextGallery extends Schema.Component {
  collectionName: "components_media_text_galleries";
  info: {
    displayName: "Gallery";
    description: "";
  };
  attributes: {
    gallery_media: Attribute.Component<"media.media", true> &
      Attribute.Required;
    gallery_headline: Attribute.RichText &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
    gallery_description: Attribute.RichText &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
  };
}

export interface MediaTextHero extends Schema.Component {
  collectionName: "components_image_text_heroes";
  info: {
    displayName: "Hero";
    description: "";
  };
  attributes: {
    content: Attribute.Component<"media-text.media-text"> & Attribute.Required;
    full_height: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface MediaTextMediaDescription extends Schema.Component {
  collectionName: "components_media_text_media_descriptions";
  info: {
    displayName: "Media Description";
    description: "";
  };
  attributes: {
    headline: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
    media: Attribute.Component<"media.media"> & Attribute.Required;
  };
}

export interface MediaTextMediaText extends Schema.Component {
  collectionName: "components_media_text_media_texts";
  info: {
    displayName: "Media text";
    description: "Media and Text reused across multiple components";
  };
  attributes: {
    headline: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
    subheadline: Attribute.RichText &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
    cta: Attribute.Component<"text.cta"> & Attribute.Required;
    media: Attribute.Component<"media.media"> & Attribute.Required;
  };
}

export interface MediaTextNarrowEditorialBlock extends Schema.Component {
  collectionName: "components_media_text_narrow_editorial_blocks";
  info: {
    displayName: "Narrow Editorial Block";
  };
  attributes: {
    content: Attribute.Component<"media-text.media-description"> &
      Attribute.Required;
    text_block_position: Attribute.Enumeration<["left", "right"]> &
      Attribute.Required;
  };
}

export interface MediaTextPageHeader extends Schema.Component {
  collectionName: "components_media_text_page_headers";
  info: {
    displayName: "Page Header";
  };
  attributes: {
    content: Attribute.Component<"media-text.media-description"> &
      Attribute.Required;
  };
}

export interface MediaTextPromotionCard extends Schema.Component {
  collectionName: "components_media_text_promotion_cards";
  info: {
    displayName: "Promotion Card";
    description: "";
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    cta: Attribute.Component<"text.cta"> & Attribute.Required;
  };
}

export interface MediaTextReadMoreEditorial extends Schema.Component {
  collectionName: "components_media_text_read_more_editorials";
  info: {
    displayName: "Read More Editorial";
  };
  attributes: {
    pages: Attribute.Relation<
      "media-text.read-more-editorial",
      "oneToMany",
      "api::page.page"
    >;
  };
}

export interface MediaTextTeamTeaser extends Schema.Component {
  collectionName: "components_media_text_team_teasers";
  info: {
    displayName: "Team Teaser";
    description: "";
  };
  attributes: {
    team_headline: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
    team_description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
    cta: Attribute.Component<"text.cta"> & Attribute.Required;
    contacts: Attribute.Relation<
      "media-text.team-teaser",
      "oneToMany",
      "api::contact.contact"
    >;
  };
}

export interface MediaTextTeaser extends Schema.Component {
  collectionName: "components_media_text_teasers";
  info: {
    displayName: "Teaser";
  };
  attributes: {
    teaser_content: Attribute.Component<"media-text.media-description">;
    cta: Attribute.Component<"text.cta"> & Attribute.Required;
  };
}

export interface MediaTextTimeline extends Schema.Component {
  collectionName: "components_media_text_timelines";
  info: {
    displayName: "Timeline";
    description: "";
  };
  attributes: {
    year: Attribute.String & Attribute.Required;
    year_position: Attribute.Enumeration<["top", "centre", "bottom"]> &
      Attribute.Required;
    timeline_text_position: Attribute.Enumeration<["left", "right"]> &
      Attribute.Required;
    content: Attribute.Component<"media-text.media-description"> &
      Attribute.Required;
  };
}

export interface MediaTextTwins extends Schema.Component {
  collectionName: "components_media_text_twins";
  info: {
    displayName: "Twins";
    description: "";
  };
  attributes: {
    left: Attribute.Component<"media-text.media-text"> & Attribute.Required;
    right: Attribute.Component<"media-text.media-text"> & Attribute.Required;
  };
}

export interface MediaTextUsPs extends Schema.Component {
  collectionName: "components_media_text_us_ps";
  info: {
    displayName: "USPs";
    description: "";
  };
  attributes: {
    usp_items: Attribute.Component<"media-text.usp-item", true>;
    usp_headline: Attribute.RichText &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
    description: Attribute.RichText &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
  };
}

export interface MediaTextUspItem extends Schema.Component {
  collectionName: "components_media_text_usp_items";
  info: {
    displayName: "USP Item";
  };
  attributes: {
    icon: Attribute.Media;
    headline: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
  };
}

export interface MediaBadge extends Schema.Component {
  collectionName: "components_media_badges";
  info: {
    displayName: "Badge";
  };
  attributes: {
    asset: Attribute.Media & Attribute.Required;
    url: Attribute.String;
  };
}

export interface MediaMedia extends Schema.Component {
  collectionName: "components_media_media";
  info: {
    displayName: "Media";
    description: "";
  };
  attributes: {
    asset: Attribute.Media & Attribute.Required;
    mobile_asset: Attribute.Media;
    caption: Attribute.RichText &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
    video_url: Attribute.String;
    video_caption: Attribute.RichText &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
  };
}

export interface MediaSideBySide extends Schema.Component {
  collectionName: "components_media_side_by_sides";
  info: {
    displayName: "Side by Side";
  };
  attributes: {
    left: Attribute.Component<"media.media"> & Attribute.Required;
    right: Attribute.Component<"media.media"> & Attribute.Required;
  };
}

export interface TextColumn extends Schema.Component {
  collectionName: "components_navigation_columns";
  info: {
    displayName: "Column";
    description: "";
  };
  attributes: {
    items: Attribute.Component<"text.item", true>;
    title: Attribute.Component<"text.item"> & Attribute.Required;
  };
}

export interface TextCtaOptional extends Schema.Component {
  collectionName: "components_text_cta_optionals";
  info: {
    displayName: "cta optional";
    description: "";
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String;
  };
}

export interface TextCta extends Schema.Component {
  collectionName: "components_text_ctas";
  info: {
    displayName: "cta";
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface TextEditorialStory extends Schema.Component {
  collectionName: "components_text_editorial_stories";
  info: {
    displayName: "Editorial Story";
  };
  attributes: {
    headline: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
    description_left: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
    description_right: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
  };
}

export interface TextInfiniteLoopItem extends Schema.Component {
  collectionName: "components_text_infinite_loop_items";
  info: {
    displayName: "Infinite Loop Item";
    description: "";
  };
  attributes: {
    headline: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 5;
      }>;
    description: Attribute.RichText &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
  };
}

export interface TextInfiniteLoop extends Schema.Component {
  collectionName: "components_text_infinite_loops";
  info: {
    displayName: "Infinite Loop";
  };
  attributes: {
    items: Attribute.Component<"text.infinite-loop-item", true> &
      Attribute.Required;
  };
}

export interface TextItem extends Schema.Component {
  collectionName: "components_navigation_items";
  info: {
    displayName: "Column Item";
    description: "";
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface TextQuote extends Schema.Component {
  collectionName: "components_text_quotes";
  info: {
    displayName: "Quote";
  };
  attributes: {
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
  };
}

export interface TextStatement extends Schema.Component {
  collectionName: "components_text_statements";
  info: {
    displayName: "Statement";
    description: "";
  };
  attributes: {
    statement_headline: Attribute.RichText &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
    text_slide: Attribute.String;
  };
}

export interface TextTextAndCta extends Schema.Component {
  collectionName: "components_text_text_and_ctas";
  info: {
    displayName: "Text & CTA";
  };
  attributes: {
    headline: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
    cta: Attribute.Component<"text.cta"> & Attribute.Required;
  };
}

export interface TextText extends Schema.Component {
  collectionName: "components_text_texts";
  info: {
    displayName: "Text";
  };
  attributes: {
    text: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
  };
}

export interface TextTripletColumn extends Schema.Component {
  collectionName: "components_text_triplet_columns";
  info: {
    displayName: "Triplet column";
    description: "";
  };
  attributes: {
    headline: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        "plugin::ckeditor.CKEditor",
        {
          output: "HTML";
          preset: "light";
        }
      >;
    contact: Attribute.Relation<
      "text.triplet-column",
      "oneToOne",
      "api::contact.contact"
    >;
  };
}

export interface TextTripletText extends Schema.Component {
  collectionName: "components_text_triplet_texts";
  info: {
    displayName: "Triplet Text";
  };
  attributes: {
    columns: Attribute.Component<"text.triplet-column", true> &
      Attribute.Required;
  };
}

declare module "@strapi/strapi" {
  export module Shared {
    export interface Components {
      "media-text.banner": MediaTextBanner;
      "media-text.contacts": MediaTextContacts;
      "media-text.editorial-block": MediaTextEditorialBlock;
      "media-text.editorial-header": MediaTextEditorialHeader;
      "media-text.employee-quote": MediaTextEmployeeQuote;
      "media-text.employee-reviews": MediaTextEmployeeReviews;
      "media-text.featured-products": MediaTextFeaturedProducts;
      "media-text.gallery": MediaTextGallery;
      "media-text.hero": MediaTextHero;
      "media-text.media-description": MediaTextMediaDescription;
      "media-text.media-text": MediaTextMediaText;
      "media-text.narrow-editorial-block": MediaTextNarrowEditorialBlock;
      "media-text.page-header": MediaTextPageHeader;
      "media-text.promotion-card": MediaTextPromotionCard;
      "media-text.read-more-editorial": MediaTextReadMoreEditorial;
      "media-text.team-teaser": MediaTextTeamTeaser;
      "media-text.teaser": MediaTextTeaser;
      "media-text.timeline": MediaTextTimeline;
      "media-text.twins": MediaTextTwins;
      "media-text.us-ps": MediaTextUsPs;
      "media-text.usp-item": MediaTextUspItem;
      "media.badge": MediaBadge;
      "media.media": MediaMedia;
      "media.side-by-side": MediaSideBySide;
      "text.column": TextColumn;
      "text.cta-optional": TextCtaOptional;
      "text.cta": TextCta;
      "text.editorial-story": TextEditorialStory;
      "text.infinite-loop-item": TextInfiniteLoopItem;
      "text.infinite-loop": TextInfiniteLoop;
      "text.item": TextItem;
      "text.quote": TextQuote;
      "text.statement": TextStatement;
      "text.text-and-cta": TextTextAndCta;
      "text.text": TextText;
      "text.triplet-column": TextTripletColumn;
      "text.triplet-text": TextTripletText;
    }
  }
}
