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
import nuSplitJiraBoard from "@/assets/projects/nusplit-jira-board.png";
import nuSplitNotionCover from "@/assets/projects/nusplit-notion-cover.png";
import nuSplitNotionTimelineBacklog from "@/assets/projects/nusplit-notion-timeline-backlog.png";
import nuSplitTableau from "@/assets/projects/nusplit-tableau-dashboard.png";

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

const SKILLS = [
  "Figma",
  "Claude Design",
  "Lovable",
  "MCP",
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "Claude Code",
  "R",
  "Tableau",
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
              title="Nu Split — Shared Payments Feature"
              tech={["Notion", "Jira", "Tableau", "Scrum"]}
              actions={
                <TableauLink href="https://public.tableau.com/app/profile/maria.jimenez7845/viz/NuSplit-DashboardBI/Dashboard1?publish=yes" />
              }
            >
              <CardBlock label="Problem">
                Splitting shared expenses can be a hassle. When one person pays for everyone, they
                have to calculate how much each person owes and then tell each friend how much to
                send, often using a calculator, WhatsApp, or another app.
              </CardBlock>
              <CardBlock label="Solution">
                I developed a simulated BI/product case study for "Nu Split," a concept feature that
                lets Nubank users split expenses, request payments, and see who has paid. I planned
                the product lifecycle in Notion, managed sprints in Jira, and built a Tableau
                dashboard using simulated data to analyze adoption and completion rates.
              </CardBlock>
              <CardBlock label="Result">
                An end-to-end case connecting product planning, agile execution, and BI to measure a
                feature from concept to post-launch analysis.
              </CardBlock>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-card-foreground/50">
                    Notion — Product Planning
                  </p>
                  <ProjectImageGrid
                    images={[
                      { src: nuSplitNotionCover, alt: "Nu Split Notion roadmap overview" },
                      { src: nuSplitNotionTimelineBacklog, alt: "Nu Split Notion timeline and backlog board" },
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
                        { src: nuSplitJiraBoard, alt: "Nu Split Jira Scrum board" },
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
                      { src: nuSplitTableau, alt: "Nu Split Tableau usage and adoption dashboard" },
                    ]}
                    columns={1}
                  />
                </div>
              </div>
            </ProjectCard>

            <ProjectCard
              title="Zippto — Custom Flashcards"
              tech={["HTML", "CSS", "JavaScript", "Supabase", "Vercel", "Claude Code"]}
              actions={
                <>
                  <LiveLink href="https://zippto.vercel.app/landing.html" label="Try Zippto" />
                  <GithubLink href="https://github.com/mariajimenezchiquinquira-bot/Zippto" />
                </>
              }
            >
              <CardBlock label="Problem">
                Traditional flashcard tools can make studying harder than necessary, with complex
                setups, unintuitive imports, and confusing review systems.
              </CardBlock>
              <CardBlock label="Solution">
                I built Zippto, a multi-user web app where users sign in with Google, create custom
                collections, and design flashcards for any subject. Its 3-deck spaced repetition
                system prioritizes cards that need the most practice, keeping study sessions focused
                without unnecessary complexity.
              </CardBlock>
              <CardBlock label="Result">
                A fully functional, deployed web app with user-specific data, authentication, a
                custom UI, and intuitive study flows — demonstrating a complete product build from
                UI/UX design to deployment.
              </CardBlock>
              <ProjectImageGrid
                images={[
                  { src: zipptoLanding, alt: "Zippto landing page" },
                  { src: zipptoCollections, alt: "Zippto collections view" },
                  { src: zipptoBack, alt: "Zippto flashcard back side" },
                  { src: zipptoFront, alt: "Zippto flashcard front side" },
                ]}
              />
            </ProjectCard>
            <ProjectCard
              title="Premium Tool Request Automation"
              tech={["Power Automate"]}
              actions={
                <DocsLink href="/docs/premium-tool-request-automation-technical-documentation.pdf" />
              }
            >
              <CardBlock label="Problem">
                Requesting premium tools like AI, design, or productivity software was a scattered
                process across emails and messages, with manual approvals and little traceability.
              </CardBlock>
              <CardBlock label="Solution">
                I developed a Power Automate flow that centralizes and automates the entire process.
                Users submit requests through Microsoft Forms with details like tool, justification,
                cost, and license duration. The flow then routes the request for approval, notifies
                the requester of the outcome, and logs every decision automatically.
              </CardBlock>
              <CardBlock label="Result">
                Turned a manual, scattered process into a structured, automated, and fully traceable
                workflow, reducing operational overhead and ensuring every request is properly
                documented.
              </CardBlock>
              <div className="mx-auto grid w-full max-w-3xl gap-3 sm:grid-cols-2">
                <a
                  href={paFlow}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-md sm:row-span-2"
                >
                  <img
                    src={paFlow}
                    alt="Power Automate flow running successfully"
                    loading="lazy"
                    className="h-full w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </a>
                {[
                  { src: paFormulario, alt: "Microsoft Forms premium tool request form" },
                  { src: paRequestMail, alt: "Approval email with the request details" },
                ].map((image) => (
                  <a
                    key={image.src}
                    href={image.src}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-md"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="aspect-video w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>
                ))}
                {[
                  { src: paApprovedMail, alt: "Approval confirmation email for the administrator" },
                  { src: paRequestNotify, alt: "Notification that the request was approved" },
                ].map((image) => (
                  <a
                    key={image.src}
                    href={image.src}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-md"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="aspect-video w-full bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </a>
                ))}
              </div>
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
            Skills
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
          <p className="text-sm text-muted-foreground">© 2026 María José Jiménez</p>
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
