import Image from "next/image";
import React from "react";
export default function SecandoEmCasaPage() {
  return (
    <div className="bg-white flex flex-col p-0 m-0 w-full h-full font-[family-name:var(--font-geist-sans)]">
      <div className="w-full h-14 bg-red-500 text-white text-xl lg:text-2xl font-bold p-10 lg:p-2 text-center flex items-center justify-center">
        ATENÇÃO MULHERES: CORPO DOS SONHOS AO SEU ALCANCE!
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center ">
        <h2 className="mx-5 font-bold text-xl lg:text-3xl text-neutral-950 text-center mt-10">
          🔥 DESCUBRA COMO UMA MÃE COM ROTINA CORRIDA ELIMINOU{" "}
          <span className="text-green-700">3,4KG</span> EM APENAS{" "}
          <span className="text-green-700">7 DIAS</span> COM UM MÉTODO{" "}
          <span className="text-green-700">SIMPLES</span> E{" "}
          <span className="text-green-700">EFICIENTE</span>!
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 text-center lg:text-start gap-5 w-[95%] lg:w-[80%]">
          <Image
            src={"/secandoemcasa/1.png"}
            alt=""
            width={440}
            height={440}
            className="rounded-2xl mx-auto"
          />
          <div className="flex flex-col items-center justify-center w-full">
            <p className="font-semibold text-neutral-950 text-base lg:text-lg">
              <span className="text-green-900">
                👉 Sem precisar passar fome, fazer dietas restritivas ou gastar
                fortunas com academia!
              </span>
              <br />
              <br />
              Você já tentou várias dietas e nada funcionou? Ou até perdeu peso,
              mas depois voltou tudo de novo? <br />
              <br />
              Imagine conseguir resultados reais sem precisar se matar na
              academia ou seguir aquelas dietas malucas que deixam você sem
              energia. <br />
              <br />
              Agora você pode alcançar o corpo que deseja de forma prática,
              natural e sem sofrimento!
            </p>
            <button
              className="w-full mt-10 rounded-xl px-5 bg-green-600 text-white text-xl lg:text-2xl font-bold py-4 hover:cursor-pointer hover:opacity-80"
              type="button"
            >
              QUERO EMAGRECER DE FORMA SAUDÁVEL!
            </button>
          </div>
        </div>

        <div className="bg-green-950 p-0 py-10 lg:p-10 flex flex-col gap-8 row-start-2 items-center w-full">
          <div className="flex flex-col w-[95%] lg:w-[70%] text-center">
            <div className="flex flex-col items-center justify-center w-full">
              <h3 className="font-bold text-neutral-50 text-xl lg:text-3xl">
                💡 COMO ESSE MÉTODO VAI TE AJUDAR?
              </h3>
              <p className="font-normal text-neutral-50 text-base lg:text-lg mt-5">
                Este programa foi desenvolvido para quem quer perder peso de
                forma saudável e definitiva, sem precisar abrir mão do que
                gosta. Você vai aprender:
                <br />
                <br />
                ✅ Um método comprovado que acelera o metabolismo e potencializa
                a queima de gordura;
                <br />
                ✅ Como emagrecer sem precisar cortar totalmente os alimentos
                que ama; <br />
                ✅ Estratégias para eliminar peso de forma natural e manter os
                resultados para sempre! <br />
                <br />
              </p>

              <button
                className="w-full mt-10 rounded-xl px-5 bg-red-600 text-white text-xl lg:text-2xl font-bold py-4 hover:cursor-pointer hover:opacity-80"
                type="button"
              >
                VEJA O DEPOIMENTO E CONFIRA OS RESULTADOS
              </button>
            </div>
          </div>
        </div>

        <div className="p-0 lg:p-10 flex flex-col gap-8 row-start-2 items-center ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-[95%] lg:w-[80%]">
            <div className="flex flex-col items-center justify-center w-full">
              <p className="font-normal text-neutral-900 text-base lg:text-lg text-center lg:text-start">
                🥗 Nada de dietas malucas que te deixam com fome o dia inteiro!
                <br />
                <br />
                ⏳ Nada de horas na academia – método prático para encaixar na
                sua rotina! <br />
                <br />
                💰 Economize dinheiro – sem precisar gastar com suplementos
                caros ou programas impossíveis de seguir! <br />
                <br />
                👉 Se você está pronta para transformar seu corpo e sua
                autoestima, clique no botão abaixo e descubra como!
              </p>
              <button
                className="w-full mt-10 rounded-xl px-5 bg-green-600 text-white text-xl lg:text-2xl font-bold py-4 hover:cursor-pointer hover:opacity-80"
                type="button"
              >
                QUERO EMAGRECER DE FORMA SAUDÁVEL!
              </button>
            </div>
            <Image
              src={"/secandoemcasa/3.png"}
              alt=""
              width={440}
              height={440}
              className="rounded-2xl mx-auto"
            />
          </div>
        </div>
      </main>

      <footer className="w-full text-xs text-neutral-700 text-center my-10"></footer>
    </div>
  );
}
