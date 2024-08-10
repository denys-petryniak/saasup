import {StoryblokStory} from 'storyblok-generate-ts'

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

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface ArticleStoryblok {
  date: string;
  body?: (
    | ArticleContentStoryblok
    | ArticleHeroSectionStoryblok
    | AuthorEntryStoryblok
    | ButtonStoryblok
    | CtaSectionStoryblok
    | GridCardStoryblok
    | HeroSectionStoryblok
    | ImageTextSectionStoryblok
    | InfoCardStoryblok
    | IntroSectionStoryblok
    | KeyMetricsSectionStoryblok
    | LinkStoryblok
    | MetricEntryStoryblok
    | OverviewSectionStoryblok
    | PlatformSectionStoryblok
    | PricingCompareSectionStoryblok
    | PricingPlanHeroSectionStoryblok
    | SectionDividerStoryblok
    | SubmenuStoryblok
    | TabbedContentEntryStoryblok
    | UnderDevStoryblok
    | ArticleListStoryblok
    | ArticlesSectionStoryblok
    | CareersSectionStoryblok
    | GridSectionStoryblok
    | PricingPlanListStoryblok
    | PricingSectionStoryblok
    | TabbedContentSectionStoryblok
    | TestimonialEntryStoryblok
    | TestimonialSectionStoryblok
  )[];
  category: StoryblokStory<CategoryPageStoryblok> | StoryblokStory<CategoryStoryblok> | string;
  authors: (StoryblokStory<AuthorStoryblok> | StoryblokStory<AuthorPageStoryblok> | string)[];
  card_image: AssetStoryblok;
  card_heading: string;
  card_heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  card_description: RichtextStoryblok;
  card_link_text: string;
  _uid: string;
  component: "article";
  [k: string]: any;
}

export interface ArticleContentStoryblok {
  hide_top_gap?: boolean;
  content: RichtextStoryblok;
  _uid: string;
  component: "article-content";
  [k: string]: any;
}

export interface ArticleHeroSectionStoryblok {
  image: AssetStoryblok;
  heading: string;
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  _uid: string;
  component: "article-hero-section";
  [k: string]: any;
}

export interface ArticleListStoryblok {
  hide_top_gap?: boolean;
  columns?: "2" | "3";
  _uid: string;
  component: "article-list";
  [k: string]: any;
}

export interface ArticlesSectionStoryblok {
  columns?: "2" | "3";
  hide_top_gap?: boolean;
  headline?: string;
  heading?: string;
  articles: (StoryblokStory<ArticleStoryblok> | StoryblokStory<ArticlePageStoryblok> | string)[];
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  _uid: string;
  component: "articles-section";
  [k: string]: any;
}

export interface AuthorStoryblok {
  photo: AssetStoryblok;
  name: string;
  role?: string;
  body?: (
    | ArticleContentStoryblok
    | ArticleHeroSectionStoryblok
    | AuthorEntryStoryblok
    | ButtonStoryblok
    | CtaSectionStoryblok
    | GridCardStoryblok
    | HeroSectionStoryblok
    | ImageTextSectionStoryblok
    | InfoCardStoryblok
    | IntroSectionStoryblok
    | KeyMetricsSectionStoryblok
    | LinkStoryblok
    | MetricEntryStoryblok
    | OverviewSectionStoryblok
    | PlatformSectionStoryblok
    | PricingCompareSectionStoryblok
    | PricingPlanHeroSectionStoryblok
    | SectionDividerStoryblok
    | SubmenuStoryblok
    | TabbedContentEntryStoryblok
    | UnderDevStoryblok
    | ArticleListStoryblok
    | ArticlesSectionStoryblok
    | CareersSectionStoryblok
    | GridSectionStoryblok
    | PricingPlanListStoryblok
    | PricingSectionStoryblok
    | TabbedContentSectionStoryblok
    | TestimonialEntryStoryblok
    | TestimonialSectionStoryblok
  )[];
  _uid: string;
  component: "author";
  [k: string]: any;
}

