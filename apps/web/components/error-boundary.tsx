"use client";

import { Button } from "@ui/components/button";
import { catchError, type ErrorInfo } from "next/error";

function ErrorFallback(props: { title?: string }, { retry }: ErrorInfo) {
  return (
    <div className="flex flex-col items-center gap-3 px-5 py-10 text-center">
      <p className="font-medium text-black text-sm dark:text-white">
        {props.title ?? "Algo salió mal."}
      </p>
      <Button onClick={() => retry()} size="sm" variant="secondary">
        Intentar otra vez
      </Button>
    </div>
  );
}

export default catchError(ErrorFallback);
