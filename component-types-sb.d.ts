import {StoryblokStory} from 'storyblok-generate-ts'

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface ArticleStoryblok {
  date: string;
  title: string;
  content: RichtextStoryblok;
  image: AssetStoryblok;
  link_text: string;
  _uid: string;
  component: "article";
  [k: string]: any;
}

export interface AuthorStoryblok {
  name: string;
  photo: AssetStoryblok;
  job: string;
  rating?: string;
  _uid: string;
  component: "author";
  [k: string]: any;
}

export interface BlogSectionStoryblok {
  badge: string;
  heading: string;
  articles: (StoryblokStory<ArticleStoryblok> | string)[];
  _uid: string;
  component: "blog-section";
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      cached_url?: string;
      linktype?: string;
      [k: string]: any;
    }
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface ButtonStoryblok {
  label?: string;
  link?: MultilinkStoryblok;
  _uid: string;
  component: "button";
  [k: string]: any;
}

export interface ConfigStoryblok {
  footer_description: string;
  navigation?: any;
  footer_nav_headline: string;
  footer_nav: LinkStoryblok[];
  contacts?: any;
  footer_emails: LinkStoryblok[];
  footer_phones: LinkStoryblok[];
  social_links?: any;
  footer_social_links: LinkStoryblok[];
  download_widget?: any;
  download_widget_label: string;
  download_widget_title: string;
  download_widget_description: string;
  download_widget_buttons: ButtonStoryblok[];
  footer_copyright_text: string;
  header_logo?: AssetStoryblok;
  header_nav: (SubmenuStoryblok | LinkStoryblok)[];
  header_buttons?: ButtonStoryblok[];
  _uid: string;
  component: "config";
  [k: string]: any;
}

export interface CtaSectionStoryblok {
  heading: string;
  description: RichtextStoryblok;
  image: AssetStoryblok;
  background_image: AssetStoryblok;
  _uid: string;
  component: "cta-section";
  [k: string]: any;
}

export interface FeatureStoryblok {
  image: AssetStoryblok;
  heading: string;
  description: RichtextStoryblok;
  linkText: string;
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface FeaturesSectionStoryblok {
  badge: string;
  heading: string;
  features: FeatureStoryblok[];
  _uid: string;
  component: "features-section";
  [k: string]: any;
}

export interface HeroSectionStoryblok {
  heading: string;
  description: RichtextStoryblok;
  image: AssetStoryblok;
  _uid: string;
  component: "hero-section";
  [k: string]: any;
}

export interface LinkStoryblok {
  label?: string;
  link: MultilinkStoryblok;
  _uid: string;
  component: "link";
  [k: string]: any;
}

export interface PageStoryblok {
  body: any[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface PlatformSectionStoryblok {
  heading: string;
  description: RichtextStoryblok;
  image: AssetStoryblok;
  cost_heading?: string;
  cost_description?: RichtextStoryblok;
  cost_image?: AssetStoryblok;
  _uid: string;
  component: "platform-section";
  [k: string]: any;
}

export interface PricingPlanStoryblok {
  title: string;
  caption: string;
  price: string;
  billing_description?: string;
  popular?: boolean;
  features: (
    | ""
    | "Unlimited members"
    | "Unlimited feedback"
    | "Weekly team Feedback Friday"
    | "Custom Kudos +9 illustration"
    | "Team feedback history"
    | "Team feedback history (30 items)"
    | "Personal feedback history (6 items)"
    | "Slack integration"
  )[];
  _uid: string;
  component: "pricing_plan";
  [k: string]: any;
}

export type MultiassetStoryblok = {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  [k: string]: any;
}[];

export interface PricingSectionStoryblok {
  badge: string;
  heading: string;
  description: RichtextStoryblok;
  payment_heading?: string;
  payment_images?: MultiassetStoryblok;
  pricing_plans: PricingPlanStoryblok[];
  _uid: string;
  component: "pricing-section";
  [k: string]: any;
}

export interface StepStoryblok {
  name: string;
  heading: string;
  description: RichtextStoryblok;
  icon: AssetStoryblok;
  image: AssetStoryblok;
  _uid: string;
  component: "step";
  [k: string]: any;
}

export interface StepsSectionStoryblok {
  badge: string;
  heading: string;
  steps: StepStoryblok[];
  _uid: string;
  component: "steps-section";
  [k: string]: any;
}

export interface SubmenuStoryblok {
  title: string;
  links: LinkStoryblok[];
  _uid: string;
  component: "submenu";
  [k: string]: any;
}

export interface TestimonialStoryblok {
  text: RichtextStoryblok;
  authors: AuthorStoryblok[];
  _uid: string;
  component: "testimonial";
  [k: string]: any;
}

export interface TestimonialsSectionStoryblok {
  badge: string;
  heading: string;
  background?: AssetStoryblok;
  testimonials: TestimonialStoryblok[];
  _uid: string;
  component: "testimonials-section";
  [k: string]: any;
}

export interface UnderDevStoryblok {
  heading: string;
  description: RichtextStoryblok;
  _uid: string;
  component: "under-dev";
  [k: string]: any;
}
