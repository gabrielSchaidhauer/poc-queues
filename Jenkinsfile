pipeline {
   agent any

   stages {
      stage('Build') {
         steps {
            // Get some code from a GitHub repository
            git 'https://github.com/jglick/simple-maven-project-with-tests.git'
         }
      }
   }
}