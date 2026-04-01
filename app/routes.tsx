import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Models } from "./components/Models";
import { ModelDetail } from "./components/ModelDetail";
import { About } from "./components/About";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "assets", Component: Models },
      { path: "assets/:modelId", Component: ModelDetail },
      { path: "about", Component: About },
      { path: "resume", Component: Resume },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);