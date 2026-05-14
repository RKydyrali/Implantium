import { useQuery_experimental as useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { doctors as fallbackDoctors } from "@/data/doctors";
import { isConvexConfigured } from "@/lib/convex";
import type { Doctor } from "@/types";

type DoctorsState = {
  doctors: Doctor[];
  isLoading: boolean;
  isUsingFallback: boolean;
  error?: Error;
};

export function usePublicDoctors(): DoctorsState {
  const result = useQuery({
    query: api.doctors.listPublicDoctors,
    args: isConvexConfigured ? {} : "skip",
  });

  if (!isConvexConfigured) {
    return {
      doctors: fallbackDoctors,
      isLoading: false,
      isUsingFallback: true,
    };
  }

  if (result.status === "pending") {
    return {
      doctors: [],
      isLoading: true,
      isUsingFallback: false,
    };
  }

  if (result.status === "error") {
    return {
      doctors: fallbackDoctors,
      isLoading: false,
      isUsingFallback: true,
      error: result.error,
    };
  }

  return {
    doctors: result.data as Doctor[],
    isLoading: false,
    isUsingFallback: false,
  };
}
