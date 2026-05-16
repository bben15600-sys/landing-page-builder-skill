"use client";

import * as faceapi from "@vladmandic/face-api";

const MODEL_URL = "https://cdn.jsdelivr.net/npm/@vladmandic/face-api@latest/model";

let loaded = false;
let loading: Promise<void> | null = null;

export async function loadFaceModels() {
  if (loaded) return;
  if (loading) return loading;
  loading = (async () => {
    await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
    await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
    await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
    loaded = true;
  })();
  return loading;
}

export type FaceDetection = {
  bbox: { x: number; y: number; width: number; height: number };
  embedding: number[];
};

export async function detectFaces(image: HTMLImageElement | HTMLCanvasElement): Promise<FaceDetection[]> {
  await loadFaceModels();
  const results = await faceapi
    .detectAllFaces(image)
    .withFaceLandmarks()
    .withFaceDescriptors();
  return results.map((r) => ({
    bbox: {
      x: r.detection.box.x,
      y: r.detection.box.y,
      width: r.detection.box.width,
      height: r.detection.box.height,
    },
    embedding: Array.from(r.descriptor),
  }));
}

export async function detectFaceFromFile(file: File): Promise<FaceDetection[]> {
  const url = URL.createObjectURL(file);
  try {
    const img = await loadImage(url);
    return await detectFaces(img);
  } finally {
    URL.revokeObjectURL(url);
  }
}

export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}