export interface AuthorEntryStoryblok {
  photo: AssetStoryblok;
  name: string;
  role: string;
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

export interface CategoryStoryblok {
  heading: string;
  heading_level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  body: (
    | ArticleContentStoryblok
    | ArticleHeroSectionStoryblok
    | AuthorEntryStoryblok
    | ButtonStoryblok
    | CtaSectionStoryblok
    | GridCardStoryblok
    | HeroSectionStoryblok
    | ImageTextSectionStoryblok
    | InfoCardStoryblok
    | IntroSectionStoryblok
    | KeyMetricsSectionStoryblok
    | LinkStoryblok
    | MetricEntryStoryblok
    | OverviewSectionStoryblok
    | PlatformSectionStoryblok
    | PricingCompareSectionStoryblok
    | PricingPlanHeroSectionStoryblok
    | SectionDividerStoryblok
    | SubmenuStoryblok
    | TabbedContentEntryStoryblok
    | UnderDevStoryblok
    | ArticleListStoryblok
    | ArticlesSectionStoryblok
    | CareersSectionStoryblok
    | GridSectionStoryblok
    | PricingPlanListStoryblok
    | PricingSectionStoryblok
    | TabbedContentSectionStoryblok
    | TestimonialEntryStoryblok
    | TestimonialSectionStoryblok
  )[];
  _uid: string;
  component: "category";
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
  heading: string;
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  description: RichtextStoryblok;
  link_label?: string;
  link_url?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "grid-card";
  [k: string]: any;
}

export interface GridSectionStoryblok {
  columns?: "2" | "3";
  alignment?: "left" | "center" | "right";
  headline?: string;
  heading?: string;
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  cards?: (GridCardStoryblok | InfoCardStoryblok)[];
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

export interface InfoCardStoryblok {
  orientation?: "vertical" | "horizontal";
  shadow?: boolean;
  icon?: AssetStoryblok;
  heading?: string;
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  description?: string;
  _uid: string;
  component: "info-card";
  [k: string]: any;
}

export interface IntroSectionStoryblok {
  heading: string;
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  description?: RichtextStoryblok;
  alignment?: "left" | "center" | "right";
  _uid: string;
  component: "intro-section";
  [k: string]: any;
}

export interface KeyMetricsSectionStoryblok {
  metrics?: MetricEntryStoryblok[];
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

export interface MetricEntryStoryblok {
  value?: RichtextStoryblok;
  description?: string;
  _uid: string;
  component: "metric-entry";
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
    | ArticleContentStoryblok
    | ArticleHeroSectionStoryblok
    | AuthorEntryStoryblok
    | ButtonStoryblok
    | CtaSectionStoryblok
    | GridCardStoryblok
    | HeroSectionStoryblok
    | ImageTextSectionStoryblok
    | InfoCardStoryblok
    | IntroSectionStoryblok
    | KeyMetricsSectionStoryblok
    | LinkStoryblok
    | MetricEntryStoryblok
    | OverviewSectionStoryblok
    | PlatformSectionStoryblok
    | PricingCompareSectionStoryblok
    | PricingPlanHeroSectionStoryblok
    | SectionDividerStoryblok
    | SubmenuStoryblok
    | TabbedContentEntryStoryblok
    | UnderDevStoryblok
    | ArticleListStoryblok
    | ArticlesSectionStoryblok
    | CareersSectionStoryblok
    | GridSectionStoryblok
    | PricingPlanListStoryblok
    | PricingSectionStoryblok
    | TabbedContentSectionStoryblok
    | TestimonialEntryStoryblok
    | TestimonialSectionStoryblok
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

export interface TableStoryblok {
  thead: {
    _uid: string;
    value?: string;
    component: number;
    [k: string]: any;
  }[];
  tbody: {
    _uid: string;
    body: {
      _uid?: string;
      value?: string;
      component?: number;
      [k: string]: any;
    }[];
    component: number;
    [k: string]: any;
  }[];
  [k: string]: any;
}

export interface PricingCompareSectionStoryblok {
  headline?: string;
  heading: string;
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  table?: TableStoryblok;
  alignment?: "left" | "center" | "right";
  _uid: string;
  component: "pricing-compare-section";
  [k: string]: any;
}

export interface PricingPlanStoryblok {
  price: string;
  features: (
    | "Unlimited members"
    | "Unlimited feedback"
    | "Weekly team Feedback Friday"
    | "Custom Kudos +9 illustration"
    | "Team feedback history"
    | "Team feedback history (30 items)"
    | "Personal feedback history (6 items)"
    | "Slack integration"
  )[];
  card_headline?: string;
  card_heading?: string;
  card_heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  popular?: boolean;
  body: (
    | ArticleContentStoryblok
    | ArticleHeroSectionStoryblok
    | AuthorEntryStoryblok
    | ButtonStoryblok
    | CtaSectionStoryblok
    | GridCardStoryblok
    | HeroSectionStoryblok
    | ImageTextSectionStoryblok
    | InfoCardStoryblok
    | IntroSectionStoryblok
    | KeyMetricsSectionStoryblok
    | LinkStoryblok
    | MetricEntryStoryblok
    | OverviewSectionStoryblok
    | PlatformSectionStoryblok
    | PricingCompareSectionStoryblok
    | PricingPlanHeroSectionStoryblok
    | SectionDividerStoryblok
    | SubmenuStoryblok
    | TabbedContentEntryStoryblok
    | UnderDevStoryblok
    | ArticleListStoryblok
    | ArticlesSectionStoryblok
    | CareersSectionStoryblok
    | GridSectionStoryblok
    | PricingPlanListStoryblok
    | PricingSectionStoryblok
    | TabbedContentSectionStoryblok
    | TestimonialEntryStoryblok
    | TestimonialSectionStoryblok
  )[];
  card_billing_description?: string;
  _uid: string;
  component: "pricing-plan";
  [k: string]: any;
}

export interface PricingPlanHeroSectionStoryblok {
  heading: string;
  heading_level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  description: string;
  _uid: string;
  component: "pricing-plan-hero-section";
  [k: string]: any;
}

export interface PricingPlanListStoryblok {
  hide_top_gap?: boolean;
  columns?: "2" | "3";
  _uid: string;
  component: "pricing-plan-list";
  [k: string]: any;
}

export interface PricingSectionStoryblok {
  pricing_plans?: (StoryblokStory<PricingPlanPageStoryblok> | string)[];
  headline?: string;
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
  author?: AuthorEntryStoryblok[];
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
