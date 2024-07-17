export function useStoryId() {
  return useState<string | null>('storyId', () => null)
}
