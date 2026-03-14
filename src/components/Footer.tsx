import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 mt-auto">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-7 w-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Leaf className="h-3.5 w-3.5 text-primary" />
            </div>
            <span className="font-display font-semibold">Nutrisi AI</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            AI-powered food nutrition analysis. Understand what you eat.
          </p>
        </div>
        {[
          { title: "Product", links: ["Scanner", "History", "API"] },
          { title: "Company", links: ["About", "Blog", "Careers"] },
          { title: "Legal", links: ["Privacy", "Terms", "Contact"] },
        ].map((section) => (
          <div key={section.title}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/50 mt-8 pt-6 text-center">
        <p className="text-xs text-muted-foreground">© 2026 Nutrisi AI. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
