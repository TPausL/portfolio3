@Library("teckdigital") _
def appName = "timo-portfolio"
// map local branches to their GitOps values file path (adjust if you use a separate gitops repo)
def localBranchToGitopsValuesPath = [
    'master': 'portfolio/values.yaml',
]

pipeline {
   agent {
    kubernetes {
        inheritFrom "kaniko-template"
    }
  }
    
    stages {
        stage('Build and Tag Image') {
            steps {
                container('kaniko') {
                    script {
                        withCredentials([
                            string(credentialsId: 'teckdigital-service-user-token', variable: 'SERVICE_USER_TOKEN')
                        ]) {
                            buildDockerImage(buildArgs: ["GITHUB_AUTH_TOKEN=${SERVICE_USER_TOKEN}"])
                        }
                    }
                }
            }
        }

        stage('Update GitOps') {
            when {
                expression {
                    return localBranchToGitopsValuesPath.containsKey(getLocalBranchName())
                }
            }
            steps {
                script {
                    def valuesPath = localBranchToGitopsValuesPath[getLocalBranchName()]

                    updateGitops(appName: appName, valuesPath: valuesPath)
                }
            }
        }
    }
}