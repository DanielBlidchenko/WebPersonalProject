"use client";

import { PropsWithChildren } from "react";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

// Configure Amplify on the client
Amplify.configure(outputs);

export default function AmplifyProvider({ children }: PropsWithChildren) {
  return <Authenticator.Provider>{children}</Authenticator.Provider>;
}
