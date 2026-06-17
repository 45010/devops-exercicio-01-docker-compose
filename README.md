# Exercício 01 - Docker Compose + Linux

## 🎯 Objetivo
Orquestrar múltiplos serviços (backend + banco de dados) usando Docker Compose em ambiente Linux.

## 🔎 Problema
Precisava subir backend e banco de dados de forma integrada, sem configurar manualmente cada container.

## ⚙️ Solução
- Criei um container para o backend (Node.js).
- Criei um container para o banco de dados (PostgreSQL).
- Usei `docker-compose.yml` para orquestrar os dois serviços.

## ✅ Resultado
Com um único comando (`docker-compose up`), todo o ambiente ficou pronto para testes, reduzindo tempo e aumentando consistência.

## 🚀 Próximos passos
- Kubernetes
- Terraform
- Observabilidade com Prometheus + Grafana
