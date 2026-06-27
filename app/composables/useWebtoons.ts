import otruynyySvit from "@/data/content/webtoons/otruynyy-svit.json";

const webtoons = [otruynyySvit];

export function useWebtoons() {
  function getWebtoons() {
    return webtoons;
  }

  function getWebtoon(slug: string) {
    return webtoons.find((webtoon) => webtoon.slug === slug) ?? null;
  }

  function getChapter(webtoonSlug: string, chapterId: number) {
    const webtoon = getWebtoon(webtoonSlug);

    if (!webtoon) {
      return null;
    }

    return webtoon.chapters.find((chapter) => chapter.id === chapterId) ?? null;
  }

  return {
    getWebtoons,
    getWebtoon,
    getChapter,
  };
}
