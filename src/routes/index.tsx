import { createFileRoute } from "@tanstack/react-router";
import { FileText, Linkedin } from "lucide-react";
import {
  ActionLink,
  CardBlock,
  DocsLink,
  GithubLink,
  LiveLink,
  ProjectCard,
  TableauLink,
} from "@/components/portfolio/ProjectCard";
import { ProjectImageGrid } from "@/components/portfolio/ImagePlaceholder";
import paFormulario from "@/assets/projects/formulario.png";
import paFlow from "@/assets/projects/power-automate-flow.png";
import paRequestMail from "@/assets/projects/power-automate-email-detail.png";
import paRequestNotify from "@/assets/projects/power-automate-request-approved-notification.png";
import paApprovedMail from "@/assets/projects/power-automate-email-approved.png";
import zipptoLanding from "@/assets/projects/zippto-landing.png";
import zipptoCollections from "@/assets/projects/zippto-collections.png";
import zipptoFront from "@/assets/projects/zippto-flashcard-front.png";
import zipptoBack from "@/assets/projects/zippto-flashcard-back.png";
import payraSplitJiraBoard from "@/assets/projects/payrasplit-jira-board.png";
import payraSplitNotionCover from "@/assets/projects/payrasplit-notion-cover.png";
import payraSplitNotionTimelineBacklog from "@/assets/projects/payrasplit-notion-timeline-backlog.png";
import payraSplitTableau from "@/assets/projects/payrasplit-tableau-dashboard.png";
import churnDashboard from "@/assets/projects/churn-capital-loss-dashboard-v2.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "María José Jiménez — Product Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of María José Jiménez, Industrial Engineering student specialized in digital product development, UX/UI design and AI-powered product building for fintech.",
      },
      { property: "og:title", content: "María José Jiménez — Product Portfolio" },
      {
        property: "og:description",
        content:
          "Data-driven and AI-powered projects in analytics, automation and product, with a focus on fintech.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// NO ELIMINAR: proyecto "Premium Tool Request Automation" guardado en reserva
// (retirado del portafolio en sept 2026, pendiente de volver a mostrarse).
// Esta referencia existe solo para que herramientas de limpieza de archivos
// no usados no borren estas imágenes ni sus imports.
const RESERVED_PREMIUM_TOOL_REQUEST_AUTOMATION_ASSETS = [
  paFormulario,
  paFlow,
  paRequestMail,
  paRequestNotify,
  paApprovedMail,
];
void RESERVED_PREMIUM_TOOL_REQUEST_AUTOMATION_ASSETS;

const SKILLS = [
  "Figma",
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "R",
  "Tableau",
  "Vercel",
  "Supabase",
  "Agile Methodologies (Scrum, Kanban)",
  "UI/UX Design",
  "Generative AI",
  "Product Management",
  "Digital Product Development",
  "Business Analysis",
  "Data Analysis",
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Portfolio
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            María José Jiménez
          </h1>
          <p className="mt-3 text-base font-medium text-muted-foreground sm:text-lg">
            Industrial Engineering Student
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/mariajosejimenez-ingenieraindustrial/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <section aria-labelledby="projects">
          <h2
            id="projects"
            className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Projects
            <span className="mt-2 block h-1 w-14 rounded-full bg-primary" aria-hidden="true" />
          </h2>
          <div className="mt-8 grid gap-6">
            <ProjectCard
              title="Payra Split — Shared Payments Feature"
              tech={["Notion", "Jira", "Tableau", "Scrum"]}
              actions={
                <TableauLink href="https://public.tableau.com/app/profile/maria.jimenez7845/viz/SplitlySplit-DashboardBI/Dashboard1?publish=yes" />
              }
            >
              <CardBlock label="Problem">
                Splitting shared expenses can quickly become a headache. When one person pays for
                everyone, or Laura pays for the food while Felipe pays for the beers, you have to
                keep track of multiple payments, figure out who owes whom, and settle everything at
                the end.
              </CardBlock>
              <CardBlock label="Solution">
                "Payra Split", a feature that allows Payra users to split expenses instantly and
                keep track of who has already paid. The project included planning, execution, and
                post-launch tracking. Notion was used for product planning, Jira to manage execution
                through sprints and tasks, and Tableau to analyze adoption and usage after launch.
              </CardBlock>
              <CardBlock label="Result">
                A simpler way to split expenses, track payments, and see who owes whom, supported by
                adoption and usage metrics to evaluate the feature's performance.
              </CardBlock>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-card-foreground/50">
                    Notion — Product Planning
                  </p>
                  <ProjectImageGrid
                    images={[
                      { src: payraSplitNotionCover, alt: "Payra Split Notion roadmap overview" },
                      { src: payraSplitNotionTimelineBacklog, alt: "Payra Split Notion timeline and backlog board" },
                    ]}
                  />
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-card-foreground/50">
                    Jira — Sprint Execution
                  </p>
                  <div className="mx-auto w-full max-w-2xl">
                    <ProjectImageGrid
                      images={[
                        { src: payraSplitJiraBoard, alt: "Payra Split Jira Scrum board" },
                      ]}
                      columns={1}
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-card-foreground/50">
                    Tableau — Adoption Dashboard
                  </p>
                  <ProjectImageGrid
                    images={[
                      { src: payraSplitTableau, alt: "Payra Split Tableau usage and adoption dashboard" },
                    ]}
                    columns={1}
                  />
                </div>
              </div>
            </ProjectCard>

            <ProjectCard
              title="Zippto — Personalized Flashcards"
              tech={["UI/UX Design", "Supabase", "Vercel", "Claude Code"]}
              actions={
                <>
                  <LiveLink href="https://zippto.vercel.app/landing.html" label="Try Zippto" />
                  <GithubLink href="https://github.com/mariajimenezchiquinquira-bot/Zippto" />
                </>
              }
            >
              <CardBlock label="Problem">
                Traditional flashcard tools can make studying more complicated than it needs to be,
                with complex configurations, unintuitive imports, and confusing review systems.
              </CardBlock>
              <CardBlock label="Solution">
                "Zippto", a web application designed to simplify flashcard creation and review.
                Users can create custom collections and study any topic through a three-deck spaced
                repetition system that prioritizes the cards that need the most practice.
              </CardBlock>
              <CardBlock label="Result">
                A simpler and more intuitive study experience, without complex configurations or
                confusing review systems.
              </CardBlock>
              <ProjectImageGrid
                images={[
                  { src: zipptoLanding, alt: "Zippto landing page" },
                  { src: zipptoCollections, alt: "Zippto flashcard study view" },
                  { src: zipptoBack, alt: "Zippto flashcard flip view" },
                  { src: zipptoFront, alt: "Zippto dashboard view" },
                ]}
              />
            </ProjectCard>
            <ProjectCard
              title="Analysis — Customer Churn & Capital Loss"
              tech={["Power BI", "DAX", "Data Visualization"]}
              actions={
                <GithubLink href="https://github.com/mariajimenezchiquinquira-bot/PowerBi-Customer-Churn-Capital-Loss-Analysis" />
              }
            >
              <CardBlock label="Problem">
                A bank was experiencing high customer churn without a clear understanding of its
                main drivers or the financial impact associated with it.
              </CardBlock>
              <CardBlock label="Approach">
                An exploratory analysis was conducted in Power BI to identify churn patterns,
                compare customer segments, and detect customers at higher risk of leaving.
              </CardBlock>
              <CardBlock label="Results">
                The analysis showed that capital loss was concentrated among customers with high
                account balances, creating a significant financial impact. Inactivity emerged as
                the main warning signal, particularly in Germany, which had the highest churn rate.
              </CardBlock>
              <img
                src={churnDashboard}
                alt="Power BI dashboard: Customer Churn and Capital Loss Analysis"
                loading="lazy"
                className="mx-auto w-full max-w-3xl rounded-md bg-white object-contain"
              />
            </ProjectCard>
          </div>
        </section>

        <section aria-labelledby="skills" className="relative mt-16 sm:mt-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-28 -top-24 h-80 w-80 rounded-full bg-primary/30 blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/25 blur-[100px]"
          />
          <h2
            id="skills"
            className="relative text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Skills & Tools
            <span className="mt-2 block h-1 w-14 rounded-full bg-primary" aria-hidden="true" />
          </h2>
          <ul className="relative mt-8 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary/50">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">© María José Jiménez</p>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/mariajosejimenez-ingenieraindustrial/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
