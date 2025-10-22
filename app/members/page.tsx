"use client";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function MembersHome() {
  const { user, signOut } = useAuthenticator();

  return (
    <main style={{ padding: "1rem" }}>
      <h1>Welcome {user?.signInDetails?.loginId ?? user?.username}!</h1>
      <p>This is your private members-only area.</p>
      <button
        onClick={signOut}
        style={{
          background: "#2563eb",
          color: "white",
          padding: "8px 16px",
          borderRadius: "6px",
          marginTop: "12px",
        }}
      >
        Sign Out
      </button>
    </main>
  );
}
