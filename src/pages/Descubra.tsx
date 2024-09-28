import React from "react";
import Header from "../components/Header";

interface DescubraProps {}

export default function Descubra({}: DescubraProps) {
  return (
    <React.Fragment>
      <Header />

      <main className="mt-32 max-w-[1440px] w-full mx-auto">
        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <h2 className="text-white font-semibold text-4xl">
            Descubra novas músicas e estilos
          </h2>
          <p className="text-white/60 font-normal text-xl">
            Trouxemos algumas playlists do Spotify para você conhecer novos
            estilos musicais.
          </p>
        </div>

        <div className="mt-16 flex flex-col justify-center items-center gap-8">
          <iframe
            className="rounded-md"
            src="https://open.spotify.com/embed/playlist/37i9dQZF1EVGJJ3r00UGAt?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          <iframe
            className="rounded-md"
            src="https://open.spotify.com/embed/playlist/37i9dQZF1EQnJyHBkXpASl?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          <iframe
            className="rounded-md"
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0h2LvJ7ZJ15?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          {/* Trapperz Brasil */}
          <iframe
            className="rounded-md"
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWr5uieiPUVM?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          {/* Rock Forever */}
          <iframe
            className="rounded-md"
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcmaoFmN75bi?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          <iframe
            className="rounded-md"
            src="https://open.spotify.com/embed/playlist/37i9dQZF1EVGJJ3r00UGAt?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </main>
    </React.Fragment>
  );
}
