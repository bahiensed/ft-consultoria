import { Logo03, Logo04, Logo05, Logo06 } from '@/components/logos'

const logos = [Logo03, Logo06, Logo04, Logo05]

const LogoCloud = () => {
  return (
    <div className="flex items-center justify-center mb-20">
      <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {logos.map((Logo, i) => (
            <div
              key={i}
              className="bg-muted border py-4 sm:p-10 rounded flex items-center justify-center"
            >
              <Logo />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoCloud
