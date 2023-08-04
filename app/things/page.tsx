// import PocketBase from 'pocketbase';
//
// export const
//   dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'
// const db = new PocketBase('http://127.0.0.1:8090');
// const data = await db.records.getList('things');

import RootLayout from "../layout";
import CreateThing from "./CreateThing";

async function getThings() {
  const res = await fetch(
    'http://127.0.0.1:8090/api/collections/things/records',
    { cache: "no-store" },
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function ThingsPage() {
  const things = await getThings();
  return (
    <div className="flex flex-col relative top-10">
      {things?.map((thing) => {
        return <Thing key={thing.id} thing={thing} />;
      })}
      <CreateThing />
    </div>
  );
}

function Thing({ thing }: any) {
  const { id, name, description, created } = thing || {};

  return (
    <div className="bg-yellow-50 rounded-lg p-4 m-5 my-4 shadow">
      <h1 className="font-medium">
        <a href={`/things/${id}`}>{name}</a>
      </h1>
      <h5>{description}</h5>
      <p>{created}</p>
    </div>
  );
}
