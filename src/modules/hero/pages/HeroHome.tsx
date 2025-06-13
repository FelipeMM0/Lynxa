import { ButtonDefault } from '@/components/common/ButtonDefault'
import { ButtonOutline } from '@/components/common/ButtonOutline'

export const HeroHome = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center bg-background text-foreground">
      <span className="text-xs font-semibold text-primary uppercase tracking-wide bg-muted px-4 py-1 rounded-full mb-4">
        Early Access · Save 20% Today
      </span>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight mb-6">
        Powerful Back-Office Automation <br />
        <span className="text-muted-foreground font-semibold">
          Onboard, Pay, and <span className="text-primary">Do More</span>
        </span>
      </h1>

      <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-10">
        Fueling Business Growth Through Back-Office Automation
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <ButtonDefault description='Book a call'/>
        <ButtonOutline description='Watch Demo'/>
      </div>
    </section>
  )
}
