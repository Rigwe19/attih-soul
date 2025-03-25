import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("music", "./routes/music.tsx"),
  route("video", "./routes/video.tsx"),
  route("gallery", "./routes/gallery.tsx"),
  route("live", "./routes/live.tsx"),
  route("services", "./routes/services.tsx"),
  route("about", "./routes/about.tsx"),
  route("contact", "./routes/contact.tsx"),
  route("merch", "./routes/merch.tsx"),
  route("news", "./routes/news.tsx"),
  route("new-release", "./routes/new-release.tsx"),
] satisfies RouteConfig;
