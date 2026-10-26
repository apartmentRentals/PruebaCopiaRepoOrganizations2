#!/usr/bin/env python3
"""Abre el recorrido 360 en modo debug, con el panel de calibración."""

from __future__ import annotations

import socket
import webbrowser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

RAIZ = Path(__file__).resolve().parent
PUERTO_INICIO = 8080
RUTA_DEBUG = "/tour.html?debug"


class Manejador(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(RAIZ), **kwargs)

    def log_message(self, formato: str, *args) -> None:
        print(formato % args, flush=True)


def puerto_disponible(inicio: int) -> int:
    for puerto in range(inicio, inicio + 20):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            try:
                sock.bind(("127.0.0.1", puerto))
            except OSError:
                continue
            return puerto
    raise RuntimeError("No hay un puerto libre cerca de 8080.")


def main() -> None:
    puerto = puerto_disponible(PUERTO_INICIO)
    url = f"http://127.0.0.1:{puerto}{RUTA_DEBUG}"
    servidor = ThreadingHTTPServer(("127.0.0.1", puerto), Manejador)

    print("Modo debug: el panel de calibración aparece al cargar el recorrido.", flush=True)
    print(f"Abriendo {url}", flush=True)
    print("Ctrl+C para detener el servidor.", flush=True)
    print(flush=True)
    webbrowser.open(url)
    servidor.serve_forever()


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nServidor detenido.", flush=True)
