export function getStoryblokImageUrl(url: string): string {
  // replaced https://a.storyblok.com with https://a2.storyblok.com as a workaround
  // opened issue: https://github.com/storyblok/storyblok/issues/580
  return url.replace('//a.storyblok.com', '//a2.storyblok.com')
}
