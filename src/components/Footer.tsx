import React from "react";
import { Twitter, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t-2 border-foreground">
      <div className="container mx-auto px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 border-x-2 border-foreground">
          <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-foreground col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black uppercase mb-6 tracking-tighter">GOTHAM_OUTPOST</h3>
            <p className="font-bold text-muted-foreground max-w-md mb-8">
              A synthesis of concrete brutalism and organic warmth. High-contrast, tactile, and structured infrastructure.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white border-2 border-foreground flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-foreground">
            <h4 className="font-black uppercase mb-6 text-sm tracking-[0.2em] text-secondary">Directory</h4>
            <ul className="space-y-4 font-bold uppercase text-sm">
              <li><a href="#" className="hover:text-accent">Protocol</a></li>
              <li><a href="#" className="hover:text-accent">Nodes</a></li>
              <li><a href="#" className="hover:text-accent">Governance</a></li>
              <li><a href="#" className="hover:text-accent">Security</a></li>
            </ul>
          </div>

          <div className="p-8">
            <h4 className="font-black uppercase mb-6 text-sm tracking-[0.2em] text-secondary">System Status</h4>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase">All Sectors Operational</span>
            </div>
            <p className="font-mono text-[10px] text-muted-foreground">
              BUILD: v4.2.0-STABLE <br />
              UPTIME: 99.998% <br />
              LATENCY: 12ms
            </p>
          </div>
        </div>
        
        <div className="border-t-2 border-x-2 border-foreground p-6 text-center font-mono text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
          © 2024 GOTHAM_OUTPOST INFRASTRUCTURE GROUP. ALL RIGHTS RESERVED. [LOC: TX_AUSTIN]
        </div>
      </div>
    </footer>
  );
}
