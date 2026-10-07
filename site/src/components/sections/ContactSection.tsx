import type { FormEvent } from "react";
import { CONTACT } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

// Sem backend nesta fase (ADR-008): o formulário só monta um mailto: e abre o cliente de
// e-mail do próprio dentista. Não há envio, armazenamento nem confirmação.
// TODO: se o volume de contatos justificar, avaliar um endpoint em Cloudflare Workers (Hono)
// com nova decisão documentada — não antes.
function buildMailto(form: HTMLFormElement): string {
  const data = new FormData(form);
  const field = (key: string) => String(data.get(key) ?? "").trim();

  const name = field("name");
  const subject = `Contato pelo site — ${name}`;
  const body = [
    `Nome: ${name}`,
    `Retorno: ${field("reply")}`,
    "",
    field("message"),
  ].join("\n");

  // encodeURIComponent keeps spaces as %20 — "+" would show up literally in some mail clients.
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const inputClasses =
  "mt-2 block w-full rounded-lg border border-border bg-bg px-4 py-3 text-base text-text-primary " +
  "placeholder:text-text-secondary/70 transition-colors " +
  "hover:border-white/15 focus:border-accent-light focus:outline-none focus-visible:outline-none " +
  "focus:ring-2 focus:ring-accent-dim";

export function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = buildMailto(event.currentTarget);
  };

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="relative isolate overflow-hidden border-t border-border py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="brand-sphere absolute -bottom-[420px] -left-[320px] -z-10 size-[640px] opacity-30 [mask-image:linear-gradient(to_bottom,black_5%,transparent_33%)]"
      />

      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <SectionTitle
              id="contato-title"
              index="04"
              eyebrow="Contato"
              title="Inicie uma conversa sobre o seu caso."
              description="O WhatsApp é o caminho mais rápido. Se preferir e-mail, use o formulário ao lado."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10">
              <Button
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Icon name="whatsapp" size={20} />
                Conversar no WhatsApp
              </Button>
            </div>

            <dl className="mt-10 space-y-6 border-t border-border pt-8">
              <div>
                <dt className="font-display text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
                  Responsável
                </dt>
                <dd className="mt-2 font-display text-lg text-text-primary">{CONTACT.person}</dd>
              </div>
              <div>
                <dt className="font-display text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
                  WhatsApp
                </dt>
                <dd className="mt-2">
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-accent-light underline-offset-4 hover:underline"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-display text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
                  E-mail
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="break-all text-base text-accent-light underline-offset-4 hover:underline"
                  >
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <form
            onSubmit={handleSubmit}
            aria-labelledby="form-title"
            aria-describedby="form-note"
            className="rounded-2xl border border-border bg-bg-surface p-6 md:p-8"
          >
            <h3 id="form-title" className="font-display text-lg font-medium text-text-primary">
              Prefere e-mail?
            </h3>

            <div className="mt-6 space-y-5">
              <label className="block">
                <span className="text-sm text-text-primary">Nome</span>
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Dr(a). Nome Sobrenome"
                  className={inputClasses}
                />
              </label>

              <label className="block">
                <span className="text-sm text-text-primary">E-mail ou telefone para retorno</span>
                <input
                  name="reply"
                  type="text"
                  required
                  autoComplete="email"
                  placeholder="voce@consultorio.com.br"
                  className={inputClasses}
                />
              </label>

              <label className="block">
                <span className="text-sm text-text-primary">Mensagem</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Conte brevemente sobre o caso ou o que você precisa."
                  className={`${inputClasses} resize-y`}
                />
              </label>
            </div>

            <Button type="submit" variant="outline" size="lg" className="mt-6 w-full">
              <Icon name="mail" size={18} />
              Abrir no e-mail
            </Button>

            <p id="form-note" className="mt-4 text-xs leading-relaxed text-text-secondary">
              Ao enviar, seu aplicativo de e-mail será aberto com a mensagem pronta para{" "}
              {CONTACT.email}. Nada é enviado ou armazenado por este site.
            </p>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
