import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Contact = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <b className="text-muted-foreground uppercase font-semibold text-sm">
        Network
      </b>
      <h2 className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight">
        Entre em Contato
      </h2>
      <p className="mt-3 text-base sm:text-lg text-muted-foreground">
        Quem não se comunica...
      </p>
      <div className="max-w-(--breakpoint-xl) mx-auto pb-24 pt-18 grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 px-6 md:px-0">
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 border border-border/30 shadow-xl/2  text-primary rounded-full">
            <MailIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Email</h3>
          <p className="mt-2 text-muted-foreground">
            Mande a sua mensagem
          </p>
          <Link
            className="mt-4 font-medium text-primary"
            href="mailto:ftconsultoriaeservicos@gmail.com"
          >
            ftconsultoriaeservicos@gmail.com
          </Link>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 border border-border/30 shadow-xl/2  text-primary rounded-full">
            <MapPinIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Escritório</h3>
          <p className="mt-2 text-muted-foreground">
            Nosso Quartel General
          </p>
          <Link
            className="mt-4 font-medium text-primary"
            href="https://www.google.com/maps/place/R.+Profa.+Ang%C3%A9lica+Lopes+de+Castro,+287+-+Valpara%C3%ADso,+Petr%C3%B3polis+-+RJ,+25655-430/@-22.5279684,-43.1993931,206m/data=!3m1!1e3!4m6!3m5!1s0x99084f482de85d:0xd30b83caab1a1992!8m2!3d-22.5279473!4d-43.1994001!16s%2Fg%2F11v1306kld?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            Rua Profª Angélica Lopes de Castro, 287<br />
            Valparaíso, Petrópolis, RJ, 25655-430
          </Link>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 border border-border/30 shadow-xl/2  text-primary rounded-full">
            <PhoneIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Telefone</h3>
          <p className="mt-2 text-muted-foreground">De segunda à sexta das 9h às 17h</p>
          <Link
            className="mt-4 font-medium text-primary"
            href="tel:+5524988273571"
          >
            +55 (24) 988 273 571 
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Contact
