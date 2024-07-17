"use client";
import {
  CardDemo,
  Card,
  CardTitle,
  CardDescription,
  CardSkeletonContainer,
} from "./code-alangs";

export function Codes() {
  return (
    <div>
      <CardDemo />
      <Card>
        <CardTitle>Another Card</CardTitle>
        <CardDescription>This is a card on a different page.</CardDescription>
      </Card>
    </div>
  );
}
