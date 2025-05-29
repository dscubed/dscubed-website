'use client';

import { useState, useEffect } from 'react';
import * as use from '@tensorflow-models/universal-sentence-encoder';
import * as tf from '@tensorflow/tfjs';

export function useEmbeddings(words: string[]) {
  const [embeddings, setEmbeddings] = useState<number[][] | null>(null);

  useEffect(() => {
    let mounted = true;

    tf.setBackend('webgl') // or 'cpu' if needed
      .then(() => tf.ready())
      .then(() => use.load())
      .then(model => model.embed(words))
      .then(tensor => tensor.array())
      .then(array => {
        if (mounted) setEmbeddings(array as number[][]);
      })
      .catch(err => {
        console.error('Error loading embeddings:', err);
      });

    return () => {
      mounted = false;
    };
  }, [words]);

  return embeddings;
}
