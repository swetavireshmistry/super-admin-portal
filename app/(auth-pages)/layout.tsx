import { UpDownArrowIcon } from "@/icons";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-md space-y-8">
        <div className="mb-6 flex flex-col items-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-blue-600 text-white">
            <div className="size-6" />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            Taking Title
          </h2>
          <p className="text-sm text-gray-500">Streamline your title&apos;s process</p>
        </div>
        {children}
        <div className="flex items-center justify-center text-xs text-gray-500">
          <UpDownArrowIcon />
          Secure, encrypted connection
        </div>
      </div>
    </div>
  );
}
