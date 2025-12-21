"use client";

import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ExternalLink, Github, HeartIcon } from "lucide-react";
import { useIntl } from "react-intl";

export function PortfolioSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  console.log("current :", current);

  const intl = useIntl();

  let projects = [
    {
      title: "Re:Plate",
      img: "replate.png",
      description: intl.formatMessage({
        id: "replate",
      }),
      technologies: ["Next.js", "Postgresql", "Mistral AI", "Tailwind"],
    },
    {
      title: "Re:Plate",
      img: "replate.png",
      description: intl.formatMessage({
        id: "replate",
      }),
      technologies: ["Next.js", "Postgresql", "Mistral AI", "Tailwind"],
    },
    {
      title: "Re:Plate",
      img: "replate.png",
      description: intl.formatMessage({
        id: "replate",
      }),
      technologies: ["Next.js", "Postgresql", "Mistral AI", "Tailwind"],
    },
    {
      title: "Re:Plate",
      img: "replate.png",
      description: intl.formatMessage({
        id: "replate",
      }),
      technologies: ["Next.js", "Postgresql", "Mistral AI", "Tailwind"],
    },
    {
      title: "Re:Plate",
      img: "replate.png",
      description: intl.formatMessage({
        id: "replate",
      }),
      technologies: ["Next.js", "Postgresql", "Mistral AI", "Tailwind"],
    },
  ];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      id="portfolio"
      className="mx-auto max-w-[80vw] min-h-[85vh] items-center flex"
    >
      <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
        <CarouselContent className="py-3">
          {projects.map((pj, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "",
                "basis-full",
                "sm:basis-1/2",
                "lg:basis-1/3",
                "xl:basis-[33%]",
                {},
              )}
            >
              <div
                className={cn(
                  "aspect-square transition-transform duration-500 relative max-w-md rounded-xl pt-0 shadow-lg",
                  {
                    "scale-[0.6]": index !== current - 1,
                  },
                )}
              >
                <div className="flex h-60 items-center justify-center">
                  <img src={pj.img} alt="Banner" className="w-full" />
                </div>
                <Card className="border-none">
                  <CardHeader>
                    <CardTitle>{pj.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      {pj.technologies.map((tech, k) => (
                        <Badge key={k} variant="outline" className="rounded-sm">
                          {tech}
                        </Badge>
                      ))}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{pj.description}</p>
                  </CardContent>
                  <CardFooter className="justify-between gap-3 max-sm:flex-col max-sm:items-stretch">
                    <Button size="lg">
                      <ExternalLink />
                      Démo
                    </Button>
                    <Button size="lg">
                      <Github />
                      {intl.formatMessage({
                        id: "source",
                      })}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
