# Guia de setup detalhado

Este documento descreve passo a passo como preparar o ambiente de desenvolvimento, executar a aplicação localmente (incluindo acesso pela LAN) e como testar a build de produção localmente.

## 1 — Pré-requisitos

- Node.js (versão LTS recomendada)
- npm (ou yarn)

Verifique a instalação do Node:

```bash
node -v
npm -v
```

## 2 — Instalar dependências

Na raiz do projeto:

```bash
npm install
# ou
# yarn install
```

## 3 — Scripts úteis

Os comandos usados frequentemente:

- `npm run dev` — inicia o servidor de desenvolvimento (normalmente acessível apenas em `localhost`).
- `npm run dev -- --host` — inicia o servidor ouvindo em todas as interfaces (0.0.0.0), liberando acesso pela LAN.
- `npm run build` — gera a pasta `dist` com a build de produção.
- `npm run preview -- --host` — executa o `vite preview` e pode ser usado com `--host` para disponibilizar a build na LAN.

Você pode adicionar no `package.json` um script extra para facilitar:

```json
"scripts": {
  "dev": "vite",
  "dev:lan": "vite --host",
  "build": "vite build",
  "preview": "vite preview"
}
```

## 4 — Rodando em desenvolvimento e acessando pela LAN

1. Descubra o IP local da máquina que executa o Vite (ex.: `192.168.1.42`).

Linux:
```bash
hostname -I
# ou
ip -4 addr show scope global
```

macOS:
```bash
ipconfig getifaddr en0
```

Windows (PowerShell):
```powershell
ipconfig
```

2. Inicie o Vite permitindo acesso externo:

```bash
npm run dev -- --host
# ou
npm run dev:lan
```

3. No outro dispositivo da mesma rede (celular, notebook), abra no navegador:

```
http://<IP_DO_SEU_PC>:<PORTA>
# Exemplo: http://192.168.1.42:5173
```

Observações:
- O Vite normalmente mostra no terminal as URLs locais e públicas após iniciar — verifique a saída para confirmar porta e host.

## 5 — Firewall e roteador

Se não for possível conectar:

- Verifique se o firewall do host bloqueia a porta (ex.: 5173). Em distribuições com `ufw`:

```bash
sudo ufw allow 5173/tcp
```

- Em outras distros, ajuste `iptables`/`nftables` conforme necessário.
- Verifique se o roteador tem isolamento de cliente (client isolation) que impede comunicação entre dispositivos na mesma rede Wi‑Fi.
- Desative temporariamente VPNs que possam impedir tráfego LAN.

## 6 — Build e servir a produção localmente (com acesso LAN)

1. Gerar build:

```bash
npm run build
```

2. Testar a build com Vite Preview (acessível pela rede):

```bash
npm run preview -- --host --port 5000
# ou
npx serve -s dist --listen 0.0.0.0:5000
```

Em seguida abra `http://<IP_DO_SEU_PC>:5000` no outro dispositivo.

## 7 — Troubleshooting rápido

- Ping: do outro dispositivo, faça `ping <IP_DO_SEU_PC>` para checar conectividade básica.
- Se ping falhar, é problema de rede (Wi‑Fi isolado, firewall, VPN).
- Se o navegador retorna conteúdo mas com erros de recursos (CORS ou carregamento de assets), verifique se os caminhos relativos/basename da rota estão corretos.

## 8 — Sugestões adicionais

- Considere adicionar um script `dev:lan` no `package.json` para facilitar.
- Para desenvolvimento em equipes, documente a porta usada e as regras de firewall no README.

---

Se quiser, eu posso:

- adicionar o script `dev:lan` e `preview:lan` no `package.json`,
- criar um pequeno `Makefile` com comandos úteis, ou
- aplicar `.prettierrc` e rodar `prettier --write` no `src`.

Diga qual dessas ações prefere que eu execute em seguida.
