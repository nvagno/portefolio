import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, MapPin, Calendar } from "lucide-react";
import { useIntl } from "react-intl";

export function WorkSection() {
  const intl = useIntl();

  return (
    <section
      id="works"
      className="relative min-h-[85vh] flex items-center justify-center px-4 dark:bg-white bg-black"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative group order-2 lg:order-1">
          <div className="absolute"></div>
          <div className="relative overflow-hidden">
            <img
              src="work.png"
              alt="Work Illustration"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Card className="bg-white border-none shadow-none bg-transparent">
            <CardHeader className="space-y-2 pb-6">
              <div className="inline-block">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-white text-black dark:bg-black dark:text-white">
                  {intl.formatMessage({
                    id: "works",
                  })}
                </span>
              </div>
              <CardTitle className="text-2xl md:text-3xl dark:font-black font-white leading-tight dark:text-black text-white">
                {intl.formatMessage({
                  id: "job",
                })}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <MapPin className="w-4 h-4 dark:text-black text-white" />
                  <span className="dark:text-black text-white">
                    Numer Madagascar
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {intl.formatMessage({
                      id: "date",
                    })}
                  </span>
                </div>
              </div>

              <div className="h-px bg-black"></div>

              <CardDescription className="text-base leading-relaxed dark:text-gray-800 text-gray-500">
                {intl.formatMessage({
                  id: "contribution",
                })}
              </CardDescription>

              <div className="flex flex-wrap gap-2">
                {[
                  "SpringBoot",
                  "Postgresql",
                  "AWS",
                  "OpenAPI",
                  "CI/CD",
                  "Docker",
                  "JUnit",
                  "YOLOv8",
                ].map((tech) => (
                  <Badge
                    key={tech}
                    className="dark:bg-black bg-white dark:text-white text-black border-2 border-black hover:bg-white hover:text-black transition-colors duration-200 font-bold px-3 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="pt-6">
              <Button className="w-full md:w-auto dark:bg-black bg-white dark:text-white text-black">
                <Github className="w-5 h-5 mr-2" />
                <a href="https://github.com/b-partners/bpartners-api">
                  {intl.formatMessage({
                    id: "source",
                  })}
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
