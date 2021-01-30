export class YoutubeSearchResult {
  kind: any;
  videoId: string;
  title: string;
  thumbnails: {
    default: {
      height: number,
      width: number,
      url: string
    },
    high: {
      height: number,
      width: number,
      url: string
    },
    medium: {
      height: number,
      width: number,
      url: string
    }
  }
  description: string;


  constructor(kind: any, videoId: string, title: string, thumbnails: { default: { height: number; width: number; url: string }; high: { height: number; width: number; url: string }; medium: { height: number; width: number; url: string } }, description: string) {
    this.kind = kind;
    this.videoId = videoId;
    this.title = title;
    this.thumbnails = thumbnails;
    this.description = description;
  }
}
