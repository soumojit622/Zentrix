import { Button } from "@/components/ui/button";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Zap } from "lucide-react";

const page = () => {
  return (
    <>
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 40%, rgb(148 163 184) 40%, rgb(148 163 184) 60%, transparent 60%)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      <div>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg">
          Get Started
          <ArrowRight className=" w-4 h-4" />
        </Button>
      </div>

      <div className="ml-10 mt-10 w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
        <Zap className="w-6 h-6 text-white" />
      </div>
    </>
  );
};

export default page;
