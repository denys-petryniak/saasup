import {StoryblokStory} from 'storyblok-generate-ts'

export interface AllArticlesStoryblok {
  title?: string;
  articles: (StoryblokStory<ArticleStoryblok> | string)[];
  _uid: string;
  component: "all-articles";
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface AssetStoryblok {
  _uid?: string;
  id: number;
  alt?: string;
  name: string;
  focus?: string;
  source?: string;
  title?: string;
  filename: string;
  copyright?: string;
  fieldtype?: string;
  meta_data?: null | {
    [k: string]: any;
  };
  is_external_url?: boolean;
  [k: string]: any;
}

export interface ArticleStoryblok {
  date: string;
  link_text: string;
  title: string;
  content: RichtextStoryblok;
  image: AssetStoryblok;
  _uid: string;
  component: "article";
  [k: string]: any;
}

export interface ArticlesSectionStoryblok {
  columns?: "2" | "3";
  hide_top_gap?: boolean;
  headline?: string;
  heading?: string;
  articles: (StoryblokStory<ArticleStoryblok> | string)[];
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  _uid: string;
  component: "articles-section";
  [k: string]: any;
}

export interface AuthorEntryStoryblok {
  name: string;
  photo: AssetStoryblok;
  job: string;
  rating?: string;
  _uid: string;
  component: "author-entry";
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      target?: "_self" | "_blank";
      [k: string]: any;
    };

export interface ButtonStoryblok {
  label?: string;
  link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "button";
  [k: string]: any;
}

export interface CareersSectionStoryblok {
  vacancies?: (StoryblokStory<VacancyStoryblok> | string)[];
  headline?: string;
  heading: string;
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  _uid: string;
  component: "careers-section";
  [k: string]: any;
}

export interface ConfigStoryblok {
  header_logo?: AssetStoryblok;
  Navigation?: any;
  header_nav: (SubmenuStoryblok | LinkStoryblok)[];
  Buttons?: any;
  header_buttons?: ButtonStoryblok[];
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
  _uid: string;
  component: "config";
  [k: string]: any;
}

export interface CtaSectionStoryblok {
  heading: string;
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  description: RichtextStoryblok;
  image: AssetStoryblok;
  background_image: AssetStoryblok;
  _uid: string;
  component: "cta-section";
  [k: string]: any;
}

export interface GridCardStoryblok {
  image: AssetStoryblok;
  title: string;
  description: RichtextStoryblok;
  link_label?: string;
  link_url?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "grid-card";
  [k: string]: any;
}

export interface GridSectionStoryblok {
  headline?: string;
  heading?: string;
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  cards?: GridCardStoryblok[];
  alignment?: "left" | "center" | "right";
  _uid: string;
  component: "grid-section";
  [k: string]: any;
}

export interface HeroSectionStoryblok {
  heading: string;
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  description: RichtextStoryblok;
  image: AssetStoryblok;
  _uid: string;
  component: "hero-section";
  [k: string]: any;
}

export interface ImageTextSectionStoryblok {
  image?: AssetStoryblok;
  reverse_layout?: boolean;
  heading: string;
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  description: RichtextStoryblok;
  _uid: string;
  component: "image-text-section";
  [k: string]: any;
}

export interface IntroSectionStoryblok {
  title: string;
  title_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  description?: RichtextStoryblok;
  alignment?: "left" | "center" | "right";
  _uid: string;
  component: "intro-section";
  [k: string]: any;
}

export interface KeyMetricsSectionStoryblok {
  metrics?: MetricStoryblok[];
  _uid: string;
  component: "key-metrics-section";
  [k: string]: any;
}

export interface LinkStoryblok {
  label: string;
  link: Exclude<MultilinkStoryblok, {linktype?: "asset"}>;
  _uid: string;
  component: "link";
  [k: string]: any;
}

export interface MetricStoryblok {
  value?: RichtextStoryblok;
  description?: string;
  _uid: string;
  component: "metric";
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

export interface OverviewSectionStoryblok {
  images?: MultiassetStoryblok;
  heading: string;
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  description: RichtextStoryblok;
  hide_top_gap?: boolean;
  _uid: string;
  component: "overview-section";
  [k: string]: any;
}

export interface PageStoryblok {
  body: (
    | AuthorEntryStoryblok
    | ButtonStoryblok
    | CtaSectionStoryblok
    | GridCardStoryblok
    | HeroSectionStoryblok
    | ImageTextSectionStoryblok
    | IntroSectionStoryblok
    | KeyMetricsSectionStoryblok
    | LinkStoryblok
    | MetricStoryblok
    | OverviewSectionStoryblok
    | PlatformSectionStoryblok
    | PricingPlanStoryblok
    | SectionDividerStoryblok
    | SubmenuStoryblok
    | TabbedContentEntryStoryblok
    | UnderDevStoryblok
    | ValueItemStoryblok
    | AllArticlesStoryblok
    | ArticlesSectionStoryblok
    | CareersSectionStoryblok
    | GridSectionStoryblok
    | PricingSectionStoryblok
    | TabbedContentSectionStoryblok
    | TestimonialEntryStoryblok
    | TestimonialSectionStoryblok
    | ValuesSectionStoryblok
  )[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface PlatformSectionStoryblok {
  heading: string;
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  description: RichtextStoryblok;
  image: AssetStoryblok;
  cost_image?: AssetStoryblok;
  cost_description?: RichtextStoryblok;
  cost_heading?: string;
  _uid: string;
  component: "platform-section";
  [k: string]: any;
}

export interface PricingPlanStoryblok {
  title: string;
  headline: string;
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

export interface PricingSectionStoryblok {
  headline?: string;
  pricing_plans: PricingPlanStoryblok[];
  heading: string;
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  description: RichtextStoryblok;
  payment_heading?: string;
  payment_images?: MultiassetStoryblok;
  _uid: string;
  component: "pricing-section";
  [k: string]: any;
}

export interface SectionDividerStoryblok {
  color?: any;
  _uid: string;
  component: "section-divider";
  [k: string]: any;
}

export interface SubmenuStoryblok {
  title: string;
  links: LinkStoryblok[];
  _uid: string;
  component: "submenu";
  [k: string]: any;
}

export interface TabbedContentEntryStoryblok {
  name: string;
  icon: AssetStoryblok;
  image: AssetStoryblok;
  heading: string;
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  description: RichtextStoryblok;
  _uid: string;
  component: "tabbed-content-entry";
  [k: string]: any;
}

export interface TabbedContentSectionStoryblok {
  entries: (StepStoryblok | TabbedContentEntryStoryblok)[];
  headline?: string;
  heading: string;
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  alignment?: "left" | "center" | "right";
  _uid: string;
  component: "tabbed-content-section";
  [k: string]: any;
}

export interface TestimonialEntryStoryblok {
  text: RichtextStoryblok;
  authors: AuthorEntryStoryblok[];
  _uid: string;
  component: "testimonial-entry";
  [k: string]: any;
}

export interface TestimonialSectionStoryblok {
  entries: (TestimonialStoryblok | TestimonialEntryStoryblok)[];
  headline?: string;
  heading: string;
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  background?: AssetStoryblok;
  _uid: string;
  component: "testimonial-section";
  [k: string]: any;
}

export interface UnderDevStoryblok {
  heading: string;
  description: RichtextStoryblok;
  _uid: string;
  component: "under-dev";
  [k: string]: any;
}

export interface VacancyStoryblok {
  title?: string;
  location?: string;
  employment?: string;
  description?: string;
  content?: RichtextStoryblok;
  _uid: string;
  component: "vacancy";
  [k: string]: any;
}

export interface ValueItemStoryblok {
  title?: string;
  description?: string;
  icon?: AssetStoryblok;
  _uid: string;
  component: "value-item";
  [k: string]: any;
}

export interface ValuesSectionStoryblok {
  headline?: string;
  heading?: string;
  values?: ValueItemStoryblok[];
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  _uid: string;
  component: "values-section";
  [k: string]: any;
}
