import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#1B4332]/10 bg-[#1B4332] text-[#FAF6EC]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <span
            className="text-xl font-semibold tracking-tight"
            style={{ fontFamily: "'Fraunces', 'Georgia', serif" }}
          >
            Cheptulu Sunrise Academy
          </span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#FAF6EC]/70">
            Nurturing character and academic excellence, one form at a time.
          </p>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9971C]">
            Quick Links
          </span>
          <ul className="mt-4 space-y-2 text-sm text-[#FAF6EC]/80">
            <li>
              <Link href="/events" className="hover:text-[#FAF6EC]">
                Events
              </Link>
            </li>
            <li>
              <Link href="/admissions" className="hover:text-[#FAF6EC]">
                Admissions
              </Link>
            </li>
            <li>
              <Link href="/admin/login" className="hover:text-[#FAF6EC]">
                Admin Login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9971C]">
            Contact
          </span>
          <ul className="mt-4 space-y-2 text-sm text-[#FAF6EC]/80">
            <li>Cheptulu Sunrise Academy, Kenya</li>
            <li>cheptulu_sunrise@yahoo.com</li>
            <li>+254 115 811 222</li>
          </ul>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9971C]">
            Social Media
          </span>
          <ul>
            <li>
              <Image 
              src="/Image/facebook.avif"
              alt="Facebook-logo"
              width={40}
              height={20}
              />

            </li>
            <li>
                <Image
                src=""
                alt=""
                />
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#FAF6EC]/10 px-5 py-5 text-center text-xs text-[#FAF6EC]/50 sm:px-8">
        © {new Date().getFullYear()} Cheptulu Sunrise Academy . All rights
        reserved.
      </div>
    </footer>
  );
}








