## Como Funciona o WebSocket?

### 1. Estabelecimento da Conexão:
- A conexão é iniciada pelo cliente enviando um pedido de upgrade de HTTP para WebSocket ao servidor. Se o servidor suportar WebSockets, ele aceita o upgrade e estabelece uma conexão persistente sobre o mesmo socket.

### 2. Troca de Mensagens:
- Após a conexão ser estabelecida, tanto o cliente quanto o servidor podem enviar mensagens a qualquer momento. As mensagens podem ser de texto ou binárias.

### 3. Encerramento da Conexão:
- Qualquer uma das partes (cliente ou servidor) pode iniciar o fechamento da conexão WebSocket.

## Vantagens do WebSocket

- **Comunicação em Tempo Real**: Como a conexão é mantida aberta, as mensagens são enviadas e recebidas quase instantaneamente.
- **Menos Sobrecarga**: Após a conexão WebSocket ser estabelecida, os dados podem ser enviados com muito menos cabeçalhos e sobrecarga em comparação com o HTTP.
- **Compatibilidade**: Navegadores Modernos suportam WebSockets, o que facilita a implementação em aplicações web.

## Tipos de Aplicações Desenvolvidas com WebSockets

- **Jogos Online**: Permite a comunicação em tempo real entre jogadores e servidores, essencial para jogos multiplayer.
- **Live Chat**: Implementação de sistemas de mensagens instantâneas onde a comunicação em tempo real é crucial.
- **Notificações em Tempo Real**: Aplicações que necessitam enviar atualizações instantâneas aos usuários, como notificações de redes sociais.
- **Aplicações Financeiras**: Plataformas de trading e monitoramento de mercado que requerem atualizações de preços em tempo real.
- **Monitoramento de Dispositivos IoT**: Controle e monitoramento de dispositivos IoT em tempo real.
- **Colaboração Online**: Ferramentas de edição colaborativa, como Google Docs, onde múltiplos usuários editam documentos simultaneamente.
- **Streaming de Vídeo e Áudio**: Aplicações que envolvem streaming de mídia com interações em tempo real.
- **Dashboards Dinâmicos**: Dashboards que atualizam automaticamente com novos dados, úteis em análises de negócios e monitoramento.
- **Hot Reload**: Atualização de uma página no navegador ao salvar o código pela sua IDE / Editor

## Exemplo Básico de Uso

Aqui está um exemplo simples de como você poderia configurar o lado do cliente em JavaScript para usar WebSockets:
