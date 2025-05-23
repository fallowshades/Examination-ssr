import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
import { StatusButton } from "~/components/status-button";
export default function Home() {
  const isPending = true
  const form = {status:null}
  return (
    <div>
      <Welcome />
      <Link to='/dashboard'>
        <Button>dashboard</Button>
      </Link>
      <div className='flex items-center justify-between gap-6'>
        <StatusButton
          className='w-full'
          status={isPending ? 'pending' : form.status ?? 'idle'}
          type='submit'
        disabled={true ||isPending}
        >        
          // action
        </StatusButton>
      </div>
    </div>
  )
}
