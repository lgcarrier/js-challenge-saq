export class CoveoResult {
    title: string;
    uri: string;
    printableUri: string;
    clickUri: string;
    uniqueId: string;
    excerpt: string;
    firstSentences: string;
    summary: string;
    flags: string;
    hasHtmlVersion: boolean;
    hasMobileHtmlVersion: boolean;
    score: number;
    percentScore: number;
    rankingInfo: string;
    rating: number;
    isTopResult: boolean;
    isRecommendation: boolean;
    titleHighlights: [{}];
    raw: {};
}