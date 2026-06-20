pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo "Chao ban !"
                echo "Pipeline dang chay..."
            }
        }
        stage ('List files') {
            steps {
                sh "ls -la"
            }
        }
    }
}