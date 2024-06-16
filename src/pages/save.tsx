import { useEffect, useState } from "react";
import VariantTable from "@/components/VariantTable";
import { Variant } from "@/utils/types";

export default function Save() {
  const [variants, setVariants] = useState<Variant[]>([]);

  useEffect(() => {
    const savedVariants = localStorage.getItem("variants");
    if (savedVariants) {
      setVariants(JSON.parse(savedVariants));
    }
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Saved Product Variants</h1>
      <VariantTable variants={variants} />
    </div>
  );
}
