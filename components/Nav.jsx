import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/test">Test</Link>
      </li>
    </ul>
  );
}