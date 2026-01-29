import type { InvitationData } from "../lib/invitation";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

type FooterSectionProps = {
  data: InvitationData;
};

export function FooterSection({ data }: FooterSectionProps) {
  return (
    <Section className="bg-paper pb-16">
      <Reveal>
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto h-px w-full max-w-6xl bg-[linear-gradient(90deg,transparent,rgba(58,13,26,0.18),transparent)]" />
          <p className="mt-10 text-sm sm:text-base text-wine/80">
            Cảm ơn bạn đã dành thời gian cho ngày trọng đại của {data.groom.name} &amp; {data.bride.name}.
          </p>
          <p className="mt-3 text-xs tracking-[0.32em] uppercase text-ink/45">Hẹn gặp bạn</p>
        </div>
      </Reveal>
    </Section>
  );
}
