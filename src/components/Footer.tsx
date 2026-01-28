import { Terminal, Github, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted text-background p-10 md:p-20 border-t-8 border-primary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-primary p-2">
              <Terminal className="text-white" size={24} />
            </div>
            <span className="font-black text-3xl tracking-tighter uppercase">METRO & MESA</span>
          </div>
          <p className="text-background/60 max-w-sm mb-8 font-medium">
            At the intersection of urban necessity and natural beauty. Built for the builders, the skaters, the commuters, and the dreamers.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 border-2 border-background/20 hover:bg-primary transition-colors"><Github size={20} /></a>
            <a href="#" className="p-3 border-2 border-background/20 hover:bg-primary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="p-3 border-2 border-background/20 hover:bg-primary transition-colors"><Instagram size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-black uppercase mb-6 tracking-widest text-primary">Terminals</h4>
          <ul className="space-y-4 font-bold text-sm">
            <li><a href="#" className="hover:text-accent transition-colors">CENTRAL HUB</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">WEST WING</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">BODEGA ANNEX</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">SUBTERRANEAN</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black uppercase mb-6 tracking-widest text-primary">System</h4>
          <ul className="space-y-4 font-bold text-sm">
            <li><a href="#" className="hover:text-accent transition-colors">DOCUMENTATION</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">UI COMPONENTS</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">BRAND ASSETS</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">SUPPORT</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t-2 border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs font-mono opacity-40">© 2024 METRO & MESA SYSTEM // ALL RIGHTS RESERVED</p>
        <p className="text-xs font-mono opacity-40">EST. IN THE LONE STAR STATE</p>
      </div>
    </footer>
  );
}
