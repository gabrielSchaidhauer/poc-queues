pipeline {
    agent any
   stages {
      stage('Fetch') {
         steps {
            git 'https://github.com/gabrielSchaidhauer/poc-queues.git'         
         }
      }

      stage('Build Image') {
         steps {
            sh '''
            docker build -t queues .
            '''
         }
      }

      stage('Run') {
         steps {
            sh '''
            nohup docker run -p 3000:3000 queues &
            '''
         }
      }
   }
}