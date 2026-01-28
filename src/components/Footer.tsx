import { Github, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="bg-background text-foreground inline-block p-4 font-black text-4xl mb-6">
              GOTHAM OUTPOST
            </div>
            <p className="text-xl max-w-sm font-medium opacity-60">
              The brutalist intersection of NYC transit grit and Texas ranch textures. Est. 2024. All lines lead West.
            </p>
          </div>
          
          <div>
            <h4 className="font-black mb-6 uppercase tracking-widest text-secondary">Stations</h4>
            <ul className="space-y-4 font-bold uppercase text-sm">
              <li><a href="#" className="hover:text-accent">Bed-Stuy Hub</a></li>
              <li><a href="#" className="hover:text-accent">Marfa Outpost</a></li>
              <li><a href="#" className="hover:text-accent">Austin Transit</a></li>
              <li><a href="#" className="hover:text-accent">Queens Freight</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-6 uppercase tracking-widest text-secondary">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-background text-foreground p-3 hover:bg-secondary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="bg-background text-foreground p-3 hover:bg-secondary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="bg-background text-foreground p-3 hover:bg-secondary transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs font-black uppercase tracking-widest opacity-40">
          <p>© 2024 THE GOTHAM OUTPOST PROVISIONS CO.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Protocol</a>
            <a href="#">Transit Terms</a>
            <a href="#">Freight Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}