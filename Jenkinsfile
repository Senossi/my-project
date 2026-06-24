pipeline {

    agent any

    stages {

        stage('Build Docker Image') {

            steps {

                sh 'docker build -t employee-app:latest .'

            }

        }

        stage('Deploy') {

            steps {

                sh 'docker rm -f employee-container || true'

                sh 'docker run -d --name employee-container -p 3000:3000 employee-app:latest'

            }

        }

    }

}
 
