pipeline {
   stages {
      stage('Fetch') {
         steps {
            git 'https://github.com/jglick/simple-maven-project-with-tests.git'         
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
            docker run -p 3000:3000 queues
            '''
         }
      }
   }
}