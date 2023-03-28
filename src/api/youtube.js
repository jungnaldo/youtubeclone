export default class Youtube {
  constructor(apiClient) {
    // apiClient를 외부에서 받아오게 리팩터링
    this.apiClient = apiClient;
  }
  async search(keyword) {
    ///#private() : 클래스 내부 적으로는 호출이 가능하나 , 클래스 외부에서는 호출 할 수 없다
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }
  async channelImageURL(id) {
    return this.apiClient
      .channels({ params: { part: "snippet", id } })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }
  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          relatedToVideoId: id,
        },
      })

      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }
  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })

      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }
  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })

      .then((res) => res.data.items);
  }
}
