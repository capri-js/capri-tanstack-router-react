import { StrictMode } from "react";
import { RenderFunction, renderToString } from "@capri-js/react/server";
import { createMemoryHistory, RouterProvider } from "@tanstack/react-router";

import { createRouter } from "./router";

async function getRouter(url: string) {
  const router = createRouter();

  router.reset();
  const memoryHistory = createMemoryHistory({
    initialEntries: [url],
  });

  router.update({
    history: memoryHistory,
  });

  router.mount()(); // and unsubscribe immediately
  return router;
}

export const render: RenderFunction = async (url: string) => {
  const router = await getRouter(url);
  await router.load();
  return {
    "#app": await renderToString(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    ),
  };
};
