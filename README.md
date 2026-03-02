# 🚀 Portfolio DevOps Project

## 📌 Project Overview

This project demonstrates a **complete DevOps workflow** built around a personal portfolio application.

The goal is not only to deploy a web application — but to showcase real DevOps concepts including:

* CI pipelines
* Docker image lifecycle
* Kubernetes deployment
* GitOps workflow with ArgoCD
* Multiple CI tools for learning and comparison

This project was built as a **hands-on learning project** to practice real-world DevOps processes.

---

## 🏗️ Architecture

```
Developer
→ GitHub (Application Repo)
→ CI (GitHub Actions / Jenkins)
→ DockerHub
→ Helm Repository
→ ArgoCD (GitOps)
→ Kubernetes
```
## 🔁 Migration to Helm (GitOps Evolution)

This project initially deployed the application using static Kubernetes manifests located in `k8s/base`.

As part of improving the DevOps workflow, deployment was migrated to a Helm-based architecture managed through a separate repository:

Helm Repository:
https://github.com/doragayev/portfolio-helm-chart

The new flow:

Developer → Push → CI builds Docker image →  
Helm repository defines deployment →  
ArgoCD monitors Helm repo →  
Kubernetes syncs automatically.

This separation reflects real-world DevOps practices:
- Application code and infrastructure are decoupled
- Deployment logic is version-controlled independently
- GitOps is used as the deployment mechanism

### Flow

1. Code is pushed to GitHub
2. CI pipeline runs:

   * Install dependencies
   * Run lint checks
   * Build Docker image
   * Push image to DockerHub
3. Kubernetes deployment YAML is updated with the new image tag
4. ArgoCD detects Git changes
5. ArgoCD syncs the cluster automatically (GitOps)
6. New version is deployed to Kubernetes

---

## ⚙️ Tech Stack

### Application

* React (Vite)
* JavaScript
* TailwindCSS

### DevOps

* Docker
* Kubernetes (Minikube)
* NGINX Ingress
* ArgoCD (GitOps)

### CI Tools

* GitHub Actions
* Jenkins

---

## 🔵 CI Pipeline — GitHub Actions

GitHub Actions is used as the main automated CI pipeline.

### Pipeline stages

* Checkout repository
* Install dependencies (`npm install`)
* Run lint (`eslint`)
* Build Docker image
* Push image to DockerHub
* Update Kubernetes deployment image tag
* Commit updated deployment manifest

### Image Tag Strategy

Images are tagged using the short commit SHA:

```
doragayev/portfolio-project:<short-commit-sha>
```

Example:

```
doragayev/portfolio-project:bce03a6
```

### Benefits

* Traceability
* Easy rollback
* Clear version history

---

## 🟡 CI Pipeline — Jenkins (Learning Purpose)

A Jenkins pipeline was added to demonstrate understanding of traditional CI systems.

### Jenkins pipeline performs

* Repository checkout
* Run inside Docker-based environment
* Install dependencies
* Run lint checks

### Why Jenkins?

This project intentionally uses two CI tools to demonstrate:

* CI concepts independent of tools
* Hosted runners vs self-managed agents
* Pipeline structure differences
* Industry-standard tooling familiarity

---

## 🚀 CD — GitOps with ArgoCD

Deployment is handled using **ArgoCD**.

### Process

1. CI updates Kubernetes YAML with a new image tag
2. ArgoCD detects Git changes
3. Application becomes **OutOfSync**
4. Sync applies new state to Kubernetes
5. Rolling update replaces old pods safely

### GitOps principles used

* Git as single source of truth
* Declarative infrastructure
* Automated reconciliation

---

## ☸️ Kubernetes Setup

### Resources

* Deployment
* Service (NodePort)

### Implemented concepts

* Multiple replicas
* Rolling updates
* Image-based deployments
* Ingress routing

---

## 🌐 Deployment

### Local Environment

* Minikube Kubernetes cluster
* ArgoCD running inside Kubernetes

### Public Access

* GitHub Pages for portfolio preview

---

## 🧠 DevOps Concepts Practiced

* CI vs CD separation
* GitOps workflow
* Immutable Docker images
* Image tagging strategy
* Kubernetes rolling updates
* Ingress configuration
* Pipeline failure handling
* Lint as quality gate
* Multi-tool CI comparison

---

## 📂 Project Structure

```
portfolio-devops/
│
├── app/                    # React application
├── k8s/
│   └── base/
│       ├── deployment.yaml
│       ├── service.yaml
│       └── ingress.yaml
│
├── .github/workflows/
│   └── docker-build.yml
│
├── Jenkinsfile
└── Dockerfile
```

---

## 🎯 Project Goal

This project simulates a real DevOps lifecycle:

* Developer workflow
* Automated CI
* Containerization
* GitOps deployment
* Kubernetes production flow

The focus is learning real processes — not only making the app work.

---

## 👨‍💻 Author

**Dor Agayev**

DevOps learner focusing on:

* Docker
* Kubernetes
* CI/CD pipelines
* Cloud-native workflows
