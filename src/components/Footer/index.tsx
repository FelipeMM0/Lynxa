import supplier from '@/assets/logo-aurora.png'
export function Footer() {
  return (
    <footer className="w-full text-center">
      <p className="text-sm text-muted-foreground">Powered by</p>
      <div className="w-full max-w-4xl mx-auto flex justify-center items-center opacity-70">
        <img src={supplier} />
      </div>
    </footer>
  )
}
