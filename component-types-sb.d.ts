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
  badge?: string;
  heading: string;
  vacancies?: (StoryblokStory<VacancyStoryblok> | string)[];
  show_top_divider?: boolean;
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

export interface IntroSectionStoryblok {
  title: string;
  description?: RichtextStoryblok;
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

export interface MissionSectionStoryblok {
  heading: string;
  description: RichtextStoryblok;
  image?: AssetStoryblok;
  _uid: string;
  component: "mission-section";
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
  description: RichtextStoryblok;
  noGapTop?: boolean;
  _uid: string;
  component: "overview-section";
  [k: string]: any;
}

export interface PageStoryblok {
  body: (
    | AuthorStoryblok
    | ButtonStoryblok
    | CtaSectionStoryblok
    | FeatureStoryblok
    | HeroSectionStoryblok
    | IntroSectionStoryblok
    | KeyMetricsSectionStoryblok
    | LinkStoryblok
    | MetricStoryblok
    | MissionSectionStoryblok
    | OverviewSectionStoryblok
    | PlatformSectionStoryblok
    | PricingPlanStoryblok
    | StepStoryblok
    | SubmenuStoryblok
    | UnderDevStoryblok
    | ValueItemStoryblok
    | AllArticlesStoryblok
    | BlogSectionStoryblok
    | CareersSectionStoryblok
    | FeaturesSectionStoryblok
    | PricingSectionStoryblok
    | StepsSectionStoryblok
    | TestimonialStoryblok
    | TestimonialsSectionStoryblok
    | ValuesSectionStoryblok
  )[];
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
  icon: AssetStoryblok;
  image: AssetStoryblok;
  heading: string;
  description: RichtextStoryblok;
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
  badge?: string;
  heading?: string;
  values?: ValueItemStoryblok[];
  _uid: string;
  component: "values-section";
  [k: string]: any;
}
