"use-client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";

interface FreeCounterProps {
  apiLimitCount: number;
}
const FreeCounter = ({ apiLimitCount = 0 }: FreeCounterProps) => {
  /**
   * We use this state and effect to avoid the hydration error
   */
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div></div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
