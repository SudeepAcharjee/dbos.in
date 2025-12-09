declare module "firebase/app" {
  export type FirebaseApp = unknown;
  export function initializeApp(config: object): FirebaseApp;
  export function getApps(): FirebaseApp[];
}

declare module "firebase/firestore" {
  import type { FirebaseApp } from "firebase/app";
  export interface Firestore {}
  export function getFirestore(app: FirebaseApp): Firestore;
  export function collection(db: Firestore, path: string): unknown;
  export function query(...args: unknown[]): unknown;
  export function getDocs(q: unknown): Promise<{
    docs: Array<{ id: string; data: () => Record<string, unknown> }>;
  }>;
}

