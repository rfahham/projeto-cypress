# Cypress

## Iniciando o projeto

```bash
npm init -y
```

Se for um projeto que já existe...

```bash
npm install
```

Vai instalar as dependências

## Instalando o Cypress

```bash
npm install cypress
```

## Iniciar o Cypress

```bash
npx cypress open
```

Se der esse erro:

```bash
✗ npx cypress open                                                                                                            
It looks like this is your first time using Cypress: 13.11.0


Cypress failed to start.

This may be due to a missing library or dependency. https://on.cypress.io/required-dependencies

Please refer to the error below for more details.

----------

/home/fahham/.cache/Cypress/13.11.0/Cypress/Cypress: error while loading shared libraries: libasound.so.2: cannot open shared object file: No such file or directory

----------

Platform: linux-x64 (Ubuntu - 22.04)
Cypress Version: 13.11.0
```

Acessar o site `https://on.cypress.io/required-dependencies` nele tem a instalação das dependências

Linux Prerequisites
If you're using Linux, you'll want to have the required dependencies installed on your system. Depending on your system defaults, these dependencies may already be installed. If not, run the command line for your operating system listed below. Cypress Docker images, which are Debian-based, already include the necessary dependencies.

Ubuntu/Debian

```bash
apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

For Ubuntu 24.04 use the following command:

```bash
apt-get install libgtk2.0-0t64 libgtk-3-0t64 libgbm-dev libnotify-dev libnss3 libxss1 libasound2t64 libxtst6 xauth xvfb
```

Arch

```bash
pacman -S gtk2 gtk3 alsa-lib xorg-server-xvfb libxss nss libnotify
```
CentOS

```bash
yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib
```

Amazon Linux 2023

```bash
dnf install -y xorg-x11-server-Xvfb gtk3-devel nss alsa-lib
```

Irá abrir a interface do Cypress

## Criar arquivo de teste

Dentro da pasta cypress, criar o diretório e2e, 

Criar arquivo `buscar_dispositivo.cy.js` com os cenários de teste.

## Executar um teste em modo Headless

Sem acesso ao Browser, Background

```bash
npx cypress run
```

Vai gerar um MP4 ;-(




