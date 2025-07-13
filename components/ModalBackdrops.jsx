"use client";

import { useRouter } from "next/navigation";

export default function ModalBackdrops() {
  const router = useRouter();
  return <div className="modal-backdrop" onClick={router.back} />;
}
