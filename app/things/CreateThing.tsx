'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateThing() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const router = useRouter();

  async function create() {
      await fetch('http://localhost:8090/api/collections/things/records', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'name': name,
          'description': description,
        })
      });

    setName('');
    setDescription('');

    router.refresh();
  }

  return (
    <form onSubmit={create}>
      <h3>New Thing</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="bg-black rounded-lg" type="submit">
        Add new Thing
      </button>

    </form>
  )
}
