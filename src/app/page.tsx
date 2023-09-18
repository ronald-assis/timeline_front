export default function Home() {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <main className="grid min-h-screen grid-cols-2">
      // left
      <div className="flex flex-col items-start justify-between px-28 py-16"></div>
      // right
      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center"></div>
        <p className="w-[360px] text-center leading-relaxed">
          Você ainda não registrou nenhuma lembrança, comece a{' '}
          <a className="underline hover:text-gray-50">criar agora!</a>
        </p>
      </div>
    </main>
  )
}
