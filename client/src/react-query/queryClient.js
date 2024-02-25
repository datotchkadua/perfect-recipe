import { QueryClient } from "@tanstack/react-query";
export const queryClientOptions = {
  defaultOptions: {
    queries: {
      staleTime: 900000, // 15 minutes
      gcTime: 900000, // 15 minutes
      refetchOnWindowFocus: false,
    },
  },
};

export const queryClient = new QueryClient(queryClientOptions);
