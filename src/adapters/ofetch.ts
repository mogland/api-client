import { ofetch } from "ofetch";
import { IAdapter } from "../interfaces/adapter";

const $ = ofetch.create({});

export const ofetchAdapter: IAdapter<typeof ofetch> = Object.preventExtensions({
  get default() {
    return $;
  },

  get(url, options) {
    return $(url, options);
  },

  post(url, options) {
    return $(url, {
      ...options,
      method: "POST",
    });
  },

  put(url, options) {
    return $(url, {
      ...options,
      method: "PUT",
    });
  },

  patch(url, options) {
    return $(url, {
      ...options,
      method: "PATCH",
    });
  },

  delete(url, options) {
    return $(url, {
      ...options,
      method: "DELETE",
    });
  },
});
