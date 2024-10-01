import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Meu Portifólio
      </h1>
      <p className="mb-4">
        {`Sou um estudante do IFRO - Campus Vilhena cursando 4º Periodo de Analise e Desenvolvimento de Sistemas`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
