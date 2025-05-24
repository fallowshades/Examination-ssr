import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Link, useLoaderData, type ClientLoaderFunctionArgs } from "react-router";
import { Button } from "~/components/ui/button";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
import { StatusButton } from "~/components/status-button";

const slow = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })

export const loader = async () => {
  await slow()
  return {data:'string'}
}

// export const clientLoader = async ({ serverLoader }: ClientLoaderFunctionArgs) => {
//   console.log('client loader entered');

//   const cachedServerData = localStorage.getItem('key');
//   if (cachedServerData) {
//     return JSON.parse(cachedServerData);
//   }

//   const serverData = await serverLoader();
//   localStorage.setItem('key', JSON.stringify(serverData));
//   return serverData;
// };
// clientLoader.hydrate = true;
export const clientLoader = async ({
  serverLoader,
}: ClientLoaderFunctionArgs) => {
  console.log('client loader entered')

  const cachedServerData = localStorage.getItem('key')
  if (cachedServerData) {
    return JSON.parse(cachedServerData)
  }

  const serverData = await serverLoader()
  localStorage.setItem('key', JSON.stringify(serverData))
  return serverData
}
clientLoader.hydrate = true

export default function Home() {
  const data = useLoaderData<typeof loader>()//useCashedLoaderData<typeof loader>()>
  const isPending = true
  const form = { status: null }
  console.log(data)
  return (
    <div>
      <Welcome />
      <Link to='/dashboard'>
        <Button>dashboard</Button>
      </Link>
      <Link to='/dashboard/dates'>
        <Button>dashboard dates</Button>
      </Link>
      <div className='flex items-center justify-between gap-6'>
        <StatusButton
          className='w-full'
          status={isPending ? 'pending' : form.status ?? 'idle'}
          type='submit'
          disabled={true || isPending}>
          // action
        </StatusButton>
      </div>
    </div>
  )
}
