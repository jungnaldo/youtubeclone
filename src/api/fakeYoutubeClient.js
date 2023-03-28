import axios from "axios";

export default class FakeYoutubeClient {
  constructor() {
    ///생성할때 아무것도 전달 하지 않아도 된다.
  }
  async search({ params }) {
    return params.relatedToVideoId
      ? axios.get("/videos/related.json")
      : axios.get("/videos/search.json");
  }

  async videos() {
    return axios.get("/videos/popular.json");
  }
  async channels() {
    return axios.get("/videos/channel.json");
  }
}
