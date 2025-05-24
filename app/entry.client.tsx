import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
import { QueryClient } from '@tanstack/react-query'

// import { configureGlobalCache } from 'remix-client-cache'
// export const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//     staleTime:1000*60*5
//   }
//   }
// })

// interface CacheAdapter {
//   getItem(key: string): Promise<any>;
//   setDefaultHighWaterMark(key: string, value: string): Promise<void>;
//   removeItem(key: string): Promise<void>;
// }

// class ReactQueryAdapter implements CacheAdapter {
//   async getItem(key: string) {
//     return queryClient.getQueryData([key])
//   }

//   async setDefaultHighWaterMark(key: string, value: string) {
//     return queryClient.setQueryData([key], value)
//   }

//   async removeItem(key: string) {
//     return queryClient.removeQueries({ queryKay: [key] })
//   }
// }

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>
  );
});
