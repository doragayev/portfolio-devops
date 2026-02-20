pipeline {
    agent any

    environment {
        IMAGE_NAME = "doragayev/portfolio-project"
        IMAGE_TAG = "${env.BUILD_NUMBER}"
    }

    stages {

        stage('Install & Lint') {
            agent {
                docker {
                    image 'node:20'
                    args '-u root'
                }
            }
            steps {
                checkout scm
                sh 'npm install'
                sh 'npx eslint .'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_TAG .'
            }
        }

        stage('Docker Push') {
            steps {
                sh 'docker push $IMAGE_NAME:$IMAGE_TAG'
            }
        }
    }
}
