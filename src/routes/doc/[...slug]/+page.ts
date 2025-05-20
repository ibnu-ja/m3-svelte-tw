import type { PageLoad } from "./$types";
import type { Component } from "svelte";
import { error } from "@sveltejs/kit";
//import type { DocFile } from "./index";

type Metadata = {
  title: string | undefined;
  description: string | undefined;
};

type DocFile = {
  default: Component;
  metadata: Metadata;
};

export const load: PageLoad = async (event) => {
  //const { component, title, metadata } = await getDoc(event.params.slug);

  const slug = event.params.slug;

  console.log('slug', slug);

  const modules = import.meta.glob<DocFile>(`/src/content/**/*.md`);
  let match:
    | {
        path: string;
        resolver: () => Promise<DocFile>;
      }
    | undefined = undefined;
  for (const [path, resolver] of Object.entries(modules)) {
    console.log(path, `/src/content/${slug}.md`);
    if (`/src/content/${slug}.md` === path) {
      console.log("match");
      match = { path, resolver: resolver };
      break;
    }
  }

  const props = await match?.resolver();

  console.log('props', props);

  if (!match || !props) {
    error(404);
  }

  console.log('props.default', props.default)

  return {
    title: props.metadata.title,
    description: props.metadata.description,
    component: props.default,
  };
};
