// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Discipleship documents
 */
interface DiscipleshipDocumentData {
  /**
   * title field in *Discipleship*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: discipleship.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * week_day field in *Discipleship*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: discipleship.week_day
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  week_day: prismic.KeyTextField;

  /**
   * schedule field in *Discipleship*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: discipleship.schedule
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  schedule: prismic.KeyTextField;

  /**
   * biweekly field in *Discipleship*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: discipleship.biweekly
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  biweekly: prismic.BooleanField;

  /**
   * address field in *Discipleship*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: discipleship.address
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  address: prismic.RichTextField;

  /**
   * leader field in *Discipleship*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: discipleship.leader
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  leader: prismic.KeyTextField;
}

/**
 * Discipleship document from Prismic
 *
 * - **API ID**: `discipleship`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DiscipleshipDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<DiscipleshipDocumentData>,
    "discipleship",
    Lang
  >;

/**
 * Content for Event documents
 */
interface EventDocumentData {
  /**
   * name field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Nome do evento
   * - **API ID Path**: event.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * image field in *Event*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: event.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * description field in *Event*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Descrição do evento
   * - **API ID Path**: event.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * week_day field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Dia da semana
   * - **API ID Path**: event.week_day
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  week_day: prismic.KeyTextField;

  /**
   * schedule field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Horário
   * - **API ID Path**: event.schedule
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  schedule: prismic.KeyTextField;

  /**
   * biweekly field in *Event*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: event.biweekly
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  biweekly: prismic.BooleanField;
}

/**
 * Event document from Prismic
 *
 * - **API ID**: `event`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EventDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<EventDocumentData>, "event", Lang>;

type EventsDocumentDataSlicesSlice =
  | SubscriptionSectionSlice
  | EventsSectionSlice
  | HeaderTextSlice
  | HeaderImageSlice;

/**
 * Content for Events documents
 */
interface EventsDocumentData {
  /**
   * Slice Zone field in *Events*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: events.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<EventsDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Events*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: events.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Title field in *Events*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: events.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Events document from Prismic
 *
 * - **API ID**: `events`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EventsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<EventsDocumentData>,
    "events",
    Lang
  >;

/**
 * Item in *Footer → site_info*
 */
export interface FooterDocumentDataSiteInfoItem {
  /**
   * schedules field in *Footer → site_info*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.site_info[].schedules
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  schedules: prismic.RichTextField;

  /**
   * address field in *Footer → site_info*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.site_info[].address
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  address: prismic.RichTextField;

  /**
   * link_driving field in *Footer → site_info*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.site_info[].link_driving
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_driving: prismic.LinkField;

  /**
   * mail field in *Footer → site_info*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.site_info[].mail
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  mail: prismic.RichTextField;

  /**
   * logo_anglicana field in *Footer → site_info*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.site_info[].logo_anglicana
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo_anglicana: prismic.ImageField<never>;
}

/**
 * Item in *Footer → social_media*
 */
export interface FooterDocumentDataSocialMediaItem {
  /**
   * instagram field in *Footer → social_media*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.social_media[].instagram
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  instagram: prismic.LinkField;

  /**
   * facebook field in *Footer → social_media*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.social_media[].facebook
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  facebook: prismic.LinkField;

  /**
   * youtube field in *Footer → social_media*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.social_media[].youtube
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  youtube: prismic.LinkField;
}

/**
 * Item in *Footer → recommendation*
 */
export interface FooterDocumentDataRecommendationItem {
  /**
   * label field in *Footer → recommendation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.recommendation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * external_link field in *Footer → recommendation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.recommendation[].external_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  external_link: prismic.LinkField;
}

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * site_info field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.site_info[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  site_info: prismic.GroupField<Simplify<FooterDocumentDataSiteInfoItem>>;

  /**
   * social_media field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.social_media[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  social_media: prismic.GroupField<Simplify<FooterDocumentDataSocialMediaItem>>;

  /**
   * recommendation field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.recommendation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  recommendation: prismic.GroupField<
    Simplify<FooterDocumentDataRecommendationItem>
  >;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

type HomeDocumentDataSlicesSlice =
  | SermonsSectionsSlice
  | DiscipleshipGroupsSlice
  | EventsSectionSlice
  | HeaderTextSlice
  | HeaderImageSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Item in *Navbar → menu_itens*
 */
export interface NavbarDocumentDataMenuItensItem {
  /**
   * label field in *Navbar → menu_itens*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.menu_itens[].label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.RichTextField;

  /**
   * link field in *Navbar → menu_itens*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.menu_itens[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Navbar documents
 */
interface NavbarDocumentData {
  /**
   * menu_itens field in *Navbar*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.menu_itens[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menu_itens: prismic.GroupField<Simplify<NavbarDocumentDataMenuItensItem>>;
}

/**
 * Navbar document from Prismic
 *
 * - **API ID**: `navbar`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavbarDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavbarDocumentData>,
    "navbar",
    Lang
  >;

type SermonsDocumentDataSlicesSlice = SermonsSectionsSlice | HeaderImageSlice;

/**
 * Content for Sermons documents
 */
interface SermonsDocumentData {
  /**
   * Slice Zone field in *Sermons*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: sermons.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SermonsDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Sermons*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: sermons.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Title field in *Sermons*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: sermons.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Sermons document from Prismic
 *
 * - **API ID**: `sermons`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SermonsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SermonsDocumentData>,
    "sermons",
    Lang
  >;

/**
 * Content for Subscription documents
 */
interface SubscriptionDocumentData {
  /**
   * title field in *Subscription*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: subscription.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * image field in *Subscription*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: subscription.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * subscription_open_date field in *Subscription*
   *
   * - **Field Type**: Date
   * - **Placeholder**: Data de abertura das inscrições
   * - **API ID Path**: subscription.subscription_open_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  subscription_open_date: prismic.DateField;

  /**
   * subscription_close_date field in *Subscription*
   *
   * - **Field Type**: Date
   * - **Placeholder**: Data de encerramento das inscrições
   * - **API ID Path**: subscription.subscription_close_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  subscription_close_date: prismic.DateField;

  /**
   * subscription_link field in *Subscription*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: subscription.subscription_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  subscription_link: prismic.LinkField;

  /**
   * initial_date field in *Subscription*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: subscription.initial_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  initial_date: prismic.DateField;

  /**
   * final_date field in *Subscription*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: subscription.final_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  final_date: prismic.DateField;

  /**
   * description field in *Subscription*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: subscription.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Subscription document from Prismic
 *
 * - **API ID**: `subscription`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SubscriptionDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<SubscriptionDocumentData>,
    "subscription",
    Lang
  >;

export type AllDocumentTypes =
  | DiscipleshipDocument
  | EventDocument
  | EventsDocument
  | FooterDocument
  | HomeDocument
  | NavbarDocument
  | SermonsDocument
  | SubscriptionDocument;

/**
 * Primary content in *DiscipleshipGroupsSection → Primary*
 */
export interface DiscipleshipGroupsSliceDefaultPrimary {
  /**
   * title field in *DiscipleshipGroupsSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: discipleship_groups.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *DiscipleshipGroupsSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: discipleship_groups.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *DiscipleshipGroupsSection → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: discipleship_groups.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *DiscipleshipGroupsSection → Items*
 */
export interface DiscipleshipGroupsSliceDefaultItem {
  /**
   * Discipleships field in *DiscipleshipGroupsSection → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: discipleship_groups.items[].discipleships
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  discipleships: prismic.ContentRelationshipField;
}

/**
 * Default variation for DiscipleshipGroupsSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DiscipleshipGroupsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<DiscipleshipGroupsSliceDefaultPrimary>,
  Simplify<DiscipleshipGroupsSliceDefaultItem>
>;

/**
 * Slice variation for *DiscipleshipGroupsSection*
 */
type DiscipleshipGroupsSliceVariation = DiscipleshipGroupsSliceDefault;

/**
 * DiscipleshipGroupsSection Shared Slice
 *
 * - **API ID**: `discipleship_groups`
 * - **Description**: DiscipleshipGroups
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type DiscipleshipGroupsSlice = prismic.SharedSlice<
  "discipleship_groups",
  DiscipleshipGroupsSliceVariation
>;

/**
 * Primary content in *EventsSection → Primary*
 */
export interface EventsSectionSliceDefaultPrimary {
  /**
   * title field in *EventsSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Título da seção de eventos
   * - **API ID Path**: events_section.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *EventsSection → Items*
 */
export interface EventsSectionSliceDefaultItem {
  /**
   * events field in *EventsSection → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: events_section.items[].events
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  events: prismic.ContentRelationshipField<"event">;
}

/**
 * Default variation for EventsSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EventsSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<EventsSectionSliceDefaultPrimary>,
  Simplify<EventsSectionSliceDefaultItem>
>;

/**
 * Slice variation for *EventsSection*
 */
type EventsSectionSliceVariation = EventsSectionSliceDefault;

/**
 * EventsSection Shared Slice
 *
 * - **API ID**: `events_section`
 * - **Description**: EventsSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type EventsSectionSlice = prismic.SharedSlice<
  "events_section",
  EventsSectionSliceVariation
>;

/**
 * Primary content in *HeaderImage → Primary*
 */
export interface HeaderImageSliceDefaultPrimary {
  /**
   * background_image field in *HeaderImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header_image.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * label field in *HeaderImage → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: header_image.primary.label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.TitleField;

  /**
   * title field in *HeaderImage → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: header_image.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;
}

/**
 * Default variation for HeaderImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeaderImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeaderImage*
 */
type HeaderImageSliceVariation = HeaderImageSliceDefault;

/**
 * HeaderImage Shared Slice
 *
 * - **API ID**: `header_image`
 * - **Description**: HeaderImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderImageSlice = prismic.SharedSlice<
  "header_image",
  HeaderImageSliceVariation
>;

/**
 * Primary content in *HeaderTextImage → Primary*
 */
export interface HeaderTextSliceDefaultPrimary {
  /**
   * title field in *HeaderTextImage → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header_text.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *HeaderTextImage → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header_text.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *HeaderTextImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header_text.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for HeaderTextImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeaderTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeaderTextImage*
 */
type HeaderTextSliceVariation = HeaderTextSliceDefault;

/**
 * HeaderTextImage Shared Slice
 *
 * - **API ID**: `header_text`
 * - **Description**: HeaderText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderTextSlice = prismic.SharedSlice<
  "header_text",
  HeaderTextSliceVariation
>;

/**
 * Primary content in *SermonsSection → Primary*
 */
export interface SermonsSectionsSliceDefaultPrimary {
  /**
   * title field in *SermonsSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sermons_sections.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Default variation for SermonsSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SermonsSectionsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SermonsSectionsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SermonsSection*
 */
type SermonsSectionsSliceVariation = SermonsSectionsSliceDefault;

/**
 * SermonsSection Shared Slice
 *
 * - **API ID**: `sermons_sections`
 * - **Description**: SermonsSections
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SermonsSectionsSlice = prismic.SharedSlice<
  "sermons_sections",
  SermonsSectionsSliceVariation
>;

/**
 * Primary content in *SubscriptionsSection → Primary*
 */
export interface SubscriptionSectionSliceDefaultPrimary {
  /**
   * title field in *SubscriptionsSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: subscription_section.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *SubscriptionsSection → Items*
 */
export interface SubscriptionSectionSliceDefaultItem {
  /**
   * subscriptions field in *SubscriptionsSection → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: subscription_section.items[].subscriptions
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  subscriptions: prismic.ContentRelationshipField<"subscription">;
}

/**
 * Default variation for SubscriptionsSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubscriptionSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SubscriptionSectionSliceDefaultPrimary>,
  Simplify<SubscriptionSectionSliceDefaultItem>
>;

/**
 * Slice variation for *SubscriptionsSection*
 */
type SubscriptionSectionSliceVariation = SubscriptionSectionSliceDefault;

/**
 * SubscriptionsSection Shared Slice
 *
 * - **API ID**: `subscription_section`
 * - **Description**: SubscriptionSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SubscriptionSectionSlice = prismic.SharedSlice<
  "subscription_section",
  SubscriptionSectionSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      DiscipleshipDocument,
      DiscipleshipDocumentData,
      EventDocument,
      EventDocumentData,
      EventsDocument,
      EventsDocumentData,
      EventsDocumentDataSlicesSlice,
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataSiteInfoItem,
      FooterDocumentDataSocialMediaItem,
      FooterDocumentDataRecommendationItem,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      NavbarDocument,
      NavbarDocumentData,
      NavbarDocumentDataMenuItensItem,
      SermonsDocument,
      SermonsDocumentData,
      SermonsDocumentDataSlicesSlice,
      SubscriptionDocument,
      SubscriptionDocumentData,
      AllDocumentTypes,
      DiscipleshipGroupsSlice,
      DiscipleshipGroupsSliceDefaultPrimary,
      DiscipleshipGroupsSliceDefaultItem,
      DiscipleshipGroupsSliceVariation,
      DiscipleshipGroupsSliceDefault,
      EventsSectionSlice,
      EventsSectionSliceDefaultPrimary,
      EventsSectionSliceDefaultItem,
      EventsSectionSliceVariation,
      EventsSectionSliceDefault,
      HeaderImageSlice,
      HeaderImageSliceDefaultPrimary,
      HeaderImageSliceVariation,
      HeaderImageSliceDefault,
      HeaderTextSlice,
      HeaderTextSliceDefaultPrimary,
      HeaderTextSliceVariation,
      HeaderTextSliceDefault,
      SermonsSectionsSlice,
      SermonsSectionsSliceDefaultPrimary,
      SermonsSectionsSliceVariation,
      SermonsSectionsSliceDefault,
      SubscriptionSectionSlice,
      SubscriptionSectionSliceDefaultPrimary,
      SubscriptionSectionSliceDefaultItem,
      SubscriptionSectionSliceVariation,
      SubscriptionSectionSliceDefault,
    };
  }
}
