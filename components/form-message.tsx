export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  return (
    <div className="flex w-full max-w-md flex-col gap-2 text-lg">
      {"success" in message && (
        <div className="border-l-2 border-green-700 px-4 text-green-700">
          {message.success}
        </div>
      )}
      {"error" in message && (
        <div className="border-l-2 border-red-700 px-4 text-red-700">
          {message.error}
        </div>
      )}
      {"message" in message && (
        <div className="border-l-2 border-cyan-700 px-4 text-cyan-700">{message.message}</div>
      )}
    </div>
  );
}
