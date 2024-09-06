"use client";
import React, { useState } from "react";
import MainLayout from "@/layout/layout";
import { SiteBreadcrumb } from "@/modules/site/breadcrump";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

const AccordionDemo = () => (
  <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>
        Yes. It comes with default styles that matches the other components'
        aesthetic.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Is it animated?</AccordionTrigger>
      <AccordionContent>
        Yes. It's animated by default, but you can disable it if you prefer.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

const AccordionCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components' aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`;

const AccordionPage = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(AccordionCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <MainLayout>
      <div className="pt-10 px-6 w-full overflow-y-auto h-screen">
        <SiteBreadcrumb current="Accordion" />
        <h1 className="text-3xl font-bold mt-4 mb-2">Accordion</h1>
        <p className="mb-6 text-sm to-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a
          section of content.
        </p>

        <Tabs defaultValue="preview" className="w-full">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview">
            <div className="p-4 border rounded-md h-[400px] grid place-items-center">
              <div className="w-[400px]">
                <AccordionDemo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="code">
            <div className="relative">
              <pre className="p-4 border rounded-md overflow-x-auto h-[400px] scrollbar-hide bg-foreground text-background">
                <code>{AccordionCode}</code>
              </pre>
              <Button
                className="absolute top-4 right-4"
                variant="outline"
                size="sm"
                onClick={handleCopyCode}
              >
                {isCopied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default AccordionPage;
