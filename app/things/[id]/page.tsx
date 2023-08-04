
async function getThing(thingId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/things/records/${thingId}`,
    {
      next: {revalidate: 10}
    }
  )
  const data = await res.json();
  return data;
}

export default async function Thing({params}: any) {
  const thing = await getThing(params.id);
  return (
    <div className="bg-yellow-50 p-5 rounded-lg">
      <p className="text-yellow-300">ID:{thing.id}</p>
      <h1 className="text-center text-xl text-yellow-800 font-bold">{thing.name}</h1>
      <p className="text-stone-400 opacity-95">{thing.description}</p>
    </div>
  )
}
