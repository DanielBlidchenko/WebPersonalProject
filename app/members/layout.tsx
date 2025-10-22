import React from "react";
import AuthenticatorWrapper from "../AuthenticatorWrapper";

export default function MembersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthenticatorWrapper>{children}</AuthenticatorWrapper>;
}
