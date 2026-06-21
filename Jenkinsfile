pipeline {
	agent any

    environment {
        IP_SERVER = '134.209.107.36'
        DEPLOY_PATH = '/root/my-project/day11-CICD-Jenkins'
    }
		stages {
			stage ('Restart Container') {
				steps {
					withCredentials([
                        sshUserPrivateKey(credentialsId:'ssh-key', keyFileVariable:'KEY', usernameVariable:'USER'),
					]) 
					 }
                        sh """
                            ssh -o StrictHostKeyChecking=no -i ${KEY} ${USER}@${IP_SERVER} '
                                cd ${DEPLOY_PATH} && git pull
                                docker-compose down
                                docker-compose build
                                docker-compose up -d
                            '
                        """
						    }
				}
		}