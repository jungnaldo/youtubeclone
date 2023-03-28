import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";
///리액트 제공 크레이트컨텍스트
export const YoutubeApiContext = createContext();
const client = new YoutubeClient();
const youtube = new Youtube(client); ///new FakeYoutube()
///컴포넌트 만들기
export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
