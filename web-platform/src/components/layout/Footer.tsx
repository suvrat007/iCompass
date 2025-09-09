export default function Footer() {
  return (
    <footer className="mt-24 border-t border-emerald-800 bg-emerald-950/60">
      <div className="max-w-7xl mx-auto px-4 py-10 text-sm text-emerald-300">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-semibold mb-2">Cultural</div>
            <ul className="space-y-1">
              <li>Stories</li>
              <li>Languages</li>
              <li>Festivals</li>
              <li>Preservation</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Support</div>
            <ul className="space-y-1">
              <li>Help Center</li>
              <li>Guidelines</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Community</div>
            <ul className="space-y-1">
              <li>Partnerships</li>
              <li>Impact Stories</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Newsletter</div>
            <p>Get cultural updates and experiences.</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-emerald-400">© {new Date().getFullYear()} iConnect</div>
      </div>
    </footer>
  );
}


