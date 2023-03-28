import axios from "axios";

export default class YoutubeClient {
  constructor() {
    ///axios인스턴스
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      ///환경변수로 key를 넘겨주어야하지만 , 커밋되지 않게 환경변수처리
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }
  async search(params) {
    return this.httpClient.get("search", params);
  }

  async videos(params) {
    return this.httpClient.get("videos", params);
  }
  async channels(params) {
    return this.httpClient.get("channels", params);
  }
}
