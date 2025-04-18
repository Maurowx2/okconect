"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Estender o Tailwind com uma classe personalizada para dispositivos muito pequenos
const tailwindConfig = {
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
    },
  },
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [nome, setNome] = useState("")
  const [whatsapp, setWhatsapp] = useState("")

  const [ctaNome, setCtaNome] = useState("")
  const [ctaEmail, setCtaEmail] = useState("")
  const [ctaWhatsapp, setCtaWhatsapp] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault()

    // Formata a mensagem
    const mensagem = `Olá! Meu nome é ${nome} e gostaria de garantir minha vaga na aula fechada.`

    // Cria a URL do WhatsApp
    const whatsappUrl = `https://wa.me/5561995503302?text=${encodeURIComponent(mensagem)}`

    // Redireciona para o WhatsApp
    window.open(whatsappUrl, "_blank")
  }

  const handleCtaWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault()

    // Formata a mensagem incluindo nome, email e whatsapp
    const mensagem = `Olá! Meu nome é ${ctaNome}, meu email é ${ctaEmail} e gostaria de garantir minha vaga na aula exclusiva.`

    // Cria a URL do WhatsApp
    const whatsappUrl = `https://wa.me/5561995503302?text=${encodeURIComponent(mensagem)}`

    // Redireciona para o WhatsApp
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="flex flex-col min-h-screen bg-silver-light text-gray-800">
      {/* Background texture elements */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,229,229,1)_0%,rgba(213,213,213,1)_70%)] z-[-2]"></div>

      {/* Texture overlay */}
      <div className="fixed inset-0 bg-[url('/white-texture.png')] opacity-[0.05] mix-blend-overlay z-[-1]"></div>

      {/* Hero Section */}
      <section className="bg-transparent py-3 sm:py-4 px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden">
        {/* Improved background effect - gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-silver-light via-silver to-silver-light opacity-80 z-[-1]"></div>

        <div className="mx-auto flex flex-col items-center relative z-10">
          <div className="text-center mb-6">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 max-w-3xl leading-tight">
                O passo a passo para você faturar mais de <span className="text-[#aa6d43]">R$ 10.000</span> Reais todos
                os meses!
              </h2>
            </div>
          </div>

          {/* Conteúdo principal - foto e formulário lado a lado */}
          <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
            {/* Foto */}
            <div className="w-full md:w-1/2 max-w-md">
              {mounted && (
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/images/profile-portrait.png"
                    alt="Profissional"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Formulário */}
            <div className="w-full md:w-1/2 max-w-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center md:text-left">
                Você com <span className="font-bold text-[#aa6d43]">dinheiro no Bolso</span>, várias Clientes Todos os
                Dias, e sua <span className="font-bold text-[#aa6d43]">Agenda Lotada</span> com Extensões de Cílios!
              </h2>

              <form
                onSubmit={handleWhatsAppRedirect}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-xl border-2 border-[#aa6d43]"
              >
                <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-[#aa6d43]">Garanta sua vaga agora</h3>
                <Input
                  placeholder="Seu nome completo"
                  className="border-[#aa6d43] focus:ring-[#aa6d43] mb-3 sm:mb-4 bg-silver-light text-gray-800 text-base sm:text-lg py-4 sm:py-6"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
                <div className="relative mb-3 sm:mb-4">
                  <Input
                    placeholder="Seu WhatsApp"
                    className="border-[#aa6d43] focus:ring-[#aa6d43] bg-silver-light text-gray-800 text-base sm:text-lg py-4 sm:py-6 pl-10"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    required
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#aa6d43"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#aa6d43] hover:bg-[#8a5733] text-white font-bold py-3 sm:py-4 px-4 sm:px-8 text-base sm:text-lg uppercase tracking-wide rounded-lg shadow-lg transform hover:scale-105 transition-all"
                >
                  QUERO GARANTIR MINHA VAGA
                </Button>
                <p className="text-xs text-center mt-3 text-gray-500">Seus dados estão 100% seguros e protegidos</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Alunas Testimonials Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-16 bg-silver relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5"></div>
        <div className="absolute left-0 top-0 w-64 h-64 bg-[#aa6d43]/10 rounded-full -ml-32 -mt-32 blur-xl"></div>
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#aa6d43]/10 rounded-full -mr-32 -mb-32 blur-xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-gray-800">
              <span className="text-[#aa6d43] uppercase tracking-wider">Alunas que estão faturando</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça algumas das nossas alunas que transformaram suas vidas através do nosso método exclusivo
            </p>
          </div>

          {/* Featured Testimonials - Versão compacta e responsiva */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
            {/* Card 1 */}
            <div className="group bg-white relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#aa6d43] hover:border-2 hover:z-30">
              <div className="relative h-32 sm:h-40 overflow-hidden group-hover:h-48 transition-all duration-300">
                <Image
                  src="/images/aluna1.jpg"
                  alt="Aluna de Sucesso"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-2 left-3 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#aa6d43"
                      className="mr-1"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="p-3 sm:p-4 group-hover:p-5 transition-all duration-300">
                <h3 className="text-[#aa6d43] font-bold text-sm sm:text-base mb-1 group-hover:text-lg">
                  Sucesso Financeiro
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm italic line-clamp-3 group-hover:line-clamp-none">
                  "Consegui faturar R$ 15.000 no meu primeiro mês aplicando as estratégias do Conteúdo Perpétuo. O
                  método é simples, mas extremamente eficaz. Antes eu lutava para conseguir clientes, agora eles vêm até
                  mim."
                </p>
                <div className="flex items-center mt-2 pt-2 border-t border-gray-100">
                  <span className="text-[#aa6d43] font-bold text-xs sm:text-sm">Ingrid Torres</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#aa6d43] hover:border-2 hover:z-30">
              <div className="relative h-32 sm:h-40 overflow-hidden group-hover:h-48 transition-all duration-300">
                <Image
                  src="/images/aluna3.jpg"
                  alt="Aluna de Sucesso"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-2 left-3 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#aa6d43"
                      className="mr-1"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="p-3 sm:p-4 group-hover:p-5 transition-all duration-300">
                <h3 className="text-[#aa6d43] font-bold text-sm sm:text-base mb-1 group-hover:text-lg">
                  Liberdade de Tempo
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm italic line-clamp-3 group-hover:line-clamp-none">
                  "Hoje trabalho apenas 4 horas por dia e faturo mais do que quando trabalhava em período integral. O
                  método Conteúdo Perpétuo me deu a liberdade que eu sempre sonhei, permitindo que eu passe mais tempo
                  com minha família enquanto meu negócio cresce."
                </p>
                <div className="flex items-center mt-2 pt-2 border-t border-gray-100">
                  <span className="text-[#aa6d43] font-bold text-xs sm:text-sm">Luana Rosa</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#aa6d43] hover:border-2 hover:z-30">
              <div className="relative h-32 sm:h-40 overflow-hidden group-hover:h-48 transition-all duration-300">
                <Image
                  src="/images/aluna4.jpg"
                  alt="Aluna de Sucesso"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-2 left-3 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#aa6d43"
                      className="mr-1"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="p-3 sm:p-4 group-hover:p-5 transition-all duration-300">
                <h3 className="text-[#aa6d43] font-bold text-sm sm:text-base mb-1 group-hover:text-lg">
                  Escalabilidade
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm italic line-clamp-3 group-hover:line-clamp-none">
                  "Consegui escalar meu negócio de R$ 5 mil para R$ 50 mil mensais em apenas 6 meses. A estratégia de
                  conteúdo perpétuo me permitiu criar um sistema que funciona 24 horas por dia, 7 dias por semana,
                  gerando leads e vendas mesmo enquanto durmo."
                </p>
                <div className="flex items-center mt-2 pt-2 border-t border-gray-100">
                  <span className="text-[#aa6d43] font-bold text-xs sm:text-sm">Natália Souza</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group bg-white relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#aa6d43] hover:border-2 hover:z-30">
              <div className="relative h-32 sm:h-40 overflow-hidden group-hover:h-48 transition-all duration-300">
                <Image
                  src="/images/aluna2.jpg"
                  alt="Aluna de Sucesso"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-2 left-3 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#aa6d43"
                      className="mr-1"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="p-3 sm:p-4 group-hover:p-5 transition-all duration-300">
                <h3 className="text-[#aa6d43] font-bold text-sm sm:text-base mb-1 group-hover:text-lg">
                  Vendas Diárias
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm italic line-clamp-3 group-hover:line-clamp-none">
                  "O método Conteúdo Perpétuo mudou minha visão sobre criação de conteúdo. Hoje consigo gerar vendas
                  diárias sem precisar ficar 24h nas redes sociais. Meu conteúdo trabalha por mim, atraindo clientes
                  ideais e convertendo vendas automaticamente, mesmo quando estou de férias."
                </p>
                <div className="flex items-center mt-2 pt-2 border-t border-gray-100">
                  <span className="text-[#aa6d43] font-bold text-xs sm:text-sm">Gabriela Silva</span>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group bg-white relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#aa6d43] hover:border-2 hover:z-30">
              <div className="relative h-32 sm:h-40 overflow-hidden group-hover:h-48 transition-all duration-300">
                <Image
                  src="/images/aluna5.jpg"
                  alt="Aluna de Sucesso"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-2 left-3 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#aa6d43"
                      className="mr-1"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="p-3 sm:p-4 group-hover:p-5 transition-all duration-300">
                <h3 className="text-[#aa6d43] font-bold text-sm sm:text-base mb-1 group-hover:text-lg">
                  Crescimento Rápido
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm italic line-clamp-3 group-hover:line-clamp-none">
                  "Antes eu lutava para conseguir clientes. Hoje, após aplicar o método, tenho uma lista de espera de
                  pessoas querendo trabalhar comigo. Minha renda triplicou! O mais incrível é que agora posso ser
                  seletiva com quem trabalho, escolhendo apenas os clientes que realmente se alinham com meus valores e
                  visão."
                </p>
                <div className="flex items-center mt-2 pt-2 border-t border-gray-100">
                  <span className="text-[#aa6d43] font-bold text-xs sm:text-sm">Rafaela Rodrigues</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button
              onClick={() => document.getElementById("inscricao-form")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#aa6d43] hover:bg-[#8a5733] text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold uppercase tracking-wide shadow-lg transform hover:scale-105 transition-all"
            >
              Clique aqui para faturar 10.000 Reais
            </Button>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-silver-light relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#aa6d43]/20 rounded-full -mr-32 -mb-32"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
            <p className="mb-8">
              Este passo a passo mostra, de forma direta e detalhada, tudo o que você precisa fazer para faturar
              R$10.000 por mês.
            </p>
            <div className="w-full h-1 bg-[#aa6d43]/30 rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="w-48 h-64 bg-white rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform"
                style={{
                  transform: `perspective(1000px) rotateY(${(item - 3) * 5}deg)`,
                  zIndex: item === 3 ? 10 : 5,
                }}
              >
                <div className="h-full flex items-center justify-center p-4 border-t-4 border-[#aa6d43]">
                  <div className="text-center">
                    <div className="text-[#aa6d43] font-bold mb-2">Conteúdo Perpétuo</div>
                    <div className="text-xs text-gray-500">Módulo {item}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button
              onClick={() => document.getElementById("inscricao-form")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#aa6d43] hover:bg-[#8a5733] text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold uppercase tracking-wide shadow-lg transform hover:scale-105 transition-all"
            >
              Clique aqui para faturar 10.000 Reais
            </Button>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-silver-light relative">
        <div className="absolute left-0 top-0 w-48 h-48 bg-[#aa6d43]/10 rounded-full -ml-24 -mt-24"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12"></div>

          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-white border border-[#aa6d43]/30 rounded-lg p-4 sm:p-6 flex flex-col md:flex-row gap-4 sm:gap-6 items-center">
              <div className="w-full md:w-1/3 relative aspect-[3/4] max-w-[250px] sm:max-w-[300px]">
                <Image
                  src="/images/new-profile-photo.png"
                  alt="Mentor"
                  fill
                  className="object-cover rounded-lg border-2 border-[#aa6d43]"
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 33vw"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#aa6d43] mb-2 sm:mb-3">Mentor Especialista</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                  Juntos, aplicamos as estratégias de conteúdo que revolucionaram o mercado, faturando múltiplos 7
                  dígitos nos últimos anos, vendendo todos os dias.
                </p>
                <p className="text-sm sm:text-base text-gray-700">
                  Sem precisar criar de lançamentos, sem precisar correr atrás de clientes e sem precisar sacrificar
                  tempo de lazer, os próprios valores e a família.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-silver-light to-silver">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#aa6d43] mb-4">
            Chegou a hora de mudar de vida e ter sua agenda e seu bolso cheio!
          </h2>
          {/* Parágrafo removido */}

          <form
            id="inscricao-form"
            onSubmit={handleCtaWhatsAppRedirect}
            className="max-w-md mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-xl border border-[#aa6d43]"
          >
            <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-[#aa6d43]">Inscreva-se na aula exclusiva</h3>
            <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
              <Input
                placeholder="Seu nome completo"
                className="border-[#aa6d43] focus:ring-[#aa6d43] bg-silver-light text-gray-800 py-2 sm:py-3"
                value={ctaNome}
                onChange={(e) => setCtaNome(e.target.value)}
                required
              />
              <Input
                placeholder="Seu melhor e-mail"
                className="border-[#aa6d43] focus:ring-[#aa6d43] bg-silver-light text-gray-800 py-2 sm:py-3"
                value={ctaEmail}
                onChange={(e) => setCtaEmail(e.target.value)}
                required
                type="email"
              />
              <Input
                placeholder="Seu WhatsApp"
                className="border-[#aa6d43] focus:ring-[#aa6d43] bg-silver-light text-gray-800 py-2 sm:py-3"
                value={ctaWhatsapp}
                onChange={(e) => setCtaWhatsapp(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#aa6d43] hover:bg-[#8a5733] text-white text-base sm:text-lg py-4 sm:py-6 font-bold uppercase tracking-wide rounded-lg shadow-lg transform hover:scale-105 transition-all"
            >
              QUERO GARANTIR MINHA VAGA AGORA
            </Button>
            <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#aa6d43]"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-xs sm:text-sm text-gray-500">Seus dados estão 100% seguros e protegidos</span>
            </div>
          </form>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#aa6d43]"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className="text-gray-700">Vagas limitadas</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#aa6d43]"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className="text-gray-700">Conteúdo exclusivo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-silver to-silver-dark py-8 px-6 text-center border-t border-[#aa6d43]/20">
        <p className="text-gray-500">Copyright © 2025 - Todos os direitos reservados</p>
      </footer>
    </div>
  )
}
