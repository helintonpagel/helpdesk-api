INSERT INTO categories (name, description) VALUES
('Hardware', 'Problemas físicos com computadores, periféricos, impressoras e monitores'),
('Software', 'Instalação, atualização ou falhas em programas e sistemas operacionais'),
('Rede e Conectividade', 'Problemas de acesso à internet, Wi-Fi, cabeamento ou VPN'),
('Acessos e Permissões', 'Solicitação de criação de conta, redefinição de senha e permissões em sistemas');

INSERT INTO technicians (name, email) VALUES
('Carlos Silva', 'carlos.silva@helpdesk.com.br'),
('Fernanda Oliveira', 'fernanda.oliveira@helpdesk.com.br'),
('Roberto Santos', 'roberto.santos@helpdesk.com.br');

INSERT INTO requesters (name, email, department) VALUES
('Ana Souza', 'ana.souza@empresa.com.br', 'Financeiro'),
('Marcos Pereira', 'marcos.pereira@empresa.com.br', 'Recursos Humanos'),
('Juliana Costa', 'juliana.costa@empresa.com.br', 'Comercial'),
('Lucas Mendes', 'lucas.mendes@empresa.com.br', 'Logística');

INSERT INTO tickets (
  title,
  description,
  priority,
  status,
  solution,
  requester_id,
  category_id,
  technician_id
) VALUES
(
  'Computador não inicia',
  'Ao pressionar o botão de ligar, o gabinete não dá sinal de energia e o monitor permanece desligado.',
  'ALTA',
  'EM_ATENDIMENTO',
  NULL,
  1, -- Ana Souza (Financeiro)
  1, -- Hardware
  1  -- Carlos Silva
),
(
  'Instalação de pacote Office / LibreOffice',
  'Preciso de um editor de planilhas instalado na nova máquina do setor.',
  'BAIXA',
  'ABERTO',
  NULL,
  2, -- Marcos Pereira (RH)
  2, -- Software
  NULL -- Sem técnico atribuído ainda
),
(
  'Erro ao acessar o sistema ERP',
  'Minha senha expirou e o sistema bloqueou meu usuário após três tentativas.',
  'MEDIA',
  'CONCLUIDO',
  'Usuário desbloqueado no painel administrativo e senha temporária enviada por e-mail.',
  3, -- Juliana Costa (Comercial)
  4, -- Acessos e Permissões
  2  -- Fernanda Oliveira
);