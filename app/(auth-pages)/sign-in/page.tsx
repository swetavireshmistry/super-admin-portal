import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { LockIcon } from "@/icons";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <form className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
      <h3 className="mb-2 text-center text-xl font-semibold text-gray-900">
        Super Admin Sign In
      </h3>
      <p className="mb-6 text-center text-sm text-gray-500">
        Welcome back! Please enter your credentials.
      </p>

      <div className="mb-4">
        <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </Label>
        <TextInput
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
        />
      </div>

      <div className="mb-4">
        <Label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </Label>
        <TextInput
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          required
        />
        {/* <Link
          href="/forgot-password"
          className="block text-sm text-blue-600 hover:text-blue-500"
        >
          Forgot password?
        </Link> */}
      </div>

      <div className="mb-4 mt-2 flex items-center gap-2">
        <Checkbox
          id="remember-me"
          name="remember-me"
          className="text-sm text-gray-700"
        />
        <Label htmlFor="remember-me" className="text-sm text-gray-700">
          Remember me
        </Label>
      </div>

      <Button
        type="submit"
        label="Sign in"
        formAction={signInAction}
        className="flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-none ring-0 hover:bg-gray-800 focus:outline-none focus:ring-0 focus:ring-gray-500 focus:ring-offset-2"
      >
        <LockIcon />
        Log in
      </Button>
      <FormMessage message={searchParams} />
    </form>
  )
}
