# Landing page — Dr. André Costa Lima

Landing page estática, responsiva e sem dependências de build.

## Pré-visualização

Abra `index.html` diretamente ou execute um servidor local na pasta, por exemplo: `python -m http.server 8080`.

## Publicação isolada

1. Crie um repositório exclusivo (sugestão: `dr-andre-costa-lima-lp`).
2. Envie somente os arquivos desta pasta para a raiz do repositório.
3. No GitHub, habilite **Settings → Pages → Deploy from a branch → main / root**.
4. Antes de apontar o domínio, valide a URL `*.github.io`.
5. Configure `advandrecostalima.com` como domínio personalizado e adicione um arquivo `CNAME` com esse domínio apenas no momento da publicação.

## Manutenção

- Telefone/WhatsApp atual: `+55 13 98854-3772`.
- Edite textos em `index.html`, layout em `styles.css` e eventos em `script.js`.
- Preserve a proporção e a compressão WebP da foto principal.
- Atualize `sitemap.xml`, canonical e URLs sociais quando a URL final estiver confirmada.

## Rastreamento

Os CTAs disparam `whatsapp_click` e `phone_click`. Para ativar o rastreamento, instale GA4 (`gtag`) e/ou Meta Pixel (`fbq`) no `<head>`; o código reconhece ambos sem gerar erro quando ausentes. Recomenda-se usar Google Tag Manager e marcar conversão nos dois eventos.

## Checklist antes de publicar

- Confirmar nome público, OAB, endereço, telefone e texto jurídico com o cliente.
- Inserir canonical e códigos reais de GA4/Meta Pixel.
- Testar WhatsApp e telefone em aparelho real.
- Executar Lighthouse em mobile e desktop.
- Validar DNS, HTTPS, sitemap e Search Console.
