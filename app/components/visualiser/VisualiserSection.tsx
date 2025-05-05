"use client";

import React, { useState } from "react";
import Visualiser from "@/app/components/visualiser/Visualiser";
import { useEmbeddings } from "@/app/hooks/useEmbeddings";
import vocab from "@/public/visualiser/vocab.json";
import Section from "@/app/components/Section";

export default function VisualiserSection() {
  const [words] = useState<string[]>(vocab as string[]);
  const embeddings = useEmbeddings(words);

  if (!embeddings)
    return (
      <Section>
        <h1 className="text-3xl text-center">Loading embeddings...</h1>
      </Section>
    );

  return <Visualiser vocab={words} embeddings={embeddings} />;
}
