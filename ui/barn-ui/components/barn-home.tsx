/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/23whvZNfzJD
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export function barn-home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="flex flex-col w-64 h-full px-4 py-8 bg-gray-900 border-r">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Vault</h2>
        <div className="flex flex-col justify-between flex-1 mt-6">
          <aside>
            <ul>
              <li>
                <a className="flex items-center px-4 py-2 text-gray-200 bg-gray-700 rounded-md" href="#">
                  <ViewIcon className="w-5 h-5" />
                  <span className="mx-4 font-medium">Dashboard</span>
                </a>
              </li>
              <li>
                <a className="flex items-center px-4 py-2 mt-5 text-gray-200 rounded-md hover:bg-gray-700" href="#">
                  <DatabaseIcon className="w-5 h-5" />
                  <span className="mx-4 font-medium">Secrets Engines</span>
                </a>
              </li>
              <li>
                <a className="flex items-center px-4 py-2 mt-5 text-gray-200 rounded-md hover:bg-gray-700" href="#">
                  <FolderSyncIcon className="w-5 h-5" />
                  <span className="mx-4 font-medium">Secrets Sync</span>
                  <Badge className="ml-auto" variant="secondary">
                    Enterprise
                  </Badge>
                </a>
              </li>
            </ul>
          </aside>
          <div className="px-4 -mx-4">
            <Button className="w-full" variant="ghost">
              Seal Vault
            </Button>
          </div>
        </div>
      </nav>
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="flex justify-between items-center p-4 border-b bg-white">
          <h1 className="text-2xl font-semibold">Vault v1.16.3</h1>
          <div className="flex items-center">
            <UserIcon className="w-5 h-5 text-gray-600" />
            <SettingsIcon className="w-5 h-5 text-gray-600" />
            <SignalIcon className="w-5 h-5 text-gray-600" />
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-wrap -mx-6">
              <section className="w-full lg:w-1/2 px-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-2">Secrets engines</h2>
                  <Link className="block p-4 bg-white rounded-lg shadow-xs" href="#">
                    <h3 className="mb-2 font-semibold text-gray-800">cubbyhole/</h3>
                    <p className="text-gray-600">per-token private secret storage</p>
                  </Link>
                  <Link className="block p-4 mt-4 bg-white rounded-lg shadow-xs" href="#">
                    <h3 className="mb-2 font-semibold text-gray-800">secret/</h3>
                    <p className="text-gray-600">key/value secret storage</p>
                  </Link>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Learn more</h2>
                  <div className="bg-white p-4 rounded-lg shadow-xs">
                    <Link className="block mb-4" href="#">
                      <BookIcon className="inline w-5 h-5 mr-2" />
                      Secrets Management
                    </Link>
                    <Link className="block mb-4" href="#">
                      <PenToolIcon className="inline w-5 h-5 mr-2" />
                      Monitor & Troubleshooting
                    </Link>
                    <Link className="block" href="#">
                      <BadgeIcon className="inline w-5 h-5 mr-2" />
                      Build your own Certificate Authority (CA)
                    </Link>
                  </div>
                </div>
              </section>
              <section className="w-full lg:w-1/2 px-6">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-semibold">Quick actions</h2>
                    <Link className="text-sm text-blue-600 hover:underline" href="#">
                      Details
                    </Link>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-xs">
                    <p className="text-gray-600 mb-4">Supported engines include databases, KV version 2, and PKI.</p>
                    <Input placeholder="Type to select a mount" />
                    <div className="mt-4">
                      <p className="text-gray-600">No mount selected</p>
                      <p className="text-sm text-gray-500">Select a mount above to get started.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Configuration details</h2>
                  <div className="bg-white p-4 rounded-lg shadow-xs">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">API_ADDR</p>
                        <p className="text-gray-800">None</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Default lease TTL</p>
                        <p className="text-gray-800">0</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Max lease TTL</p>
                        <p className="text-gray-800">0</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">TLS</p>
                        <p className="text-gray-800">Disabled</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Log format</p>
                        <p className="text-gray-800">None</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Log level</p>
                        <p className="text-gray-800">None</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Storage type</p>
                        <p className="text-gray-800">inmem</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function BadgeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  )
}


function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function FolderSyncIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5" />
      <path d="M12 10v4h4" />
      <path d="m12 14 1.535-1.605a5 5 0 0 1 8 1.5" />
      <path d="M22 22v-4h-4" />
      <path d="m22 18-1.535 1.605a5 5 0 0 1-8-1.5" />
    </svg>
  )
}


function PenToolIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
      <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
      <path d="m2.3 2.3 7.286 7.286" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function SignalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function ViewIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
      <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
    </svg>
  )
}
