pipeline {
    agent any
    
    environment {
        NODE_ENV="uat"
    }

    stages {
        stage('Migration') {
            steps {
                echo 'Run migration'
                nodejs('nodejs_18.17') {
                    sh 'npm install'
                    sh 'npm run typeorm migration:run'
                }
            }
        }
    }
}
